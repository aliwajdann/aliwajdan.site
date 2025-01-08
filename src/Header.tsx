import { useDispatch } from "react-redux";
import { toggle } from "./Features/IsOpenSlice";
import { NavLink } from "react-router-dom";
import Tailwindbar from "./Components/Tailwindbar";
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faSearchDollar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true); // Controls header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsVisible(currentScrollY < lastScrollY); 
      } else {
        setIsVisible(true); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, [lastScrollY]);
  
  return (
    <>
     <header
  className={`bg-black fixed top-0 w-full z-50  transition-transform duration-300 ease-in-out backdrop-blur-lg 
    ${  isVisible ? "translate-y-0" : "-translate-y-full" }
  `}
>
        <div className="h-20 w-full flex items-center justify-between px-4 lg:px-16">
          {/* Logo */}
          <div className="w-1/5 lg:w-auto cursor-pointer" onClick={() => navigate("")}>
            <img className="h-8 lg:h-10" src={logo} alt="Logo" />
          </div>

           {/* Navigation Links  */}
          <nav className="w-1/5 hidden lg:block">
            <ul className="flex justify-around">
              <NavLink to={"showcase"} className="hover:text-teal-500 text-white">
                Showcase
              </NavLink>
              <NavLink to={"about"} className="hover:text-teal-500 text-white">
                About
              </NavLink>
              <NavLink
                to={"https://github.com/AliWajdanIT/aliwajdan.site"}
                target="_blank"
                className="hover:text-teal-500 text-white"
              >
                Github
              </NavLink>
            </ul>
          </nav>

          {/* Sidebar & Search Icons for Mobile */}
          <div className="flex justify-end w-1/2 lg:hidden">
            <FontAwesomeIcon
              icon={faSearchDollar}
              className="h-6 w-6 cursor-pointer hover:text-teal-500 text-white"
            />
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              onClick={() => dispatch(toggle())}
              className="h-6 w-6 cursor-pointer hover:text-teal-500 text-white"
            />
          </div>
        </div>
      </header>
      {/* Tailwindbar (or Sidebar) */}
      <Tailwindbar />
    </>
  );
}