import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiSun, FiMoon } from "react-icons/fi";

const SpinnerShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  // Spinner variants for Framer Motion
  const spinnerVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    spin: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Spinner data
  const spinnerCategories = [
    {
      title: "Basic Spinners",
      spinners: [
        {
          name: "Simple Circle",
          code: `<div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>`,
          component: (
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          ),
        },
        {
          name: "Dotted Spinner",
          code: `<div className="w-8 h-8 border-4 border-dotted border-purple-500 rounded-full animate-spin"></div>`,
          component: (
            <div className="w-8 h-8 border-4 border-dotted border-purple-500 rounded-full animate-spin"></div>
          ),
        },
        {
          name: "Double Ring",
          code: `<div className="relative w-8 h-8">
  <div className="absolute inset-0 border-4 border-pink-500 rounded-full animate-spin border-t-transparent"></div>
  <div className="absolute inset-1 border-4 border-pink-300 rounded-full animate-spin border-b-transparent"></div>
</div>`,
          component: (
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 border-4 border-pink-500 rounded-full animate-spin border-t-transparent"></div>
              <div className="absolute inset-1 border-4 border-pink-300 rounded-full animate-spin border-b-transparent"></div>
            </div>
          ),
        },
        {
          name: "Pulse Dot",
          code: `<div className="flex space-x-2">
  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-100"></div>
  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
</div>`,
          component: (
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
            </div>
          ),
        },
        {
          name: "Bouncing Dots",
          code: `<div className="flex space-x-2">
  <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
  <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-100"></div>
  <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-200"></div>
</div>`,
          component: (
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce delay-200"></div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Animated Spinners",
      spinners: [
        {
          name: "Framer Motion Spin",
          code: `<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"
></motion.div>`,
          component: (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full"
            ></motion.div>
          ),
        },
        {
          name: "Pulse Ring",
          code: `<motion.div
  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
  transition={{ duration: 1.5, repeat: Infinity }}
  className="w-8 h-8 border-4 border-blue-500 rounded-full"
></motion.div>`,
          component: (
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-8 h-8 border-4 border-blue-500 rounded-full"
            ></motion.div>
          ),
        },
        {
          name: "Wave Motion",
          code: `<div className="flex space-x-1">
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
    className="w-2 h-6 bg-pink-500 rounded-full"
  ></motion.div>
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
    className="w-2 h-6 bg-pink-500 rounded-full"
  ></motion.div>
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
    className="w-2 h-6 bg-pink-500 rounded-full"
  ></motion.div>
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
    className="w-2 h-6 bg-pink-500 rounded-full"
  ></motion.div>
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 1, repeat: Infinity, delay: 0.8 }}
    className="w-2 h-6 bg-pink-500 rounded-full"
  ></motion.div>
</div>`,
          component: (
            <div className="flex space-x-1">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                className="w-2 h-6 bg-pink-500 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                className="w-2 h-6 bg-pink-500 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                className="w-2 h-6 bg-pink-500 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                className="w-2 h-6 bg-pink-500 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.8 }}
                className="w-2 h-6 bg-pink-500 rounded-full"
              ></motion.div>
            </div>
          ),
        },
        {
          name: "Orbit Dots",
          code: `<motion.div 
  animate={{ rotate: 360 }}
  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  className="relative w-10 h-10"
>
  <motion.div 
    className="absolute top-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2"
    initial={{ x: 0, y: 0 }}
  ></motion.div>
  <motion.div 
    className="absolute top-1/2 right-0 w-3 h-3 bg-purple-500 rounded-full -translate-y-1/2 translate-x-1/2"
    initial={{ x: 0, y: 0 }}
  ></motion.div>
  <motion.div 
    className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full -translate-x-1/2 translate-y-1/2"
    initial={{ x: 0, y: 0 }}
  ></motion.div>
  <motion.div 
    className="absolute top-1/2 left-0 w-3 h-3 bg-purple-500 rounded-full -translate-y-1/2 -translate-x-1/2"
    initial={{ x: 0, y: 0 }}
  ></motion.div>
</motion.div>`,
          component: (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="relative w-10 h-10"
            >
              <motion.div
                className="absolute top-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2"
                initial={{ x: 0, y: 0 }}
              ></motion.div>
              <motion.div
                className="absolute top-1/2 right-0 w-3 h-3 bg-purple-500 rounded-full -translate-y-1/2 translate-x-1/2"
                initial={{ x: 0, y: 0 }}
              ></motion.div>
              <motion.div
                className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full -translate-x-1/2 translate-y-1/2"
                initial={{ x: 0, y: 0 }}
              ></motion.div>
              <motion.div
                className="absolute top-1/2 left-0 w-3 h-3 bg-purple-500 rounded-full -translate-y-1/2 -translate-x-1/2"
                initial={{ x: 0, y: 0 }}
              ></motion.div>
            </motion.div>
          ),
        },
        {
          name: "Pulse Gradient",
          code: `<motion.div
  animate={{ 
    scale: [1, 1.2, 1],
    background: [
      'linear-gradient(45deg, #ff008c, #d309e1)',
      'linear-gradient(45deg, #d309e1, #9c1aff)',
      'linear-gradient(45deg, #9c1aff, #ff008c)'
    ]
  }}
  transition={{ duration: 2, repeat: Infinity }}
  className="w-8 h-8 rounded-full"
></motion.div>`,
          component: (
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                background: [
                  "linear-gradient(45deg, #ff008c, #d309e1)",
                  "linear-gradient(45deg, #d309e1, #9c1aff)",
                  "linear-gradient(45deg, #9c1aff, #ff008c)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-8 h-8 rounded-full"
            ></motion.div>
          ),
        },
      ],
    },
    {
      title: "Creative Spinners",
      spinners: [
        {
          name: "DNA Spinner",
          code: `<div className="relative w-10 h-10">
  {[...Array(6)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-4 bg-green-500 rounded-full"
      style={{
        left: 5 + Math.sin(i * 0.6) * 8 + 'px',
        top: i * 3 + 'px'
      }}
      animate={{ 
        y: [0, 10, 0],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity,
        delay: i * 0.1
      }}
    />
  ))}
</div>`,
          component: (
            <div className="relative w-10 h-10">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-4 bg-green-500 rounded-full"
                  style={{
                    left: `${5 + Math.sin(i * 0.6) * 8}px`,
                    top: `${i * 3}px`,
                  }}
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          ),
        },
        {
          name: "Atom Simulation",
          code: `<motion.div 
  className="relative w-12 h-12"
  animate={{ rotate: 360 }}
  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
  </div>
  <motion.div 
    className="absolute top-0 left-1/2 w-2 h-2 bg-red-500 rounded-full -translate-x-1/2"
    animate={{ 
      x: [-10, 10, -10],
      y: [0, 8, 0]
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity,
      ease: "easeInOut"
    }}
  ></motion.div>
  <motion.div 
    className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-500 rounded-full -translate-x-1/2"
    animate={{ 
      x: [-10, 10, -10],
      y: [0, -8, 0]
    }}
    transition={{ 
      duration: 3, 
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5
    }}
  ></motion.div>
</motion.div>`,
          component: (
            <motion.div
              className="relative w-12 h-12"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <motion.div
                className="absolute top-0 left-1/2 w-2 h-2 bg-red-500 rounded-full -translate-x-1/2"
                animate={{
                  x: [-10, 10, -10],
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-500 rounded-full -translate-x-1/2"
                animate={{
                  x: [-10, 10, -10],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          ),
        },
        {
          name: "Holographic Ring",
          code: `<motion.div
  className="relative w-10 h-10"
  animate={{ rotate: 360 }}
  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
>
  <div className="absolute inset-0 border-2 border-transparent border-t-pink-500 rounded-full animate-spin"></div>
  <div className="absolute inset-1 border-2 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
  <div className="absolute inset-2 border-2 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
</motion.div>`,
          component: (
            <motion.div
              className="relative w-10 h-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border-2 border-transparent border-t-pink-500 rounded-full animate-spin"></div>
              <div className="absolute inset-1 border-2 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-2 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
            </motion.div>
          ),
        },
        {
          name: "Infinity Loop",
          code: `<svg className="w-10 h-10" viewBox="0 0 38 38">
  <motion.path
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    d="M4,19c0,8.3,6.7,15,15,15c8.3,0,15-6.7,15-15s-6.7-15-15-15"
    animate={{
      pathLength: [0.5, 1, 0.5],
      opacity: [0.5, 1, 0.5],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  <motion.path
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    d="M34,19c0-8.3-6.7-15-15-15C10.7,4,4,10.7,4,19s6.7,15,15,15"
    animate={{
      pathLength: [0.5, 1, 0.5],
      opacity: [0.5, 1, 0.5],
      rotate: [0, -180, -360]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5
    }}
  />
</svg>`,
          component: (
            <svg className="w-10 h-10 text-blue-500" viewBox="0 0 38 38">
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4,19c0,8.3,6.7,15,15,15c8.3,0,15-6.7,15-15s-6.7-15-15-15"
                animate={{
                  pathLength: [0.5, 1, 0.5],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M34,19c0-8.3-6.7-15-15-15C10.7,4,4,10.7,4,19s6.7,15,15,15"
                animate={{
                  pathLength: [0.5, 1, 0.5],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </svg>
          ),
        },
        {
          name: "Neon Pulse",
          code: `<motion.div
  className="relative w-10 h-10"
  animate={{
    boxShadow: [
      '0 0 5px #00f, 0 0 10px #00f, 0 0 15px #00f',
      '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff',
      '0 0 5px #00f, 0 0 10px #00f, 0 0 15px #00f'
    ]
  }}
  transition={{ duration: 2, repeat: Infinity }}
>
  <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-spin"></div>
  <div className="absolute inset-2 border-2 border-cyan-400 rounded-full animate-spin"></div>
</motion.div>`,
          component: (
            <motion.div
              className="relative w-10 h-10"
              animate={{
                boxShadow: [
                  "0 0 5px #00f, 0 0 10px #00f, 0 0 15px #00f",
                  "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff",
                  "0 0 5px #00f, 0 0 10px #00f, 0 0 15px #00f",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-2 border-cyan-400 rounded-full animate-spin"></div>
            </motion.div>
          ),
        },
      ],
    },
    {
      title: "Gradient Spinners",
      spinners: [
        {
          name: "Rainbow Spin",
          code: `<div className="w-10 h-10 rounded-full animate-spin border-4 border-transparent border-t-purple-500 border-r-blue-500 border-b-pink-500 border-l-green-500"></div>`,
          component: (
            <div className="w-10 h-10 rounded-full animate-spin border-4 border-transparent border-t-purple-500 border-r-blue-500 border-b-pink-500 border-l-green-500"></div>
          ),
        },
        {
          name: "Gradient Pulse",
          code: `<motion.div
  animate={{ 
    scale: [1, 1.2, 1],
    background: [
      'conic-gradient(from 0deg, #ff008c, #d309e1)',
      'conic-gradient(from 90deg, #d309e1, #9c1aff)',
      'conic-gradient(from 180deg, #9c1aff, #ff008c)'
    ]
  }}
  transition={{ duration: 2, repeat: Infinity }}
  className="w-10 h-10 rounded-full"
></motion.div>`,
          component: (
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                background: [
                  "conic-gradient(from 0deg, #ff008c, #d309e1)",
                  "conic-gradient(from 90deg, #d309e1, #9c1aff)",
                  "conic-gradient(from 180deg, #9c1aff, #ff008c)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full"
            ></motion.div>
          ),
        },
        {
          name: "Radial Gradient",
          code: `<motion.div
  animate={{ 
    rotate: 360,
    background: [
      'radial-gradient(circle, #ff008c, transparent 70%)',
      'radial-gradient(circle, #d309e1, transparent 70%)',
      'radial-gradient(circle, #9c1aff, transparent 70%)',
      'radial-gradient(circle, #ff008c, transparent 70%)'
    ]
  }}
  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
  className="w-10 h-10 rounded-full"
></motion.div>`,
          component: (
            <motion.div
              animate={{
                rotate: 360,
                background: [
                  "radial-gradient(circle, #ff008c, transparent 70%)",
                  "radial-gradient(circle, #d309e1, transparent 70%)",
                  "radial-gradient(circle, #9c1aff, transparent 70%)",
                  "radial-gradient(circle, #ff008c, transparent 70%)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 rounded-full"
            ></motion.div>
          ),
        },
        {
          name: "Chasing Gradient",
          code: `<div className="relative w-10 h-10">
  <div className="absolute inset-0 rounded-full animate-spin border-4 border-transparent border-t-blue-500 border-r-blue-500"></div>
  <div className="absolute inset-1 rounded-full animate-spin border-4 border-transparent border-t-purple-500 border-r-purple-500 delay-150"></div>
  <div className="absolute inset-2 rounded-full animate-spin border-4 border-transparent border-t-pink-500 border-r-pink-500 delay-300"></div>
</div>`,
          component: (
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full animate-spin border-4 border-transparent border-t-blue-500 border-r-blue-500"></div>
              <div className="absolute inset-1 rounded-full animate-spin border-4 border-transparent border-t-purple-500 border-r-purple-500 delay-150"></div>
              <div className="absolute inset-2 rounded-full animate-spin border-4 border-transparent border-t-pink-500 border-r-pink-500 delay-300"></div>
            </div>
          ),
        },
        {
          name: "Gradient Wave",
          code: `<div className="flex space-x-1">
  <motion.div
    animate={{ 
      y: [0, -10, 0],
      background: ['#ff008c', '#d309e1', '#ff008c']
    }}
    transition={{ duration: 1, repeat: Infinity, delay: 0 }}
    className="w-2 h-6 rounded-full"
  ></motion.div>
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      background: ['#d309e1', '#9c1aff', '#d309e1']
    }}
    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
    className="w-2 h-6 rounded-full"
  ></motion.div>
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      background: ['#9c1aff', '#ff008c', '#9c1aff']
    }}
    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
    className="w-2 h-6 rounded-full"
  ></motion.div>
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      background: ['#d309e1', '#9c1aff', '#d309e1']
    }}
    transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
    className="w-2 h-6 rounded-full"
  ></motion.div>
  <motion.div
    animate={{ 
      y: [0, -10, 0],
      background: ['#ff008c', '#d309e1', '#ff008c']
    }}
    transition={{ duration: 1, repeat: Infinity, delay: 0.8 }}
    className="w-2 h-6 rounded-full"
  ></motion.div>
</div>`,
          component: (
            <div className="flex space-x-1">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  background: ["#ff008c", "#d309e1", "#ff008c"],
                }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                className="w-2 h-6 rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  background: ["#d309e1", "#9c1aff", "#d309e1"],
                }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                className="w-2 h-6 rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  background: ["#9c1aff", "#ff008c", "#9c1aff"],
                }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                className="w-2 h-6 rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  background: ["#d309e1", "#9c1aff", "#d309e1"],
                }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                className="w-2 h-6 rounded-full"
              ></motion.div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  background: ["#ff008c", "#d309e1", "#ff008c"],
                }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.8 }}
                className="w-2 h-6 rounded-full"
              ></motion.div>
            </div>
          ),
        },
      ],
    },
    {
      title: "3D Spinners",
      spinners: [
        {
          name: "3D Cube",
          code: `<motion.div
  className="relative w-10 h-10"
  animate={{ rotateX: 360, rotateY: 360 }}
  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
>
  <div className="absolute inset-0 bg-blue-500 opacity-70"></div>
  <div className="absolute inset-0 bg-blue-600 opacity-70 transform rotate-y-90"></div>
  <div className="absolute inset-0 bg-blue-700 opacity-70 transform rotate-x-90"></div>
</motion.div>`,
          component: (
            <motion.div
              className="relative w-10 h-10"
              animate={{ rotateX: 360, rotateY: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 bg-blue-500 opacity-70"></div>
              <div className="absolute inset-0 bg-blue-600 opacity-70 transform rotate-y-90"></div>
              <div className="absolute inset-0 bg-blue-700 opacity-70 transform rotate-x-90"></div>
            </motion.div>
          ),
        },
        {
          name: "Spinning Sphere",
          code: `<motion.div
  className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
  animate={{
    rotateY: 360,
    boxShadow: [
      '0 0 10px rgba(59, 130, 246, 0.7)',
      '0 0 20px rgba(124, 58, 237, 0.7)',
      '0 0 10px rgba(59, 130, 246, 0.7)'
    ]
  }}
  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
></motion.div>`,
          component: (
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
              animate={{
                rotateY: 360,
                boxShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.7)",
                  "0 0 20px rgba(124, 58, 237, 0.7)",
                  "0 0 10px rgba(59, 130, 246, 0.7)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            ></motion.div>
          ),
        },
        {
          name: "Torus Spinner",
          code: `<motion.svg
  className="w-10 h-10"
  viewBox="0 0 100 100"
  animate={{ rotateY: 360 }}
  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
>
  <motion.path
    d="M50,20 a30,30 0 0,1 0,60 a30,30 0 0,1 0,-60"
    fill="none"
    stroke="url(#torusGradient)"
    strokeWidth="8"
    animate={{
      pathLength: [0.7, 1, 0.7],
      opacity: [0.7, 1, 0.7]
    }}
    transition={{ duration: 2, repeat: Infinity }}
  />
  <defs>
    <linearGradient id="torusGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#3b82f6" />
      <stop offset="100%" stopColor="#8b5cf6" />
    </linearGradient>
  </defs>
</motion.svg>`,
          component: (
            <motion.svg
              className="w-10 h-10"
              viewBox="0 0 100 100"
              animate={{ rotateY: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <motion.path
                d="M50,20 a30,30 0 0,1 0,60 a30,30 0 0,1 0,-60"
                fill="none"
                stroke="url(#torusGradient)"
                strokeWidth="8"
                animate={{
                  pathLength: [0.7, 1, 0.7],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <defs>
                <linearGradient
                  id="torusGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </motion.svg>
          ),
        },
        {
          name: "Morphing Shape",
          code: `<motion.div
  className="w-10 h-10"
  animate={{
    borderRadius: [
      "20% 60% 40% 70% / 70% 30% 70% 30%",
      "60% 40% 30% 70% / 60% 50% 50% 40%",
      "30% 60% 70% 40% / 50% 60% 30% 60%",
      "20% 60% 40% 70% / 70% 30% 70% 30%"
    ],
    background: [
      "linear-gradient(45deg, #ff008c, #d309e1)",
      "linear-gradient(90deg, #d309e1, #9c1aff)",
      "linear-gradient(135deg, #9c1aff, #ff008c)",
      "linear-gradient(45deg, #ff008c, #d309e1)"
    ]
  }}
  transition={{ duration: 6, repeat: Infinity }}
></motion.div>`,
          component: (
            <motion.div
              className="w-10 h-10"
              animate={{
                borderRadius: [
                  "20% 60% 40% 70% / 70% 30% 70% 30%",
                  "60% 40% 30% 70% / 60% 50% 50% 40%",
                  "30% 60% 70% 40% / 50% 60% 30% 60%",
                  "20% 60% 40% 70% / 70% 30% 70% 30%",
                ],
                background: [
                  "linear-gradient(45deg, #ff008c, #d309e1)",
                  "linear-gradient(90deg, #d309e1, #9c1aff)",
                  "linear-gradient(135deg, #9c1aff, #ff008c)",
                  "linear-gradient(45deg, #ff008c, #d309e1)",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            ></motion.div>
          ),
        },
        {
          name: "Holographic Sphere",
          code: `<motion.div
  className="relative w-10 h-10 rounded-full"
  animate={{
    rotateY: 360,
    boxShadow: [
      "inset 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)",
      "inset 0 0 15px rgba(124, 58, 237, 0.8), 0 0 25px rgba(124, 58, 237, 0.5)",
      "inset 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)"
    ]
  }}
  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
>
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-70"></div>
  <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm"></div>
</motion.div>`,
          component: (
            <motion.div
              className="relative w-10 h-10 rounded-full"
              animate={{
                rotateY: 360,
                boxShadow: [
                  "inset 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)",
                  "inset 0 0 15px rgba(124, 58, 237, 0.8), 0 0 25px rgba(124, 58, 237, 0.5)",
                  "inset 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-70"></div>
              <div className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-sm"></div>
            </motion.div>
          ),
        },
      ],
    },
  ];

  // Filter spinners based on search term
  const filteredCategories = spinnerCategories
    .map((category) => ({
      ...category,
      spinners: category.spinners.filter((spinner) =>
        spinner.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.spinners.length > 0);

  return (
    <div
      className={`min-h-screen p-4 md:p-8 transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Spinner Galaxy
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
              50+ Tailwind CSS spinners with animations and copy functionality
            </p>
          </motion.div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex-1 md:w-64"
            >
              <input
                type="text"
                placeholder="Search spinners..."
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                >
                  ✕
                </button>
              )}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FiSun className="text-yellow-400" />
              ) : (
                <FiMoon className="text-gray-700" />
              )}
            </motion.button>
          </div>
        </header>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl mb-6 max-w-3xl">
            Explore our collection of 50+ meticulously crafted loading spinners
            with modern animations, gradients, and hover effects. Click the{" "}
            <FiCopy className="inline" /> icon to copy the Tailwind CSS code for
            any spinner!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Spinner Categories */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, catIndex) => (
              <motion.section
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
                  <motion.span
                    variants={spinnerVariants}
                    animate="spin"
                    className="inline-block"
                  >
                    {category.spinners[0].component}
                  </motion.span>
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.spinners.map((spinner, spinnerIndex) => {
                    const globalIndex = catIndex * 5 + spinnerIndex;
                    return (
                      <div key={spinnerIndex} className="group relative">
                        <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm md:text-base font-medium truncate">
                              {spinner.name}
                            </h3>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            {spinner.component}
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            copyToClipboard(spinner.code, globalIndex)
                          }
                          className="absolute -top-2 -right-2 p-2 bg-white dark:bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-gray-200 dark:hover:bg-gray-500"
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
                            className="absolute -top-8 right-0 bg-gray-800 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded"
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
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-medium mb-2">No spinners found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try a different search term
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SpinnerShowcase;
