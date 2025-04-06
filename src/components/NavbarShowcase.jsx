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
      className={`${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen p-6 transition-colors duration-300`}
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
