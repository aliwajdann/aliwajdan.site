import Jokes from "../Components/Jokes";
import Animation from "../Components/Animation";
// import video from "../assets/Julia Sloane.mp4";
// import image from "../assets/steve-johnson.jpg"
// import steveImg from './assets/steve-johnson.jpg';


export default function Home() {

  return (
    <div>
      <div className="relative h-lvh bg-hero-pattern  bg-cover bg-center" >
      {/* <img className="absolute top-0 left-0 h-full w-full" src= {image} alt="Steve Johnson" /> */}
      <div className="absolute bg-black opacity-30 top-0 left-0 h-full w-full" ></div>
      {/* <video autoPlay loop muted playsInline className="video-bg w-full"> */}
          {/* <source src={video} type="video/mp4" /> */}
          {/* Your browser does not support the video tag. */}
        {/* </video> */}
      </div>
        <Jokes />
        <Animation />
    </div>
  );
}
