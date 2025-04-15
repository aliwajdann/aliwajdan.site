import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

const ProductShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const products = [
    {
      id: 1,
      title: "Golf Collection",
      subtitle: "Championship Styles",
      image: p1
    },
    {
      id: 2,
      title: "Running Shoes",
      subtitle: "New Releases",
      image: p2
    },
    {
      id: 3,
      title: "Basketball Gear",
      subtitle: "Limited Edition",
      image: p3
    }
  ];

  const categories = [
    { name: 'Running', href: '#' },
    { name: 'Basketball', href: '#' },
    { name: 'Golf', href: '#' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Text Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            THE RAREST CLUB IN GOLF
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl mb-8">
            HAS A NEW MEMBER.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition">
            Shop Championship Styles
          </button>
        </motion.div>
      </div>

      {/* Category Navigation */}
      <nav className="max-w-7xl mx-auto mb-12 border-b border-gray-200">
        <ul className="flex justify-center space-x-4 sm:space-x-8 md:space-x-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href={category.href}
                className="whitespace-nowrap px-2 py-1 text-sm sm:text-base md:text-lg font-medium hover:text-gray-900 transition"
              >
                Shop {category.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Slider */}
      <div className="lg:hidden relative overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex"
          animate={{ 
            x: -currentSlide * 100 + '%',
            transition: { type: 'spring', stiffness: 300, damping: 30 }
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0 px-2">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gray-100 rounded-lg overflow-hidden"
              >
                <div className="aspect-square">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{product.title}</h3>
                  <p className="text-gray-600">{product.subtitle}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <FiChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          <FiChevronRight className="w-5 h-5" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div 
            key={product.id}
            whileHover={{ y: -5 }}
            className="bg-gray-100 rounded-lg overflow-hidden"
          >
            <div className="aspect-square">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{product.title}</h3>
              <p className="text-gray-600">{product.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;