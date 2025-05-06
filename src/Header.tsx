import { useDispatch } from "react-redux";
import { toggle } from "./Features/IsOpenSlice";
import { NavLink } from "react-router-dom";
// import Tailwindbar from "./Components/Tailwindbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faSearchDollar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import logo from './assets/log.png'

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0); 
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
  

   const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = storedTheme || (prefersDark ? "dark" : "dark"); // Ensure dark mode by default
  
    // Set dark class before React renders
    if (!storedTheme && prefersDark) {
      document.documentElement.classList.add("dark");
    }
  
    const [theme, setTheme] = useState(defaultTheme);
  
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }, [theme]);
  return (
    <>
     <header
  className={ `fixed dark:bg-dark-background text-light-text dark:text-dark-text  top-0 w-full z-50  transition-transform duration-300 ease-in-out backdrop-blur-lg 
    ${  isVisible ? "translate-y-0" : "-translate-y-full" }
  `}
>
        <div className="h-20 w-full flex items-center justify-between px-4 lg:px-16">
          {/* Logo */}
          <div className="w-1/5 lg:w-auto cursor-pointer" onClick={() => navigate("")}>
            <img className="h-8 lg:h-10" src={theme === "dark" ? logo : "AW"} alt="Logo" />
          </div>

           {/* Navigation Links  */}
          <nav className="w-1/5 hidden lg:block">
            <ul className="flex justify-around items-center">
              <NavLink to={"showcase"} className="hover:text-teal-500 text-light-text dark:text-dark-text">
                Showcase
              </NavLink>
              <NavLink to={"about"} className="hover:text-teal-500 text-light-text dark:text-dark-text">
                About
              </NavLink>
              <NavLink
                to={"https://github.com/AliWajdanIT/aliwajdan.site"}
                target="_blank"
                className="hover:text-teal-500 text-light-text dark:text-dark-text"
              >
                Github
              </NavLink>
              <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-1 bg-indigo-500 dark:bg-indigo-400 text-white rounded "
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
            </ul>
          </nav>

          {/* Sidebar & Search Icons for Mobile */}
          <div className="flex justify-end w-1/2 lg:hidden">
            <FontAwesomeIcon
              icon={faSearchDollar}
              className="h-6 w-6 cursor-pointer hover:text-teal-500 text-light-text dark:text-dark-text"
            />
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              onClick={() => dispatch(toggle())}
              className="h-6 w-6 cursor-pointer hover:text-teal-500 text-light-text dark:text-dark-text"
            />
             <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-3 py-1 bg-indigo-500 dark:bg-indigo-400 text-white rounded"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
          </div>
        </div>
      </header>
      <Sidebar/>
      {/* <Tailwindbar /> */}
    </>
  );
}