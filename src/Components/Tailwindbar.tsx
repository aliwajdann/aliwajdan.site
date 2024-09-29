import { useSelector } from "react-redux"
import { RootState } from "../Store/Store"

export default function Tailwindbar() {
    const isOpen = useSelector((state:RootState) => state.isOpen)
  return (
    <div className={`absolute bg-slate-500 opacity-40 p-10 h-full w-full ${isOpen? "block" : "hidden"}`}>
      <div className="bg-slate-700 opacity-60 h-2/3 w-full"></div>
    </div>
  )
}
