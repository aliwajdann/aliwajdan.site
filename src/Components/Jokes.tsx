import { useReducer} from "react"

export default function Jokes() {
  const speak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(state.joke);
    speechSynthesis.speak(utterance);
    alert("Speaking")
    } else {
      alert("Speech Synthesis API is not supported in this browser.");
    }
  };

    const [state, dispatch] = useReducer((state:any,action:any)=>{
           switch(action.type){
            case 'setLoading' :
              return {...state, loading: action.payload}
            case 'setJoke' :
              return {...state, joke: action.payload}
           }
    },
    {
      joke: '',
      loading : false
    })
    
    const handleCLick = ()=>{ 
      dispatch({type : 'setLoading', payload : true })
      fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
      .then((response)=>{return response.json()})
      .then((data)=>{
        dispatch({type: 'setJoke', payload: data.joke})
        console.log(state.joke)
        dispatch({type : 'setLoading', payload : false })
      })
  }

      // navigator.clipboard.writeText(quote.innerText);
      
    return (
    <div className="h-72 w-80 bg-pink-300 p-2 flex flex-col justify-around">
      <button onClick={()=>  handleCLick()} className="px-6 py-3 bg-red-500 text-white">{state.loading? 'Loading' : 'Button'}</button>
      <div className="h-3/5 bg-slate-500 text-white p-3 rounded-md">{state.joke}</div>
      <button  className="px-4 py-1 bg-teal-600 text-white" onClick={speak}>Speak</button>
    </div>
  )
}


