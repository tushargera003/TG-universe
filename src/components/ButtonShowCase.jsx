import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const ButtonShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Button variants for Framer Motion
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    hover: { rotate: 360 },
    tap: { scale: 0.8 },
  };

  // Button data
  const buttonCategories = [
    {
      title: "Solid Buttons",
      buttons: [
        {
          name: "Primary Action",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Primary Action
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Primary Action
            </motion.button>
          ),
        },
        {
          name: "Gradient Magic",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 shadow-lg"
            >
              Gradient Magic
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 shadow-lg"
            >
              Gradient Magic
            </motion.button>
          ),
        },
        {
          name: "Rounded Success",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-emerald-500 text-white rounded-full transition-all duration-300 hover:bg-emerald-600 shadow-md hover:shadow-emerald-200/50"
            >
              Rounded Success
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-emerald-500 text-white rounded-full transition-all duration-300 hover:bg-emerald-600 shadow-md hover:shadow-emerald-200/50"
            >
              Rounded Success
            </motion.button>
          ),
        },
        {
          name: "Danger Zone",
          code: `<motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#EF4444" }}
              whileTap="tap"
              className="px-6 py-3 bg-red-500 text-white rounded-lg transition-all duration-300 shadow hover:shadow-red-200/50"
            >
              Danger Zone
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#EF4444" }}
              whileTap="tap"
              className="px-6 py-3 bg-red-500 text-white rounded-lg transition-all duration-300 shadow hover:shadow-red-200/50"
            >
              Danger Zone
            </motion.button>
          ),
        },
        {
          name: "Dark/Light Mode",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-200 dark:text-gray-900 text-white rounded-lg transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-300 shadow"
            >
              Dark/Light Mode
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-200 dark:text-gray-900 text-white rounded-lg transition-all duration-300 hover:bg-gray-900 dark:hover:bg-gray-300 shadow"
            >
              Dark/Light Mode
            </motion.button>
          ),
        },
      ],
    },
    {
      title: "Outline Buttons",
      buttons: [
        {
          name: "Clean Outline",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
            >
              Clean Outline
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 border-2 border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
            >
              Clean Outline
            </motion.button>
          ),
        },
        {
          name: "Rounded Pink",
          code: `<motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                borderColor: "#EC4899",
                color: "#EC4899",
              }}
              whileTap="tap"
              className="px-6 py-3 border-2 border-pink-500 text-pink-500 dark:text-pink-400 rounded-full transition-all duration-300 hover:bg-pink-500/10"
            >
              Rounded Pink
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                borderColor: "#EC4899",
                color: "#EC4899",
              }}
              whileTap="tap"
              className="px-6 py-3 border-2 border-pink-500 text-pink-500 dark:text-pink-400 rounded-full transition-all duration-300 hover:bg-pink-500/10"
            >
              Rounded Pink
            </motion.button>
          ),
        },
        {
          name: "With Shadow",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 border-2 border-emerald-500 text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-300 shadow-sm hover:shadow-emerald-200/30"
            >
              With Shadow
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 border-2 border-emerald-500 text-emerald-500 dark:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all duration-300 shadow-sm hover:shadow-emerald-200/30"
            >
              With Shadow
            </motion.button>
          ),
        },
        {
          name: "Indigo Hover",
          code: `<motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(99, 102, 241, 0.1)",
                borderColor: "#6366F1",
                color: "#6366F1",
              }}
              whileTap="tap"
              className="px-6 py-3 border-2 border-indigo-300 text-indigo-500 dark:text-indigo-400 rounded-lg transition-all duration-300 hover:bg-indigo-500/10"
            >
              Indigo Hover
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(99, 102, 241, 0.1)",
                borderColor: "#6366F1",
                color: "#6366F1",
              }}
              whileTap="tap"
              className="px-6 py-3 border-2 border-indigo-300 text-indigo-500 dark:text-indigo-400 rounded-lg transition-all duration-300 hover:bg-indigo-500/10"
            >
              Indigo Hover
            </motion.button>
          ),
        },
        {
          name: "Warning Style",
          code: ` <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 border-2 border-yellow-400 text-yellow-500 dark:text-yellow-400 hover:bg-yellow-500/10 rounded-lg transition-all duration-300"
            >
              Warning Style
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 border-2 border-yellow-400 text-yellow-500 dark:text-yellow-400 hover:bg-yellow-500/10 rounded-lg transition-all duration-300"
            >
              Warning Style
            </motion.button>
          ),
        },
      ],
    },
    {
      title: "Animated Buttons",
      buttons: [
        {
          name: "Hover Gradient",
          code: `<motion.button
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(45deg, #3B82F6, #EC4899)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-300"
            >
              Hover Gradient
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(45deg, #3B82F6, #EC4899)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md transition-all duration-300"
            >
              Hover Gradient
            </motion.button>
          ),
        },
        {
          name: "Wiggle Effect",
          code: `<motion.button
              whileHover={{
                rotate: [0, 5, -5, 5, -5, 0],
                transition: { duration: 0.6 },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md"
            >
              Wiggle Effect
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                rotate: [0, 5, -5, 5, -5, 0],
                transition: { duration: 0.6 },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md"
            >
              Wiggle Effect
            </motion.button>
          ),
        },
        {
          name: "Glow On Hover",
          code: `<motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg transition-all duration-300"
            >
              Glow On Hover
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full shadow-lg transition-all duration-300"
            >
              Glow On Hover
            </motion.button>
          ),
        },
        {
          name: "Text Glow",
          code: `<motion.button
              initial={{ opacity: 0.8 }}
              whileHover={{
                opacity: 1,
                scale: 1.05,
                textShadow: "0 0 8px rgba(255,255,255,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg shadow transition-all duration-300"
            >
              Text Glow
            </motion.button>`,
          component: (
            <motion.button
              initial={{ opacity: 0.8 }}
              whileHover={{
                opacity: 1,
                scale: 1.05,
                textShadow: "0 0 8px rgba(255,255,255,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg shadow transition-all duration-300"
            >
              Text Glow
            </motion.button>
          ),
        },
        {
          name: "Pulse Effect",
          code: `<motion.button
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-lg shadow-md"
            >
              Pulse Effect
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-lg shadow-md"
            >
              Pulse Effect
            </motion.button>
          ),
        },
      ],
    },
    {
      title: "Icon Buttons",
      buttons: [
        {
          name: "Thumbs Up",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300"
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="text-xl"
              >
                👍
              </motion.span>
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300"
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="text-xl"
              >
                👍
              </motion.span>
            </motion.button>
          ),
        },
        {
          name: "Heart",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 rounded-full hover:bg-red-200 dark:hover:bg-red-800 transition-all duration-300"
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="text-xl"
              >
                ❤️
              </motion.span>
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 rounded-full hover:bg-red-200 dark:hover:bg-red-800 transition-all duration-300"
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="text-xl"
              >
                ❤️
              </motion.span>
            </motion.button>
          ),
        },
        {
          name: "Sparkles",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-300"
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="text-xl"
              >
                ✨
              </motion.span>
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-300"
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="text-xl"
              >
                ✨
              </motion.span>
            </motion.button>
          ),
        },
        {
          name: "Star",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 rounded-full hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-all duration-300"
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="text-xl"
              >
                ⭐
              </motion.span>
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300 rounded-full hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-all duration-300"
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="text-xl"
              >
                ⭐
              </motion.span>
            </motion.button>
          ),
        },
        {
          name: "Target",
          code: ` <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-300"
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="text-xl"
              >
                🎯
              </motion.span>
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-300"
            >
              <motion.span
                variants={iconVariants}
                whileHover="hover"
                className="text-xl"
              >
                🎯
              </motion.span>
            </motion.button>
          ),
        },
      ],
    },
    {
      title: "Glass Buttons",
      buttons: [
        {
          name: "Glass Effect",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700 rounded-lg shadow-lg hover:bg-white/40 dark:hover:bg-gray-700/60 transition-all duration-300"
            >
              Glass Effect
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700 rounded-lg shadow-lg hover:bg-white/40 dark:hover:bg-gray-700/60 transition-all duration-300"
            >
              Glass Effect
            </motion.button>
          ),
        },
        {
          name: "Blurred Glass",
          code: `<motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                backdropFilter: "blur(16px)",
                backgroundColor: "rgba(255,255,255,0.4)",
              }}
              whileTap="tap"
              className="px-6 py-3 backdrop-blur-md bg-white/20 dark:bg-gray-800/40 border border-white/30 dark:border-gray-600 rounded-full shadow-lg transition-all duration-300"
            >
              Blurred Glass
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                backdropFilter: "blur(16px)",
                backgroundColor: "rgba(255,255,255,0.4)",
              }}
              whileTap="tap"
              className="px-6 py-3 backdrop-blur-md bg-white/20 dark:bg-gray-800/40 border border-white/30 dark:border-gray-600 rounded-full shadow-lg transition-all duration-300"
            >
              Blurred Glass
            </motion.button>
          ),
        },
        {
          name: "Gradient Glass",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 dark:border-gray-600 rounded-lg shadow-lg hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
            >
              Gradient Glass
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 dark:border-gray-600 rounded-lg shadow-lg hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
            >
              Gradient Glass
            </motion.button>
          ),
        },
        {
          name: "Colored Glass",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 backdrop-blur-sm bg-pink-500/10 border border-pink-400/30 rounded-lg shadow-lg hover:bg-pink-500/20 transition-all duration-300"
            >
              Colored Glass
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 backdrop-blur-sm bg-pink-500/10 border border-pink-400/30 rounded-lg shadow-lg hover:bg-pink-500/20 transition-all duration-300"
            >
              Colored Glass
            </motion.button>
          ),
        },
        {
          name: "Glowing Glass",
          code: `<motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
              whileTap="tap"
              className="px-6 py-3 backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/30 dark:border-gray-600 rounded-lg shadow-lg transition-all duration-300"
            >
              Glowing Glass
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
              whileTap="tap"
              className="px-6 py-3 backdrop-blur-sm bg-white/10 dark:bg-gray-800/30 border border-white/30 dark:border-gray-600 rounded-lg shadow-lg transition-all duration-300"
            >
              Glowing Glass
            </motion.button>
          ),
        },
      ],
    },
    {
      title: "3D Buttons",
      buttons: [
        {
          name: "Press Me",
          code: ` <motion.button
              whileHover={{
                y: -3,
                boxShadow:
                  "0 6px 0 -1px #1D4ED8, 0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0 2px 0 -1px #1D4ED8",
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-[0_4px_0_-1px_#1D4ED8] transition-all duration-200"
            >
              Press Me
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                y: -3,
                boxShadow:
                  "0 6px 0 -1px #1D4ED8, 0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0 2px 0 -1px #1D4ED8",
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-[0_4px_0_-1px_#1D4ED8] transition-all duration-200"
            >
              Press Me
            </motion.button>
          ),
        },
        {
          name: "3D Purple",
          code: `<motion.button
              whileHover={{
                y: -3,
                boxShadow:
                  "0 6px 0 -1px #7C3AED, 0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0 2px 0 -1px #7C3AED",
              }}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-[0_4px_0_-1px_#7C3AED] transition-all duration-200"
            >
              3D Purple
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                y: -3,
                boxShadow:
                  "0 6px 0 -1px #7C3AED, 0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0 2px 0 -1px #7C3AED",
              }}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-[0_4px_0_-1px_#7C3AED] transition-all duration-200"
            >
              3D Purple
            </motion.button>
          ),
        },
        {
          name: "Success 3D",
          code: `<motion.button
              whileHover={{
                y: -3,
                boxShadow:
                  "0 6px 0 -1px #059669, 0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0 2px 0 -1px #059669",
              }}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-[0_4px_0_-1px_#059669] transition-all duration-200"
            >
              Success 3D
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                y: -3,
                boxShadow:
                  "0 6px 0 -1px #059669, 0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0 2px 0 -1px #059669",
              }}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-[0_4px_0_-1px_#059669] transition-all duration-200"
            >
              Success 3D
            </motion.button>
          ),
        },
        {
          name: "Amber 3D",
          code: `<motion.button
              whileHover={{
                y: -3,
                boxShadow:
                  "0 6px 0 -1px #D97706, 0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0 2px 0 -1px #D97706",
              }}
              className="px-6 py-3 bg-amber-600 text-white rounded-lg shadow-[0_4px_0_-1px_#D97706] transition-all duration-200"
            >
              Amber 3D
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                y: -3,
                boxShadow:
                  "0 6px 0 -1px #D97706, 0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0 2px 0 -1px #D97706",
              }}
              className="px-6 py-3 bg-amber-600 text-white rounded-lg shadow-[0_4px_0_-1px_#D97706] transition-all duration-200"
            >
              Amber 3D
            </motion.button>
          ),
        },
        {
          name: "Danger 3D",
          code: `<motion.button
              whileHover={{
                y: -3,
                boxShadow:
                  "0 6px 0 -1px #DC2626, 0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0 2px 0 -1px #DC2626",
              }}
              className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-[0_4px_0_-1px_#DC2626] transition-all duration-200"
            >
              Danger 3D
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                y: -3,
                boxShadow:
                  "0 6px 0 -1px #DC2626, 0 10px 15px -3px rgba(0,0,0,0.1)",
              }}
              whileTap={{
                y: 0,
                boxShadow: "0 2px 0 -1px #DC2626",
              }}
              className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-[0_4px_0_-1px_#DC2626] transition-all duration-200"
            >
              Danger 3D
            </motion.button>
          ),
        },
      ],
    },
    {
      title: "Special Effects",
      buttons: [
        {
          name: "Ripple Effect",
          code: `<motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">Ripple Effect</span>
              <motion.span
                initial={{ scale: 0, opacity: 1 }}
                whileHover={{
                  scale: 10,
                  opacity: 0,
                  transition: { duration: 0.8 },
                }}
                className="absolute inset-0 bg-white/20 rounded-full origin-center"
              ></motion.span>
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(236, 72, 153, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">Ripple Effect</span>
              <motion.span
                initial={{ scale: 0, opacity: 1 }}
                whileHover={{
                  scale: 10,
                  opacity: 0,
                  transition: { duration: 0.8 },
                }}
                className="absolute inset-0 bg-white/20 rounded-full origin-center"
              ></motion.span>
            </motion.button>
          ),
        },
        {
          name: "Shine Effect",
          code: ` <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-lg shadow-md relative overflow-hidden"
            >
              <span className="relative z-10">Shine Effect</span>
              <motion.div
                initial={{ x: -100, skewX: -15 }}
                whileHover={{
                  x: 400,
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 1,
                  },
                }}
                className="absolute inset-0 bg-white/30 w-20"
              ></motion.div>
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-lg shadow-md relative overflow-hidden"
            >
              <span className="relative z-10">Shine Effect</span>
              <motion.div
                initial={{ x: -100, skewX: -15 }}
                whileHover={{
                  x: 400,
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatDelay: 1,
                  },
                }}
                className="absolute inset-0 bg-white/30 w-20"
              ></motion.div>
            </motion.button>
          ),
        },
        {
          name: "Particles",
          code: `<motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">Particles</span>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                }}
                className="absolute inset-0"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                      scale: 0,
                    }}
                    whileHover={{
                      scale: [1, 1.5, 0],
                      opacity: [0.8, 0],
                      transition: { duration: 1 },
                    }}
                    className="absolute w-2 h-2 bg-white rounded-full"
                  ></motion.span>
                ))}
              </motion.div>
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">Particles</span>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                }}
                className="absolute inset-0"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50,
                      scale: 0,
                    }}
                    whileHover={{
                      scale: [1, 1.5, 0],
                      opacity: [0.8, 0],
                      transition: { duration: 1 },
                    }}
                    className="absolute w-2 h-2 bg-white rounded-full"
                  ></motion.span>
                ))}
              </motion.div>
            </motion.button>
          ),
        },
        {
          name: "Neon Border",
          code: `<motion.button
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(45deg, #6366F1, #A855F7, #EC4899)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Neon Border</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -m-[2px]"
              ></motion.span>
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(45deg, #6366F1, #A855F7, #EC4899)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Neon Border</span>
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
                className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -m-[2px]"
              ></motion.span>
            </motion.button>
          ),
        },
        {
          name: "Holographic",
          code: `<motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-white rounded-lg shadow-lg animate-hue-rotate"
            >
              Holographic
            </motion.button>`,
          component: (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 text-white rounded-lg shadow-lg animate-hue-rotate"
            >
              Holographic
            </motion.button>
          ),
        },
      ],
    },
    {
      title: "Loading Buttons",
      buttons: [
        {
          name: "Spinner",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              ></motion.span>
              Loading...
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              ></motion.span>
              Loading...
            </motion.button>
          ),
        },
        {
          name: "Dots",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="flex gap-1"
              >
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </motion.div>
              Processing
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="flex gap-1"
              >
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </motion.div>
              Processing
            </motion.button>
          ),
        },
        {
          name: "Bouncing",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <motion.span
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                  },
                }}
                className="inline-block w-2 h-2 bg-white rounded-full"
              ></motion.span>
              <motion.span
                animate={{
                  y: [0, -8, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    delay: 0.2,
                  },
                }}
                className="inline-block w-2 h-2 bg-white rounded-full"
              ></motion.span>
              <motion.span
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    delay: 0.4,
                  },
                }}
                className="inline-block w-2 h-2 bg-white rounded-full"
              ></motion.span>
              Sending
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <motion.span
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                  },
                }}
                className="inline-block w-2 h-2 bg-white rounded-full"
              ></motion.span>
              <motion.span
                animate={{
                  y: [0, -8, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    delay: 0.2,
                  },
                }}
                className="inline-block w-2 h-2 bg-white rounded-full"
              ></motion.span>
              <motion.span
                animate={{
                  y: [0, -5, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    delay: 0.4,
                  },
                }}
                className="inline-block w-2 h-2 bg-white rounded-full"
              ></motion.span>
              Sending
            </motion.button>
          ),
        },
        {
          name: "Refreshing",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </motion.div>
              Refreshing
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </motion.div>
              Refreshing
            </motion.button>
          ),
        },
        {
          name: "Please Wait",
          code: ` <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                  },
                }}
                className="flex"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
              Please Wait
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-md flex items-center justify-center gap-2"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                  },
                }}
                className="flex"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
              Please Wait
            </motion.button>
          ),
        },
      ],
    },
    {
      title: "Toggle Buttons",
      buttons: [
        {
          name: "Filter",
          code: ` <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            >
              Filter
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            >
              Filter
            </motion.button>
          ),
        },
        {
          name: "Active",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-all duration-300"
            >
              Active
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-all duration-300"
            >
              Active
            </motion.button>
          ),
        },
        {
          name: "Inactive",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              Inactive
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              Inactive
            </motion.button>
          ),
        },
        {
          name: "Premium",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Premium
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Premium
            </motion.button>
          ),
        },
        {
          name: "Remove",
          code: `<motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 rounded-full text-sm font-medium hover:bg-red-200 dark:hover:bg-red-800/60 transition-all duration-300"
            >
              Remove
            </motion.button>`,
          component: (
            <motion.button
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 rounded-full text-sm font-medium hover:bg-red-200 dark:hover:bg-red-800/60 transition-all duration-300"
            >
              Remove
            </motion.button>
          ),
        },
      ],
    },
    {
      title: "Social Buttons",
      buttons: [
        {
          name: "Facebook",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Facebook
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Facebook
            </motion.button>
          ),
        },
        {
          name: "Twitter",
          code: ` <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg flex items-center gap-2 hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              Twitter
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg flex items-center gap-2 hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              Twitter
            </motion.button>
          ),
        },
        {
          name: "Instagram",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram
            </motion.button>
          ),
        },
        {
          name: "YouTube",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              YouTube
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-700 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              YouTube
            </motion.button>
          ),
        },
        {
          name: "GitHub",
          code: `<motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </motion.button>`,
          component: (
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </motion.button>
          ),
        },
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900
      `}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Button Universe
          </motion.h1>
        </header>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xl mb-6 max-w-3xl">
            Explore our collection of 50+ meticulously crafted buttons with
            modern animations, gradients, and hover effects. Click the{" "}
            <FiCopy className="inline" /> icon to copy the Tailwind CSS classes
            for any button!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Button Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {buttonCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.buttons.map((button, btnIndex) => {
                  const globalIndex = catIndex * 5 + btnIndex;
                  return (
                    <div key={btnIndex} className="group relative">
                      {button.component}
                      <button
                        onClick={() =>
                          copyToClipboard(button.code, globalIndex)
                        }
                        className="absolute -top-2 -right-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                        aria-label="Copy code"
                      >
                        {copiedIndex === globalIndex ? (
                          <FiCheck className="text-green-500" />
                        ) : (
                          <FiCopy className="text-gray-600 dark:text-gray-300" />
                        )}
                      </button>
                      {copiedIndex === globalIndex && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded"
                        >
                          Copied!
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
