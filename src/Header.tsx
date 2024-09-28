import { useState } from "react"
import Sidebar from "./Sidebar"
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <header className="bg-slate-400 h-16">
    <div className="h-full flex items-center justify-around">
      <div className="font-bold text-slate-700">My Logo</div>
      <nav className="w-2/5">
        {/* <ul className={`sm:hidden lg:flex lg:justify-around`}> */}
        {/* <ul className={`sm:hidden lg:flex justify-around`}> */}
        <ul className={`sm:hidden lg:flex justify-around`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
      </nav>
      <button onClick={()=>{setIsOpen(!isOpen)}} className="h-10 w-24 bg-amber-400">Button</button>
    </div>
    </header>
    <Sidebar isOpen ={isOpen}/>
    </>
  )
}
 