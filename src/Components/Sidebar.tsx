import { toggle } from "../Features/IsOpenSlice"
import { RootState } from "../Store/Store"
import { useSelector,useDispatch } from "react-redux"

const Sidebar = () => {
  const isOpen = useSelector((state:RootState) => state.isOpen)
    console.log(isOpen)
    const dispatch = useDispatch()
  return (
      <div className={`transition-transform duration-1000 ease-in-out flex h-full w-full lg:hidden 
      absolute top-16 left-0 z-10 ${ isOpen ? "translate-x-0" : "-translate-x-full" }`}>
          <nav className={`w-4/5 bg-red-600`}>
           <ul className={`flex flex-col h-3/4 w-full justify-between px-4 py-10`}>
             <li className="font-bold text-white text-xl">Home</li>
             <li className="font-bold text-white text-xl">About</li>
             <li className="font-bold text-white text-xl">Services</li>
             <li className="font-bold text-white text-xl">Contact</li>
           </ul>
           <div className="h-1/4 bg-slate-600 w-full"></div>
          </nav>
       <div  onClick={()=> dispatch(toggle())} className="h-full w-1/5"></div>
      </div>
  )
}

export default Sidebar;