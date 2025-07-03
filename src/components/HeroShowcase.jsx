import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCode,
  FiHeart,
  FiDownload,
  FiTarget,
  FiCheck,
  FiArrowRight,
  FiPlay,
  FiStar,
  FiMoon,
  FiSun,
  FiZap,
  FiTrendingUp,
  FiLayers,
  FiGlobe,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const HeroShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // Check system preference and localStorage
    const savedMode = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else if (systemPrefersDark) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode to document and save preference
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Hero section categories
  const heroCategories = [
    { id: "all", name: "All" },
    { id: "minimal", name: "Minimal" },
    { id: "gradient", name: "Gradient" },
    { id: "image", name: "Image" },
    { id: "animated", name: "Animated" },
    { id: "creative", name: "Creative" },
    { id: "modern", name: "Modern" },
    { id: "glassmorphism", name: "Glass" },
    { id: "3d", name: "3D Effects" },
  ];

  // Enhanced hero sections with new modern designs
  const heroSections = [
    {
      id: 1,
      name: "Minimal Centered",
      category: "minimal",
      code: `<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
      Build amazing products
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
      Accelerate your workflow with our intuitive tools and components.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
        Get Started
      </button>
      <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        Learn More
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Build amazing products
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Accelerate your workflow with our intuitive tools and components.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 2,
      name: "Gradient Background",
      category: "gradient",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-800 dark:to-blue-700">
  <div className="max-w-7xl mx-auto">
    <div className="md:w-1/2">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        Transform your ideas into reality
      </h1>
      <p className="text-xl text-purple-100 dark:text-purple-200 mb-8">
        Our platform provides everything you need to launch your next big project.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">
          Start Free Trial
        </button>
        <button className="px-8 py-3 border border-white text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-colors">
          View Demo
        </button>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-800 dark:to-blue-700">
          <div className="max-w-7xl mx-auto">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transform your ideas into reality
              </h1>
              <p className="text-xl text-purple-100 dark:text-purple-200 mb-8">
                Our platform provides everything you need to launch your next
                big project.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 border border-white text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 3,
      name: "Glassmorphism Hero",
      category: "glassmorphism",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
    <div className="absolute top-0 right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
  </div>
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 rounded-3xl p-8 md:p-12 border border-white/30 dark:border-gray-700/30 shadow-xl">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
        Next-gen design system
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        Beautiful glassmorphism components that adapt to any design language.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-8 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white hover:bg-white/90 dark:hover:bg-gray-800/90 rounded-lg font-medium transition-all shadow-lg">
          Explore Components
        </button>
        <button className="px-8 py-3 border border-white/50 dark:border-gray-600/50 text-gray-800 dark:text-gray-200 hover:bg-white/10 dark:hover:bg-gray-800/10 rounded-lg font-medium transition-all backdrop-blur-sm">
          View Documentation
        </button>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-0 right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="backdrop-blur-lg bg-white/20 dark:bg-gray-900/20 rounded-3xl p-8 md:p-12 border border-white/30 dark:border-gray-700/30 shadow-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Next-gen design system
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Beautiful glassmorphism components that adapt to any design
                language.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white hover:bg-white/90 dark:hover:bg-gray-800/90 rounded-lg font-medium transition-all shadow-lg">
                  Explore Components
                </button>
                <button className="px-8 py-3 border border-white/50 dark:border-gray-600/50 text-gray-800 dark:text-gray-200 hover:bg-white/10 dark:hover:bg-gray-800/10 rounded-lg font-medium transition-all backdrop-blur-sm">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 4,
      name: "3D Floating Cards",
      category: "3d",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Powerful features at your fingertips
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Experience the next level of productivity with our advanced tools.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
      <div className="transform hover:rotate-y-12 transition-transform duration-300 preserve-3d">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow border border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
            <FiZap className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Lightning Fast</h3>
          <p className="text-gray-600 dark:text-gray-300">Optimized performance that scales with your needs.</p>
        </div>
      </div>
      <div className="transform hover:rotate-y-12 transition-transform duration-300 preserve-3d">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow border border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
            <FiShield className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Secure by Design</h3>
          <p className="text-gray-600 dark:text-gray-300">Enterprise-grade security built into every component.</p>
        </div>
      </div>
      <div className="transform hover:rotate-y-12 transition-transform duration-300 preserve-3d">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow border border-gray-200 dark:border-gray-700">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
            <FiUsers className="text-white text-xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Team Collaboration</h3>
          <p className="text-gray-600 dark:text-gray-300">Work together seamlessly with real-time updates.</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Powerful features at your fingertips
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experience the next level of productivity with our advanced
                tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <FiZap className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Lightning Fast
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Optimized performance that scales with your needs.
                  </p>
                </div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                    <FiShield className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Secure by Design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Enterprise-grade security built into every component.
                  </p>
                </div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                    <FiUsers className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Team Collaboration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Work together seamlessly with real-time updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 5,
      name: "Animated Gradient Text",
      category: "animated",
      code: `<section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-7xl font-bold mb-8">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x">
          Create. Innovate. Inspire.
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
        Join thousands of creators who are building the future with our cutting-edge platform.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Start Building Today
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
        >
          Explore Features
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>`,
      component: (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Create. Innovate. Inspire.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
                Join thousands of creators who are building the future with our
                cutting-edge platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Start Building Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                >
                  Explore Features
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      ),
    },
    {
      id: 6,
      name: "Geometric Pattern",
      category: "modern",
      code: `<section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
  <div className="absolute inset-0 opacity-5 dark:opacity-10">
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
          <FiTrendingUp className="mr-2" />
          Trending Technology
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          The future of development is here
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Revolutionary tools that streamline your workflow and boost productivity by 300%.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Get Started Free
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
        <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <FiCheck className="text-white" />
                </div>
                <span className="text-gray-900 dark:text-white font-medium">Project Setup</span>
              </div>
              <span className="text-green-500 font-semibold">Complete</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <FiLayers className="text-white" />
                </div>
                <span className="text-gray-900 dark:text-white font-medium">Component Library</span>
              </div>
              <span className="text-blue-500 font-semibold">In Progress</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <FiGlobe className="text-gray-600 dark:text-gray-300" />
                </div>
                <span className="text-gray-900 dark:text-white font-medium">Deployment</span>
              </div>
              <span className="text-gray-500 font-semibold">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 10 0 L 0 0 0 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
                  <FiTrendingUp className="mr-2" />
                  Trending Technology
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  The future of development is here
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Revolutionary tools that streamline your workflow and boost
                  productivity by 300%.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Get Started Free
                  </button>
                  <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Schedule Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <FiCheck className="text-white" />
                        </div>
                        <span className="text-gray-900 dark:text-white font-medium">
                          Project Setup
                        </span>
                      </div>
                      <span className="text-green-500 font-semibold">
                        Complete
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <FiLayers className="text-white" />
                        </div>
                        <span className="text-gray-900 dark:text-white font-medium">
                          Component Library
                        </span>
                      </div>
                      <span className="text-blue-500 font-semibold">
                        In Progress
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                          <FiGlobe className="text-gray-600 dark:text-gray-300" />
                        </div>
                        <span className="text-gray-900 dark:text-white font-medium">
                          Deployment
                        </span>
                      </div>
                      <span className="text-gray-500 font-semibold">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 7,
      name: "Split With Image",
      category: "image",
      code: `<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Modern solutions for modern problems
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          We've built the most intuitive platform to help you solve your business challenges with ease.
        </p>
        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
          Explore Features
        </button>
      </div>
      <div className="lg:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="Hero" 
          className="rounded-lg shadow-xl w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Modern solutions for modern problems
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We've built the most intuitive platform to help you solve your
                  business challenges with ease.
                </p>
                <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors">
                  Explore Features
                </button>
              </div>
              <div className="lg:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Hero"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      ),
    },
    // Add 10+ more modern trending designs...
    {
      id: 8,
      name: "Neumorphism Card",
      category: "modern",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
  <div className="max-w-4xl mx-auto text-center">
    <div className="bg-gray-100 dark:bg-gray-800 p-12 rounded-3xl shadow-neumorphism dark:shadow-neumorphism-dark">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        Neumorphism Design
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Soft, extruded plastic-like design that creates depth through subtle shadows and highlights.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl shadow-neumorphism-inset dark:shadow-neumorphism-inset-dark hover:shadow-neumorphism-inset-hover dark:hover:shadow-neumorphism-inset-hover-dark transition-all font-medium">
          Primary Action
        </button>
        <button className="px-8 py-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl shadow-neumorphism dark:shadow-neumorphism-dark hover:shadow-neumorphism-hover dark:hover:shadow-neumorphism-hover-dark transition-all font-medium">
          Secondary Action
        </button>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-100 dark:bg-gray-800 p-12 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Neumorphism Design
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Soft, extruded plastic-like design that creates depth through
                subtle shadows and highlights.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all font-medium shadow-lg">
                  Primary Action
                </button>
                <button className="px-8 py-3 bg-gray-50 dark:bg-gray-750 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all font-medium shadow-lg">
                  Secondary Action
                </button>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    // Continue adding more sections...
    // I'll add a few more key ones to demonstrate the pattern
    {
      id: 9,
      name: "Bento Grid Layout",
      category: "modern",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Everything you need in one place
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        A comprehensive suite of tools designed to streamline your workflow.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-96">
      <div className="md:col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Analytics Dashboard</h3>
          <p className="text-blue-100">Real-time insights and metrics</p>
        </div>
        <div className="text-right">
          <FiTrendingUp className="text-4xl opacity-50" />
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        <FiUsers className="text-3xl text-gray-600 dark:text-gray-400 mb-4" />
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Team Collaboration</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Work together seamlessly</p>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        <FiShield className="text-3xl text-gray-600 dark:text-gray-400 mb-4" />
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Security First</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise-grade protection</p>
      </div>
      <div className="md:col-span-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">API Integration</h3>
          <p className="text-green-100">Connect with 1000+ services</p>
        </div>
        <FiGlobe className="text-4xl opacity-50" />
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
        <FiZap className="text-3xl text-gray-600 dark:text-gray-400 mb-4" />
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Optimized performance</p>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Everything you need in one place
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A comprehensive suite of tools designed to streamline your
                workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-96">
              <div className="md:col-span-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-blue-100">
                    Real-time insights and metrics
                  </p>
                </div>
                <div className="text-right">
                  <FiTrendingUp className="text-4xl opacity-50" />
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <FiUsers className="text-3xl text-gray-600 dark:text-gray-400 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Team Collaboration
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Work together seamlessly
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <FiShield className="text-3xl text-gray-600 dark:text-gray-400 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Security First
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Enterprise-grade protection
                </p>
              </div>
              <div className="md:col-span-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">API Integration</h3>
                  <p className="text-green-100">Connect with 1000+ services</p>
                </div>
                <FiGlobe className="text-4xl opacity-50" />
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <FiZap className="text-3xl text-gray-600 dark:text-gray-400 mb-4" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Lightning Fast
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Optimized performance
                </p>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    // Add more sections following the same pattern...
    // I'll include a few more key modern designs
    {
      id: 10,
      name: "Floating Action Hero",
      category: "creative",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
  <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
  <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
  <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-ping"></div>
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-lg">
        <FiStar className="text-white text-2xl" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
        Floating in creativity
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Experience design that defies gravity with our innovative floating elements and smooth animations.
      </p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="flex flex-col sm:flex-row justify-center gap-4"
    >
      <button className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-200 dark:border-gray-700">
        <span className="flex items-center">
          Explore Magic
          <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
      <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
        Start Creating
      </button>
    </motion.div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-ping"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-lg">
                <FiStar className="text-white text-2xl" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Floating in creativity
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                Experience design that defies gravity with our innovative
                floating elements and smooth animations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-200 dark:border-gray-700">
                <span className="flex items-center">
                  Explore Magic
                  <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Start Creating
              </button>
            </motion.div>
          </div>
        </section>
      ),
    },
    {
      id: 11,
      name: "Stats Showcase",
      category: "minimal",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Trusted by developers worldwide
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Our tools power thousands of applications across every industry.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">10M+</div>
        <div className="text-gray-600 dark:text-gray-400">Downloads</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
        <div className="text-gray-600 dark:text-gray-400">Uptime</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
        <div className="text-gray-600 dark:text-gray-400">Contributors</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
        <div className="text-gray-600 dark:text-gray-400">Support</div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by developers worldwide
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our tools power thousands of applications across every industry.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  10M+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Downloads
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  98%
                </div>
                <div className="text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Contributors
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 12,
      name: "Video Background",
      category: "image",
      code: `<section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-under-neon-lights-1230-large.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
  <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      Experience the future today
    </h1>
    <p className="text-xl text-gray-200 mb-10">
      Immerse yourself in cutting-edge technology that transforms the way you work and play.
    </p>
    <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
      Watch Demo <FiPlay className="inline ml-2" />
    </button>
  </div>
</section>`,
      component: (
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-under-neon-lights-1230-large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience the future today
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Immerse yourself in cutting-edge technology that transforms the
              way you work and play.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
              Watch Demo <FiPlay className="inline ml-2" />
            </button>
          </div>
        </section>
      ),
    },
    {
      id: 13,
      name: "Fullscreen Image",
      category: "image",
      code: `<section className="relative h-screen flex items-center">
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
      alt="Background" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
  </div>
  <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-2xl">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
      Design that inspires and delights
    </h1>
    <p className="text-lg text-gray-300 mb-8">
      Beautiful interfaces that engage users and drive results for your business.
    </p>
    <button className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition-colors">
      View Portfolio
    </button>
  </div>
</section>`,
      component: (
        <section className="relative h-[500px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Design that inspires and delights
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Beautiful interfaces that engage users and drive results for your
              business.
            </p>
            <button className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition-colors">
              View Portfolio
            </button>
          </div>
        </section>
      ),
    },
    {
      id: 14,
      name: "Product Feature",
      category: "minimal",
      code: `<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2">
        <div className="bg-white dark:bg-gray-700 p-2 rounded-xl shadow-lg inline-block mb-6">
          <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            NEW RELEASE
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Introducing the next generation platform
        </h1>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">AI-powered analytics</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">Real-time collaboration</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">Enterprise-grade security</span>
          </li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Product" 
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="bg-white dark:bg-gray-700 p-2 rounded-xl shadow-lg inline-block mb-6">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    NEW RELEASE
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Introducing the next generation platform
                </h1>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      AI-powered analytics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Real-time collaboration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Enterprise-grade security
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Get Started
                  </button>
                  <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Product"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 18,
      name: "Dual Split Screen",
      category: "split",
      code: `<section className="h-screen flex">
  <div className="w-1/2 bg-black flex items-center justify-center p-8">
    <div className="text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">For Creators</h2>
      <p className="text-xl text-gray-300 mb-8">Unleash your creativity with powerful tools</p>
      <button className="px-8 py-3 bg-white text-black hover:bg-gray-100 rounded-lg font-medium transition-colors">
        Start Creating
      </button>
    </div>
  </div>
  <div className="w-1/2 bg-white dark:bg-gray-900 flex items-center justify-center p-8">
    <div className="text-center text-gray-900 dark:text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">For Business</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Scale your operations with enterprise solutions</p>
      <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg font-medium transition-colors">
        Get Started
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="h-[500px] flex">
          <div className="w-1/2 bg-black flex items-center justify-center p-8">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                For Creators
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Unleash your creativity with powerful tools
              </p>
              <button className="px-8 py-3 bg-white text-black hover:bg-gray-100 rounded-lg font-medium transition-colors">
                Start Creating
              </button>
            </div>
          </div>
          <div className="w-1/2 bg-white dark:bg-gray-900 flex items-center justify-center p-8">
            <div className="text-center text-gray-900 dark:text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                For Business
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Scale your operations with enterprise solutions
              </p>
              <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg font-medium transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 15,
      name: "Testimonial Hero",
      category: "creative",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
        TRUSTED BY THOUSANDS
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Loved by teams worldwide
      </h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          "This platform has completely transformed how our team collaborates. The intuitive interface and powerful features save us hours every week."
        </p>
        <div className="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/women/43.jpg" 
            alt="Sarah Johnson" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          "The analytics dashboard alone is worth the price. We've made better decisions in the last quarter than in the previous two years."
        </p>
        <div className="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Michael Chen" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Michael Chen</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          "Implementation was seamless and the support team is phenomenal. We're seeing ROI within the first month of use."
        </p>
        <div className="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/women/65.jpg" 
            alt="Emma Rodriguez" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Emma Rodriguez</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Operations Manager</p>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-16">
      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
        Read More Stories
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                TRUSTED BY THOUSANDS
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Loved by teams worldwide
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "This platform has completely transformed how our team
                  collaborates. The intuitive interface and powerful features
                  save us hours every week."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/43.jpg"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Sarah Johnson
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Marketing Director
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "The analytics dashboard alone is worth the price. We've made
                  better decisions in the last quarter than in the previous two
                  years."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Michael Chen
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      CTO
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "Implementation was seamless and the support team is
                  phenomenal. We're seeing ROI within the first month of use."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Emma Rodriguez"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Emma Rodriguez
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Operations Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-16">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                Read More Stories
              </button>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 16,
      name: "Newsletter Signup",
      category: "minimal",
      code: `<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-4xl mx-auto text-center">
    <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-6">
      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      Join 10,000+ subscribers
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
      Stay updated with our newsletter
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
      Get the latest news, articles, and resources sent straight to your inbox.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
        Subscribe
      </button>
    </div>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
      We respect your privacy. Unsubscribe at any time.
    </p>
  </div>
</section>`,
      component: (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Join 10,000+ subscribers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Stay updated with our newsletter
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Get the latest news, articles, and resources sent straight to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      ),
    },

    {
      id: 17,
      name: "Gradient Overlay",
      category: "gradient",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
      alt="Background" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90"></div>
  </div>
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
      Powerful tools for your creative workflow
    </h1>
    <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
      Streamline your process with our all-in-one platform designed for designers and developers.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
        Start Free Trial
      </button>
      <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium text-lg transition-colors">
        Watch Video
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Powerful tools for your creative workflow
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
              Streamline your process with our all-in-one platform designed for
              designers and developers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium text-lg transition-colors">
                Watch Video
              </button>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 21,
      name: "Neon Cyberpunk",
      category: "creative",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
    <div className="absolute top-20 left-20 w-2 h-40 bg-gradient-to-b from-cyan-400 to-transparent rotate-45 animate-pulse"></div>
    <div className="absolute top-40 right-32 w-2 h-32 bg-gradient-to-b from-pink-400 to-transparent -rotate-45 animate-pulse delay-1000"></div>
    <div className="absolute bottom-20 left-1/3 w-2 h-36 bg-gradient-to-b from-green-400 to-transparent rotate-12 animate-pulse delay-2000"></div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
      <span className="text-white">Enter the</span>
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
        Digital Future
      </span>
    </h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
      Step into tomorrow with cutting-edge technology that blurs the line between reality and digital innovation.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-6">
      <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:scale-105 border border-cyan-400/50">
        Jack In
      </button>
      <button className="px-8 py-4 border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black rounded-lg font-medium text-lg transition-all transform hover:scale-105">
        Explore Matrix
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
            <div className="absolute top-20 left-20 w-2 h-40 bg-gradient-to-b from-cyan-400 to-transparent rotate-45 animate-pulse"></div>
            <div className="absolute top-40 right-32 w-2 h-32 bg-gradient-to-b from-pink-400 to-transparent -rotate-45 animate-pulse"></div>
            <div className="absolute bottom-20 left-1/3 w-2 h-36 bg-gradient-to-b from-green-400 to-transparent rotate-12 animate-pulse"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white">Enter the</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                Digital Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Step into tomorrow with cutting-edge technology that blurs the
              line between reality and digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:scale-105 border border-cyan-400/50">
                Jack In
              </button>
              <button className="px-8 py-4 border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black rounded-lg font-medium text-lg transition-all transform hover:scale-105">
                Explore Matrix
              </button>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 22,
      name: "Minimalist Typography",
      category: "minimal",
      code: `<section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block w-16 h-1 bg-black dark:bg-white mb-8"></div>
      <h1 className="text-5xl md:text-8xl font-light text-gray-900 dark:text-white mb-8 tracking-tight leading-none">
        Less is
        <br />
        <span className="font-bold">More</span>
      </h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
          Embrace the power of simplicity. Our minimalist approach focuses on what truly matters—your content, your message, your impact.
        </p>
      </div>
      <div className="flex justify-center">
        <button className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium text-lg">
          Discover Simplicity
        </button>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block w-16 h-1 bg-black dark:bg-white mb-8"></div>
              <h1 className="text-5xl md:text-8xl font-light text-gray-900 dark:text-white mb-8 tracking-tight leading-none">
                Less is
                <br />
                <span className="font-bold">More</span>
              </h1>
              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                  Embrace the power of simplicity. Our minimalist approach
                  focuses on what truly matters—your content, your message, your
                  impact.
                </p>
              </div>
              <div className="flex justify-center">
                <button className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium text-lg">
                  Discover Simplicity
                </button>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 23,
      name: "Isometric Illustration",
      category: "creative",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Build in 3D perspective
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Transform your ideas into stunning isometric designs that pop off the screen and capture attention.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Start Creating
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            View Examples
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="transform rotate-12 hover:rotate-6 transition-transform duration-500">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-45"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg transform -rotate-12"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3 mb-2"></div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg transform rotate-12"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/5 mb-2"></div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Build in 3D perspective
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Transform your ideas into stunning isometric designs that pop
                  off the screen and capture attention.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Start Creating
                  </button>
                  <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    View Examples
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="transform rotate-12 hover:rotate-6 transition-transform duration-500">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-45"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                          <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-1/2"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg transform -rotate-12"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-2/3 mb-2"></div>
                          <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-3/4"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg transform rotate-12"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-4/5 mb-2"></div>
                          <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 19,
      name: "Interactive Cards Grid",
      category: "interactive",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Choose your path
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Discover the perfect solution for your needs
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="group cursor-pointer">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FiCode className="text-white text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Developers</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Build amazing applications with our comprehensive API and development tools.</p>
          <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
            Start Building
            <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FiHeart className="text-white text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Designers</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Create stunning designs with our intuitive design system and components.</p>
          <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
            Start Designing
            <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FiTarget className="text-white text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Marketers</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Grow your business with powerful marketing tools and analytics.</p>
          <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
            Start Marketing
            <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Choose your path
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Discover the perfect solution for your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FiCode className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Developers
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Build amazing applications with our comprehensive API and
                    development tools.
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    Start Building
                    <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FiHeart className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Designers
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Create stunning designs with our intuitive design system and
                    components.
                  </p>
                  <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
                    Start Designing
                    <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <FiTarget className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Marketers
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Grow your business with powerful marketing tools and
                    analytics.
                  </p>
                  <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                    Start Marketing
                    <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 24,
      name: "Morphing Shapes",
      category: "animated",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-20"></div>
    <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 transform rotate-45 animate-spin-slow opacity-20"></div>
    <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce opacity-20"></div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <motion.h1 
      className="text-4xl md:text-7xl font-bold text-white mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      Shape the
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
        Future
      </span>
    </motion.h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
      Experience fluid animations and morphing elements that bring your interface to life.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-6">
      <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
        Start Morphing
      </button>
      <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-all">
        Watch Demo
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 transform rotate-45 animate-spin opacity-20"></div>
            <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce opacity-20"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Shape the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                Future
              </span>
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Experience fluid animations and morphing elements that bring your
              interface to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Start Morphing
              </button>
              <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 25,
      name: "Particle System",
      category: "modern",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-ping"></div>
    <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-1000"></div>
    <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-2000"></div>
    <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-3000"></div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
      Connected
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
        Universe
      </span>
    </h1>
    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
      Explore infinite possibilities in a connected digital ecosystem where every interaction matters.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-6">
      <button className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-lg font-medium transition-all transform hover:scale-105">
        Enter Universe
      </button>
      <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg font-medium transition-all">
        Learn More
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Connected
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Universe
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Explore infinite possibilities in a connected digital ecosystem
              where every interaction matters.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-lg font-medium transition-all transform hover:scale-105">
                Enter Universe
              </button>
              <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg font-medium transition-all">
                Learn More
              </button>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 26,
      name: "Layered Depth",
      category: "3d",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 to-blue-900/20 transform -skew-y-6 origin-top-left"></div>
    <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-l from-pink-900/20 to-indigo-900/20 transform skew-y-6 origin-bottom-right"></div>
  </div>
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Depth in
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Every Layer
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Experience multi-dimensional design that creates immersive user experiences through strategic layering.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Explore Depth
          </button>
          <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg font-medium transition-all">
            View Layers
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="transform rotate-3 hover:rotate-6 transition-transform duration-500">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
            <div className="space-y-6">
              <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-3/4"></div>
              <div className="h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-1/2"></div>
              <div className="h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 to-blue-900/20 transform -skew-y-6 origin-top-left"></div>
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-l from-pink-900/20 to-indigo-900/20 transform skew-y-6 origin-bottom-right"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Depth in
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Every Layer
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-10">
                  Experience multi-dimensional design that creates immersive
                  user experiences through strategic layering.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Explore Depth
                  </button>
                  <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg font-medium transition-all">
                    View Layers
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="transform rotate-3 hover:rotate-6 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
                    <div className="space-y-6">
                      <div className="h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-3/4"></div>
                      <div className="h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full w-1/2"></div>
                      <div className="h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 27,
      name: "Holographic Interface",
      category: "creative",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
    <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-cyan-400 to-transparent"></div>
    <div className="absolute top-40 right-20 w-40 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
    <div className="absolute bottom-20 left-1/3 w-px h-32 bg-gradient-to-t from-pink-400 to-transparent"></div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <div className="mb-8">
      <div className="inline-block p-4 border border-cyan-400/30 rounded-full mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
          <FiLayers className="text-white text-2xl" />
        </div>
      </div>
    </div>
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
      Holographic
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
        Interface
      </span>
    </h1>
    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
      Step into the future with holographic UI elements that blur the line between digital and physical reality.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-6">
      <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:scale-105">
        Activate Hologram
      </button>
      <button className="px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 rounded-lg font-medium transition-all">
        View Interface
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
            <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-cyan-400 to-transparent"></div>
            <div className="absolute top-40 right-20 w-40 h-px bg-gradient-to-r from-purple-400 to-transparent"></div>
            <div className="absolute bottom-20 left-1/3 w-px h-32 bg-gradient-to-t from-pink-400 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block p-4 border border-cyan-400/30 rounded-full mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                  <FiLayers className="text-white text-2xl" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Holographic
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Interface
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Step into the future with holographic UI elements that blur the
              line between digital and physical reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:scale-105">
                Activate Hologram
              </button>
              <button className="px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 rounded-lg font-medium transition-all">
                View Interface
              </button>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 28,
      name: "Organic Shapes",
      category: "modern",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-900 overflow-hidden">
  <div className="absolute inset-0">
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
      <path d="M200,300 Q400,100 600,300 T1000,300 L1000,0 L0,0 Z" fill="rgba(16, 185, 129, 0.1)" />
      <path d="M0,700 Q300,500 600,700 T1000,700 L1000,1000 L0,1000 Z" fill="rgba(20, 184, 166, 0.1)" />
    </svg>
  </div>
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          Naturally
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
            Inspired
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
          Embrace organic design patterns that mirror the natural world while maintaining modern functionality.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Grow Naturally
          </button>
          <button className="px-8 py-4 border border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full font-medium transition-all">
            Explore Patterns
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="w-80 h-80 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full transform rotate-12 opacity-20"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full transform -rotate-6 opacity-30"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full transform rotate-3 opacity-40"></div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-emerald-900 overflow-hidden">
          <div className="absolute inset-0">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 1000 1000"
              preserveAspectRatio="xMidYMid slice"
            >
              <path
                d="M200,300 Q400,100 600,300 T1000,300 L1000,0 L0,0 Z"
                fill="rgba(16, 185, 129, 0.1)"
              />
              <path
                d="M0,700 Q300,500 600,700 T1000,700 L1000,1000 L0,1000 Z"
                fill="rgba(20, 184, 166, 0.1)"
              />
            </svg>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                  Naturally
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                    Inspired
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                  Embrace organic design patterns that mirror the natural world
                  while maintaining modern functionality.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Grow Naturally
                  </button>
                  <button className="px-8 py-4 border border-emerald-500 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-full font-medium transition-all">
                    Explore Patterns
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full transform rotate-12 opacity-20"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full transform -rotate-6 opacity-30"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full transform rotate-3 opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 29,
      name: "Data Visualization",
      category: "modern",
      code: `<section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
          <FiTrendingUp className="mr-2" />
          Real-time Analytics
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          Data Tells
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Stories
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
          Transform complex data into beautiful, actionable insights with our advanced visualization tools.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Visualize Data
          </button>
          <button className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all">
            View Demo
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Revenue Growth</span>
              <span className="text-2xl font-bold text-green-500">+24%</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Q1</span>
                <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">$125K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Q2</span>
                <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-4/5"></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">$158K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Q3</span>
                <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full w-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">$192K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
                  <FiTrendingUp className="mr-2" />
                  Real-time Analytics
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                  Data Tells
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Stories
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                  Transform complex data into beautiful, actionable insights
                  with our advanced visualization tools.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Visualize Data
                  </button>
                  <button className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all">
                    View Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        Revenue Growth
                      </span>
                      <span className="text-2xl font-bold text-green-500">
                        +24%
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Q1
                        </span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          $125K
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Q2
                        </span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-4/5"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          $158K
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Q3
                        </span>
                        <div className="flex-1 mx-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full w-full"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          $192K
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 30,
      name: "Retro Gaming",
      category: "creative",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full opacity-20">
      <div className="grid grid-cols-20 gap-1 h-full">
        {[...Array(400)].map((_, i) => (
          <div key={i} className="bg-white/5 animate-pulse" style={{animationDelay: \`\${i * 0.1}s\`}}></div>
        ))}
      </div>
    </div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <div className="mb-8">
      <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-sm rounded-full mb-8">
        GAME ON
      </div>
    </div>
    <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight font-mono">
      RETRO
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">
        ARCADE
      </span>
    </h1>
    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-mono">
      Level up your experience with pixel-perfect design and nostalgic vibes that transport you back to the golden age of gaming.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-6">
      <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
        INSERT COIN
      </button>
      <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg font-bold transition-all">
        HIGH SCORES
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="grid grid-cols-20 gap-1 h-full">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="bg-white/5 animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-sm rounded-full mb-8">
                GAME ON
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight font-mono">
              RETRO
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400">
                ARCADE
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-mono">
              Level up your experience with pixel-perfect design and nostalgic
              vibes that transport you back to the golden age of gaming.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                INSERT COIN
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg font-bold transition-all">
                HIGH SCORES
              </button>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 31,
      name: "Minimalist Cards",
      category: "minimal",
      code: `<section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h1 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-white mb-6">
        Simple.
        <br />
        <span className="font-bold">Effective.</span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Clean design that focuses on what matters most.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-none shadow-sm border-l-4 border-black dark:border-white">
        <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">Design</h3>
        <p className="text-gray-600 dark:text-gray-300">Thoughtful aesthetics that enhance user experience.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-none shadow-sm border-l-4 border-black dark:border-white">
        <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">Function</h3>
        <p className="text-gray-600 dark:text-gray-300">Purpose-driven features that solve real problems.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-none shadow-sm border-l-4 border-black dark:border-white">
        <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">Impact</h3>
        <p className="text-gray-600 dark:text-gray-300">Meaningful results that drive business forward.</p>
      </div>
    </div>
    <div className="text-center mt-16">
      <button className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium">
        Learn More
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-white mb-6">
                Simple.
                <br />
                <span className="font-bold">Effective.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Clean design that focuses on what matters most.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-none shadow-sm border-l-4 border-black dark:border-white">
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thoughtful aesthetics that enhance user experience.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-none shadow-sm border-l-4 border-black dark:border-white">
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  Function
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Purpose-driven features that solve real problems.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-none shadow-sm border-l-4 border-black dark:border-white">
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
                  Impact
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Meaningful results that drive business forward.
                </p>
              </div>
            </div>
            <div className="text-center mt-16">
              <button className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 32,
      name: "Floating Elements",
      category: "3d",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-indigo-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-20 left-20 w-16 h-16 bg-blue-400 rounded-lg transform rotate-45 animate-float opacity-60"></div>
    <div className="absolute top-40 right-32 w-12 h-12 bg-purple-400 rounded-full animate-float-delayed opacity-60"></div>
    <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-400 rounded-lg transform -rotate-12 animate-float-slow opacity-60"></div>
    <div className="absolute bottom-20 right-20 w-8 h-8 bg-yellow-400 rounded-full animate-float opacity-60"></div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
        Elements in
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Motion
        </span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        Watch as design elements come alive with smooth animations and floating interactions that create depth and engagement.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
        >
          Start Floating
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all"
        >
          View Animation
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-indigo-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-16 h-16 bg-blue-400 rounded-lg transform rotate-45 animate-bounce opacity-60"></div>
            <div className="absolute top-40 right-32 w-12 h-12 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-400 rounded-lg transform -rotate-12 animate-bounce opacity-60"></div>
            <div className="absolute bottom-20 right-20 w-8 h-8 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                Elements in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Motion
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                Watch as design elements come alive with smooth animations and
                floating interactions that create depth and engagement.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Start Floating
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-all"
                >
                  View Animation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      ),
    },

    {
      id: 33,
      name: "Gradient Mesh",
      category: "gradient",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-100 via-purple-100 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-400/20 via-purple-400/20 to-indigo-400/20 animate-gradient-x"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
      Gradient
      <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500">
        Perfection
      </span>
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
      Experience the beauty of seamless color transitions that create stunning visual depth and modern aesthetics.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-6">
      <button className="px-8 py-4 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
        Explore Gradients
      </button>
      <button className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white border border-white/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 rounded-lg font-medium transition-all">
        Color Palette
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-100 via-purple-100 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-rose-400/20 via-purple-400/20 to-indigo-400/20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Gradient
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500">
                Perfection
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Experience the beauty of seamless color transitions that create
              stunning visual depth and modern aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-8 py-4 bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Explore Gradients
              </button>
              <button className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white border border-white/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 rounded-lg font-medium transition-all">
                Color Palette
              </button>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 34,
      name: "Aurora Borealis",
      category: "gradient",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-blue-500/30 to-purple-600/30 animate-pulse"></div>
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-20 left-10 w-96 h-2 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60 transform -rotate-12 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-80 h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 transform rotate-6 animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-32 left-1/4 w-72 h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60 transform -rotate-3 animate-pulse animation-delay-2000"></div>
    </div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
        Northern
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-pulse">
          Lights
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        Witness the magical dance of colors across the digital sky, where technology meets natural wonder.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-medium shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all transform hover:scale-105">
          Experience Aurora
        </button>
        <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-all backdrop-blur-sm">
          Discover Magic
        </button>
      </div>
    </motion.div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 via-blue-500/30 to-purple-600/30 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-10 w-96 h-2 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60 transform -rotate-12 animate-pulse"></div>
              <div className="absolute top-40 right-20 w-80 h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 transform rotate-6 animate-pulse"></div>
              <div className="absolute bottom-32 left-1/4 w-72 h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60 transform -rotate-3 animate-pulse"></div>
            </div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Northern
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-pulse">
                  Lights
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Witness the magical dance of colors across the digital sky,
                where technology meets natural wonder.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-medium shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all transform hover:scale-105">
                  Experience Aurora
                </button>
                <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-all backdrop-blur-sm">
                  Discover Magic
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      ),
    },

    {
      id: 35,
      name: "Crystalline Structure",
      category: "3d",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-gray-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400/30 transform rotate-45 animate-spin-slow"></div>
    <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400/30 transform rotate-12 animate-pulse"></div>
    <div className="absolute bottom-32 left-1/3 w-28 h-28 border-2 border-pink-400/30 transform -rotate-12 animate-bounce"></div>
    <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-blue-400/30 transform rotate-45 animate-spin-slow"></div>
  </div>
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Crystal
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Clear Vision
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Discover precision and clarity in every pixel. Our crystalline approach to design creates perfect harmony between form and function.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Crystallize Ideas
          </button>
          <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg font-medium transition-all">
            View Structure
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="w-80 h-80 mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 transform rotate-12 rounded-lg"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-purple-400/20 to-pink-400/20 transform -rotate-6 rounded-lg"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-pink-400/20 to-cyan-400/20 transform rotate-3 rounded-lg"></div>
          <div className="absolute inset-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 animate-pulse"></div>
              <div className="text-white font-medium">Core</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cyan-400/30 transform rotate-45 animate-spin"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400/30 transform rotate-12 animate-pulse"></div>
            <div className="absolute bottom-32 left-1/3 w-28 h-28 border-2 border-pink-400/30 transform -rotate-12 animate-bounce"></div>
            <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-blue-400/30 transform rotate-45 animate-spin"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Crystal
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    Clear Vision
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-10">
                  Discover precision and clarity in every pixel. Our crystalline
                  approach to design creates perfect harmony between form and
                  function.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Crystallize Ideas
                  </button>
                  <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg font-medium transition-all">
                    View Structure
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 transform rotate-12 rounded-lg"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-purple-400/20 to-pink-400/20 transform -rotate-6 rounded-lg"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-pink-400/20 to-cyan-400/20 transform rotate-3 rounded-lg"></div>
                  <div className="absolute inset-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 animate-pulse"></div>
                      <div className="text-white font-medium">Core</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 36,
      name: "Liquid Motion",
      category: "animated",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/30 to-red-400/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
        Liquid
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Dynamics
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        Experience fluid interactions that flow like water, creating organic movements that captivate and engage users naturally.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
        >
          Flow Forward
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-all backdrop-blur-sm"
        >
          Watch Flow
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-400/30 to-red-400/30 rounded-full filter blur-3xl animate-pulse"></div>
            </div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Liquid
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Dynamics
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Experience fluid interactions that flow like water, creating
                organic movements that captivate and engage users naturally.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Flow Forward
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-all backdrop-blur-sm"
                >
                  Watch Flow
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      ),
    },

    {
      id: 37,
      name: "Brutalist Grid",
      category: "modern",
      code: `<section className="py-32 px-4 sm:px-6 lg:px-8 bg-yellow-400 dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-96">
      <div className="lg:col-span-8 bg-black p-12 flex items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none uppercase tracking-tight">
            Bold
            <br />
            Statements
          </h1>
          <p className="text-xl text-gray-300 mb-8 font-medium">
            Unapologetically direct design that commands attention and delivers impact through raw, honest aesthetics.
          </p>
          <button className="px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-300 font-black text-lg uppercase tracking-wide transition-colors">
            Make Statement
          </button>
        </div>
      </div>
      <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-8 flex flex-col justify-between">
        <div>
          <div className="w-full h-4 bg-black dark:bg-white mb-6"></div>
          <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-600 mb-4"></div>
          <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-600 mb-8"></div>
        </div>
        <div className="text-right">
          <div className="w-16 h-16 bg-yellow-400 ml-auto mb-4"></div>
          <div className="text-black dark:text-white font-black text-sm uppercase">Function</div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-0 mt-0">
      <div className="bg-white dark:bg-gray-800 p-6 border-r-4 border-black dark:border-white">
        <div className="font-black text-2xl text-black dark:text-white mb-2">01</div>
        <div className="text-black dark:text-white font-medium">Direct Impact</div>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 p-6 border-r-4 border-black dark:border-white">
        <div className="font-black text-2xl text-black dark:text-white mb-2">02</div>
        <div className="text-black dark:text-white font-medium">Raw Honesty</div>
      </div>
      <div className="bg-yellow-400 p-6">
        <div className="font-black text-2xl text-black mb-2">03</div>
        <div className="text-black font-medium">Bold Choice</div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-yellow-400 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-96">
              <div className="lg:col-span-8 bg-black p-12 flex items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none uppercase tracking-tight">
                    Bold
                    <br />
                    Statements
                  </h1>
                  <p className="text-xl text-gray-300 mb-8 font-medium">
                    Unapologetically direct design that commands attention and
                    delivers impact through raw, honest aesthetics.
                  </p>
                  <button className="px-8 py-4 bg-yellow-400 text-black hover:bg-yellow-300 font-black text-lg uppercase tracking-wide transition-colors">
                    Make Statement
                  </button>
                </div>
              </div>
              <div className="lg:col-span-4 bg-white dark:bg-gray-800 p-8 flex flex-col justify-between">
                <div>
                  <div className="w-full h-4 bg-black dark:bg-white mb-6"></div>
                  <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-600 mb-4"></div>
                  <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-600 mb-8"></div>
                </div>
                <div className="text-right">
                  <div className="w-16 h-16 bg-yellow-400 ml-auto mb-4"></div>
                  <div className="text-black dark:text-white font-black text-sm uppercase">
                    Function
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-0 mt-0">
              <div className="bg-white dark:bg-gray-800 p-6 border-r-4 border-black dark:border-white">
                <div className="font-black text-2xl text-black dark:text-white mb-2">
                  01
                </div>
                <div className="text-black dark:text-white font-medium">
                  Direct Impact
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 p-6 border-r-4 border-black dark:border-white">
                <div className="font-black text-2xl text-black dark:text-white mb-2">
                  02
                </div>
                <div className="text-black dark:text-white font-medium">
                  Raw Honesty
                </div>
              </div>
              <div className="bg-yellow-400 p-6">
                <div className="font-black text-2xl text-black mb-2">03</div>
                <div className="text-black font-medium">Bold Choice</div>
              </div>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 38,
      name: "Quantum Field",
      category: "creative",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-950 to-purple-950 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
        style={{
          top: \`\${Math.random() * 100}%\`,
          left: \`\${Math.random() * 100}%\`,
          animationDelay: \`\${Math.random() * 3}s\`,
          animationDuration: \`\${2 + Math.random() * 2}s\`
        }}
      ></div>
    ))}
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-8">
        <div className="inline-block p-6 border border-blue-400/30 rounded-full mb-8 backdrop-blur-sm">
          <div className="w-20 h-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-20"></div>
            <div className="absolute inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
        Quantum
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Computing
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        Enter the realm of infinite possibilities where quantum mechanics meets digital innovation, unlocking unprecedented computational power.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:scale-105">
          Enter Quantum Realm
        </button>
        <button className="px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 rounded-lg font-medium transition-all backdrop-blur-sm">
          Explore Physics
        </button>
      </div>
    </motion.div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-950 to-purple-950 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="inline-block p-6 border border-blue-400/30 rounded-full mb-8 backdrop-blur-sm">
                  <div className="w-20 h-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Quantum
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Computing
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Enter the realm of infinite possibilities where quantum
                mechanics meets digital innovation, unlocking unprecedented
                computational power.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:scale-105">
                  Enter Quantum Realm
                </button>
                <button className="px-8 py-4 border border-purple-400/50 text-purple-400 hover:bg-purple-400/10 rounded-lg font-medium transition-all backdrop-blur-sm">
                  Explore Physics
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      ),
    },

    {
      id: 39,
      name: "Monochrome Elegance",
      category: "minimal",
      code: `<section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <div className="mb-12">
          <div className="w-24 h-1 bg-black dark:bg-white mb-8"></div>
          <h1 className="text-4xl md:text-7xl font-light text-black dark:text-white mb-8 leading-none">
            Pure
            <br />
            <span className="font-bold">Elegance</span>
          </h1>
          <div className="w-16 h-1 bg-black dark:bg-white"></div>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          Timeless design philosophy that transcends trends. Where every element serves a purpose and beauty emerges from restraint.
        </p>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black dark:bg-white"></div>
            <span className="text-black dark:text-white font-medium">Minimal Complexity</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black dark:bg-white"></div>
            <span className="text-black dark:text-white font-medium">Maximum Impact</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-black dark:bg-white"></div>
            <span className="text-black dark:text-white font-medium">Timeless Appeal</span>
          </div>
        </div>
        <div className="mt-12">
          <button className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium">
            Experience Elegance
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square">
          <div className="absolute inset-0 border border-black dark:border-white"></div>
          <div className="absolute inset-8 border border-black dark:border-white"></div>
          <div className="absolute inset-16 border border-black dark:border-white"></div>
          <div className="absolute inset-24 bg-black dark:bg-white"></div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="mb-12">
                  <div className="w-24 h-1 bg-black dark:bg-white mb-8"></div>
                  <h1 className="text-4xl md:text-7xl font-light text-black dark:text-white mb-8 leading-none">
                    Pure
                    <br />
                    <span className="font-bold">Elegance</span>
                  </h1>
                  <div className="w-16 h-1 bg-black dark:bg-white"></div>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                  Timeless design philosophy that transcends trends. Where every
                  element serves a purpose and beauty emerges from restraint.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-black dark:bg-white"></div>
                    <span className="text-black dark:text-white font-medium">
                      Minimal Complexity
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-black dark:bg-white"></div>
                    <span className="text-black dark:text-white font-medium">
                      Maximum Impact
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-black dark:bg-white"></div>
                    <span className="text-black dark:text-white font-medium">
                      Timeless Appeal
                    </span>
                  </div>
                </div>
                <div className="mt-12">
                  <button className="px-12 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium">
                    Experience Elegance
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square">
                  <div className="absolute inset-0 border border-black dark:border-white"></div>
                  <div className="absolute inset-8 border border-black dark:border-white"></div>
                  <div className="absolute inset-16 border border-black dark:border-white"></div>
                  <div className="absolute inset-24 bg-black dark:bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 40,
      name: "Neural Network",
      category: "modern",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
  <div className="absolute inset-0">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000">
      <defs>
        <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      <g opacity="0.6">
        <line x1="100" y1="200" x2="300" y2="150" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
        <line x1="300" y1="150" x2="500" y2="200" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
        <line x1="500" y1="200" x2="700" y2="180" stroke="#3B82F6" strokeWidth="1" opacity="0.5" />
        <line x1="200" y1="350" x2="400" y2="300" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
        <line x1="400" y1="300" x2="600" y2="350" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
        <circle cx="100" cy="200" r="4" fill="url(#nodeGradient)" />
        <circle cx="300" cy="150" r="4" fill="url(#nodeGradient)" />
        <circle cx="500" cy="200" r="4" fill="url(#nodeGradient)" />
        <circle cx="700" cy="180" r="4" fill="url(#nodeGradient)" />
        <circle cx="200" cy="350" r="4" fill="url(#nodeGradient)" />
        <circle cx="400" cy="300" r="4" fill="url(#nodeGradient)" />
        <circle cx="600" cy="350" r="4" fill="url(#nodeGradient)" />
      </g>
    </svg>
  </div>
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
          AI Powered
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Neural
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Intelligence
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10">
          Harness the power of artificial neural networks to unlock insights, automate decisions, and create intelligent solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Train Network
          </button>
          <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg font-medium transition-all">
            View Architecture
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Training Progress</span>
              <span className="text-blue-400 font-bold">87.3%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[87%]"></div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">2.4M</div>
                <div className="text-gray-400 text-sm">Parameters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98.7%</div>
                <div className="text-gray-400 text-sm">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">15ms</div>
                <div className="text-gray-400 text-sm">Inference</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
          <div className="absolute inset-0">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 1000"
            >
              <defs>
                <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              <g opacity="0.6">
                <line
                  x1="100"
                  y1="200"
                  x2="300"
                  y2="150"
                  stroke="#3B82F6"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1="300"
                  y1="150"
                  x2="500"
                  y2="200"
                  stroke="#3B82F6"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1="500"
                  y1="200"
                  x2="700"
                  y2="180"
                  stroke="#3B82F6"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1="200"
                  y1="350"
                  x2="400"
                  y2="300"
                  stroke="#8B5CF6"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1="400"
                  y1="300"
                  x2="600"
                  y2="350"
                  stroke="#8B5CF6"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <circle cx="100" cy="200" r="4" fill="url(#nodeGradient)" />
                <circle cx="300" cy="150" r="4" fill="url(#nodeGradient)" />
                <circle cx="500" cy="200" r="4" fill="url(#nodeGradient)" />
                <circle cx="700" cy="180" r="4" fill="url(#nodeGradient)" />
                <circle cx="200" cy="350" r="4" fill="url(#nodeGradient)" />
                <circle cx="400" cy="300" r="4" fill="url(#nodeGradient)" />
                <circle cx="600" cy="350" r="4" fill="url(#nodeGradient)" />
              </g>
            </svg>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-full text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  AI Powered
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Neural
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Intelligence
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-10">
                  Harness the power of artificial neural networks to unlock
                  insights, automate decisions, and create intelligent
                  solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Train Network
                  </button>
                  <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-lg font-medium transition-all">
                    View Architecture
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        Training Progress
                      </span>
                      <span className="text-blue-400 font-bold">87.3%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-[87%]"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">
                          2.4M
                        </div>
                        <div className="text-gray-400 text-sm">Parameters</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">
                          98.7%
                        </div>
                        <div className="text-gray-400 text-sm">Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-1">
                          15ms
                        </div>
                        <div className="text-gray-400 text-sm">Inference</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },

    {
      id: 41,
      name: "Cosmic Parallax",
      category: "animated",
      code: `<section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-black"></div>
    {[...Array(100)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full animate-twinkle"
        style={{
          width: \`\${Math.random() * 3 + 1}px\`,
          height: \`\${Math.random() * 3 + 1}px\`,
          top: \`\${Math.random() * 100}%\`,
          left: \`\${Math.random() * 100}%\`,
          animationDelay: \`\${Math.random() * 3}s\`,
          animationDuration: \`\${2 + Math.random() * 3}s\`
        }}
      ></div>
    ))}
  </div>
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl animate-float"></div>
    <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl animate-float-delayed"></div>
    <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-pink-500/30 to-red-500/30 rounded-full filter blur-3xl animate-float-slow"></div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-8xl font-bold text-white mb-8 leading-tight">
        Explore the
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
          Universe
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        Journey through infinite space and discover the wonders that await beyond the stars. Every pixel tells a cosmic story.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
        >
          Launch Mission
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-all backdrop-blur-sm"
        >
          View Galaxy
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>`,
      component: (
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-black">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-black"></div>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-ping"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-gradient-to-r from-pink-500/30 to-red-500/30 rounded-full filter blur-3xl animate-pulse"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-4xl md:text-8xl font-bold text-white mb-8 leading-tight">
                Explore the
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                  Universe
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Journey through infinite space and discover the wonders that
                await beyond the stars. Every pixel tells a cosmic story.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
                >
                  Launch Mission
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-all backdrop-blur-sm"
                >
                  View Galaxy
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      ),
    },

    {
      id: 42,
      name: "Neon Grid System",
      category: "creative",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
    <div className="absolute inset-0 opacity-30">
      <div className="grid grid-cols-12 gap-4 h-full">
        {[...Array(144)].map((_, i) => (
          <div 
            key={i} 
            className="border border-cyan-400/20 animate-pulse"
            style={{animationDelay: \`\${i * 0.1}s\`}}
          ></div>
        ))}
      </div>
    </div>
  </div>
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-8">
        <div className="inline-block px-6 py-3 border border-cyan-400 text-cyan-400 rounded-none font-mono text-sm mb-8 bg-cyan-400/10">
          SYSTEM_ONLINE
        </div>
      </div>
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight font-mono">
        GRID_
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          SYSTEM
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-mono">
        Enter the digital matrix where precision meets creativity. Navigate through structured chaos and discover order in complexity.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="px-8 py-4 bg-cyan-400 text-black hover:bg-cyan-300 rounded-none font-mono font-bold text-lg uppercase tracking-wide transition-colors shadow-lg shadow-cyan-400/25">
          ACCESS_GRID
        </button>
        <button className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black rounded-none font-mono font-bold text-lg uppercase tracking-wide transition-all">
          VIEW_MATRIX
        </button>
      </div>
    </motion.div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>
            <div className="absolute inset-0 opacity-30">
              <div className="grid grid-cols-12 gap-4 h-full">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className="border border-cyan-400/20 animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="inline-block px-6 py-3 border border-cyan-400 text-cyan-400 rounded-none font-mono text-sm mb-8 bg-cyan-400/10">
                  SYSTEM_ONLINE
                </div>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight font-mono">
                GRID_
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  SYSTEM
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-mono">
                Enter the digital matrix where precision meets creativity.
                Navigate through structured chaos and discover order in
                complexity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-8 py-4 bg-cyan-400 text-black hover:bg-cyan-300 rounded-none font-mono font-bold text-lg uppercase tracking-wide transition-colors shadow-lg shadow-cyan-400/25">
                  ACCESS_GRID
                </button>
                <button className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black rounded-none font-mono font-bold text-lg uppercase tracking-wide transition-all">
                  VIEW_MATRIX
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      ),
    },

    {
      id: 43,
      name: "Sustainable Future",
      category: "modern",
      code: `<section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-green-900">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Carbon Neutral
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          Building a
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
            Greener Tomorrow
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
          Join the movement towards sustainable technology. Every line of code, every design decision, every innovation can help heal our planet.
        </p>
        <div className="space-y-4 mb-10">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 dark:text-gray-300">100% Renewable Energy</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 dark:text-gray-300">Zero Waste Operations</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 dark:text-gray-300">Sustainable Innovation</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Join Movement
          </button>
          <button className="px-8 py-4 border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium transition-all">
            Learn Impact
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-green-500 mb-2">2.4 Tons</div>
            <div className="text-gray-600 dark:text-gray-400">CO₂ Saved This Month</div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Energy Efficiency</span>
              <span className="text-green-500 font-bold">+23%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[78%]"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Waste Reduction</span>
              <span className="text-green-500 font-bold">+31%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-[85%]"></div>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-green-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Carbon Neutral
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                  Building a
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">
                    Greener Tomorrow
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
                  Join the movement towards sustainable technology. Every line
                  of code, every design decision, every innovation can help heal
                  our planet.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      100% Renewable Energy
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Zero Waste Operations
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      Sustainable Innovation
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                    Join Movement
                  </button>
                  <button className="px-8 py-4 border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg font-medium transition-all">
                    Learn Impact
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-green-500 mb-2">
                      2.4 Tons
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      CO₂ Saved This Month
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Energy Efficiency
                      </span>
                      <span className="text-green-500 font-bold">+23%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-[78%]"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Waste Reduction
                      </span>
                      <span className="text-green-500 font-bold">+31%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
  ];

  // Filter hero sections based on active category
  const filteredHeroSections =
    activeCategory === "all"
      ? heroSections
      : heroSections.filter((hero) => hero.category === activeCategory);

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900
      `}
    >
      <div>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
              >
                Hero Section Gallery
              </motion.h1>
              <p className="text-lg mt-2 text-gray-600 dark:text-gray-400">
                20+ responsive hero sections with dark/light mode support
              </p>
            </div>
            <div className="flex items-center gap-4"></div>
          </header>

          {/* Category Filters */}
          <motion.div
            className="mb-12 overflow-x-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex space-x-2 pb-2">
              {heroCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Hero Sections Grid */}
          <div className="grid grid-cols-1 gap-12">
            {filteredHeroSections.map((hero, index) => (
              <motion.div
                key={hero.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{hero.name}</h3>
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                        {hero.category}
                      </span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(hero.code, hero.id)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                      aria-label="Copy code"
                    >
                      {copiedIndex === hero.id ? (
                        <FiCheck className="text-green-500" />
                      ) : (
                        <FiCopy className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
                      )}
                    </button>
                  </div>
                  <div className="p-1 bg-gray-50 dark:bg-gray-900">
                    {hero.component}
                  </div>
                </div>
                {copiedIndex === hero.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-2 right-12 bg-gray-800 dark:bg-gray-700 text-white text-sm px-3 py-1 rounded-lg shadow-lg z-50"
                  >
                    Copied!
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;
