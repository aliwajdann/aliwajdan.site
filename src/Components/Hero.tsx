// import mobileVideo from "../assets/mobile-bg-video.mp4";
// import backgroundVideo from "../assets/bg-video.mp4";
// import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import profilePicture from '../assets/profile-picture.jpeg'


export default function Hero() {
// const [video, setVideo] = useState(
  // window.innerWidth < 760 ? mobileVideo : backgroundVideo
// );

  // const handleResize = () => {
  //   if(window.innerWidth < 760){
  //     setVideo(mobileVideo)
  //   }
  //   else{
  //     setVideo(backgroundVideo)
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // },[]);

useGSAP(()=>{
  gsap.to('.right-column h3', {
    opacity: 1,
    delay: 1.5,
    duration: 1.5,
  })
  
  gsap.to('.right-column p', {
    opacity: 1,
    delay: 1.5,
    duration: 1.5,
    // y:-32
  })
  gsap.to('.right-column button', {
    opacity: 1,
    delay: 1.5,
    duration: 1.5,
    // y:-32
  })
  
  
  
},[])

  return (
      <section className="relative h-lvh flex flex-col lg:flex-row justify-between p-20 bg-light-background dark:bg-dark-background">
        
       <div className="right-column lg:w-1/2 p-10 flex flex-col gap-10">
        <h3 className="text-light-text dark:text-dark-text opacity-0">Ali Wajdan</h3>
        <p className="text-light-text dark:text-dark-text opacity-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quaerat corrupti. Dolor temporibus error consequatur quaerat nulla mollitia similique animi.</p>
        <button onClick={()=>alert("kya hai bay")} className="text-dark-text opacity-0 px-3 py-2 transition-all bg-light-primary dark:hover:bg-light-accent dark:bg-dark-primary hover:bg-dark-accent lg:w-24">Click me</button>
       </div>
       <div className="left-column w-1/2 h-full text-light-text dark:text-dark-text flex items-center justify-center">
       <img className="lg:w-1/2 pointer-events-none rounded-full" src={profilePicture} alt="" />
       </div>
      
         {/* <video autoPlay loop muted playsInline={true} key={video} className="object-cover absolute h-full w-full top-0 left-0 pointer-events-none"> 
           <source src={video} type="video/mp4" /> 
           Your browser does not support the video tag. 
         </video>
      <div className="h-full z-10 w-full flex flex-col   justify-around items-center ">
        <p className="text-white z-20 title opacity-0">Ali Wajdan</p>
        <div className="atc flex flex-col opacity-0 translate-y-8 gap-2 items-center">
      <Link to={'#'} className="button px-6 py-2 bg-slate-300  text-black ">Button</Link>
      <p className= "txt-und-btn text-white ">Buy it now for free</p>
     </div>
      </div> */}
     
    </section>
  );
}