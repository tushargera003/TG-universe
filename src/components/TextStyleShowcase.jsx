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
    // Add the remaining 27 text styles here following the same pattern
    // Make sure to replace any <style> tags with inline styles or className definitions
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
    // Continue with the rest of the styles...
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Text Styles Grid */}
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
