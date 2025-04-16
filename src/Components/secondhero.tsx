import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../assets/jon-r8AFUpRp0J0-unsplash.jpg"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const secondhero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const shoeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Shoe floating animation
      gsap.to(shoeRef.current, {
        y: -30,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Text reveal animation
      gsap.from(".hero-text", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        delay: 0.5,
      });

      // Parallax effect on scroll
      if (shoeRef.current && container.current) {
        gsap.to(shoeRef.current, {
          y: 100,
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative h-screen bg-black overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90" />

      {/* Floating shoe image */}
      <div
        ref={shoeRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-10"
      >
        <img
          src= {img}
          alt="Nike Shoe"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Hero text */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start px-4 md:px-16 lg:px-24">
        <h1 className="hero-text text-6xl md:text-8xl font-bold text-white mb-4 ">
          JUST D<span className="">O IT.</span>
        </h1>
        <p className="hero-text text-xl md:text-2xl md:text-gray-300 mb-8 max-w-lg text-white text-shadow-md">
          The future isn't waiting. Lace up and make it yours.
        </p>
        <button className="hero-text px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <svg
          className="w-8 h-8 text-white animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default secondhero;