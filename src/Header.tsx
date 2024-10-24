import { useDispatch} from "react-redux"
import { toggle } from "./Features/IsOpenSlice"
import { NavLink } from "react-router-dom"
import Tailwindbar from "./Components/Tailwindbar"
import logo from "./assets/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEllipsisVertical,faSearchDollar } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
    <header className="bg-transparent h-16 transition-transform duration-1000 ease-in-out fixed top-0 w-lvw filter backdrop-blur-lg shadow-md shadow-teal-500">
    <div className="h-full w-full flex items-center justify-between">

     {/* logo div  */}
      <div className="w-1/2 lg:w-auto">
      <img className="h-28 w-52 lg:h-44 lg:w-96" src={logo} alt="logo" onClick={()=> navigate("")} />
      </div>
  
     {/* nav  */}
      <nav className="w-2/5 hidden lg:block">
        <ul className="lg:flex lg:justify-around hidden">
          <NavLink to={""}>Home</NavLink>
          <NavLink to={"components"}>Components</NavLink>
          <NavLink to={"showcase"}>Showcase</NavLink>
          <NavLink to={"https://github.com/AliWajdanIT/aliwajdan.site"}>Github</NavLink>
          <NavLink to={"about"}>About</NavLink>
        </ul>
      </nav>

      {/* sidebar icon for mobile  */}
      <div className="flex justify-end w-1/2 mr-4 lg:hidden ">
      <FontAwesomeIcon icon={faSearchDollar} className="h-6 w-10 lg:hidden cursor-pointer" />
      <FontAwesomeIcon icon={faEllipsisVertical} onClick={()=> dispatch(toggle())} className="h-6 w-10 lg:hidden cursor-pointer"/>
      </div>

    </div>
    </header>
    <Tailwindbar />
    </>
  )
}
 