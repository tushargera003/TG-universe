import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiMoon, FiSun } from "react-icons/fi";

const ChatBubbleShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const chatBubbleCategories = [
    {
      title: "Basic Bubbles",
      bubbles: [
        {
          name: "Simple Right Bubble",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    Hello there! How are you doing today?
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                Hello there! How are you doing today?
              </div>
            </div>
          ),
        },
        {
          name: "Simple Left Bubble",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    I'm doing great! Thanks for asking.
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                I'm doing great! Thanks for asking.
              </div>
            </div>
          ),
        },
        {
          name: "Rounded Bubble",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-purple-500 text-white rounded-full py-2 px-6 max-w-xs lg:max-w-md">
    This is a rounded chat bubble!
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-purple-500 text-white rounded-full py-2 px-6 max-w-xs lg:max-w-md">
                This is a rounded chat bubble!
              </div>
            </div>
          ),
        },
        {
          name: "Bubble with Tail",
          code: `<div className="flex justify-end mb-4">
  <div className="relative bg-green-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    Bubble with a tail!
    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-3 h-3 bg-green-500 rotate-45"></div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="relative bg-green-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                Bubble with a tail!
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-3 h-3 bg-green-500 rotate-45"></div>
              </div>
            </div>
          ),
        },
        {
          name: "Bubble with Shadow",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md shadow-md">
    Bubble with shadow effect
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md shadow-md">
                Bubble with shadow effect
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Modern Gradient Bubbles",
      bubbles: [
        {
          name: "Ocean Gradient",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
    Ocean gradient bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
                Ocean gradient bubble
              </div>
            </div>
          ),
        },
        {
          name: "Sunset Gradient",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
    Sunset gradient bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
                Sunset gradient bubble
              </div>
            </div>
          ),
        },
        {
          name: "Aurora Gradient",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
    Aurora gradient bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
                Aurora gradient bubble
              </div>
            </div>
          ),
        },
        {
          name: "Cyber Gradient",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
    Cyber gradient bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
                Cyber gradient bubble
              </div>
            </div>
          ),
        },
        {
          name: "Warm Gradient",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
    Warm gradient bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
                Warm gradient bubble
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Glassmorphism Bubbles",
      bubbles: [
        {
          name: "Glass Bubble Light",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl py-3 px-5 max-w-xs lg:max-w-md border border-white/30 dark:border-gray-700/50 shadow-xl text-gray-900 dark:text-white">
    Glass morphism bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl py-3 px-5 max-w-xs lg:max-w-md border border-white/30 dark:border-gray-700/50 shadow-xl text-gray-900 dark:text-white">
                Glass morphism bubble
              </div>
            </div>
          ),
        },
        {
          name: "Glass Bubble Frosted",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-3xl py-3 px-5 max-w-xs lg:max-w-md border border-white/20 dark:border-gray-600/30 shadow-2xl text-gray-900 dark:text-white">
    Frosted glass bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-md rounded-3xl py-3 px-5 max-w-xs lg:max-w-md border border-white/20 dark:border-gray-600/30 shadow-2xl text-gray-900 dark:text-white">
                Frosted glass bubble
              </div>
            </div>
          ),
        },
        {
          name: "Colored Glass",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-blue-500/20 dark:bg-blue-400/30 backdrop-blur-lg rounded-2xl py-3 px-5 max-w-xs lg:max-w-md border border-blue-300/30 dark:border-blue-500/50 shadow-xl text-blue-900 dark:text-blue-100">
    Colored glass bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-blue-500/20 dark:bg-blue-400/30 backdrop-blur-lg rounded-2xl py-3 px-5 max-w-xs lg:max-w-md border border-blue-300/30 dark:border-blue-500/50 shadow-xl text-blue-900 dark:text-blue-100">
                Colored glass bubble
              </div>
            </div>
          ),
        },
        {
          name: "Rainbow Glass",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 dark:from-purple-400/30 dark:via-pink-400/30 dark:to-blue-400/30 backdrop-blur-lg rounded-2xl py-3 px-5 max-w-xs lg:max-w-md border border-purple-300/30 dark:border-purple-500/50 shadow-xl text-purple-900 dark:text-purple-100">
    Rainbow glass bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 dark:from-purple-400/30 dark:via-pink-400/30 dark:to-blue-400/30 backdrop-blur-lg rounded-2xl py-3 px-5 max-w-xs lg:max-w-md border border-purple-300/30 dark:border-purple-500/50 shadow-xl text-purple-900 dark:text-purple-100">
                Rainbow glass bubble
              </div>
            </div>
          ),
        },
        {
          name: "Dark Glass",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-900/30 dark:bg-gray-100/10 backdrop-blur-xl rounded-2xl py-3 px-5 max-w-xs lg:max-w-md border border-gray-700/50 dark:border-gray-300/20 shadow-2xl text-gray-100 dark:text-gray-200">
    Dark glass bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-900/30 dark:bg-gray-100/10 backdrop-blur-xl rounded-2xl py-3 px-5 max-w-xs lg:max-w-md border border-gray-700/50 dark:border-gray-300/20 shadow-2xl text-gray-100 dark:text-gray-200">
                Dark glass bubble
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Neon & Glow Effects",
      bubbles: [
        {
          name: "Neon Blue",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gray-900 dark:bg-black text-cyan-400 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] dark:shadow-[0_0_20px_rgba(34,211,238,0.7)]">
    Neon blue glow bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gray-900 dark:bg-black text-cyan-400 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] dark:shadow-[0_0_20px_rgba(34,211,238,0.7)]">
                Neon blue glow bubble
              </div>
            </div>
          ),
        },
        {
          name: "Neon Pink",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-900 dark:bg-black text-pink-400 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.5)] dark:shadow-[0_0_20px_rgba(244,114,182,0.7)]">
    Neon pink glow bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-900 dark:bg-black text-pink-400 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.5)] dark:shadow-[0_0_20px_rgba(244,114,182,0.7)]">
                Neon pink glow bubble
              </div>
            </div>
          ),
        },
        {
          name: "Neon Green",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gray-900 dark:bg-black text-green-400 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.5)] dark:shadow-[0_0_20px_rgba(34,197,94,0.7)]">
    Neon green glow bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gray-900 dark:bg-black text-green-400 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.5)] dark:shadow-[0_0_20px_rgba(34,197,94,0.7)]">
                Neon green glow bubble
              </div>
            </div>
          ),
        },
        {
          name: "Soft Glow",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
    Soft glow bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                Soft glow bubble
              </div>
            </div>
          ),
        },
        {
          name: "Pulsing Glow",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-purple-600 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_20px_rgba(147,51,234,0.6)] dark:shadow-[0_0_30px_rgba(147,51,234,0.8)] animate-pulse">
    Pulsing glow bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-purple-600 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_20px_rgba(147,51,234,0.6)] dark:shadow-[0_0_30px_rgba(147,51,234,0.8)] animate-pulse">
                Pulsing glow bubble
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "3D & Depth Effects",
      bubbles: [
        {
          name: "3D Raised",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_8px_16px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.2)] border-t border-blue-300">
    3D raised bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_8px_16px_rgba(0,0,0,0.3),0_4px_8px_rgba(0,0,0,0.2)] border-t border-blue-300">
                3D raised bubble
              </div>
            </div>
          ),
        },
        {
          name: "3D Pressed",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gradient-to-t from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-inner border border-gray-400 dark:border-gray-500">
    3D pressed bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gradient-to-t from-gray-300 to-gray-100 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-inner border border-gray-400 dark:border-gray-500">
                3D pressed bubble
              </div>
            </div>
          ),
        },
        {
          name: "Floating Bubble",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform hover:translate-y-[-2px] transition-transform duration-300">
    Floating bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform hover:translate-y-[-2px] transition-transform duration-300">
                Floating bubble
              </div>
            </div>
          ),
        },
        {
          name: "Layered Depth",
          code: `<div className="flex justify-end mb-4">
  <div className="relative">
    <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-1 translate-y-1 opacity-30"></div>
    <div className="relative bg-blue-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
      Layered depth bubble
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-1 translate-y-1 opacity-30"></div>
                <div className="relative bg-blue-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg">
                  Layered depth bubble
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Neumorphism",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)]">
    Neumorphism bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)]">
                Neumorphism bubble
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Animated Bubbles",
      bubbles: [
        {
          name: "Slide In",
          code: `<div className="flex justify-end mb-4">
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-blue-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md"
  >
    Slide in animation
  </motion.div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md"
              >
                Slide in animation
              </motion.div>
            </div>
          ),
        },
        {
          name: "Bounce In",
          code: `<div className="flex justify-start mb-4">
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-green-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md"
  >
    Bounce in animation
  </motion.div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-green-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md"
              >
                Bounce in animation
              </motion.div>
            </div>
          ),
        },
        {
          name: "Fade & Scale",
          code: `<div className="flex justify-end mb-4">
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="bg-purple-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md"
  >
    Fade & scale animation
  </motion.div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-purple-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md"
              >
                Fade & scale animation
              </motion.div>
            </div>
          ),
        },
        {
          name: "Rotate In",
          code: `<div className="flex justify-start mb-4">
  <motion.div
    initial={{ opacity: 0, rotate: -180 }}
    animate={{ opacity: 1, rotate: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-pink-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md"
  >
    Rotate in animation
  </motion.div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <motion.div
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-pink-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md"
              >
                Rotate in animation
              </motion.div>
            </div>
          ),
        },
        {
          name: "Wiggle Effect",
          code: `<div className="flex justify-end mb-4">
  <motion.div
    animate={{ rotate: [0, 1, -1, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="bg-yellow-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md"
  >
    Wiggle effect bubble
  </motion.div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <motion.div
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-yellow-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md"
              >
                Wiggle effect bubble
              </motion.div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Bubbles with Metadata",
      bubbles: [
        {
          name: "With Time",
          code: `<div className="flex justify-end mb-4">
  <div className="flex flex-col items-end">
    <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with timestamp
    </div>
    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:30 AM</span>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="flex flex-col items-end">
                <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with timestamp
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  10:30 AM
                </span>
              </div>
            </div>
          ),
        },
        {
          name: "With Author",
          code: `<div className="flex justify-start mb-4">
  <div className="flex flex-col">
    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">John Doe</span>
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with author name
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  John Doe
                </span>
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with author name
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "With Avatar",
          code: `<div className="flex justify-start mb-4">
  <div className="flex items-start space-x-2">
    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-gray-300">JD</div>
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with avatar
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                  JD
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with avatar
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "With Avatar & Time",
          code: `<div className="flex justify-start mb-4">
  <div className="flex items-start space-x-2">
    <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-gray-300">JD</div>
    <div className="flex flex-col">
      <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
        Message with avatar and time
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:30 AM</span>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                  JD
                </div>
                <div className="flex flex-col">
                  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                    Message with avatar and time
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    10:30 AM
                  </span>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "With Status",
          code: `<div className="flex justify-end mb-4">
  <div className="flex flex-col items-end">
    <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with read status
    </div>
    <div className="flex items-center mt-1 space-x-1">
      <span className="text-xs text-gray-500 dark:text-gray-400">10:30 AM</span>
      <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="flex flex-col items-end">
                <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with read status
                </div>
                <div className="flex items-center mt-1 space-x-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    10:30 AM
                  </span>
                  <svg
                    className="w-3 h-3 text-blue-400"
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
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Modern Geometric Bubbles",
      bubbles: [
        {
          name: "Hexagon Bubble",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-blue-500 text-white py-3 px-5 max-w-xs lg:max-w-md" style={{clipPath: "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)"}}>
    Hexagon shaped bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div
                className="bg-blue-500 text-white py-3 px-5 max-w-xs lg:max-w-md"
                style={{
                  clipPath:
                    "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
                }}
              >
                Hexagon shaped bubble
              </div>
            </div>
          ),
        },
        {
          name: "Diamond Bubble",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-purple-500 text-white py-3 px-5 max-w-xs lg:max-w-md" style={{clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"}}>
    Diamond shaped bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div
                className="bg-purple-500 text-white py-3 px-5 max-w-xs lg:max-w-md"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              >
                Diamond shaped bubble
              </div>
            </div>
          ),
        },
        {
          name: "Arrow Bubble",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-green-500 text-white py-3 px-5 max-w-xs lg:max-w-md" style={{clipPath: "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)"}}>
    Arrow shaped bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div
                className="bg-green-500 text-white py-3 px-5 max-w-xs lg:max-w-md"
                style={{
                  clipPath:
                    "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
                }}
              >
                Arrow shaped bubble
              </div>
            </div>
          ),
        },
        {
          name: "Pentagon Bubble",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-red-500 text-white py-3 px-5 max-w-xs lg:max-w-md" style={{clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"}}>
    Pentagon shaped bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div
                className="bg-red-500 text-white py-3 px-5 max-w-xs lg:max-w-md"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                }}
              >
                Pentagon shaped bubble
              </div>
            </div>
          ),
        },
        {
          name: "Octagon Bubble",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-indigo-500 text-white py-3 px-5 max-w-xs lg:max-w-md" style={{clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"}}>
    Octagon shaped bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div
                className="bg-indigo-500 text-white py-3 px-5 max-w-xs lg:max-w-md"
                style={{
                  clipPath:
                    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              >
                Octagon shaped bubble
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Retro & Vintage Bubbles",
      bubbles: [
        {
          name: "Retro 80s",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-lg py-3 px-5 max-w-xs lg:max-w-md border-2 border-white shadow-[0_0_20px_rgba(255,0,255,0.5)]">
    Retro 80s vibe bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-lg py-3 px-5 max-w-xs lg:max-w-md border-2 border-white shadow-[0_0_20px_rgba(255,0,255,0.5)]">
                Retro 80s vibe bubble
              </div>
            </div>
          ),
        },
        {
          name: "Vintage Paper",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-yellow-300 dark:border-yellow-700 shadow-inner">
    Vintage paper bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-yellow-300 dark:border-yellow-700 shadow-inner">
                Vintage paper bubble
              </div>
            </div>
          ),
        },
        {
          name: "Typewriter Style",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-none py-3 px-5 max-w-xs lg:max-w-md border-2 border-gray-400 dark:border-gray-600 font-mono text-sm">
    Typewriter style bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-none py-3 px-5 max-w-xs lg:max-w-md border-2 border-gray-400 dark:border-gray-600 font-mono text-sm">
                Typewriter style bubble
              </div>
            </div>
          ),
        },
        {
          name: "Sepia Tone",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-amber-300 dark:border-amber-700 sepia">
    Sepia tone bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-amber-300 dark:border-amber-700 sepia">
                Sepia tone bubble
              </div>
            </div>
          ),
        },
        {
          name: "Grunge Style",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-800 text-gray-100 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border-2 border-gray-600 transform rotate-[-0.5deg] shadow-lg">
    Grunge style bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-800 text-gray-100 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border-2 border-gray-600 transform rotate-[-0.5deg] shadow-lg">
                Grunge style bubble
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Content Bubbles",
      bubbles: [
        {
          name: "Long Message",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    This is a longer message that will wrap to multiple lines if needed. Chat bubbles should handle text overflow gracefully and maintain proper spacing between messages.
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                This is a longer message that will wrap to multiple lines if
                needed. Chat bubbles should handle text overflow gracefully and
                maintain proper spacing between messages.
              </div>
            </div>
          ),
        },
        {
          name: "Multiline Message",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <p>First line of message</p>
    <p className="mt-1">Second line of message</p>
    <p className="mt-1">Third line of message</p>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <p>First line of message</p>
                <p className="mt-1">Second line of message</p>
                <p className="mt-1">Third line of message</p>
              </div>
            </div>
          ),
        },
        {
          name: "Message with Link",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    Check out this <a href="#" className="text-blue-600 dark:text-blue-400 underline">link</a> in a chat bubble!
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                Check out this{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  link
                </a>{" "}
                in a chat bubble!
              </div>
            </div>
          ),
        },
        {
          name: "Message with Code",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gray-800 text-green-400 rounded-lg py-2 px-4 max-w-xs lg:max-w-md font-mono text-sm">
    <span className="block">const message = "Hello World";</span>
    <span className="block">console.log(message);</span>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gray-800 text-green-400 rounded-lg py-2 px-4 max-w-xs lg:max-w-md font-mono text-sm">
                <span className="block">const message = "Hello World";</span>
                <span className="block">console.log(message);</span>
              </div>
            </div>
          ),
        },
        {
          name: "Message with List",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <ul className="list-disc pl-5">
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <ul className="list-disc pl-5">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ul>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Special Bubbles",
      bubbles: [
        {
          name: "System Message",
          code: `<div className="flex justify-center mb-4">
  <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg py-1 px-3 text-sm">
    User joined the chat
  </div>
</div>`,
          component: (
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg py-1 px-3 text-sm">
                User joined the chat
              </div>
            </div>
          ),
        },
        {
          name: "Error Message",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-red-200 dark:border-red-700">
    Error: Message could not be sent
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-red-200 dark:border-red-700">
                Error: Message could not be sent
              </div>
            </div>
          ),
        },
        {
          name: "Success Message",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-green-200 dark:border-green-700">
    Success: Message sent!
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-green-200 dark:border-green-700">
                Success: Message sent!
              </div>
            </div>
          ),
        },
        {
          name: "Warning Message",
          code: `<div className="flex justify-center mb-4">
  <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-yellow-200 dark:border-yellow-700">
    Warning: Connection unstable
  </div>
</div>`,
          component: (
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-yellow-200 dark:border-yellow-700">
                Warning: Connection unstable
              </div>
            </div>
          ),
        },
        {
          name: "Typing Indicator",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <div className="flex space-x-1">
      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Media Bubbles",
      bubbles: [
        {
          name: "Image Message",
          code: `<div className="flex justify-end mb-4">
  <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
    <img src="https://via.placeholder.com/300x200" alt="Chat image" className="w-full" />
    <div className="bg-blue-500 text-white py-2 px-4">
      Check out this image!
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Chat image"
                  className="w-full"
                />
                <div className="bg-blue-500 text-white py-2 px-4">
                  Check out this image!
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Video Message",
          code: `<div className="flex justify-start mb-4">
  <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
    <div className="bg-gray-800 aspect-video flex items-center justify-center">
      <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6z" />
      </svg>
    </div>
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4">
      Video attachment
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
                <div className="bg-gray-800 aspect-video flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6z" />
                  </svg>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-4">
                  Video attachment
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "File Attachment",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <div className="flex items-center">
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
      <span>document.pdf</span>
      <span className="ml-auto text-xs">2.4 MB</span>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>document.pdf</span>
                  <span className="ml-auto text-xs">2.4 MB</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Audio Message",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <div className="flex items-center">
      <button className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center mr-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="flex-1 bg-gray-300 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-full w-1/3"></div>
      </div>
      <span className="ml-2 text-xs">1:24 / 3:45</span>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <div className="flex items-center">
                  <button className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center mr-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="flex-1 bg-gray-300 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-1/3"></div>
                  </div>
                  <span className="ml-2 text-xs">1:24 / 3:45</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Location Message",
          code: `<div className="flex justify-end mb-4">
  <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
    <div className="bg-gray-800 aspect-video flex items-center justify-center relative">
      <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs py-1 px-2 rounded">
        Our meeting point
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
                <div className="bg-gray-800 aspect-video flex items-center justify-center relative">
                  <svg
                    className="w-12 h-12 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs py-1 px-2 rounded">
                    Our meeting point
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Interactive Bubbles",
      bubbles: [
        {
          name: "Message with Reactions",
          code: `<div className="flex justify-start mb-4">
  <div className="relative">
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with reactions
    </div>
    <div className="absolute -bottom-3 left-2 flex space-x-1 bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-sm">
      <span className="text-xs">👍</span>
      <span className="text-xs">😍</span>
      <span className="text-xs">😂</span>
      <span className="text-xs text-gray-500 dark:text-gray-400">+3</span>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="relative">
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with reactions
                </div>
                <div className="absolute -bottom-3 left-2 flex space-x-1 bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-sm">
                  <span className="text-xs">👍</span>
                  <span className="text-xs">😍</span>
                  <span className="text-xs">😂</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    +3
                  </span>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Message with Reply",
          code: `<div className="flex justify-end mb-4">
  <div className="flex flex-col items-end">
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-t-lg border-l-4 border-blue-500 py-1 px-3 text-sm max-w-xs lg:max-w-md">
      Replying to: "How are you?"
    </div>
    <div className="bg-blue-500 text-white rounded-b-lg py-2 px-4 max-w-xs lg:max-w-md">
      I'm doing great, thanks!
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="flex flex-col items-end">
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-t-lg border-l-4 border-blue-500 py-1 px-3 text-sm max-w-xs lg:max-w-md">
                  Replying to: "How are you?"
                </div>
                <div className="bg-blue-500 text-white rounded-b-lg py-2 px-4 max-w-xs lg:max-w-md">
                  I'm doing great, thanks!
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Message with Menu",
          code: `<div className="flex justify-start mb-4">
  <div className="relative group">
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with options
    </div>
    <button className="absolute -top-2 -right-2 p-1 bg-gray-100 dark:bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg className="w-3 h-3 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    </button>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="relative group">
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with options
                </div>
                <button className="absolute -top-2 -right-2 p-1 bg-gray-100 dark:bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-3 h-3 text-gray-600 dark:text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          ),
        },
        {
          name: "Selectable Message",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md relative">
    <input type="checkbox" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
    <div className="ml-4">
      Selectable message
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md relative">
                <input
                  type="checkbox"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2"
                />
                <div className="ml-4">Selectable message</div>
              </div>
            </div>
          ),
        },
        {
          name: "Editable Message",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-blue-500">
    <div contentEditable className="outline-none">
      Click to edit this message
    </div>
    <div className="flex justify-end mt-1 space-x-2">
      <button className="text-xs text-blue-500">Save</button>
      <button className="text-xs text-gray-500 dark:text-gray-400">Cancel</button>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-blue-500">
                <div contentEditable className="outline-none">
                  Click to edit this message
                </div>
                <div className="flex justify-end mt-1 space-x-2">
                  <button className="text-xs text-blue-500">Save</button>
                  <button className="text-xs text-gray-500 dark:text-gray-400">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Group Chat Bubbles",
      bubbles: [
        {
          name: "Consecutive Messages",
          code: `<div className="space-y-1 mb-4">
  <div className="flex justify-start">
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      First message
    </div>
  </div>
  <div className="flex justify-start">
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Second message
    </div>
  </div>
  <div className="flex justify-start">
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Third message
    </div>
  </div>
</div>`,
          component: (
            <div className="space-y-1 mb-4">
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  First message
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Second message
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Third message
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Grouped with Avatar",
          code: `<div className="space-y-1 mb-4">
  <div className="flex justify-start">
    <div className="flex items-end space-x-2">
      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-gray-300">JD</div>
      <div className="flex flex-col space-y-1">
        <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
          First message
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
          Second message
        </div>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="space-y-1 mb-4">
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-gray-300">
                    JD
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                      First message
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                      Second message
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Different Authors",
          code: `<div className="space-y-3 mb-4">
  <div className="flex justify-start">
    <div className="flex items-start space-x-2">
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-semibold text-white">JD</div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">John Doe</span>
        <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
          Hey team, how's the project going?
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-start">
    <div className="flex items-start space-x-2">
      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-semibold text-white">AS</div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Alice Smith</span>
        <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
          Going well! Just finishing up the designs.
        </div>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="space-y-3 mb-4">
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-semibold text-white">
                    JD
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      John Doe
                    </span>
                    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                      Hey team, how's the project going?
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-semibold text-white">
                    AS
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Alice Smith
                    </span>
                    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                      Going well! Just finishing up the designs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Date Separator",
          code: `<div className="space-y-4 mb-4">
  <div className="relative flex justify-center mb-2">
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full py-1 px-3 text-xs z-10">
      Today
    </div>
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700 z-0"></div>
  </div>
  <div className="flex justify-end mb-4">
    <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      New message
    </div>
  </div>
</div>`,
          component: (
            <div className="space-y-4 mb-4">
              <div className="relative flex justify-center mb-2">
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full py-1 px-3 text-xs z-10">
                  Today
                </div>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700 z-0"></div>
              </div>
              <div className="flex justify-end mb-4">
                <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  New message
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "New Messages Indicator",
          code: `<div className="space-y-4 mb-4">
  <div className="relative flex justify-center mb-2">
    <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full py-1 px-3 text-xs z-10">
      New messages
    </div>
    <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-200 dark:bg-blue-700 z-0"></div>
  </div>
  <div className="flex justify-start mb-4">
    <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Just joined the chat!
    </div>
  </div>
</div>`,
          component: (
            <div className="space-y-4 mb-4">
              <div className="relative flex justify-center mb-2">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full py-1 px-3 text-xs z-10">
                  New messages
                </div>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-200 dark:bg-blue-700 z-0"></div>
              </div>
              <div className="flex justify-start mb-4">
                <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Just joined the chat!
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Specialty Bubbles",
      bubbles: [
        {
          name: "Quote Bubble",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md border-l-4 border-blue-500">
    <blockquote className="text-sm italic">
      "This is a quoted message within a chat bubble."
    </blockquote>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md border-l-4 border-blue-500">
                <blockquote className="text-sm italic">
                  "This is a quoted message within a chat bubble."
                </blockquote>
              </div>
            </div>
          ),
        },
        {
          name: "Code Block Bubble",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gray-800 rounded-lg py-2 px-4 max-w-xs lg:max-w-md overflow-x-auto">
    <pre className="text-green-400 text-sm font-mono">
      <code>
        function greet() {
          console.log("Hello World!");
        }
      </code>
    </pre>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gray-800 rounded-lg py-2 px-4 max-w-xs lg:max-w-md overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
                  <code>
                    {`function greet() {
          console.log("Hello World!");
        }`}
                  </code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          name: "Poll Bubble",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <div className="font-semibold mb-2">Poll: Favorite Color?</div>
    <div className="space-y-2">
      <div className="flex items-center">
        <input type="radio" id="blue" name="color" className="mr-2" />
        <label htmlFor="blue" className="flex-1">Blue</label>
        <span className="text-xs text-gray-500 dark:text-gray-400">42%</span>
      </div>
      <div className="flex items-center">
        <input type="radio" id="red" name="color" className="mr-2" />
        <label htmlFor="red" className="flex-1">Red</label>
        <span className="text-xs text-gray-500 dark:text-gray-400">33%</span>
      </div>
      <div className="flex items-center">
        <input type="radio" id="green" name="color" className="mr-2" />
        <label htmlFor="green" className="flex-1">Green</label>
        <span className="text-xs text-gray-500 dark:text-gray-400">25%</span>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <div className="font-semibold mb-2">Poll: Favorite Color?</div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="blue"
                      name="color"
                      className="mr-2"
                    />
                    <label htmlFor="blue" className="flex-1">
                      Blue
                    </label>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      42%
                    </span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="red"
                      name="color"
                      className="mr-2"
                    />
                    <label htmlFor="red" className="flex-1">
                      Red
                    </label>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      33%
                    </span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="green"
                      name="color"
                      className="mr-2"
                    />
                    <label htmlFor="green" className="flex-1">
                      Green
                    </label>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      25%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Event Bubble",
          code: `<div className="flex justify-center mb-4">
  <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-purple-200 dark:border-purple-700">
    <div className="font-semibold">Team Meeting</div>
    <div className="text-sm">Tomorrow at 2:00 PM</div>
    <div className="flex justify-between mt-2 text-xs">
      <button className="text-purple-600 dark:text-purple-300">Accept</button>
      <button className="text-gray-500 dark:text-gray-400">Decline</button>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-purple-200 dark:border-purple-700">
                <div className="font-semibold">Team Meeting</div>
                <div className="text-sm">Tomorrow at 2:00 PM</div>
                <div className="flex justify-between mt-2 text-xs">
                  <button className="text-purple-600 dark:text-purple-300">
                    Accept
                  </button>
                  <button className="text-gray-500 dark:text-gray-400">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Payment Request",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-green-200 dark:border-green-700">
    <div className="font-semibold">Payment Request</div>
    <div className="text-2xl my-2">$25.00</div>
    <div className="text-sm mb-2">For project materials</div>
    <div className="flex justify-between">
      <button className="text-xs bg-green-500 text-white py-1 px-3 rounded">Pay Now</button>
      <button className="text-xs text-gray-500 dark:text-gray-400">Decline</button>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-green-200 dark:border-green-700">
                <div className="font-semibold">Payment Request</div>
                <div className="text-2xl my-2">$25.00</div>
                <div className="text-sm mb-2">For project materials</div>
                <div className="flex justify-between">
                  <button className="text-xs bg-green-500 text-white py-1 px-3 rounded">
                    Pay Now
                  </button>
                  <button className="text-xs text-gray-500 dark:text-gray-400">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Futuristic Bubbles",
      bubbles: [
        {
          name: "Holographic",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_30px_rgba(0,255,255,0.5)] border border-cyan-300 animate-pulse">
    Holographic bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_30px_rgba(0,255,255,0.5)] border border-cyan-300 animate-pulse">
                Holographic bubble
              </div>
            </div>
          ),
        },
        {
          name: "Matrix Style",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-black text-green-400 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-green-400 font-mono text-sm shadow-[0_0_20px_rgba(0,255,0,0.3)]">
    Matrix style bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-black text-green-400 rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-green-400 font-mono text-sm shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                Matrix style bubble
              </div>
            </div>
          ),
        },
        {
          name: "Quantum Bubble",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-3xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_25px_rgba(147,51,234,0.6)] border-2 border-purple-400 transform hover:scale-105 transition-transform duration-300">
    Quantum bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-3xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_25px_rgba(147,51,234,0.6)] border-2 border-purple-400 transform hover:scale-105 transition-transform duration-300">
                Quantum bubble
              </div>
            </div>
          ),
        },
        {
          name: "Cyberpunk",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black rounded-lg py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_20px_rgba(255,215,0,0.5)] border-2 border-yellow-300 font-bold">
    Cyberpunk bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black rounded-lg py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_20px_rgba(255,215,0,0.5)] border-2 border-yellow-300 font-bold">
                Cyberpunk bubble
              </div>
            </div>
          ),
        },
        {
          name: "Sci-Fi Terminal",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gray-900 text-green-300 rounded-none py-3 px-5 max-w-xs lg:max-w-md border-2 border-green-500 font-mono text-sm shadow-[inset_0_0_20px_rgba(0,255,0,0.2)]">
    > Sci-Fi terminal bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gray-900 text-green-300 rounded-none py-3 px-5 max-w-xs lg:max-w-md border-2 border-green-500 font-mono text-sm shadow-[inset_0_0_20px_rgba(0,255,0,0.2)]">
                Sci-Fi terminal bubble
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Artistic Bubbles",
      bubbles: [
        {
          name: "Watercolor",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg border border-purple-300 dark:border-purple-600">
    Watercolor style bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-lg border border-purple-300 dark:border-purple-600">
                Watercolor style bubble
              </div>
            </div>
          ),
        },
        {
          name: "Sketch Style",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-3 px-5 max-w-xs lg:max-w-md border-2 border-gray-400 dark:border-gray-600 transform rotate-1 shadow-lg">
    Sketch style bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-3 px-5 max-w-xs lg:max-w-md border-2 border-gray-400 dark:border-gray-600 transform rotate-1 shadow-lg">
                Sketch style bubble
              </div>
            </div>
          ),
        },
        {
          name: "Marble Effect",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-xl border border-gray-300 dark:border-gray-600">
    Marble effect bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-xl border border-gray-300 dark:border-gray-600">
                Marble effect bubble
              </div>
            </div>
          ),
        },
        {
          name: "Origami Style",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gradient-to-br from-blue-300 to-blue-500 text-white py-3 px-5 max-w-xs lg:max-w-md shadow-lg" style={{clipPath: "polygon(0% 0%, 90% 0%, 100% 20%, 100% 100%, 0% 100%)"}}>
    Origami style bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div
                className="bg-gradient-to-br from-blue-300 to-blue-500 text-white py-3 px-5 max-w-xs lg:max-w-md shadow-lg"
                style={{
                  clipPath:
                    "polygon(0% 0%, 90% 0%, 100% 20%, 100% 100%, 0% 100%)",
                }}
              >
                Origami style bubble
              </div>
            </div>
          ),
        },
        {
          name: "Stained Glass",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-400 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_20px_rgba(255,0,0,0.3)] border-2 border-yellow-300">
    Stained glass bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gradient-to-br from-red-400 via-yellow-400 to-blue-400 text-white rounded-2xl py-3 px-5 max-w-xs lg:max-w-md shadow-[0_0_20px_rgba(255,0,0,0.3)] border-2 border-yellow-300">
                Stained glass bubble
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Minimal & Clean",
      bubbles: [
        {
          name: "Ultra Minimal",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    Ultra minimal bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                Ultra minimal bubble
              </div>
            </div>
          ),
        },
        {
          name: "Clean Lines",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-none py-3 px-5 max-w-xs lg:max-w-md border-l-4 border-blue-500 shadow-sm">
    Clean lines bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-none py-3 px-5 max-w-xs lg:max-w-md border-l-4 border-blue-500 shadow-sm">
                Clean lines bubble
              </div>
            </div>
          ),
        },
        {
          name: "Monochrome",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-black dark:bg-white text-white dark:text-black rounded-lg py-3 px-5 max-w-xs lg:max-w-md">
    Monochrome bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-black dark:bg-white text-white dark:text-black rounded-lg py-3 px-5 max-w-xs lg:max-w-md">
                Monochrome bubble
              </div>
            </div>
          ),
        },
        {
          name: "Subtle Border",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-gray-200 dark:border-gray-700">
    Subtle border bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg py-3 px-5 max-w-xs lg:max-w-md border border-gray-200 dark:border-gray-700">
                Subtle border bubble
              </div>
            </div>
          ),
        },
        {
          name: "Text Only",
          code: `<div className="flex justify-end mb-4">
  <div className="text-gray-900 dark:text-white py-3 px-5 max-w-xs lg:max-w-md">
    Text only bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="text-gray-900 dark:text-white py-3 px-5 max-w-xs lg:max-w-md">
                Text only bubble
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Chat Bubble Universe
            </motion.h1>
          </header>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-xl mb-6 max-w-3xl text-gray-700 dark:text-gray-300">
              Explore our collection of 80+ meticulously crafted chat bubbles
              with various styles, metadata options, and interactive elements.
              All bubbles are fully dark/light mode compatible. Click the{" "}
              <FiCopy className="inline" /> icon to copy the Tailwind CSS code
              for any bubble!
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
          </motion.section>

          {/* Chat Bubble Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chatBubbleCategories.map((category, catIndex) => (
              <motion.section
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.bubbles.map((bubble, bubbleIndex) => {
                    const globalIndex = catIndex * 100 + bubbleIndex;
                    return (
                      <div key={bubbleIndex} className="group relative">
                        <div className="min-h-[60px] flex items-center">
                          {bubble.component}
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(bubble.code, globalIndex)
                          }
                          className="absolute -top-2 -right-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-gray-200 dark:hover:bg-gray-600"
                          aria-label={`Copy ${bubble.name} code`}
                        >
                          {copiedIndex === globalIndex ? (
                            <FiCheck className="text-green-500 w-4 h-4" />
                          ) : (
                            <FiCopy className="text-gray-600 dark:text-gray-300 w-4 h-4" />
                          )}
                        </button>
                        {copiedIndex === globalIndex && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute -top-8 right-0 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs px-2 py-1 rounded z-10"
                          >
                            Copied!
                          </motion.div>
                        )}
                        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {bubble.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBubbleShowcase;
