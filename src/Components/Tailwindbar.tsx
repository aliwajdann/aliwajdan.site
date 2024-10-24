import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../Store/Store"
import { toggle } from "../Features/IsOpenSlice"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Tailwindbar() {
    const isOpen = useSelector((state:RootState) => state.isOpen)
    const dispatch = useDispatch()
    
  return (
    <div onScroll={()=> dispatch(toggle())} className={`z-10 absolute top-0 left-0 lg:hidden transition-all duration-500 ease-in-out bg-slate-800 filter backdrop-blur-3xl p-4 h-lvh w-full ${isOpen? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}`}>
      <nav  className="z-20 bg-slate-900 h-2/4 w-full rounded-lg">
            <ul className="h-full w-full flex flex-col justify-between font-bold text-slate-300 p-4">
            <div className="flex justify-between">
            <NavLink onClick={()=> dispatch(toggle())} to={""}>Home</NavLink>
            <FontAwesomeIcon onClick={()=> dispatch(toggle())} icon={faXmark} size="1x" className="text-gray-400 cursor-pointer" />
            </div>
            <NavLink onClick={()=> dispatch(toggle())} to={"components"}>Components</NavLink>
            <NavLink onClick={()=> dispatch(toggle())}  to={"showcase"}>Showcase</NavLink>
            <NavLink onClick={()=> dispatch(toggle())} to={"https://github.com/AliWajdanIT/aliwajdan.site"}>Github</NavLink>
            <NavLink onClick={()=> dispatch(toggle())} to={"about"}>About</NavLink>
            <hr />
          <div className="flex justify-between items-center">
            <h3>Switch Theme</h3>
          <button className="bg-teal-600 h-10 w-24 rounded-md">button</button>
          </div>
            </ul>
        </nav>

        <div onClick={()=> dispatch(toggle())} className="h-2/4 w-full"></div>
    
    </div>
  )
}
