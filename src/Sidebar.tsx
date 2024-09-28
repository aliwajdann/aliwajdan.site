// interface gc {
//     isOpen : boolean
// }
// Sidebar:React.FC<gc>
import { toggle } from "./Features/IsOpenSlice"
import { RootState } from "./Store/Store"
import { useSelector,useDispatch } from "react-redux"

const Sidebar = () => {
  const isOpen = useSelector((state:RootState) => state.isOpen)
    console.log(isOpen)
    const dispatch = useDispatch()
  return (
    <div className={`flex h-lvh w-lvw bg-orange-300 lg:hidden ${isOpen? 'block' : 'hidden'} absolute top-16 left-0 z-10`}>
    <nav className={`w-2/5`}>
        <ul className={`justify-around'}`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
      </nav>
      <div  onClick={()=> dispatch(toggle())} className="h-full w-2/3 bg-slate-500 opacity-15"></div>
    </div>
  )
}

export default Sidebar;