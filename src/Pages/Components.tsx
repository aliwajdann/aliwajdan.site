import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../Features/countSlice"
import { RootState } from "../Store/Store"

export default function Components() {
  const count = useSelector((state:RootState) =>  state.count)
  const dispatch = useDispatch()
  return (
    <div className="h-lvh bg-slate-400 text-black p-10">
        <h2>heyy, im component page</h2>
      <div className="h-52 w-52 bg-blue-500 flex flex-col justify-center items-center">
        <button onClick={()=> {dispatch(increment())}} className="h-10 w-20 bg-slate-500 text-white">Increment</button>
        <h4>{count}</h4>
        <button onClick={()=> {dispatch(decrement())}} className="h-10 w-20 bg-slate-500 text-white">decrement</button>
      </div>
    </div>
  )
}

 


