import Jokes from "../Components/Jokes";
import Animation from "../Components/Animation";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import video from "../assets/Julia Sloane.mp4"; // Import the video

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize LocomotiveScroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Cleanup LocomotiveScroll on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {/* Background Video */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-bg w-full">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
<h2>home hey</h2>
      {/* Main Content */}
      <div data-scroll-section>
        <Jokes />
        <Animation />
      </div>
    </div>
  );
}
