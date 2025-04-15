import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"


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
        <div className="md:hidden relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-${images[currentIndex].id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img 
                src={images[currentIndex].url} 
                alt={images[currentIndex].text}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 text-white text-2xl font-bold">
                {images[currentIndex].text}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DualImageSection;