import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggle } from "./Features/IsOpenSlice";
import Sidebar from "./Components/Sidebar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiSearch, FiUser, FiShoppingBag, FiX } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dispatch = useDispatch();
  // Scroll animation (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling DOWN
        gsap.to(headerRef.current, { 
          y: -100, 
          opacity: 0, 
          duration: 0.3 
        });
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP
        gsap.to(headerRef.current, { 
          y: 0, 
          opacity: 1, 
          duration: 0.3 
        });
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm"
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-gray-100 text-xs py-1 px-4">
        <div className="container mx-auto flex justify-end space-x-4">
          <a href="#" className="hover:text-gray-600">Find a Store</a>
          <a href="#" className="hover:text-gray-600">Help</a>
          <a href="#" className="hover:text-gray-600">Join Us</a>
          <a href="#" className="hover:text-gray-600">Sign In</a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img 
                src="https://www.nike.com/assets/experience/2023/brand-portal-guidelines/img/logo-outline.svg" 
                alt="Nike" 
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="font-medium hover:text-gray-600">New</a>
            <a href="#" className="font-medium hover:text-gray-600">Men</a>
            <a href="#" className="font-medium hover:text-gray-600">Women</a>
            <a href="#" className="font-medium hover:text-gray-600">Kids</a>
            <a href="#" className="font-medium hover:text-gray-600">Jordan</a>
            <a href="#" className="font-medium hover:text-gray-600">Sport</a>
          </nav>
      
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiUser className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiShoppingBag className="w-5 h-5" />
            </button>
            {/* Mobile Menu Button */}
          <button 
            onClick={() => dispatch(toggle())}
            className="md:hidden text-gray-800"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          </div>


  
          

          
        </div>
      </div>

      {/* Mobile Menu (Only shows when isMobileMenuOpen = true) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#" className="font-medium py-2">New</a>
            <a href="#" className="font-medium py-2">Men</a>
            <a href="#" className="font-medium py-2">Women</a>
            <a href="#" className="font-medium py-2">Kids</a>
            <a href="#" className="font-medium py-2">Jordan</a>
            <a href="#" className="font-medium py-2">Sport</a>
          </div>
        </div>
      )}
    </header>
      <Sidebar/>
</>
  );
};

export default Header;