import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMoon, FiSun, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useTheme } from "../ThemeProvider";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hero", path: "/hero" },
  ];

  const dropdownLinks = [
    { name: "Buttons", path: "/button" },
    { name: "Cards", path: "/card" },
    { name: "Text Styles", path: "/text" },
    { name: "Cart", path: "/cart" },
    { name: "Chat Bubble", path: "/chat" },
    { name: "Modals", path: "/modals" },
    { name: "Toast", path: "/toast" },
    { name: "Spinner", path: "/spinner" },
    { name: "Navbar", path: "/navbar" },
    { name: "Slider", path: "/slider" },
    { name: "Carousel", path: "/carousel" },
    { name: "Breadcrumbs", path: "/breadcrumbs" },
    { name: "Pagination", path: "/pagingation" },
    { name: "About Us", path: "/aboutus" },
    { name: "Login/Signup", path: "/auth" },
    { name: "Skeleton", path: "/skeleton" },
    { name: "Header/Footer", path: "/header-footer" },
    { name: "Contact", path: "/contact" },
    { name: "Products", path: "/products" },
    { name: "Dashboard Widgets", path: "/widgets" },
    { name: "Inputs", path: "/inputs" },
    { name: "Page Not Found", path: "/pagenotfound" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full px-6 py-4 shadow-md bg-white dark:bg-gray-900 dark:text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            TG UNIVERSE
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-indigo-500 transition font-medium"
            >
              {link.name}
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-indigo-500 transition font-medium"
            >
              Components <FiChevronDown />
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 left-0 w-44 max-h-64 overflow-auto bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 z-50">
                {dropdownLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm py-2 hover:text-indigo-500"
            >
              {link.name}
            </Link>
          ))}

          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer py-2 text-sm hover:text-indigo-500">
              Components
            </summary>
            <div className="pl-2">
              {dropdownLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-sm hover:text-indigo-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </details>
        </div>
      )}
    </header>
  );
};

export default Header;
