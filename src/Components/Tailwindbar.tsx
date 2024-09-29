import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../Store/Store"
import { toggle } from "../Features/IsOpenSlice"
import { NavLink } from "react-router-dom"

export default function Tailwindbar() {
    const isOpen = useSelector((state:RootState) => state.isOpen)
    const dispatch = useDispatch()
    
  return (
    <div className={`z-10 absolute top-0 left-0 transition-all duration-500 ease-in-out bg-slate-800 filter backdrop-blur-3xl p-4 h-full w-full ${isOpen? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}`}>
       <div  className="z-20 bg-slate-900 h-2/5 w-full">
       <ul className="h-4/5 w-full flex flex-col font-bold text-slate-300 justify-between p-4">
       <div className="flex justify-between">
          <NavLink onClick={()=> dispatch(toggle())} to={""}>Home</NavLink>
          <button className="bg-red-300 border rounded">red</button>
       </div>
          <NavLink onClick={()=> dispatch(toggle())} to={"components"}>Components</NavLink>
          <NavLink onClick={()=> dispatch(toggle())}  to={"showcase"}>Showcase</NavLink>
          <NavLink onClick={()=> dispatch(toggle())} to={"https://github.com/AliWajdanIT/aliwajdan.site"}>Github</NavLink>
          <NavLink onClick={()=> dispatch(toggle())} to={"about"}>About</NavLink>
        </ul>
        <div className="h-1/5 w-full mt-2">
        <button className="bg-blue-400 h-8 w-20 mr-3">button</button>
        <button className="bg-blue-400 h-8 w-20">button</button>
        </div>
       </div>
        <div onClick={()=> dispatch(toggle())} className="h-3/5 w-full"></div>
    
    </div>
  )
}
