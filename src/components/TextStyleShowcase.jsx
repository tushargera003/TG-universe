import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const TextStylesShowcase = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Animation variants
  const textVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // Text style categories
  const textCategories = [
    {
      title: "Gradient Texts",
      styles: [
        {
          name: "Rainbow Gradient",
          code: `<motion.h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500">
  Rainbow Text
</motion.h1>`,
          component: (
            <motion.h1
              variants={textVariants}
              whileHover="hover"
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500"
            >
              Rainbow Text
            </motion.h1>
          ),
        },
        {
          name: "Ocean Gradient",
          code: `<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
  Ocean Text
</h1>`,
          component: (
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
              Ocean Text
            </h1>
          ),
        },
        {
          name: "Sunset Gradient",
          code: `<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
  Sunset Text
</h1>`,
          component: (
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
              Sunset Text
            </h1>
          ),
        },
        {
          name: "Neon Gradient",
          code: `<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
  Neon Text
</h1>`,
          component: (
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Neon Text
            </h1>
          ),
        },
        {
          name: "Fire Gradient",
          code: `<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-600">
  Fire Text
</h1>`,
          component: (
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-600">
              Fire Text
            </h1>
          ),
        },
      ],
    },
    {
      title: "Animated Texts",
      styles: [
        {
          name: "Bouncing Text",
          code: `<motion.h1 
  animate={{ 
    y: [0, -10, 0],
  }}
  transition={{ 
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="text-4xl font-bold text-blue-500"
>
  Bouncing Text
</motion.h1>`,
          component: (
            <motion.h1
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl font-bold text-blue-500"
            >
              Bouncing Text
            </motion.h1>
          ),
        },
        {
          name: "Pulse Text",
          code: `<motion.h1 
  animate={{ 
    scale: [1, 1.05, 1],
  }}
  transition={{ 
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="text-4xl font-bold text-purple-500"
>
  Pulse Text
</motion.h1>`,
          component: (
            <motion.h1
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl font-bold text-purple-500"
            >
              Pulse Text
            </motion.h1>
          ),
        },
        {
          name: "Color Changing Text",
          code: `<motion.h1 
  animate={{ 
    color: ["#3B82F6", "#EC4899", "#10B981", "#F59E0B", "#3B82F6"]
  }}
  transition={{ 
    duration: 8,
    repeat: Infinity,
    ease: "linear"
  }}
  className="text-4xl font-bold"
>
  Color Changing
</motion.h1>`,
          component: (
            <motion.h1
              animate={{
                color: ["#3B82F6", "#EC4899", "#10B981", "#F59E0B", "#3B82F6"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-4xl font-bold"
            >
              Color Changing
            </motion.h1>
          ),
        },
        {
          name: "Wave Text",
          code: `<div className="flex">
  {'Wave Text'.split('').map((letter, i) => (
    <motion.span
      key={i}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.1
      }}
      className="text-4xl font-bold text-green-500"
    >
      {letter}
    </motion.span>
  ))}
</div>`,
          component: (
            <div className="flex">
              {"Wave Text".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  className="text-4xl font-bold text-green-500"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          ),
        },
        {
          name: "Typing Animation",
          code: `<motion.h1
  initial={{ opacity: 0, width: 0 }}
  animate={{ opacity: 1, width: "100%" }}
  transition={{ duration: 2, ease: "easeInOut" }}
  className="text-4xl font-bold text-orange-500 overflow-hidden whitespace-nowrap"
>
  Typing Effect
</motion.h1>`,
          component: (
            <motion.h1
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-4xl font-bold text-orange-500 overflow-hidden whitespace-nowrap"
            >
              Typing Effect
            </motion.h1>
          ),
        },
      ],
    },
    {
      title: "3D & Shadow Effects",
      styles: [
        {
          name: "3D Text",
          code: `<h1 className="text-4xl font-bold text-blue-500" style={{ transform: 'perspective(1000px) rotateX(20deg)' }}>
  3D Text Effect
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-blue-500"
              style={{ transform: "perspective(1000px) rotateX(20deg)" }}
            >
              3D Text Effect
            </h1>
          ),
        },
        {
          name: "Hard Shadow",
          code: `<h1 className="text-4xl font-bold text-gray-800 relative">
  <span className="relative z-10">Hard Shadow</span>
  <span className="absolute left-1 top-1 text-gray-400 -z-10" style={{ content: '"Hard Shadow"' }}></span>
</h1>`,
          component: (
            <h1 className="text-4xl font-bold text-gray-800 relative">
              <span className="relative z-10">Hard Shadow</span>
              <span
                className="absolute left-1 top-1 text-gray-400 -z-10"
                style={{ content: '"Hard Shadow"' }}
              ></span>
            </h1>
          ),
        },
        {
          name: "Soft Shadow",
          code: `<h1 className="text-4xl font-bold text-gray-800" style={{ filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))' }}>
  Soft Shadow
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-gray-800"
              style={{
                filter:
                  "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))",
              }}
            >
              Soft Shadow
            </h1>
          ),
        },
        {
          name: "Neon Glow",
          code: `<h1 className="text-4xl font-bold text-pink-500" style={{ textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00de, 0 0 20px #ff00de' }}>
  Neon Glow
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-pink-500"
              style={{
                textShadow:
                  "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00de, 0 0 20px #ff00de",
              }}
            >
              Neon Glow
            </h1>
          ),
        },
        {
          name: "Text Outline",
          code: `<h1 className="text-4xl font-bold" style={{ WebkitTextStroke: '2px #3B82F6', color: 'transparent' }}>
  Text Outline
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold"
              style={{ WebkitTextStroke: "2px #3B82F6", color: "transparent" }}
            >
              Text Outline
            </h1>
          ),
        },
      ],
    },
    {
      title: "Creative Typography",
      styles: [
        {
          name: "Handwritten Style",
          code: `<h1 className="text-4xl" style={{ fontFamily: "'Caveat', cursive", color: '#3B82F6' }}>
  Handwritten
</h1>`,
          component: (
            <h1
              className="text-4xl"
              style={{ fontFamily: "'Caveat', cursive", color: "#3B82F6" }}
            >
              Handwritten
            </h1>
          ),
        },
        {
          name: "Retro Style",
          code: `<h1 className="text-4xl" style={{ fontFamily: "'Press Start 2P', cursive", color: '#F59E0B' }}>
  Retro Style
</h1>`,
          component: (
            <h1
              className="text-4xl"
              style={{
                fontFamily: "'Press Start 2P', cursive",
                color: "#F59E0B",
              }}
            >
              Retro Style
            </h1>
          ),
        },
        {
          name: "Elegant Serif",
          code: `<h1 className="text-4xl font-serif italic font-bold text-gray-800 tracking-wider">
  Elegant Serif
</h1>`,
          component: (
            <h1 className="text-4xl font-serif italic font-bold text-gray-800 tracking-wider">
              Elegant Serif
            </h1>
          ),
        },
        {
          name: "Modern Sans",
          code: `<h1 className="text-4xl font-sans font-extrabold text-gray-900 tracking-tight">
  Modern Sans
</h1>`,
          component: (
            <h1 className="text-4xl font-sans font-extrabold text-gray-900 tracking-tight">
              Modern Sans
            </h1>
          ),
        },
        {
          name: "Monospace Code",
          code: `<h1 className="text-4xl font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded text-green-600">
  Monospace Code
</h1>`,
          component: (
            <h1 className="text-4xl font-mono bg-gray-100 dark:bg-gray-700 p-2 rounded text-green-600">
              Monospace Code
            </h1>
          ),
        },
      ],
    },
    {
      title: "Interactive Effects",
      styles: [
        {
          name: "Hover Scale",
          code: `<motion.h1 
  whileHover={{ scale: 1.1 }}
  className="text-4xl font-bold text-purple-600 cursor-pointer"
>
  Hover Me
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="text-4xl font-bold text-purple-600 cursor-pointer"
            >
              Hover Me
            </motion.h1>
          ),
        },
        {
          name: "Hover Color Change",
          code: `<motion.h1 
  whileHover={{ color: "#EC4899" }}
  className="text-4xl font-bold text-blue-500 cursor-pointer transition-colors"
>
  Hover Color
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{ color: "#EC4899" }}
              className="text-4xl font-bold text-blue-500 cursor-pointer transition-colors"
            >
              Hover Color
            </motion.h1>
          ),
        },
        {
          name: "Hover Underline",
          code: `<h1 className="text-4xl font-bold text-gray-800 group cursor-pointer">
  <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-no-repeat bg-[length:0%_2px] bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
    Hover Underline
  </span>
</h1>`,
          component: (
            <h1 className="text-4xl font-bold text-gray-800 group cursor-pointer">
              <span className="bg-gradient-to-r from-blue-500 to-blue-500 bg-no-repeat bg-[length:0%_2px] bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Hover Underline
              </span>
            </h1>
          ),
        },
        {
          name: "Hover Gradient Shift",
          code: `<motion.h1
  whileHover={{ backgroundPosition: '100%' }}
  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-[length:200%] cursor-pointer"
  style={{ backgroundPosition: '0%' }}
  transition={{ duration: 0.5 }}
>
  Hover Gradient
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{ backgroundPosition: "100%" }}
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-[length:200%] cursor-pointer"
              style={{ backgroundPosition: "0%" }}
              transition={{ duration: 0.5 }}
            >
              Hover Gradient
            </motion.h1>
          ),
        },
        {
          name: "Hover Letter Spacing",
          code: `<motion.h1
  whileHover={{ letterSpacing: '2px' }}
  className="text-4xl font-bold text-green-600 cursor-pointer transition-all"
>
  Hover Spacing
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{ letterSpacing: "2px" }}
              className="text-4xl font-bold text-green-600 cursor-pointer transition-all"
            >
              Hover Spacing
            </motion.h1>
          ),
        },
      ],
    },
    {
      title: "Background Effects",
      styles: [
        {
          name: "Highlight Text",
          code: `<h1 className="text-4xl font-bold relative inline-block">
  <span className="relative z-10">Highlight</span>
  <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 z-0 opacity-70"></span>
</h1>`,
          component: (
            <h1 className="text-4xl font-bold relative inline-block">
              <span className="relative z-10">Highlight</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-300 z-0 opacity-70"></span>
            </h1>
          ),
        },
        {
          name: "Text on Image",
          code: `<div className="relative">
  <img 
    src="https://picsum.photos/400/200" 
    alt="Random" 
    className="w-full h-48 object-cover rounded-lg"
  />
  <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white text-center" style={{ textShadow: '0 0 10px rgba(0,0,0,0.8)' }}>
    Text on Image
  </h1>
</div>`,
          component: (
            <div className="relative">
              <img
                src="https://picsum.photos/400/200"
                alt="Random"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h1
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white text-center"
                style={{ textShadow: "0 0 10px rgba(0,0,0,0.8)" }}
              >
                Text on Image
              </h1>
            </div>
          ),
        },
        {
          name: "Clipped Background",
          code: `<h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 p-2 rounded" style={{ backgroundColor: 'white' }}>
  Clipped Background
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 p-2 rounded"
              style={{ backgroundColor: "white" }}
            >
              Clipped Background
            </h1>
          ),
        },
        {
          name: "Text with Border",
          code: `<h1 className="text-4xl font-bold text-gray-800 p-4 rounded-lg" style={{ border: '4px solid #3B82F6' }}>
  Text with Border
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-gray-800 p-4 rounded-lg"
              style={{ border: "4px solid #3B82F6" }}
            >
              Text with Border
            </h1>
          ),
        },
        {
          name: "Text with Pattern",
          code: `<h1 className="text-4xl font-bold" style={{ 
            backgroundImage: 'linear-gradient(45deg, #ef4444 25%, #3b82f6 25%, #3b82f6 50%, #ef4444 50%, #ef4444 75%, #3b82f6 75%, #3b82f6 100%)',
            backgroundSize: '56.57px 56.57px',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
  Pattern Text
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #ef4444 25%, #3b82f6 25%, #3b82f6 50%, #ef4444 50%, #ef4444 75%, #3b82f6 75%, #3b82f6 100%)",
                backgroundSize: "56.57px 56.57px",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Pattern Text
            </h1>
          ),
        },
      ],
    },
    {
      title: "Special Effects",
      styles: [
        {
          name: "Glitch Effect",
          code: `<div className="relative">
          <h1 className="text-4xl font-bold text-red-500 glitch" data-text="Glitch Effect">
            Glitch Effect
          </h1>
          <style>
            {\\\`
              .glitch {
                position: relative;
              }
              .glitch::before, .glitch::after {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
              .glitch::before {
                left: 2px;
                text-shadow: -2px 0 #00f;
                animation: glitch-effect 3s infinite linear alternate-reverse;
              }
              .glitch::after {
                left: -2px;
                text-shadow: -2px 0 #f00;
                animation: glitch-effect 2s infinite linear alternate-reverse;
              }
              @keyframes glitch-effect {
                0% { clip: rect(44px, 450px, 56px, 0); }
                20% { clip: rect(12px, 450px, 76px, 0); }
                40% { clip: rect(28px, 450px, 84px, 0); }
                60% { clip: rect(62px, 450px, 102px, 0); }
                80% { clip: rect(91px, 450px, 98px, 0); }
                100% { clip: rect(13px, 450px, 96px, 0); }
              }
            \\\`}
          </style>
        </div>`,
          component: (
            <div className="relative">
              <h1
                className="text-4xl font-bold text-red-500 glitch"
                data-text="Glitch Effect"
              >
                Glitch Effect
              </h1>
              <style>{`
                .glitch {
                  position: relative;
                }
                .glitch::before, .glitch::after {
                  content: attr(data-text);
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                }
                .glitch::before {
                  left: 2px;
                  text-shadow: -2px 0 #00f;
                  animation: glitch-effect 3s infinite linear alternate-reverse;
                }
                .glitch::after {
                  left: -2px;
                  text-shadow: -2px 0 #f00;
                  animation: glitch-effect 2s infinite linear alternate-reverse;
                }
                @keyframes glitch-effect {
                  0% { clip: rect(44px, 450px, 56px, 0); }
                  20% { clip: rect(12px, 450px, 76px, 0); }
                  40% { clip: rect(28px, 450px, 84px, 0); }
                  60% { clip: rect(62px, 450px, 102px, 0); }
                  80% { clip: rect(91px, 450px, 98px, 0); }
                  100% { clip: rect(13px, 450px, 96px, 0); }
                }
              `}</style>
            </div>
          ),
        },

        {
          name: "Flicker Effect",
          code: `<h1 className="text-4xl font-bold text-yellow-400" style={{ 
            animation: 'flicker 5s infinite alternate',
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0, 0 0 40px #ff0'
          }}>
  Flicker Text
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-yellow-400"
              style={{
                animation: "flicker 5s infinite alternate",
                textShadow:
                  "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0, 0 0 40px #ff0",
              }}
            >
              Flicker Text
            </h1>
          ),
        },
        {
          name: "Smoke Effect",
          code: `<div className="flex justify-center">
          {['S','M','O','K','E'].map((letter, i) => {
            return (
              <span
                key={i}
                className="text-4xl font-bold text-white relative"
                style={{
                  textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de',
                  animation: 'smoke 3s linear infinite',
                  animationDelay: i * 0.1 + 's'
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
        
        <style>
        @keyframes smoke {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-20px);
            opacity: 0;
          }
        }
        </style>`,
          component: (
            <div className="flex justify-center">
              {["S", "M", "O", "K", "E"].map((letter, i) => (
                <span
                  key={i}
                  className="text-4xl font-bold text-white relative"
                  style={{
                    textShadow:
                      "0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00de, 0 0 35px #ff00de, 0 0 40px #ff00de, 0 0 50px #ff00de, 0 0 75px #ff00de",
                    animation: "smoke 3s linear infinite",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
              <style>
                {`@keyframes smoke {
                    0% {
                      transform: translateY(0);
                      opacity: 1;
                    }
                    100% {
                      transform: translateY(-20px);
                      opacity: 0;
                    }
                }`}
              </style>
            </div>
          ),
        },

        {
          name: "Water Reflection",
          code: `<div className="relative inline-block">
  <h1 className="text-4xl font-bold text-blue-600">WATER</h1>
  <h1 className="text-4xl font-bold text-blue-600 absolute top-full left-0 transform scale-y-[-1] opacity-30" style={{ 
    maskImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))',
    WebkitMaskImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))'
  }}>
    WATER
  </h1>
</div>`,
          component: (
            <div className="relative inline-block">
              <h1 className="text-4xl font-bold text-blue-600">WATER</h1>
              <h1
                className="text-4xl font-bold text-blue-600 absolute top-full left-0 transform scale-y-[-1] opacity-30"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))",
                }}
              >
                WATER
              </h1>
            </div>
          ),
        },
        {
          name: "Holographic Text",
          code: `<h1 className="text-4xl font-bold" style={{ 
            color: 'transparent',
            background: 'linear-gradient(90deg, #ff00cc, #3333ff, #00ccff, #33cc33, #ffff00, #ff00cc)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            animation: 'holographic 8s ease infinite'
          }}>
  HOLOGRAPHIC
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold"
              style={{
                color: "transparent",
                background:
                  "linear-gradient(90deg, #ff00cc, #3333ff, #00ccff, #33cc33, #ffff00, #ff00cc)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                animation: "holographic 8s ease infinite",
              }}
            >
              HOLOGRAPHIC
            </h1>
          ),
        },
      ],
    },
    {
      title: "Creative Layouts",
      styles: [
        {
          name: "Vertical Text",
          code: `<h1 className="text-4xl font-bold text-blue-600" style={{ 
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)'
          }}>
  Vertical Text
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-blue-600"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Vertical Text
            </h1>
          ),
        },
        {
          name: "Circular Text",
          code: `<div className="w-40 h-40 rounded-full flex items-center justify-center">
  <svg viewBox="0 0 100 100" width="100" height="100">
    <defs>
      <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
    </defs>
    <text fontSize="12" fill="#3B82F6" fontWeight="bold">
      <textPath xlinkHref="#circle">• Circular Text Effect • Circular Text Effect •</textPath>
    </text>
  </svg>
</div>`,
          component: (
            <div className="w-40 h-40 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                  <path
                    id="circle"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text fontSize="12" fill="#3B82F6" fontWeight="bold">
                  <textPath xlinkHref="#circle">
                    • Circular Text Effect • Circular Text Effect •
                  </textPath>
                </text>
              </svg>
            </div>
          ),
        },
        {
          name: "Stacked Text",
          code: `<div className="relative h-16">
  <h1 className="text-4xl font-bold absolute text-gray-300">Stacked</h1>
  <h1 className="text-4xl font-bold absolute top-1 left-1 text-gray-800">Stacked</h1>
</div>`,
          component: (
            <div className="relative h-16">
              <h1 className="text-4xl font-bold absolute text-gray-300">
                Stacked
              </h1>
              <h1 className="text-4xl font-bold absolute top-1 left-1 text-gray-800">
                Stacked
              </h1>
            </div>
          ),
        },
        {
          name: "Text with Icon",
          code: `<h1 className="text-4xl font-bold flex items-center text-purple-600">
  <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
  </svg>
  With Icon
</h1>`,
          component: (
            <h1 className="text-4xl font-bold flex items-center text-purple-600">
              <svg
                className="w-8 h-8 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                  clipRule="evenodd"
                />
              </svg>
              With Icon
            </h1>
          ),
        },
        {
          name: "Text with Divider",
          code: `<div className="flex items-center">
  <div className="flex-1 h-px bg-gray-300"></div>
  <h1 className="px-4 text-4xl font-bold text-gray-700">Divider</h1>
  <div className="flex-1 h-px bg-gray-300"></div>
</div>`,
          component: (
            <div className="flex items-center">
              <div className="flex-1 h-px bg-gray-300"></div>
              <h1 className="px-4 text-4xl font-bold text-gray-700">Divider</h1>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Experimental Styles",
      styles: [
        {
          name: "Liquid Text",
          code: `<h1 className="text-4xl font-bold relative" style={{ 
            color: 'transparent',
            WebkitTextStroke: '2px #00b4d8',
            animation: 'liquid 4s ease-in-out infinite'
          }}>
  Liquid Text
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold relative"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #00b4d8",
                animation: "liquid 4s ease-in-out infinite",
              }}
            >
              Liquid Text
            </h1>
          ),
        },
        {
          name: "Text Distortion",
          code: `<h1 className="text-4xl font-bold" style={{ 
            animation: 'distortion 5s infinite alternate'
          }}>
  Distortion
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold"
              style={{
                animation: "distortion 5s infinite alternate",
              }}
            >
              Distortion
            </h1>
          ),
        },
        {
          name: "Text Morph",
          code: `<h1 className="text-4xl font-bold" style={{ 
            animation: 'morph 8s ease-in-out infinite',
            background: 'linear-gradient(90deg, #ff8a00, #e52e71, #6610f2, #198754, #ff8a00)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
  Morphing
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold"
              style={{
                animation: "morph 8s ease-in-out infinite",
                background:
                  "linear-gradient(90deg, #ff8a00, #e52e71, #6610f2, #198754, #ff8a00)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Morphing
            </h1>
          ),
        },
        {
          name: "Text Shatter",
          code: `<div className="flex">
  {['S','H','A','T','T','E','R'].map((letter, i) => (
    <motion.span
      key={i}
      className="text-4xl font-bold text-red-500 inline-block"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        opacity: [1, 0.5, 1]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: i * 0.1
      }}
    >
      {letter}
    </motion.span>
  ))}
</div>`,
          component: (
            <div className="flex">
              {["S", "H", "A", "T", "T", "E", "R"].map((letter, i) => (
                <motion.span
                  key={i}
                  className="text-4xl font-bold text-red-500 inline-block"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          ),
        },
        {
          name: "Text Particles",
          code: `import { motion } from "framer-motion";
        
        const ParticleText = () => {
          const particles = [...Array(20)].map((_, i) => ({
            key: i,
            size: Math.random() * 5 + 2,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 3,
            xMove: (Math.random() - 0.5) * 50
          }));
        
          return (
            <div className="relative">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Particles
              </h1>
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {particles.map(p => (
                  <motion.div
                    key={p.key}
                    className="absolute rounded-full bg-purple-400"
                    style={{
                      width: p.size,
                      height: p.size,
                      left: \`\${p.left}%\`,
                      top: \`\${p.top}%\`
                    }}
                    animate={{
                      y: [0, -50],
                      x: [0, p.xMove],
                      opacity: [1, 0]
                    }}
                    transition={{
                      duration: p.duration,
                      repeat: Infinity,
                      delay: p.delay
                    }}
                  />
                ))}
              </div>
            </div>
          );
        };
        
        export default ParticleText;`,
          component: (
            <div className="relative">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Particles
              </h1>
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => {
                  const size = Math.random() * 5 + 2;
                  const left = Math.random() * 100;
                  const top = Math.random() * 100;
                  const duration = Math.random() * 3 + 2;
                  const delay = Math.random() * 3;
                  const xMove = (Math.random() - 0.5) * 50;

                  return (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-purple-400"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${left}%`,
                        top: `${top}%`,
                      }}
                      animate={{
                        y: [0, -50],
                        x: [0, xMove],
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration,
                        repeat: Infinity,
                        delay,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  const additionalCategories = [
    {
      title: "Advanced Animations",
      styles: [
        {
          name: "Floating Text",
          code: `<motion.h1
  animate={{
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0]
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="text-4xl font-bold text-indigo-600"
>
  Floating Text
</motion.h1>`,
          component: (
            <motion.h1
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl font-bold text-indigo-600"
            >
              Floating Text
            </motion.h1>
          ),
        },
        {
          name: "Text Jiggle",
          code: `<motion.h1
  whileHover={{
    rotate: [-5, 5, -5, 5, 0],
    transition: { duration: 0.5 }
  }}
  className="text-4xl font-bold text-pink-500 cursor-pointer"
>
  Jiggle Me
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{
                rotate: [-5, 5, -5, 5, 0],
                transition: { duration: 0.5 },
              }}
              className="text-4xl font-bold text-pink-500 cursor-pointer"
            >
              Jiggle Me
            </motion.h1>
          ),
        },
        {
          name: "3D Rotate",
          code: `<motion.h1
  whileHover={{
    rotateX: 360,
    rotateY: 360,
    transition: { duration: 1.5 }
  }}
  className="text-4xl font-bold text-green-500 cursor-pointer"
>
  3D Rotate
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{
                rotateX: 360,
                rotateY: 360,
                transition: { duration: 1.5 },
              }}
              className="text-4xl font-bold text-green-500 cursor-pointer"
            >
              3D Rotate
            </motion.h1>
          ),
        },
        {
          name: "Text Bounce",
          code: `<motion.h1
  animate={{
    scale: [1, 1.2, 1],
    y: [0, -20, 0]
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    repeatDelay: 0.5
  }}
  className="text-4xl font-bold text-yellow-500"
>
  Bounce!
</motion.h1>`,
          component: (
            <motion.h1
              animate={{
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="text-4xl font-bold text-yellow-500"
            >
              Bounce!
            </motion.h1>
          ),
        },
        {
          name: "Text Shake",
          code: `<motion.h1
  whileHover={{
    x: [0, 10, -10, 10, -10, 0],
    transition: { duration: 0.5 }
  }}
  className="text-4xl font-bold text-red-500 cursor-pointer"
>
  Shake Me
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{
                x: [0, 10, -10, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
              className="text-4xl font-bold text-red-500 cursor-pointer"
            >
              Shake Me
            </motion.h1>
          ),
        },
      ],
    },
    {
      title: "Creative Effects",
      styles: [
        {
          name: "Text Reveal",
          code: `<motion.div
  initial={{ opacity: 0, width: 0 }}
  animate={{ opacity: 1, width: "100%" }}
  transition={{ duration: 1.5, delay: 0.5 }}
  className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden whitespace-nowrap"
>
  Text Reveal Effect
</motion.div>`,
          component: (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden whitespace-nowrap"
            >
              Text Reveal Effect
            </motion.div>
          ),
        },
        {
          name: "Text Blur",
          code: `<motion.h1
  whileHover={{ filter: "blur(0px)" }}
  initial={{ filter: "blur(4px)" }}
  className="text-4xl font-bold text-blue-500 cursor-pointer transition-all duration-300"
>
  Hover to Focus
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{ filter: "blur(0px)" }}
              initial={{ filter: "blur(4px)" }}
              className="text-4xl font-bold text-blue-500 cursor-pointer transition-all duration-300"
            >
              Hover to Focus
            </motion.h1>
          ),
        },
        {
          name: "Text Shadow Grow",
          code: `<motion.h1
  whileHover={{
    textShadow: "0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6)",
    transition: { duration: 0.3 }
  }}
  className="text-4xl font-bold text-blue-500 cursor-pointer"
>
  Shadow Grow
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{
                textShadow:
                  "0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6)",
                transition: { duration: 0.3 },
              }}
              className="text-4xl font-bold text-blue-500 cursor-pointer"
            >
              Shadow Grow
            </motion.h1>
          ),
        },
        {
          name: "Text Stretch",
          code: `<motion.h1
  whileHover={{
    scaleX: 1.1,
    transition: { duration: 0.3 }
  }}
  className="text-4xl font-bold text-green-600 cursor-pointer origin-left"
>
  Stretch Me
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{
                scaleX: 1.1,
                transition: { duration: 0.3 },
              }}
              className="text-4xl font-bold text-green-600 cursor-pointer origin-left"
            >
              Stretch Me
            </motion.h1>
          ),
        },
        {
          name: "Text Flip",
          code: `<motion.h1
  whileHover={{
    rotateY: 180,
    transition: { duration: 0.6 }
  }}
  className="text-4xl font-bold text-purple-600 cursor-pointer"
>
  Flip Me
</motion.h1>`,
          component: (
            <motion.h1
              whileHover={{
                rotateY: 180,
                transition: { duration: 0.6 },
              }}
              className="text-4xl font-bold text-purple-600 cursor-pointer"
            >
              Flip Me
            </motion.h1>
          ),
        },
      ],
    },
    {
      title: "Modern Gradients",
      styles: [
        {
          name: "Metallic Gradient",
          code: `<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300">
  Metallic Text
</h1>`,
          component: (
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300">
              Metallic Text
            </h1>
          ),
        },
        {
          name: "Ocean Wave Gradient",
          code: `<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">
  Ocean Wave
</h1>`,
          component: (
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600">
              Ocean Wave
            </h1>
          ),
        },
        {
          name: "Sunrise Gradient",
          code: `<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-400">
  Sunrise Text
</h1>`,
          component: (
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-400">
              Sunrise Text
            </h1>
          ),
        },
        {
          name: "Electric Gradient",
          code: `<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  Electric Text
</h1>`,
          component: (
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Electric Text
            </h1>
          ),
        },
        {
          name: "Neon Sign Gradient",
          code: `<h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600">
  Neon Sign
</h1>`,
          component: (
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600">
              Neon Sign
            </h1>
          ),
        },
      ],
    },
    {
      title: "Dynamic Backgrounds",
      styles: [
        {
          name: "Animated Gradient BG",
          code: `<motion.h1
  animate={{
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
  }}
  transition={{
    duration: 8,
    repeat: Infinity
  }}
  className="text-4xl font-bold text-white p-4 rounded-lg"
  style={{
    background: 'linear-gradient(270deg, #ff8a00, #e52e71, #6610f2, #198754, #ff8a00)',
    backgroundSize: '500% 500%'
  }}
>
  Gradient Background
</motion.h1>`,
          component: (
            <motion.h1
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="text-4xl font-bold text-white p-4 rounded-lg"
              style={{
                background:
                  "linear-gradient(270deg, #ff8a00, #e52e71, #6610f2, #198754, #ff8a00)",
                backgroundSize: "500% 500%",
              }}
            >
              Gradient Background
            </motion.h1>
          ),
        },
        {
          name: "Particle Background",
          code: `<div className="relative bg-blue-600 p-4 rounded-lg">
            <h1 className="text-4xl font-bold text-white z-10 relative">
              Particle Text
            </h1>
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              {[...Array(30)].map((_, i) => {
                return (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white opacity-30"
                    style={{
                      width: \`\${Math.random() * 10 + 2}px\`,
                      height: \`\${Math.random() * 10 + 2}px\`,
                      left: \`\${Math.random() * 100}%\`,
                      top: \`\${Math.random() * 100}%\`
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 100],
                      y: [0, (Math.random() - 0.5) * 100],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: Math.random() * 5 + 3,
                      repeat: Infinity,
                      repeatType: 'reverse'
                    }}
                  />
                );
              })}
            </div>
          </div>`,
          component: (
            <div className="relative bg-blue-600 p-4 rounded-lg">
              <h1 className="text-4xl font-bold text-white z-10 relative">
                Particle Text
              </h1>
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white opacity-30"
                    style={{
                      width: `${Math.random() * 10 + 2}px`,
                      height: `${Math.random() * 10 + 2}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      x: [0, (Math.random() - 0.5) * 100],
                      y: [0, (Math.random() - 0.5) * 100],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>
            </div>
          ),
        },
        {
          name: "Noise Texture",
          code: `<h1 className="text-4xl font-bold relative">
  <span className="relative z-10">Noise Texture</span>
  <span className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></span>
</h1>`,
          component: (
            <h1 className="text-4xl font-bold relative text-gray-800">
              <span className="relative z-10">Noise Texture</span>
              <span className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></span>
            </h1>
          ),
        },
        {
          name: "Glass Morphism",
          code: `<h1 className="text-4xl font-bold text-white backdrop-blur-md bg-white/30 p-4 rounded-lg border border-white/20 shadow-lg">
  Glass Text
</h1>`,
          component: (
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg">
              <h1 className="text-4xl font-bold text-white backdrop-blur-md bg-white/30 p-4 rounded-lg border border-white/20 shadow-lg">
                Glass Text
              </h1>
            </div>
          ),
        },
        {
          name: "Holographic Card",
          code: `<div className="relative overflow-hidden p-6 rounded-lg" style={{
            background: 'linear-gradient(45deg, rgba(255,0,204,0.3), rgba(51,51,255,0.3), rgba(0,204,255,0.3))'
          }}>
  <h1 className="text-4xl font-bold text-white relative z-10">
    Holographic
  </h1>
  <motion.div 
    className="absolute inset-0 opacity-30"
    animate={{
      backgroundPosition: ['0% 0%', '100% 100%']
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      repeatType: 'reverse'
    }}
    style={{
      background: 'linear-gradient(45deg, #ff00cc, #3333ff, #00ccff, #33cc33, #ffff00, #ff00cc)',
      backgroundSize: '400% 400%'
    }}
  />
</div>`,
          component: (
            <div
              className="relative overflow-hidden p-6 rounded-lg"
              style={{
                background:
                  "linear-gradient(45deg, rgba(255,0,204,0.3), rgba(51,51,255,0.3), rgba(0,204,255,0.3))",
              }}
            >
              <h1 className="text-4xl font-bold text-white relative z-10">
                Holographic
              </h1>
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  background:
                    "linear-gradient(45deg, #ff00cc, #3333ff, #00ccff, #33cc33, #ffff00, #ff00cc)",
                  backgroundSize: "400% 400%",
                }}
              />
            </div>
          ),
        },
      ],
    },
    {
      title: "elegant styles",
      styles: [
        {
          name: "Elegant Wavy Lines",
          code: `<motion.div
    className="text-4xl font-bold text-white p-4 rounded-lg"
    style={{
      background: 'repeating-linear-gradient(-45deg, #6b21a8, #6b21a8 10px, #db2777 10px, #db2777 20px)',
      backgroundSize: '200% 200%'
    }}
    animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
  >
    Elegant Wavy Lines
  </motion.div>`,
          component: (
            <motion.div
              className="text-4xl font-bold text-white p-4 rounded-lg"
              style={{
                background:
                  "repeating-linear-gradient(-45deg, #6b21a8, #6b21a8 10px, #db2777 10px, #db2777 20px)",
                backgroundSize: "200% 200%",
              }}
              animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              Elegant Wavy Lines
            </motion.div>
          ),
        },
        {
          name: "Elegant Mosaic Fade",
          code: `<div className="p-4 rounded-lg overflow-hidden relative bg-gray-900">
    {[...Array(25)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute bg-white/20"
        style={{
          width: '20%',
          height: '20%',
          top: \`\${Math.floor(i/5) * 20}%\`,
          left: \`\${(i%5) * 20}%\`
        }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: (i%5 + Math.floor(i/5)) * 0.1, duration: 2, repeat: Infinity }}
      />
    ))}
    <h1 className="relative text-3xl font-semibold text-white">Elegant Mosaic</h1>
  </div>`,
          component: (
            <div className="p-4 rounded-lg overflow-hidden relative bg-gray-900">
              {[...Array(25)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute bg-white/20"
                  style={{
                    width: "20%",
                    height: "20%",
                    top: `${Math.floor(i / 5) * 20}%`,
                    left: `${(i % 5) * 20}%`,
                  }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    delay: ((i % 5) + Math.floor(i / 5)) * 0.1,
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              ))}
              <h1 className="relative text-3xl font-semibold text-white">
                Elegant Mosaic
              </h1>
            </div>
          ),
        },
        {
          name: "Elegant Starlight",
          code: `<div className="p-4 rounded-lg bg-gradient-to-tr from-black to-gray-800 relative">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-white rounded-full"
        style={{
          width: '2px',
          height: '2px',
          top: \`\${Math.random()*100}%\`,
          left: \`\${Math.random()*100}%\`
        }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ delay: Math.random()*5, duration: 1.5, repeat: Infinity }}
      />
    ))}
    <h1 className="relative text-4xl font-bold text-white">Starlight</h1>
  </div>`,
          component: (
            <div className="p-4 rounded-lg bg-gradient-to-tr from-black to-gray-800 relative">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: "2px",
                    height: "2px",
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    delay: Math.random() * 5,
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              ))}
              <h1 className="relative text-4xl font-bold text-white">
                Starlight
              </h1>
            </div>
          ),
        },
        {
          name: "Elegant Ripple Overlay",
          code: `<div className="relative p-6 rounded-lg overflow-hidden" style={{ background: '#1f2937' }}>
      <h1 className="text-3xl font-bold text-white relative z-10">Ripple Overlay</h1>
      <motion.div
        className="absolute inset-0 bg-white/10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          borderRadius: '50%',
          top: '25%',
          left: '25%',
          width: '50%',
          height: '50%'
        }}
      />
    </div>`,
          component: (
            <div
              className="relative p-6 rounded-lg overflow-hidden"
              style={{ background: "#1f2937" }}
            >
              <h1 className="text-3xl font-bold text-white relative z-10">
                Ripple Overlay
              </h1>
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  borderRadius: "50%",
                  top: "25%",
                  left: "25%",
                  width: "50%",
                  height: "50%",
                }}
              />
            </div>
          ),
        },
        {
          name: "Elegant Chromatic Aberration",
          code:
            `<div className="relative p-6 rounded-lg" style={{ background: '#111827' }}>
      <h1 className="text-4xl font-bold text-white relative glitch-ab">
        Chromatic Aberration
      </h1>
      <style>
        {` +
            "" +
            `.glitch-ab::before, .glitch-ab::after {` +
            "" +
            `  content: 'Chromatic Aberration';` +
            "" +
            `  position: absolute;` +
            "" +
            `  top: 0; left: 0;` +
            "" +
            `  clip: rect(0, 900px, 0, 0);` +
            " " +
            `}` +
            "" +
            `.glitch-ab::before {` +
            "" +
            `  left: 2px; text-shadow: -2px 0 red; animation: cab-anim 2s infinite;` +
            "" +
            `}` +
            "" +
            `.glitch-ab::after {` +
            "" +
            `  left: -2px; text-shadow: -2px 0 cyan; animation: cab-anim 2s infinite reverse;` +
            "" +
            `}` +
            " " +
            `@keyframes cab-anim {` +
            "" +
            `  0% { clip: rect(10px, 9999px, 60px, 0); }` +
            "" +
            `  50% { clip: rect(80px, 9999px, 140px, 0); }` +
            "" +
            `  100% { clip: rect(10px, 9999px, 60px, 0); }` +
            " " +
            `}`,
          component: (
            <div
              className="relative p-6 rounded-lg"
              style={{ background: "#111827" }}
            >
              <h1 className="text-4xl font-bold text-white relative glitch-ab">
                Chromatic Aberration
              </h1>
              <style>{`
            .glitch-ab::before, .glitch-ab::after {
              content: 'Chromatic Aberration';
              position: absolute;
              top: 0; left: 0;
              clip: rect(0, 900px, 0, 0);
            }
            .glitch-ab::before {
              left: 2px; text-shadow: -2px 0 red; animation: cab-anim 2s infinite;
            }
            .glitch-ab::after {
              left: -2px; text-shadow: -2px 0 cyan; animation: cab-anim 2s infinite reverse;
            }
            @keyframes cab-anim {
              0% { clip: rect(10px, 9999px, 60px, 0); }
              50% { clip: rect(80px, 9999px, 140px, 0); }
              100% { clip: rect(10px, 9999px, 60px, 0); }
            }
          `}</style>
            </div>
          ),
        },
      ],
    },
    {
      title: "Creative Typography",
      styles: [
        {
          name: "Text Mask Image",
          code: `<div className="relative">
  <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-[url('https://picsum.photos/400/200')]">
    Image Text
  </h1>
</div>`,
          component: (
            <div className="relative">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-[url('https://picsum.photos/400/200')]">
                Image Text
              </h1>
            </div>
          ),
        },
        {
          name: "Text Stroke",
          code: `<h1 className="text-4xl font-bold" style={{
            WebkitTextStroke: '2px #3B82F6',
            color: 'transparent'
          }}>
  Stroke Effect
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold"
              style={{
                WebkitTextStroke: "2px #3B82F6",
                color: "transparent",
              }}
            >
              Stroke Effect
            </h1>
          ),
        },
        {
          name: "3D Layered Text",
          code: `<div className="relative">
  <h1 className="text-4xl font-bold text-gray-300">3D Text</h1>
  <h1 className="text-4xl font-bold absolute top-0 left-0 text-gray-800" style={{
    transform: 'translate(2px, 2px)'
  }}>3D Text</h1>
</div>`,
          component: (
            <div className="relative">
              <h1 className="text-4xl font-bold text-gray-300">3D Text</h1>
              <h1
                className="text-4xl font-bold absolute top-0 left-0 text-gray-800"
                style={{
                  transform: "translate(2px, 2px)",
                }}
              >
                3D Text
              </h1>
            </div>
          ),
        },
        {
          name: "Text with Pattern",
          code: `<h1 className="text-4xl font-bold" style={{
            backgroundImage: 'linear-gradient(45deg, #ef4444 25%, #3b82f6 25%, #3b82f6 50%, #ef4444 50%, #ef4444 75%, #3b82f6 75%, #3b82f6 100%)',
            backgroundSize: '56.57px 56.57px',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
  Pattern Text
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold"
              style={{
                backgroundImage:
                  "linear-gradient(45deg, #ef4444 25%, #3b82f6 25%, #3b82f6 50%, #ef4444 50%, #ef4444 75%, #3b82f6 75%, #3b82f6 100%)",
                backgroundSize: "56.57px 56.57px",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Pattern Text
            </h1>
          ),
        },
        {
          name: "Text with Texture",
          code: `<h1 className="text-4xl font-bold" style={{
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
  Textured Text
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold"
              style={{
                backgroundImage:
                  'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              }}
            >
              Textured Text
            </h1>
          ),
        },
      ],
    },
    {
      title: "Minimalist Styles",
      styles: [
        {
          name: "Thin Weight",
          code: `<h1 className="text-4xl font-thin text-gray-800 tracking-wider">
  Thin Weight
</h1>`,
          component: (
            <h1 className="text-4xl font-thin text-gray-800 tracking-wider">
              Thin Weight
            </h1>
          ),
        },
        {
          name: "Extra Light",
          code: `<h1 className="text-4xl font-extralight text-gray-700">
  Extra Light
</h1>`,
          component: (
            <h1 className="text-4xl font-extralight text-gray-700">
              Extra Light
            </h1>
          ),
        },
        {
          name: "Light Italic",
          code: `<h1 className="text-4xl font-light italic text-gray-600">
  Light Italic
</h1>`,
          component: (
            <h1 className="text-4xl font-light italic text-gray-600">
              Light Italic
            </h1>
          ),
        },
        {
          name: "Normal Weight",
          code: `<h1 className="text-4xl font-normal text-gray-800">
  Normal Weight
</h1>`,
          component: (
            <h1 className="text-4xl font-normal text-gray-800">
              Normal Weight
            </h1>
          ),
        },
        {
          name: "Medium Weight",
          code: `<h1 className="text-4xl font-medium text-gray-900">
  Medium Weight
</h1>`,
          component: (
            <h1 className="text-4xl font-medium text-gray-900">
              Medium Weight
            </h1>
          ),
        },
      ],
    },
    {
      title: "Bold Styles",
      styles: [
        {
          name: "Semi Bold",
          code: `<h1 className="text-4xl font-semibold text-gray-900">
  Semi Bold
</h1>`,
          component: (
            <h1 className="text-4xl font-semibold text-gray-900">Semi Bold</h1>
          ),
        },
        {
          name: "Bold",
          code: `<h1 className="text-4xl font-bold text-gray-900">
  Bold Text
</h1>`,
          component: (
            <h1 className="text-4xl font-bold text-gray-900">Bold Text</h1>
          ),
        },
        {
          name: "Extra Bold",
          code: `<h1 className="text-4xl font-extrabold text-gray-900">
  Extra Bold
</h1>`,
          component: (
            <h1 className="text-4xl font-extrabold text-gray-900">
              Extra Bold
            </h1>
          ),
        },
        {
          name: "Black Weight",
          code: `<h1 className="text-4xl font-black text-gray-900">
  Black Weight
</h1>`,
          component: (
            <h1 className="text-4xl font-black text-gray-900">Black Weight</h1>
          ),
        },
        {
          name: "Ultra Bold",
          code: `<h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
  Ultra Bold
</h1>`,
          component: (
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Ultra Bold
            </h1>
          ),
        },
      ],
    },
    {
      title: "Decorative Styles",
      styles: [
        {
          name: "Underline Decoration",
          code: `<h1 className="text-4xl font-bold underline decoration-wavy decoration-blue-500 text-gray-800">
  Wavy Underline
</h1>`,
          component: (
            <h1 className="text-4xl font-bold underline decoration-wavy decoration-blue-500 text-gray-800">
              Wavy Underline
            </h1>
          ),
        },
        {
          name: "Overline",
          code: `<h1 className="text-4xl font-bold overline decoration-double decoration-pink-500 text-gray-800">
  Overline Text
</h1>`,
          component: (
            <h1 className="text-4xl font-bold overline decoration-double decoration-pink-500 text-gray-800">
              Overline Text
            </h1>
          ),
        },
        {
          name: "Line Through",
          code: `<h1 className="text-4xl font-bold line-through decoration-red-500 text-gray-800">
  Line Through
</h1>`,
          component: (
            <h1 className="text-4xl font-bold line-through decoration-red-500 text-gray-800">
              Line Through
            </h1>
          ),
        },
        {
          name: "Double Underline",
          code: `<h1 className="text-4xl font-bold underline decoration-double decoration-green-500 text-gray-800">
  Double Underline
</h1>`,
          component: (
            <h1 className="text-4xl font-bold underline decoration-double decoration-green-500 text-gray-800">
              Double Underline
            </h1>
          ),
        },
        {
          name: "Dotted Underline",
          code: `<h1 className="text-4xl font-bold underline decoration-dotted decoration-purple-500 text-gray-800">
  Dotted Underline
</h1>`,
          component: (
            <h1 className="text-4xl font-bold underline decoration-dotted decoration-purple-500 text-gray-800">
              Dotted Underline
            </h1>
          ),
        },
      ],
    },
    {
      title: "Size Variations",
      styles: [
        {
          name: "Extra Small",
          code: `<h1 className="text-xs font-bold text-gray-800">
  Extra Small Text
</h1>`,
          component: (
            <h1 className="text-xs font-bold text-gray-800">
              Extra Small Text
            </h1>
          ),
        },
        {
          name: "Small",
          code: `<h1 className="text-sm font-bold text-gray-800">
  Small Text
</h1>`,
          component: (
            <h1 className="text-sm font-bold text-gray-800">Small Text</h1>
          ),
        },
        {
          name: "Base Size",
          code: `<h1 className="text-base font-bold text-gray-800">
  Base Size Text
</h1>`,
          component: (
            <h1 className="text-base font-bold text-gray-800">
              Base Size Text
            </h1>
          ),
        },
        {
          name: "Large",
          code: `<h1 className="text-lg font-bold text-gray-800">
  Large Text
</h1>`,
          component: (
            <h1 className="text-lg font-bold text-gray-800">Large Text</h1>
          ),
        },
        {
          name: "Extra Large",
          code: `<h1 className="text-xl font-bold text-gray-800">
  Extra Large
</h1>`,
          component: (
            <h1 className="text-xl font-bold text-gray-800">Extra Large</h1>
          ),
        },
      ],
    },
    {
      title: "Huge Sizes",
      styles: [
        {
          name: "2XL",
          code: `<h1 className="text-2xl font-bold text-gray-800">
  2XL Text
</h1>`,
          component: (
            <h1 className="text-2xl font-bold text-gray-800">2XL Text</h1>
          ),
        },
        {
          name: "3XL",
          code: `<h1 className="text-3xl font-bold text-gray-800">
  3XL Text
</h1>`,
          component: (
            <h1 className="text-3xl font-bold text-gray-800">3XL Text</h1>
          ),
        },
        {
          name: "4XL",
          code: `<h1 className="text-4xl font-bold text-gray-800">
  4XL Text
</h1>`,
          component: (
            <h1 className="text-4xl font-bold text-gray-800">4XL Text</h1>
          ),
        },
        {
          name: "5XL",
          code: `<h1 className="text-5xl font-bold text-gray-800">
  5XL Text
</h1>`,
          component: (
            <h1 className="text-5xl font-bold text-gray-800">5XL Text</h1>
          ),
        },
        {
          name: "6XL",
          code: `<h1 className="text-6xl font-bold text-gray-800">
  6XL Text
</h1>`,
          component: (
            <h1 className="text-6xl font-bold text-gray-800">6XL Text</h1>
          ),
        },
      ],
    },
    {
      title: "Spacing Variations",
      styles: [
        {
          name: "Tight Tracking",
          code: `<h1 className="text-4xl font-bold tracking-tight text-gray-800">
  Tight Tracking
</h1>`,
          component: (
            <h1 className="text-4xl font-bold tracking-tight text-gray-800">
              Tight Tracking
            </h1>
          ),
        },
        {
          name: "Normal Tracking",
          code: `<h1 className="text-4xl font-bold tracking-normal text-gray-800">
  Normal Tracking
</h1>`,
          component: (
            <h1 className="text-4xl font-bold tracking-normal text-gray-800">
              Normal Tracking
            </h1>
          ),
        },
        {
          name: "Wide Tracking",
          code: `<h1 className="text-4xl font-bold tracking-wide text-gray-800">
  Wide Tracking
</h1>`,
          component: (
            <h1 className="text-4xl font-bold tracking-wide text-gray-800">
              Wide Tracking
            </h1>
          ),
        },
        {
          name: "Wider Tracking",
          code: `<h1 className="text-4xl font-bold tracking-wider text-gray-800">
  Wider Tracking
</h1>`,
          component: (
            <h1 className="text-4xl font-bold tracking-wider text-gray-800">
              Wider Tracking
            </h1>
          ),
        },
        {
          name: "Widest Tracking",
          code: `<h1 className="text-4xl font-bold tracking-widest text-gray-800">
  Widest Tracking
</h1>`,
          component: (
            <h1 className="text-4xl font-bold tracking-widest text-gray-800">
              Widest Tracking
            </h1>
          ),
        },
      ],
    },
    {
      title: "Letter Spacing",
      styles: [
        {
          name: "Tight Letter Spacing",
          code: `<h1 className="text-4xl font-bold text-gray-800" style={{ letterSpacing: '-0.05em' }}>
  Tight Letters
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-gray-800"
              style={{ letterSpacing: "-0.05em" }}
            >
              Tight Letters
            </h1>
          ),
        },
        {
          name: "Loose Letter Spacing",
          code: `<h1 className="text-4xl font-bold text-gray-800" style={{ letterSpacing: '0.2em' }}>
  Loose Letters
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-gray-800"
              style={{ letterSpacing: "0.2em" }}
            >
              Loose Letters
            </h1>
          ),
        },
        {
          name: "Variable Letter Spacing",
          code: `<h1 className="text-4xl font-bold text-gray-800" style={{ letterSpacing: '0.1em' }}>
  V A R I A B L E
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-gray-800"
              style={{ letterSpacing: "0.1em" }}
            >
              V A R I A B L E
            </h1>
          ),
        },
        {
          name: "Negative Letter Spacing",
          code: `<h1 className="text-4xl font-bold text-gray-800" style={{ letterSpacing: '-0.1em' }}>
  Negative Space
</h1>`,
          component: (
            <h1
              className="text-4xl font-bold text-gray-800"
              style={{ letterSpacing: "-0.1em" }}
            >
              Negative Space
            </h1>
          ),
        },
        {
          name: "Random Letter Spacing",
          code: `<div className="flex">
  {'RANDOM'.split('').map((letter, i) => (
    <span 
      key={i} 
      className="text-4xl font-bold text-gray-800"
      
    >
      {letter}
    </span>
  ))}
</div>`,
          component: (
            <div className="flex">
              {"RANDOM".split("").map((letter, i) => (
                <span
                  key={i}
                  className="text-4xl font-bold text-gray-800"
                  style={{ letterSpacing: `${Math.random() * 0.5}em` }}
                >
                  {letter}
                </span>
              ))}
            </div>
          ),
        },
      ],
    },
  ];
  const allCategories = [...textCategories, ...additionalCategories];
  return (
    <div
      className={`min-h-screen p-4 sm:p-8 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Text Styles Universe
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
            Explore our collection of meticulously crafted text styles with
            modern animations, gradients, and effects. Click the{" "}
            <FiCopy className="inline" /> icon to copy the code for any style!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Text Style Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-8">
                {category.styles.map((style, styleIndex) => {
                  const globalIndex = catIndex * 5 + styleIndex;
                  return (
                    <div key={styleIndex} className="group relative">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        {style.component}
                      </div>
                      <button
                        onClick={() => copyToClipboard(style.code, globalIndex)}
                        className="absolute -top-2 -right-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
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
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {style.name}
                      </p>
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

export default TextStylesShowcase;
