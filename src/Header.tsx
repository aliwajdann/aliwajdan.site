// import Sidebar from "./Components/Sidebar"
import Tailwindbar from "./Components/Tailwindbar"
import { useDispatch} from "react-redux"
import { toggle } from "./Features/IsOpenSlice"
import { NavLink } from "react-router-dom"
export default function Header() {
  const dispatch = useDispatch()
  return (
    <>
    <header className="bg-slate-400 h-16 relative transition-transform duration-1000 ease-in-out">
    <div className="h-full flex items-center justify-around">
      <div className="font-bold text-slate-700">My Logo</div>
      <nav className="w-2/5">
        <ul className="lg:flex lg:justify-around hidden">
          <NavLink to={""}>Home</NavLink>
          <NavLink to={"about"}>About</NavLink>
          <NavLink to={""}>Home</NavLink>
          <NavLink to={""}>Home</NavLink>
        </ul>
      </nav>
      <button onClick={()=> dispatch(toggle())} className="h-10 w-24 bg-amber-400">Button</button>
    </div>
    </header>
    {/* <Sidebar /> */}
    <Tailwindbar />
    </>
  )
}
 