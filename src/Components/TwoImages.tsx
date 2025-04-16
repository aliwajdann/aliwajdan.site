import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import p1 from "../assets/pexels-arts-1496373.jpg"
import p2 from "../assets/pexels-eberhardgross-1367192.jpg"


const DualImageSection = () => {
  // Image data with dummy URLs
  const images = [
    {
      id: 1,
      text: "BAD LUKA!",
      url: p1
    },
    {
      id: 2,
      text: "NICESHOES",
      url: p2
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 2 seconds on mobile only
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="w-ful py-12 max-h-full">
      <div className="">
        {/* Desktop: Two images side-by-side */}
        <div className="hidden md:flex">
          {images.map((image) => (
            <motion.div
              key={`desktop-${image.id}`}
              whileHover={{ scale: 0.98 }}
              className="flex-1 aspect-[4/5] overflow-hidden shadow-lg"
            >
              <img 
                src={image.url} 
                alt={image.text}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 text-white text-3xl font-bold">
                {image.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Single image with fade transition */}
        {/* Mobile: Single image with fade transition */}
<div className="md:hidden relative" style={{ height: '65vh', margin: '2vh auto', width: '95%' }}>
  <AnimatePresence mode="wait">
    <motion.div
      key={`mobile-${images[currentIndex].id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-full rounded-xl overflow-hidden shadow-xl"
    >
      <img 
        src={images[currentIndex].url} 
        alt={images[currentIndex].text}
        className="w-full h-full object-cover"
      />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-6 left-6 text-white text-2xl font-bold drop-shadow-lg"
      >
        {images[currentIndex].text}
      </motion.div>
    </motion.div>
  </AnimatePresence>

  {/* Dots indicator */}
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white w-4' : 'bg-white/50'}`}
      />
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default DualImageSection;