import { useSelector } from "react-redux"
import { RootState } from "../Store/Store"
// import { useRef } from "react"

export default function Tailwindbar() {
    const isOpen = useSelector((state:RootState) => state.isOpen)
    // const {divRef} = useRef()
    // if (!isOpen){
    //     divRef.style.transfrom.scale(0)
    // }
    // else{
    //     divRef.style.transfrom.scale(100)
    // }
  return (
    <div  className={`transition-transform duration-100 ease-in-ou sm:scale-100 lg:scale-0 absolute bg-slate-500 opacity-40 p-10 h-full w-full ${isOpen? "scale-100" : "scale-0"}`}>
      <div className="bg-slate-700 opacity-60 h-2/3 w-full"></div>
    </div>
  )
}
