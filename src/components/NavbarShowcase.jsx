import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCopy,
  FiCheck,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiChevronDown,
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiHeart,
  FiMail,
  FiBell,
} from "react-icons/fi";

const NavbarShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Framer Motion variants for menu and dropdown animations
  const menuVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: -20, transitionEnd: { display: "none" } },
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0, display: "block" },
    closed: { opacity: 0, y: -10, transitionEnd: { display: "none" } },
  };

  // Navbar data
  const navbarCategories = [
    {
      title: "Basic Navbars",
      navbars: [
        {
          name: "Simple Centered",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Logo</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">About</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Services</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Logo
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "With Search Bar",
          code: `<nav className="bg-white dark:bg-gray-800 shadow">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Brand</span>
      </div>
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-1 rounded-full text-gray-900 dark:text-white hover:text-blue-600">
          <FiUser className="h-6 w-6" />
        </button>
        <button className="p-1 rounded-full text-gray-900 dark:text-white hover:text-blue-600">
          <FiShoppingCart className="h-6 w-6" />
        </button>
        <button className="md:hidden p-1 rounded-full text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Brand
                    </span>
                  </div>
                  <div className="flex-1 max-w-md mx-4 hidden md:block">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiSearch className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="p-1 rounded-full text-gray-900 dark:text-white hover:text-blue-600">
                      <FiUser className="h-6 w-6" />
                    </button>
                    <button className="p-1 rounded-full text-gray-900 dark:text-white hover:text-blue-600">
                      <FiShoppingCart className="h-6 w-6" />
                    </button>
                    <button className="md:hidden p-1 rounded-full text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "With Dropdowns",
          code: `<nav className="bg-white dark:bg-gray-800 shadow">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Company</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <div className="relative group">
          <button className="text-gray-900 dark:text-white hover:text-blue-600 flex items-center">
            Products <FiChevronDown className="ml-1" />
          </button>
          <div className="absolute z-10 left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 hidden group-hover:block">
            <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Product 1</a>
            <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Product 2</a>
            <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Product 3</a>
          </div>
        </div>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Solutions</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Pricing</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Resources</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-900 dark:text-white hover:text-blue-600 hidden md:block">Sign In</button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Sign Up</button>
        <button className="md:hidden text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Company
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    <div className="relative group">
                      <button className="text-gray-900 dark:text-white hover:text-blue-600 flex items-center">
                        Products <FiChevronDown className="ml-1" />
                      </button>
                      <div className="absolute z-10 left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 hidden group-hover:block">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          Product 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          Product 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          Product 3
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Solutions
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Resources
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-900 dark:text-white hover:text-blue-600 hidden md:block">
                      Sign In
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                      Sign Up
                    </button>
                    <button className="md:hidden text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Transparent Light",
          code: `<nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Logo</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">About</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Services</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Portfolio</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Logo
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Portfolio
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Dark with CTA",
          code: `<nav className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold">Acme Inc</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="hover:text-blue-400">Features</a>
        <a href="#" className="hover:text-blue-400">Pricing</a>
        <a href="#" className="hover:text-blue-400">Docs</a>
        <a href="#" className="hover:text-blue-400">Company</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:text-blue-400 hidden md:block">Sign in</button>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Get started</button>
        <button className="md:hidden">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-gray-900 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold">Acme Inc</span>
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="hover:text-blue-400">
                      Features
                    </a>
                    <a href="#" className="hover:text-blue-400">
                      Pricing
                    </a>
                    <a href="#" className="hover:text-blue-400">
                      Docs
                    </a>
                    <a href="#" className="hover:text-blue-400">
                      Company
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="hover:text-blue-400 hidden md:block">
                      Sign in
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                      Get started
                    </button>
                    <button className="md:hidden">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },

        {
          name: "Glassmorphism",
          code: `<nav className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 rounded-lg m-4">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Glass</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors">Home</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors">About</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors">Services</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 rounded-lg m-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Glass
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Gradient Border",
          code: `<nav className="bg-white dark:bg-gray-800 relative">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg blur opacity-20"></div>
  <div className="relative bg-white dark:bg-gray-800 border border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-border rounded-lg p-0.5">
    <div className="bg-white dark:bg-gray-800 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">GradientNav</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-900 dark:text-white hover:text-purple-600 transition-colors">Home</a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-purple-600 transition-colors">About</a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-purple-600 transition-colors">Services</a>
            <a href="#" className="text-gray-900 dark:text-white hover:text-purple-600 transition-colors">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-900 dark:text-white">
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 border border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-border rounded-lg p-0.5">
                <div className="bg-white dark:bg-gray-800 rounded-lg">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                      <div className="flex items-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                          GradientNav
                        </span>
                      </div>
                      <div className="hidden md:flex items-center space-x-6">
                        <a
                          href="#"
                          className="text-gray-900 dark:text-white hover:text-purple-600 transition-colors"
                        >
                          Home
                        </a>
                        <a
                          href="#"
                          className="text-gray-900 dark:text-white hover:text-purple-600 transition-colors"
                        >
                          About
                        </a>
                        <a
                          href="#"
                          className="text-gray-900 dark:text-white hover:text-purple-600 transition-colors"
                        >
                          Services
                        </a>
                        <a
                          href="#"
                          className="text-gray-900 dark:text-white hover:text-purple-600 transition-colors"
                        >
                          Contact
                        </a>
                      </div>
                      <div className="md:hidden flex items-center">
                        <button className="text-gray-900 dark:text-white">
                          <FiMenu className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Neon Glow",
          code: `<nav className="bg-gray-900 shadow-lg shadow-cyan-500/20 border-b border-cyan-500/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">NeonBrand</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-white hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">Home</a>
        <a href="#" className="text-white hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">About</a>
        <a href="#" className="text-white hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">Services</a>
        <a href="#" className="text-white hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-gray-900 shadow-lg shadow-cyan-500/20 border-b border-cyan-500/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                      NeonBrand
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-white hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] transition-all"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Pill Navigation",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">PillNav</span>
      </div>
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-full p-1">
        <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full">Home</a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full">About</a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full">Services</a>
        <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      PillNav
                    </span>
                  </div>
                  <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                    <a
                      href="#"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Floating Navbar",
          code: `<div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
  <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3 border border-gray-200 dark:border-gray-700">
    <div className="flex items-center space-x-8">
      <div className="flex items-center">
        <span className="text-lg font-bold text-gray-900 dark:text-white">Float</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Home</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">About</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Services</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-5 w-5" />
        </button>
      </div>
    </div>
  </nav>
</div>`,
          component: (
            <div className="relative">
              <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-8">
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Float
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </nav>
            </div>
          ),
        },
        {
          name: "Minimalist Dots",
          code: `<nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-4 text-xl font-bold text-gray-900 dark:text-white">Minimal</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Home</a>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">About</a>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Work</a>
        <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
                      Minimal
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      Work
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Badge Navigation",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">BadgeNav</span>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="relative px-3 py-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
          Home
        </a>
        <a href="#" className="relative px-3 py-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
          Products
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </a>
        <a href="#" className="relative px-3 py-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
          Services
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">!</span>
        </a>
        <a href="#" className="px-3 py-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white relative">
          <FiMenu className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      BadgeNav
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-4">
                    <a
                      href="#"
                      className="relative px-3 py-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="relative px-3 py-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Products
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        3
                      </span>
                    </a>
                    <a
                      href="#"
                      className="relative px-3 py-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Services
                      <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        !
                      </span>
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white relative">
                      <FiMenu className="h-6 w-6" />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        3
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Icon-Heavy Navigation",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">IconNav</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
          <FiUser className="h-4 w-4" />
          <span>Profile</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
          <FiShoppingCart className="h-4 w-4" />
          <span>Cart</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
          <FiHeart className="h-4 w-4" />
          <span>Favorites</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
          <FiMail className="h-4 w-4" />
          <span>Messages</span>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
          <FiBell className="h-5 w-5" />
        </button>
        <button className="md:hidden text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      IconNav
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      <FiUser className="h-4 w-4" />
                      <span>Profile</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      <FiShoppingCart className="h-4 w-4" />
                      <span>Cart</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      <FiHeart className="h-4 w-4" />
                      <span>Favorites</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      <FiMail className="h-4 w-4" />
                      <span>Messages</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="p-2 text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                      <FiBell className="h-5 w-5" />
                    </button>
                    <button className="md:hidden text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Brutalist Style",
          code: `<nav className="bg-black text-white border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-black text-white">BRUTAL</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white hover:bg-white hover:text-black px-3 py-1 border-2 border-white transition-all font-bold">HOME</a>
        <a href="#" className="text-white hover:bg-white hover:text-black px-3 py-1 border-2 border-white transition-all font-bold">ABOUT</a>
        <a href="#" className="text-white hover:bg-white hover:text-black px-3 py-1 border-2 border-white transition-all font-bold">WORK</a>
        <a href="#" className="text-white hover:bg-white hover:text-black px-3 py-1 border-2 border-white transition-all font-bold">CONTACT</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-white border-2 border-white p-1">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-black text-white border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-black text-white">
                      BRUTAL
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    <a
                      href="#"
                      className="text-white hover:bg-white hover:text-black px-3 py-1 border-2 border-white transition-all font-bold"
                    >
                      HOME
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-white hover:text-black px-3 py-1 border-2 border-white transition-all font-bold"
                    >
                      ABOUT
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-white hover:text-black px-3 py-1 border-2 border-white transition-all font-bold"
                    >
                      WORK
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-white hover:text-black px-3 py-1 border-2 border-white transition-all font-bold"
                    >
                      CONTACT
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-white border-2 border-white p-1">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Neumorphism",
          code: `<nav className="bg-gray-200 dark:bg-gray-800 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.1),inset_8px_8px_16px_rgba(0,0,0,0.1)] dark:shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.05),inset_8px_8px_16px_rgba(0,0,0,0.3)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-800 dark:text-gray-200">Neuro</span>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] transition-all">Home</a>
        <a href="#" className="px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] transition-all">About</a>
        <a href="#" className="px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] transition-all">Services</a>
        <a href="#" className="px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] transition-all">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="p-2 text-gray-800 dark:text-gray-200 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-gray-200 dark:bg-gray-800 shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.1),inset_8px_8px_16px_rgba(0,0,0,0.1)] dark:shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.05),inset_8px_8px_16px_rgba(0,0,0,0.3)]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-800 dark:text-gray-200">
                      Neuro
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-4">
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] transition-all"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] transition-all"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] transition-all"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="px-4 py-2 text-gray-800 dark:text-gray-200 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)] hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] transition-all"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="p-2 text-gray-800 dark:text-gray-200 rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05)]">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Retro Gaming",
          code: `<nav className="bg-purple-900 text-green-400 border-4 border-green-400 font-mono shadow-[0_0_20px_rgba(34,197,94,0.5)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-green-400 animate-pulse">RETRO.EXE</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-green-400 hover:text-green-300 hover:bg-green-400/10 px-3 py-1 border border-green-400 transition-all">[HOME]</a>
        <a href="#" className="text-green-400 hover:text-green-300 hover:bg-green-400/10 px-3 py-1 border border-green-400 transition-all">[ABOUT]</a>
        <a href="#" className="text-green-400 hover:text-green-300 hover:bg-green-400/10 px-3 py-1 border border-green-400 transition-all">[GAMES]</a>
        <a href="#" className="text-green-400 hover:text-green-300 hover:bg-green-400/10 px-3 py-1 border border-green-400 transition-all">[CONTACT]</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-green-400 border border-green-400 p-1">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-purple-900 text-green-400 border-4 border-green-400 font-mono shadow-[0_0_20px_rgba(34,197,94,0.5)]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-green-400 animate-pulse">
                      RETRO.EXE
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-green-400 hover:text-green-300 hover:bg-green-400/10 px-3 py-1 border border-green-400 transition-all"
                    >
                      [HOME]
                    </a>
                    <a
                      href="#"
                      className="text-green-400 hover:text-green-300 hover:bg-green-400/10 px-3 py-1 border border-green-400 transition-all"
                    >
                      [ABOUT]
                    </a>
                    <a
                      href="#"
                      className="text-green-400 hover:text-green-300 hover:bg-green-400/10 px-3 py-1 border border-green-400 transition-all"
                    >
                      [GAMES]
                    </a>
                    <a
                      href="#"
                      className="text-green-400 hover:text-green-300 hover:bg-green-400/10 px-3 py-1 border border-green-400 transition-all"
                    >
                      [CONTACT]
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-green-400 border border-green-400 p-1">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Sidebar Toggle",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <FiMenu className="h-6 w-6" />
        </button>
        <span className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Analytics</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Reports</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Settings</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <FiBell className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <FiUser className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <FiMenu className="h-6 w-6" />
                    </button>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Dashboard
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Reports
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Settings
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <FiBell className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <FiUser className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Colorful Gradient",
          code: `<nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-white">Rainbow</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all">Home</a>
        <a href="#" className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all">About</a>
        <a href="#" className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all">Services</a>
        <a href="#" className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md transition-all">Get Started</button>
        <button className="md:hidden text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-white">
                      Rainbow
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md transition-all">
                      Get Started
                    </button>
                    <button className="md:hidden text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Tab-Style Navigation",
          code: `<nav className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">TabNav</span>
      </div>
      <div className="hidden md:flex items-center">
        <div className="flex space-x-1">
          <a href="#" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-t-lg border-l border-r border-t border-gray-200 dark:border-gray-700 -mb-px">Home</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-t-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">About</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-t-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Services</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-t-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact</a>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      TabNav
                    </span>
                  </div>
                  <div className="hidden md:flex items-center">
                    <div className="flex space-x-1">
                      <a
                        href="#"
                        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-t-lg border-l border-r border-t border-gray-200 dark:border-gray-700 -mb-px"
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-t-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        About
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-t-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        Services
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded-t-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Compact Icon Bar",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-12 items-center">
      <div className="flex items-center">
        <span className="text-lg font-semibold text-gray-900 dark:text-white">Compact</span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <FiUser className="h-4 w-4" />
        </button>
        <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <FiShoppingCart className="h-4 w-4" />
        </button>
        <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <FiHeart className="h-4 w-4" />
        </button>
        <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <FiSearch className="h-4 w-4" />
        </button>
        <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <FiMenu className="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-12 items-center">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      Compact
                    </span>
                  </div>
                  <div className="flex items-center space-x-6">
                    <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <FiUser className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <FiShoppingCart className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <FiHeart className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <FiSearch className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                      <FiMenu className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Breadcrumb Style",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Breadcrumb</span>
      </div>
      <div className="hidden md:flex items-center space-x-2">
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Home</a>
        <span className="text-gray-400">/</span>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Products</a>
        <span className="text-gray-400">/</span>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Category</a>
        <span className="text-gray-400">/</span>
        <span className="text-blue-600 font-medium">Current Page</span>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Breadcrumb
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-2">
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Home
                    </a>
                    <span className="text-gray-400">/</span>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Products
                    </a>
                    <span className="text-gray-400">/</span>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Category
                    </a>
                    <span className="text-gray-400">/</span>
                    <span className="text-blue-600 font-medium">
                      Current Page
                    </span>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Split Navigation",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center space-x-8">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Split</span>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Home</a>
          <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">About</a>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Services</a>
          <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">Sign Up</button>
        <button className="md:hidden text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center space-x-8">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Split
                    </span>
                    <div className="hidden md:flex items-center space-x-6">
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                      >
                        About
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="hidden md:flex items-center space-x-6">
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                      >
                        Services
                      </a>
                      <a
                        href="#"
                        className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                      >
                        Contact
                      </a>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                      Sign Up
                    </button>
                    <button className="md:hidden text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Centered Logo",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Home</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">About</a>
      </div>
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">CENTERED</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Services</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      About
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      CENTERED
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
      ],
    },
    {
      title: "Animated Navbars",
      navbars: [
        {
          name: "Slide-In on Scroll",
          code: `<motion.nav 
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Logo</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">About</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Services</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</motion.nav>`,
          component: (
            <motion.nav
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Logo
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.nav>
          ),
        },
        {
          name: "Fade-In Items",
          code: `<nav className="bg-white dark:bg-gray-800 shadow">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <span className="text-xl font-bold text-gray-900 dark:text-white">Brand</span>
      </motion.div>
      <div className="hidden md:flex items-center space-x-6">
        {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
          <motion.a
            key={item}
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="text-gray-900 dark:text-white hover:text-blue-600"
          >
            {item}
          </motion.a>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:hidden flex items-center"
      >
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </motion.div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center"
                  >
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Brand
                    </span>
                  </motion.div>
                  <div className="hidden md:flex items-center space-x-6">
                    {["Home", "About", "Services", "Contact"].map(
                      (item, index) => (
                        <motion.a
                          key={item}
                          href="#"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className="text-gray-900 dark:text-white hover:text-blue-600"
                        >
                          {item}
                        </motion.a>
                      )
                    )}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="md:hidden flex items-center"
                  >
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Hover Underline",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Logo</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {['Home', 'About', 'Services', 'Contact'].map((item) => (
          <a 
            href="#" 
            className="relative text-gray-900 dark:text-white group"
          >
            {item}
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Logo
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    {["Home", "About", "Services", "Contact"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="relative text-gray-900 dark:text-white group"
                      >
                        {item}
                        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    ))}
                  </div>
                  <div className="md:hidden flex items-center">
                    <button className="text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
        {
          name: "Animated Mobile Menu",
          code: `<nav className="bg-white dark:bg-gray-800 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Brand</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Home</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">About</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Services</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Contact</a>
      </div>
      <div className="md:hidden flex items-center">
        <button 
          onClick={toggleMobileMenu}
          className="text-gray-900 dark:text-white"
        >
          {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>
    </div>
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden"
        >
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">About</a>
            <a href="#" className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Services</a>
            <a href="#" className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">Contact</a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow-lg">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Brand
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6">
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="md:hidden flex items-center">
                    <button
                      onClick={toggleMobileMenu}
                      className="text-gray-900 dark:text-white"
                    >
                      {mobileMenuOpen ? (
                        <FiX className="h-6 w-6" />
                      ) : (
                        <FiMenu className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>
                <AnimatePresence>
                  {mobileMenuOpen && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={menuVariants}
                      className="md:hidden"
                    >
                      <div className="pt-2 pb-3 space-y-1">
                        <a
                          href="#"
                          className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Home
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          About
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Services
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Contact
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>
          ),
        },
        {
          name: "Animated Dropdown",
          code: `<nav className="bg-white dark:bg-gray-800 shadow">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center">
        <span className="text-xl font-bold text-gray-900 dark:text-white">Company</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <div className="relative">
          <button 
            onClick={() => toggleDropdown(1)}
            className="text-gray-900 dark:text-white hover:text-blue-600 flex items-center"
          >
            Products <FiChevronDown className={\`ml-1 transition-transform \${activeDropdown === 1 ? 'rotate-180' : ''}\`} />
          </button>
          <AnimatePresence>
            {activeDropdown === 1 && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={dropdownVariants}
                className="absolute z-10 left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1"
              >
                <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Product 1</a>
                <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Product 2</a>
                <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600">Product 3</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Solutions</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Pricing</a>
        <a href="#" className="text-gray-900 dark:text-white hover:text-blue-600">Resources</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-900 dark:text-white hover:text-blue-600 hidden md:block">Sign In</button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Sign Up</button>
        <button className="md:hidden text-gray-900 dark:text-white">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</nav>`,
          component: (
            <nav className="bg-white dark:bg-gray-800 shadow">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      Company
                    </span>
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(1)}
                        className="text-gray-900 dark:text-white hover:text-blue-600 flex items-center"
                      >
                        Products{" "}
                        <FiChevronDown
                          className={`ml-1 transition-transform ${
                            activeDropdown === 1 ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === 1 && (
                          <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={dropdownVariants}
                            className="absolute z-10 left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1"
                          >
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              Product 1
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              Product 2
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                              Product 3
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Solutions
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-white hover:text-blue-600"
                    >
                      Resources
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-900 dark:text-white hover:text-blue-600 hidden md:block">
                      Sign In
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                      Sign Up
                    </button>
                    <button className="md:hidden text-gray-900 dark:text-white">
                      <FiMenu className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          ),
        },
      ],
    },
  ];

  // Filter navbar categories based on search term
  const filteredCategories = navbarCategories
    .map((category) => ({
      ...category,
      navbars: category.navbars.filter((navbar) =>
        navbar.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.navbars.length > 0);

  return (
    <div
      className={`dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900 min-h-screen p-6 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Navbar Showcase
          </motion.h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FiSearch className="absolute top-3 left-3  text-gray-400" />
              <input
                type="text"
                placeholder="Search navbars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </header>

        {/* Display navbar categories */}
        {filteredCategories.map((category, catIdx) => (
          <section key={catIdx} className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              {category.navbars.map((navbar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg overflow-hidden group"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-semibold">{navbar.name}</h3>
                    <button
                      onClick={() =>
                        copyToClipboard(navbar.code, `${catIdx}-${idx}`)
                      }
                      className="text-xl"
                    >
                      {copiedIndex === `${catIdx}-${idx}` ? (
                        <FiCheck className="text-green-500" />
                      ) : (
                        <FiCopy />
                      )}
                    </button>
                  </div>
                  <div>{navbar.component}</div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default NavbarShowcase;
