import { useDispatch} from "react-redux"
import { toggle } from "./Features/IsOpenSlice"
import { NavLink } from "react-router-dom"
export default function Header() {
  const dispatch = useDispatch()
  return (
    <>
    <header className="bg-slate-400 h-16 transition-transform duration-1000 ease-in-out">
    <div className="h-full flex items-center justify-around">
      <div className="font-bold text-slate-700">My Logo</div>
      <nav className="w-2/5">
        <ul className="lg:flex lg:justify-around hidden">
          <NavLink to={""}>Home</NavLink>
          <NavLink to={"components"}>Components</NavLink>
          <NavLink to={"showcase"}>Showcase</NavLink>
          <NavLink to={"https://github.com/AliWajdanIT/aliwajdan.site"}>Github</NavLink>
          <NavLink to={"about"}>About</NavLink>
        </ul>
      </nav>
      <button onClick={()=> dispatch(toggle())} className="h-10 w-24 bg-amber-400 lg:hidden">Button</button>
    </div>
    </header>
    {/* <Tailwindbar /> */}
    </>
  )
}
 