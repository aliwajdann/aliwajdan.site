import { motion, AnimatePresence } from "framer-motion";
import { toggle } from "../Features/IsOpenSlice";
import { RootState } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FiX, FiHome, FiUser, FiSettings, FiMail } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.isOpen);
  const dispatch = useDispatch();

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navItems = [
    { to: "/", label: "Home", icon: <FiHome className="mr-3" /> },
    { to: "about", label: "About", icon: <FiUser className="mr-3" /> },
    { to: "services", label: "Services", icon: <FiSettings className="mr-3" /> },
    { to: "contact", label: "Contact", icon: <FiMail className="mr-3" /> },
    { to: "faq", label: "FAQ", icon: <FiMail className="mr-3" /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => dispatch(toggle())}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-50 flex h-screen w-4/5 max-w-sm"
          >
            <motion.nav
              className="flex flex-col w-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl"
            >
              {/* Header */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => dispatch(toggle())}
                  className="p-2 text-gray-400 hover:text-white"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Navigation Items */}
              <motion.ul className="flex-1 px-6 py-4 space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: { delay: 0.1 + index * 0.1 }
                    }}
                    whileHover={{ x: 5 }}
                    className="text-white"
                  >
                    <NavLink
                     onClick={() => dispatch(toggle())}
                      to={item.to}
                      className="flex items-center px-4 py-3 text-lg font-medium rounded-lg hover:bg-gray-700 transition-all"
                    >
                      {item.icon}
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                className="p-6 bg-gray-800"
              >
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Your Brand
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;