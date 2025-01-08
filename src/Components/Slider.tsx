// import React, { useEffect, useState, useRef } from "react";
// import classNames from "classnames";

// const Slider: React.FC = () => {
//   const slides = [
//     { id: 1, content: "Slide 1" },
//     { id: 2, content: "Slide 2" },
//     { id: 3, content: "Slide 3" },
//     { id: 4, content: "Slide 4" },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideInterval = useRef<number | null>(null); // Explicit type

//   // Autoplay functionality
//   useEffect(() => {
//     startAutoPlay();
//     return () => stopAutoPlay();
//   }, []);

//   const startAutoPlay = () => {
//     slideInterval.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 3000); // Change slides every 3 seconds
//   };

//   const stopAutoPlay = () => {
//     if (slideInterval.current) {
//       clearInterval(slideInterval.current);
//       slideInterval.current = null; // Ensure it's reset to null after stopping
//     }
//   };

//   return (
//     <div className="w-full overflow-hidden relative top-32">
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{
//           transform: `translateX(-${currentSlide * 100}%)`,
//         }}
//       >
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="w-full flex-shrink-0 h-64 bg-blue-500 text-white flex items-center justify-center"
//           >
//             <h1>{slide.content}</h1>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2"
//         onClick={() =>
//           setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//         }
//       >
//         Prev
//       </button>
//       <button
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2"
//         onClick={() =>
//           setCurrentSlide((prev) => (prev + 1) % slides.length)
//         }
//       >
//         Next
//       </button>

//       {/* Dots Navigation */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             className={classNames(
//               "w-3 h-3 rounded-full bg-white",
//               currentSlide === index ? "bg-gray-800" : "bg-gray-400"
//             )}
//             onClick={() => setCurrentSlide(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
