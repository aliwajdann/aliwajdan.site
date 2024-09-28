import Sidebar from "./Sidebar"
import { useDispatch} from "react-redux"
// import { RootState } from "./Store/Store"
import { toggle } from "./Features/IsOpenSlice"
export default function Header() {
  // const isOpen = useSelector((state:RootState) => state.isOpen)
  const dispatch = useDispatch()
    // const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <header className="bg-slate-400 h-16 relative">
    <div className="h-full flex items-center justify-around">
      <div className="font-bold text-slate-700">My Logo</div>
      <nav className="w-2/5">
        <ul className="lg:flex lg:justify-around hidden">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
      </nav>
      <button onClick={()=> dispatch(toggle())} className="h-10 w-24 bg-amber-400">Button</button>
    </div>
    </header>
    <Sidebar />
    </>
  )
}
 