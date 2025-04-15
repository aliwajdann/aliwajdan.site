import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  "/logos/react.png",
  "/logos/typescript.png",
  "/logos/tailwind.png",
  "/logos/gsap.png",
  "/logos/framer.png",
  "/logos/node.png",
  // Add real paths to your assets
];

export default function Technologies() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Technologies We Use
      </h2>
      <div
        className="flex flex-wrap gap-8 justify-center items-center max-w-5xl mx-auto"
        ref={containerRef}
      >
        {techLogos.map((src, i) => (
          <div key={i} className="w-20 h-20 grayscale hover:grayscale-0 transition duration-300">
            <img src={src} alt="Tech logo" className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
