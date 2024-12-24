import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useRef } from "react";
gsap.registerPlugin(gsap);

export default function Animation() {
    const container = useRef(null)
    useGSAP(()=>{
      gsap.to(".box",{
         x:150
        })
    },{scope:container})

  return (
    <div ref={container} className="h-72 w-80 bg-gray-900 p-2 flex flex-col justify-around">
      <div className="box h-10 w-10 bg-neutral-500"></div>
    </div>
  )
}
