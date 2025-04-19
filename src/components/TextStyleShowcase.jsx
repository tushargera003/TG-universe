import { motion } from "framer-motion";
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const TextStylesShowcase = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Text style data
  const textStyles = [
    {
      name: "Neon Glow",
      code: `<motion.h1 
  className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"
  style={{ textShadow: '0 0 5px #ff00ff' }}
  animate={{ textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff' }}
  transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
>
  Neon Text
</motion.h1>`,
      component: (
        <motion.h1
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"
          style={{ textShadow: "0 0 5px #ff00ff" }}
          animate={{ textShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff" }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse",
          }}
        >
          Neon Text
        </motion.h1>
      ),
    },
    {
      name: "Typewriter Effect",
      code: `<motion.div
  className="text-3xl font-mono overflow-hidden whitespace-nowrap"
  initial={{ width: 0 }}
  animate={{ width: "100%" }}
  transition={{ duration: 2, ease: "easeInOut" }}
>
  Typewriter Effect
</motion.div>`,
      component: (
        <motion.div
          className="text-3xl font-mono overflow-hidden whitespace-nowrap"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Typewriter Effect
        </motion.div>
      ),
    },
    {
      name: "3D Text",
      code: `<motion.h1 
  className="text-5xl font-bold text-gray-900 dark:text-white"
  whileHover={{ rotateX: 20 }}
>
  <span className="block">3D Text Effect</span>
</motion.h1>`,
      component: (
        <motion.h1
          className="text-5xl font-bold text-gray-900 dark:text-white"
          whileHover={{ rotateX: 20 }}
        >
          <span className="block">3D Text Effect</span>
        </motion.h1>
      ),
    },
    {
      name: "Gradient Wave",
      code: `<motion.h1
  className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
  animate={{
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear"
  }}
>
  Gradient Wave
</motion.h1>`,
      component: (
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Gradient Wave
        </motion.h1>
      ),
    },
    {
      name: "Floating Text",
      code: `<motion.h2
  className="text-4xl font-bold text-purple-600"
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Floating Text
</motion.h2>`,
      component: (
        <motion.h2
          className="text-4xl font-bold text-purple-600"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Floating Text
        </motion.h2>
      ),
    },
    {
      name: "Text Shadow Pop",
      code: `<motion.h3
  className="text-3xl font-bold text-gray-800 dark:text-white"
  whileHover={{
    textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
    y: -5
  }}
>
  Hover Me
</motion.h3>`,
      component: (
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-white"
          whileHover={{
            textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
            y: -5,
          }}
        >
          Hover Me
        </motion.h3>
      ),
    },
    {
      name: "Liquid Text",
      code: `<motion.div
  className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
  animate={{
    filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear"
  }}
>
  Liquid Effect
</motion.div>`,
      component: (
        <motion.div
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
          animate={{
            filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Liquid Effect
        </motion.div>
      ),
    },
    {
      name: "Text Reveal",
      code: `<motion.div
  className="text-3xl font-bold text-gray-900 dark:text-white"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Text Reveal
</motion.div>`,
      component: (
        <motion.div
          className="text-3xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Text Reveal
        </motion.div>
      ),
    },
    {
      name: "Glitch Effect",
      code: `<div className="text-4xl font-bold relative">
  <span className="text-red-500 absolute top-0 left-0" style={{ animation: 'glitch 0.5s infinite' }}>Glitch</span>
  <span className="text-blue-500 absolute top-0 left-0" style={{ animation: 'glitch 0.5s infinite reverse' }}>Glitch</span>
  <span className="text-white relative">Glitch</span>
</div>`,
      component: (
        <div className="text-4xl font-bold relative">
          <span
            className="text-red-500 absolute top-0 left-0"
            style={{ animation: "glitch 0.5s infinite" }}
          >
            Glitch
          </span>
          <span
            className="text-blue-500 absolute top-0 left-0"
            style={{ animation: "glitch 0.5s infinite reverse" }}
          >
            Glitch
          </span>
          <span className="text-white relative">Glitch</span>
        </div>
      ),
    },
    {
      name: "Text Stroke",
      code: `<h1 
  className="text-5xl font-bold" 
  style={{
    WebkitTextStroke: '2px',
    WebkitTextFillColor: 'transparent',
    color: 'transparent',
    textStroke: '2px #000'
  }}
>
  Stroke Text
</h1>`,
      component: (
        <h1
          className="text-5xl font-bold"
          style={{
            WebkitTextStroke: "2px",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            textStroke: "2px #000",
          }}
        >
          Stroke Text
        </h1>
      ),
    },
    {
      name: "Text Gradient Animation",
      code: `<motion.h1
  className="text-5xl font-extrabold text-transparent bg-clip-text"
  style={{ backgroundImage: 'linear-gradient(to right, #9333ea, #ec4899)' }}
  animate={{
    backgroundImage: [
      "linear-gradient(to right, #9333ea, #ec4899)",
      "linear-gradient(to right, #ec4899, #3b82f6)",
      "linear-gradient(to right, #3b82f6, #9333ea)"
    ]
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    repeatType: "reverse"
  }}
>
  Animated Gradient
</motion.h1>`,
      component: (
        <motion.h1
          className="text-5xl font-extrabold text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to right, #9333ea, #ec4899)",
          }}
          animate={{
            backgroundImage: [
              "linear-gradient(to right, #9333ea, #ec4899)",
              "linear-gradient(to right, #ec4899, #3b82f6)",
              "linear-gradient(to right, #3b82f6, #9333ea)",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Animated Gradient
        </motion.h1>
      ),
    },
    {
      name: "Text Rotation",
      code: `<motion.h2
  className="text-4xl font-bold text-indigo-600"
  animate={{ rotate: [0, 5, -5, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "mirror"
  }}
>
  Rotating Text
</motion.h2>`,
      component: (
        <motion.h2
          className="text-4xl font-bold text-indigo-600"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          Rotating Text
        </motion.h2>
      ),
    },
    {
      name: "Text Fade In",
      code: `<motion.h3
  className="text-3xl font-semibold text-gray-800 dark:text-white"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
>
  Fade In Text
</motion.h3>`,
      component: (
        <motion.h3
          className="text-3xl font-semibold text-gray-800 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Fade In Text
        </motion.h3>
      ),
    },
    {
      name: "Text Shake",
      code: `<motion.h1
  className="text-5xl font-bold text-red-500"
  animate={{
    x: [0, -5, 5, -5, 5, 0],
  }}
  transition={{
    duration: 0.5,
    repeat: Infinity,
    repeatDelay: 2
  }}
>
  Shake Me
</motion.h1>`,
      component: (
        <motion.h1
          className="text-5xl font-bold text-red-500"
          animate={{
            x: [0, -5, 5, -5, 5, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          Shake Me
        </motion.h1>
      ),
    },
    {
      name: "Text Scale Pulse",
      code: `<motion.h2
  className="text-4xl font-bold text-green-500"
  animate={{ scale: [1, 1.1, 1] }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  Pulsing Text
</motion.h2>`,
      component: (
        <motion.h2
          className="text-4xl font-bold text-green-500"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Pulsing Text
        </motion.h2>
      ),
    },
    {
      name: "Text Flip",
      code: `<motion.h3
  className="text-3xl font-bold text-blue-500"
  whileHover={{ rotateY: 180 }}
  transition={{ duration: 0.6 }}
>
  Hover to Flip
</motion.h3>`,
      component: (
        <motion.h3
          className="text-3xl font-bold text-blue-500"
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.6 }}
        >
          Hover to Flip
        </motion.h3>
      ),
    },
    {
      name: "Text Bounce",
      code: `<motion.h1
  className="text-5xl font-extrabold text-purple-600"
  animate={{
    y: [0, -20, 0, -10, 0, -5, 0],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity
  }}
>
  Bouncing Text
</motion.h1>`,
      component: (
        <motion.h1
          className="text-5xl font-extrabold text-purple-600"
          animate={{
            y: [0, -20, 0, -10, 0, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Bouncing Text
        </motion.h1>
      ),
    },
    {
      name: "Text Jiggle",
      code: `<motion.h2
  className="text-4xl font-bold text-pink-500"
  animate={{
    rotate: [0, 5, -5, 5, -5, 0],
  }}
  transition={{
    duration: 0.8,
    repeat: Infinity,
    repeatDelay: 1
  }}
>
  Jiggle Effect
</motion.h2>`,
      component: (
        <motion.h2
          className="text-4xl font-bold text-pink-500"
          animate={{
            rotate: [0, 5, -5, 5, -5, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          Jiggle Effect
        </motion.h2>
      ),
    },
    {
      name: "Text Slide In",
      code: `<motion.h3
  className="text-3xl font-semibold text-orange-500"
  initial={{ x: -300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, type: "spring" }}
>
  Slide In Text
</motion.h3>`,
      component: (
        <motion.h3
          className="text-3xl font-semibold text-orange-500"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Slide In Text
        </motion.h3>
      ),
    },
    {
      name: "Text Blur",
      code: `<motion.h1
  className="text-5xl font-bold text-gray-800 dark:text-white"
  whileHover={{ filter: "blur(2px)" }}
  transition={{ duration: 0.3 }}
>
  Hover to Blur
</motion.h1>`,
      component: (
        <motion.h1
          className="text-5xl font-bold text-gray-800 dark:text-white"
          whileHover={{ filter: "blur(2px)" }}
          transition={{ duration: 0.3 }}
        >
          Hover to Blur
        </motion.h1>
      ),
    },
    {
      name: "Text Underline Animation",
      code: `<div className="relative group">
  <h2 className="text-4xl font-bold text-blue-600 group-hover:text-blue-800 transition-colors">
    Underline Effect
  </h2>
  <motion.div
    className="absolute bottom-0 left-0 h-1 bg-blue-600"
    initial={{ width: 0 }}
    whileHover={{ width: "100%" }}
    transition={{ duration: 0.3 }}
  />
</div>`,
      component: (
        <div className="relative group">
          <h2 className="text-4xl font-bold text-blue-600 group-hover:text-blue-800 transition-colors">
            Underline Effect
          </h2>
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-blue-600"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      ),
    },
    {
      name: "Text Color Change",
      code: `<motion.h3
  className="text-3xl font-bold"
  animate={{
    color: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"]
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear"
  }}
>
  Color Changing
</motion.h3>`,
      component: (
        <motion.h3
          className="text-3xl font-bold"
          animate={{
            color: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          Color Changing
        </motion.h3>
      ),
    },
    {
      name: "Text Skew",
      code: `<motion.h1
  className="text-5xl font-bold text-purple-600"
  whileHover={{ skewX: 20 }}
  transition={{ duration: 0.3 }}
>
  Hover to Skew
</motion.h1>`,
      component: (
        <motion.h1
          className="text-5xl font-bold text-purple-600"
          whileHover={{ skewX: 20 }}
          transition={{ duration: 0.3 }}
        >
          Hover to Skew
        </motion.h1>
      ),
    },
    {
      name: "Text Perspective",
      code: `<motion.h2
  className="text-4xl font-bold text-gray-800 dark:text-white"
  style={{ transformStyle: "preserve-3d" }}
  whileHover={{ rotateY: 45 }}
  transition={{ duration: 0.5 }}
>
  Perspective Text
</motion.h2>`,
      component: (
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white"
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ rotateY: 45 }}
          transition={{ duration: 0.5 }}
        >
          Perspective Text
        </motion.h2>
      ),
    },
    {
      name: "Text Stagger",
      code: `<div className="flex">
  {["S", "T", "A", "G", "G", "E", "R"].map((letter, i) => (
    <motion.span
      key={i}
      className="text-4xl font-bold text-indigo-600"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: i * 0.1,
        type: "spring",
        stiffness: 300
      }}
    >
      {letter}
    </motion.span>
  ))}
</div>`,
      component: (
        <div className="flex">
          {["S", "T", "A", "G", "G", "E", "R"].map((letter, i) => (
            <motion.span
              key={i}
              className="text-4xl font-bold text-indigo-600"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: i * 0.1,
                type: "spring",
                stiffness: 300,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      ),
    },
    {
      name: "Text Shadow Glow",
      code: `<motion.h3
  className="text-3xl font-bold text-white"
  animate={{
    textShadow: [
      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6",
      "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6",
      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6"
    ]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse"
  }}
>
  Shadow Glow
</motion.h3>`,
      component: (
        <motion.h3
          className="text-3xl font-bold text-white"
          animate={{
            textShadow: [
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6",
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6",
              "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Shadow Glow
        </motion.h3>
      ),
    },
    {
      name: "Text Morph",
      code: `<motion.h1
  className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
  animate={{
    scale: [1, 1.2, 1.2, 1, 1],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}
  transition={{
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
    repeatDelay: 1
  }}
>
  Morphing Text
</motion.h1>`,
      component: (
        <motion.h1
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500"
          animate={{
            scale: [1, 1.2, 1.2, 1, 1],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          Morphing Text
        </motion.h1>
      ),
    },
    {
      name: "Text Wave",
      code: `<div className="flex">
  {["W", "A", "V", "E"].map((letter, i) => (
    <motion.span
      key={i}
      className="text-4xl font-bold text-teal-500"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.2
      }}
    >
      {letter}
    </motion.span>
  ))}
</div>`,
      component: (
        <div className="flex">
          {["W", "A", "V", "E"].map((letter, i) => (
            <motion.span
              key={i}
              className="text-4xl font-bold text-teal-500"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      ),
    },
    {
      name: "Text Split Color",
      code: `<div className="relative">
  <h2 className="text-4xl font-bold text-gray-400">Split Color</h2>
  <motion.h2 
    className="absolute top-0 left-0 text-4xl font-bold text-blue-500"
    style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }}
    whileHover={{ x: 10 }}
    transition={{ duration: 0.3 }}
  >
    Split Color
  </motion.h2>
</div>`,
      component: (
        <div className="relative">
          <h2 className="text-4xl font-bold text-gray-400">Split Color</h2>
          <motion.h2
            className="absolute top-0 left-0 text-4xl font-bold text-blue-500"
            style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0% 100%)" }}
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            Split Color
          </motion.h2>
        </div>
      ),
    },
    {
      name: "Text Fire Effect",
      code: `<div 
  className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-orange-500 to-red-600"
  style={{
    textShadow: '0 0 4px #fff, 0 -5px 4px #ff3, 2px -10px 6px #fd3, -2px -15px 11px #f80, 2px -25px 18px #f20',
    animation: 'flicker 0.5s infinite alternate'
  }}
>
  Fire Text
</div>`,
      component: (
        <div
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-orange-500 to-red-600"
          style={{
            textShadow:
              "0 0 4px #fff, 0 -5px 4px #ff3, 2px -10px 6px #fd3, -2px -15px 11px #f80, 2px -25px 18px #f20",
            animation: "flicker 0.5s infinite alternate",
          }}
        >
          Fire Text
        </div>
      ),
    },
    //     {
    //       name: "Text Rain Effect",
    //       code: `<div className="relative overflow-hidden h-16">
    //   {[...Array(20)].map((_, i) => (
    //     <motion.span
    //       key={i}
    //       className="absolute text-gray-400"
    //       style={{
    //         left: `${Math.random() * 100}%`,
    //         fontSize: `${Math.random() * 10 + 10}px`
    //       }}
    //       animate={{
    //         y: [0, 100],
    //         opacity: [1, 0]
    //       }}
    //       transition={{
    //         duration: Math.random() * 3 + 1,
    //         repeat: Infinity,
    //         delay: Math.random() * 2
    //       }}
    //     >
    //       {String.fromCharCode(Math.random() * 100 + 65)}
    //     </motion.span>
    //   ))}
    // </div>`,
    //       component: (
    //         <div className="relative overflow-hidden h-16">
    //           {[...Array(20)].map((_, i) => (
    //             <motion.span
    //               key={i}
    //               className="absolute text-gray-400"
    //               style={{
    //                 left: `${Math.random() * 100}%`,
    //                 fontSize: `${Math.random() * 10 + 10}px`
    //               }}
    //               animate={{
    //                 y: [0, 100],
    //                 opacity: [1, 0]
    //               }}
    //               transition={{
    //                 duration: Math.random() * 3 + 1,
    //                 repeat: Infinity,
    //                 delay: Math.random() * 2
    //               }}
    //             >
    //               {String.fromCharCode(Math.random() * 100 + 65)}
    //             </motion.span>
    //           ))}
    //         </div>
    //       ),
    //     },
    //     {
    //       name: "Text Matrix Effect",
    //       code: `<div className="relative h-16 overflow-hidden font-mono">
    //   {[...Array(30)].map((_, i) => (
    //     <motion.span
    //       key={i}
    //       className="absolute text-green-500"
    //       style={{
    //         left: `${Math.random() * 100}%`,
    //         top: `${Math.random() * 100}%`,
    //         opacity: Math.random()
    //       }}
    //       animate={{
    //         y: [0, 100],
    //         opacity: [1, 0]
    //       }}
    //       transition={{
    //         duration: Math.random() * 5 + 2,
    //         repeat: Infinity,
    //         delay: Math.random() * 3
    //       }}
    //     >
    //       {String.fromCharCode(Math.random() * 100 + 65)}
    //     </motion.span>
    //   ))}
    // </div>`,
    //       component: (
    //         <div className="relative h-16 overflow-hidden font-mono">
    //           {[...Array(30)].map((_, i) => (
    //             <motion.span
    //               key={i}
    //               className="absolute text-green-500"
    //               style={{
    //                 left: `${Math.random() * 100}%`,
    //                 top: `${Math.random() * 100}%`,
    //                 opacity: Math.random()
    //               }}
    //               animate={{
    //                 y: [0, 100],
    //                 opacity: [1, 0]
    //               }}
    //               transition={{
    //                 duration: Math.random() * 5 + 2,
    //                 repeat: Infinity,
    //                 delay: Math.random() * 3
    //               }}
    //             >
    //               {String.fromCharCode(Math.random() * 100 + 65)}
    //             </motion.span>
    //           ))}
    //         </div>
    //       ),
    //     }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300">
      <style>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Text Styles Showcase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl mt-4 max-w-3xl text-gray-600 dark:text-gray-300"
          >
            30+ modern text styles with animations and effects. Click the{" "}
            <FiCopy className="inline" /> icon to copy the code!
          </motion.p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {textStyles.map((style, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group relative"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                {style.name}
              </h3>
              <div className="flex justify-center items-center h-32 mb-4">
                {style.component}
              </div>
              <button
                onClick={() => copyToClipboard(style.code, index)}
                className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                aria-label="Copy code"
              >
                {copiedIndex === index ? (
                  <FiCheck className="text-green-500" />
                ) : (
                  <FiCopy className="text-gray-600 dark:text-gray-300" />
                )}
              </button>
              {copiedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-12 right-4 bg-gray-800 text-white text-xs px-2 py-1 rounded"
                >
                  Copied!
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextStylesShowcase;
