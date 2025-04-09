import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCopy,
  FiCheck,
  FiArrowRight,
  FiHome,
  FiPhone,
  FiMail,
  FiGithub,
  FiTwitter,
} from "react-icons/fi";

const NotFoundShowcase = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // 404 Page Designs
  const notFoundPages = [
    {
      title: "Minimal Space",
      code: `<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
  <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
  <h2 className="text-2xl font-medium text-gray-600 mb-6">Lost in Space</h2>
  <p className="text-gray-500 max-w-md mb-8">You have reached the edge of the universe. The page you requested could not be found.</p>
  <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
    Return Home
  </button>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center bg-gray-50 p-4 text-center border rounded-xl">
          <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-medium text-gray-600 mb-6">
            Lost in Space
          </h2>
          <p className="text-gray-500 max-w-md mb-8">
            You have reached the edge of the universe. The page you requested
            could not be found.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Return Home
          </button>
        </div>
      ),
    },
    {
      title: "Illustration Error",
      code: `<div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-purple-50">
  <div className="md:w-1/2 mb-8 md:mb-0">
    <img 
      src="https://picsum.photos/500/300?random=1" 
      alt="Error illustration" 
      className="w-full h-auto rounded-lg shadow-xl"
    />
  </div>
  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
    <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
    <h2 className="text-3xl font-medium text-gray-600 mb-4">404 - Page Not Found</h2>
    <p className="text-gray-500 mb-8 max-w-md">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Go Home
      </button>
      <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
        Contact Support
      </button>
    </div>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col md:flex-row items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 border rounded-xl">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://picsum.photos/500/300?random=1"
              alt="Error illustration"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
            <h2 className="text-3xl font-medium text-gray-600 mb-4">
              404 - Page Not Found
            </h2>
            <p className="text-gray-500 mb-8 max-w-md">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Go Home
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Dark Theme",
      code: `<div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 text-center">
  <div className="relative mb-8">
    <h1 className="text-9xl font-bold text-gray-800">404</h1>
    <h2 className="text-4xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      ERROR
    </h2>
  </div>
  <p className="text-gray-400 max-w-lg mb-8">
    The page you are trying to reach doesn't exist or has been moved. Please check the URL and try again.
  </p>
  <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium flex items-center gap-2 transition-colors">
    Back to Safety <FiArrowRight />
  </button>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center bg-gray-900 p-6 text-center border rounded-xl">
          <div className="relative mb-8">
            <h1 className="text-9xl font-bold text-gray-800">404</h1>
            <h2 className="text-4xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              ERROR
            </h2>
          </div>
          <p className="text-gray-400 max-w-lg mb-8">
            The page you are trying to reach doesn't exist or has been moved.
            Please check the URL and try again.
          </p>
          <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium flex items-center gap-2 transition-colors">
            Back to Safety <FiArrowRight />
          </button>
        </div>
      ),
    },
    {
      title: "Broken Robot",
      code: `<div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center">
  <div className="mb-8 relative">
    <img 
      src="https://picsum.photos/300/300?random=2" 
      alt="Broken robot" 
      className="w-48 h-48 object-cover rounded-full border-4 border-red-500 p-2"
    />
    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
      ERROR
    </div>
  </div>
  <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
  <h2 className="text-xl text-gray-600 mb-6">Page Not Found</h2>
  <p className="text-gray-500 max-w-md mb-8">
    Our robot couldn't find what you're looking for. Maybe it's on a coffee break?
  </p>
  <div className="flex gap-4">
    <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
      <FiHome className="inline mr-2" /> Home
    </button>
    <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
      <FiMail className="inline mr-2" /> Contact
    </button>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center bg-white p-6 text-center border rounded-xl">
          <div className="mb-8 relative">
            <img
              src="https://picsum.photos/300/300?random=2"
              alt="Broken robot"
              className="w-48 h-48 object-cover rounded-full border-4 border-red-500 p-2"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              ERROR
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-xl text-gray-600 mb-6">Page Not Found</h2>
          <p className="text-gray-500 max-w-md mb-8">
            Our robot couldn't find what you're looking for. Maybe it's on a
            coffee break?
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <FiHome className="inline mr-2" /> Home
            </button>
            <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <FiMail className="inline mr-2" /> Contact
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Gradient Background",
      code: `<div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-2xl w-full text-center">
    <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 mb-4">
      404
    </h1>
    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
    <p className="text-gray-600 mb-8">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
        Go to Homepage
      </button>
      <button className="px-6 py-3 bg-white border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition-colors">
        Contact Support
      </button>
    </div>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex items-center justify-center p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border rounded-xl">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl max-w-2xl w-full text-center">
            <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500 mb-4">
              404
            </h1>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                Go to Homepage
              </button>
              <button className="px-6 py-3 bg-white border-2 border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-50 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Animated Astronaut",
      code: `<div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-gray-50">
  <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img 
        src="https://picsum.photos/400/400?random=3" 
        alt="Astronaut" 
        className="w-64 h-64 object-contain"
      />
    </motion.div>
  </div>
  <div className="md:w-1/2 md:pl-12 text-center md:text-left">
    <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
    <h2 className="text-2xl font-medium text-gray-600 mb-4">Houston, we have a problem!</h2>
    <p className="text-gray-500 mb-8 max-w-md">
      The page you requested has been lost in space. Don't worry, our team is working to bring it back.
    </p>
    <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto md:mx-0">
      <FiHome /> Return to Earth
    </button>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col md:flex-row items-center justify-center p-6 bg-gray-50 border rounded-xl">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="https://picsum.photos/400/400?random=3"
                alt="Astronaut"
                className="w-64 h-64 object-contain"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
            <h2 className="text-2xl font-medium text-gray-600 mb-4">
              Houston, we have a problem!
            </h2>
            <p className="text-gray-500 mb-8 max-w-md">
              The page you requested has been lost in space. Don't worry, our
              team is working to bring it back.
            </p>
            <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto md:mx-0">
              <FiHome /> Return to Earth
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Neon Glow",
      code: `<div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 text-center">
  <motion.h1 
    className="text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    404
  </motion.h1>
  <h2 className="text-3xl font-medium text-gray-300 mb-6">Page Not Found</h2>
  <p className="text-gray-400 max-w-md mb-8">
    The page you're looking for doesn't exist or another error occurred.
  </p>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-purple-500/30 transition-all"
  >
    Go Back Home
  </motion.button>
  <div className="mt-12 flex gap-6">
    <a href="#" className="text-gray-400 hover:text-white transition-colors">
      <FiGithub size={24} />
    </a>
    <a href="#" className="text-gray-400 hover:text-white transition-colors">
      <FiTwitter size={24} />
    </a>
    <a href="#" className="text-gray-400 hover:text-white transition-colors">
      <FiMail size={24} />
    </a>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center bg-gray-900 p-6 text-center border rounded-xl">
          <motion.h1
            className="text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          <h2 className="text-3xl font-medium text-gray-300 mb-6">
            Page Not Found
          </h2>
          <p className="text-gray-400 max-w-md mb-8">
            The page you're looking for doesn't exist or another error occurred.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Go Back Home
          </motion.button>
          <div className="mt-12 flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Construction Theme",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-yellow-50 text-center">
  <div className="mb-8">
    <img 
      src="https://picsum.photos/400/200?random=4" 
      alt="Construction" 
      className="w-full max-w-md rounded-lg"
    />
  </div>
  <h1 className="text-5xl font-bold text-gray-800 mb-2">Under Construction</h1>
  <h2 className="text-2xl font-medium text-gray-600 mb-6">404 - Page Not Found</h2>
  <p className="text-gray-500 max-w-md mb-8">
    We're working hard to build this page. Please check back later!
  </p>
  <div className="flex flex-col sm:flex-row gap-4">
    <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2">
      <FiHome /> Home Page
    </button>
    <button className="px-6 py-3 bg-white border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-50 transition-colors flex items-center justify-center gap-2">
      <FiPhone /> Call Us
    </button>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-yellow-50 text-center border rounded-xl">
          <div className="mb-8">
            <img
              src="https://picsum.photos/400/200?random=4"
              alt="Construction"
              className="w-full max-w-md rounded-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Under Construction
          </h1>
          <h2 className="text-2xl font-medium text-gray-600 mb-6">
            404 - Page Not Found
          </h2>
          <p className="text-gray-500 max-w-md mb-8">
            We're working hard to build this page. Please check back later!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2">
              <FiHome /> Home Page
            </button>
            <button className="px-6 py-3 bg-white border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-50 transition-colors flex items-center justify-center gap-2">
              <FiPhone /> Call Us
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Mystical Forest",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-green-50 text-center relative overflow-hidden">
  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-200 rounded-full opacity-20"></div>
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-300 rounded-full opacity-20"></div>
  
  <div className="relative z-10">
    <img 
      src="https://picsum.photos/300/300?random=5" 
      alt="Forest" 
      className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-white shadow-lg"
    />
    <h1 className="text-8xl font-bold text-green-800 mb-2">404</h1>
    <h2 className="text-2xl font-medium text-green-700 mb-4">Lost in the Woods</h2>
    <p className="text-green-600 max-w-md mb-8">
      You've wandered off the path. Let us guide you back to safety.
    </p>
    <button className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors shadow-md">
      Find Your Way Back
    </button>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-green-50 text-center relative overflow-hidden border rounded-xl">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-green-200 rounded-full opacity-20"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-300 rounded-full opacity-20"></div>

          <div className="relative z-10">
            <img
              src="https://picsum.photos/300/300?random=5"
              alt="Forest"
              className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="text-8xl font-bold text-green-800 mb-2">404</h1>
            <h2 className="text-2xl font-medium text-green-700 mb-4">
              Lost in the Woods
            </h2>
            <p className="text-green-600 max-w-md mb-8">
              You've wandered off the path. Let us guide you back to safety.
            </p>
            <button className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors shadow-md">
              Find Your Way Back
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Puzzle Pieces",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-indigo-50 text-center">
  <div className="relative mb-8">
    <div className="absolute -inset-4 bg-indigo-100 rounded-xl transform rotate-6"></div>
    <div className="absolute -inset-4 bg-indigo-200 rounded-xl transform -rotate-3"></div>
    <div className="relative bg-white p-8 rounded-lg shadow-lg">
      <img 
        src="https://picsum.photos/200/200?random=6" 
        alt="Puzzle" 
        className="w-32 h-32 mx-auto mb-4"
      />
      <h1 className="text-6xl font-bold text-indigo-800 mb-2">404</h1>
      <h2 className="text-xl font-medium text-gray-600">Missing Puzzle Piece</h2>
    </div>
  </div>
  <p className="text-gray-600 max-w-md mb-8">
    We couldn't find the piece you're looking for. Maybe try another part of the puzzle?
  </p>
  <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 mx-auto">
    <FiHome /> Back to Home
  </button>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-indigo-50 text-center border rounded-xl">
          <div className="relative mb-8">
            <div className="absolute -inset-4 bg-indigo-100 rounded-xl transform rotate-6"></div>
            <div className="absolute -inset-4 bg-indigo-200 rounded-xl transform -rotate-3"></div>
            <div className="relative bg-white p-8 rounded-lg shadow-lg">
              <img
                src="https://picsum.photos/200/200?random=6"
                alt="Puzzle"
                className="w-32 h-32 mx-auto mb-4"
              />
              <h1 className="text-6xl font-bold text-indigo-800 mb-2">404</h1>
              <h2 className="text-xl font-medium text-gray-600">
                Missing Puzzle Piece
              </h2>
            </div>
          </div>
          <p className="text-gray-600 max-w-md mb-8">
            We couldn't find the piece you're looking for. Maybe try another
            part of the puzzle?
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2 mx-auto">
            <FiHome /> Back to Home
          </button>
        </div>
      ),
    },
    {
      title: "Ocean Waves",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-400 to-blue-600 text-white text-center">
  <motion.div
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="mb-8"
  >
    <img 
      src="https://picsum.photos/300/200?random=7" 
      alt="Ocean waves" 
      className="w-64 h-auto rounded-lg shadow-xl"
    />
  </motion.div>
  <h1 className="text-8xl font-bold mb-2">404</h1>
  <h2 className="text-3xl font-medium mb-6">Lost at Sea</h2>
  <p className="max-w-md mb-8 opacity-90">
    The page you're looking for has been carried away by the tide. Don't worry, we'll help you navigate back.
  </p>
  <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg">
    Sail Back Home
  </button>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-400 to-blue-600 text-white text-center border rounded-xl">
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <img
              src="https://picsum.photos/300/200?random=7"
              alt="Ocean waves"
              className="w-64 h-auto rounded-lg shadow-xl"
            />
          </motion.div>
          <h1 className="text-8xl font-bold mb-2">404</h1>
          <h2 className="text-3xl font-medium mb-6">Lost at Sea</h2>
          <p className="max-w-md mb-8 opacity-90">
            The page you're looking for has been carried away by the tide. Don't
            worry, we'll help you navigate back.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg">
            Sail Back Home
          </button>
        </div>
      ),
    },
    {
      title: "Cyberpunk Style",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-900 text-center border-8 border-pink-500">
  <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
    404
  </h1>
  <h2 className="text-3xl font-bold text-pink-400 mb-6 uppercase tracking-widest">
    Access Denied
  </h2>
  <p className="text-gray-300 max-w-md mb-8 font-mono">
  &gt;_ System cannot locate the requested resource. [Error Code: 0x404]
</p>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-mono font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all"
  >
    REBOOT SYSTEM
  </motion.button>
  <div className="mt-12">
    <p className="text-gray-500 text-sm font-mono">
      SYSTEM STATUS: <span className="text-pink-400">ERROR</span>
    </p>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-gray-900 text-center border-8 border-pink-500 rounded-xl">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-pink-400 mb-6 uppercase tracking-widest">
            Access Denied
          </h2>
          <p className="text-gray-300 max-w-md mb-8 font-mono">
            &gt;_ System cannot locate the requested resource. [Error Code:
            0x404]
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-mono font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all"
          >
            REBOOT SYSTEM
          </motion.button>
          <div className="mt-12">
            <p className="text-gray-500 text-sm font-mono">
              SYSTEM STATUS: <span className="text-pink-400">ERROR</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Retro Arcade",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-center font-mono">
  <div className="mb-8 p-4 border-4 border-red-500 bg-gray-900">
    <img 
      src="https://picsum.photos/400/200?random=8" 
      alt="Arcade" 
      className="w-full max-w-md"
    />
  </div>
  <h1 className="text-8xl font-bold text-red-500 mb-4">GAME OVER</h1>
  <h2 className="text-2xl text-yellow-400 mb-6">ERROR 404 - LEVEL NOT FOUND</h2>
  <p className="text-green-400 max-w-md mb-8">
    The page you requested is not in this game. Insert coin to try again.
  </p>
  <button className="px-8 py-3 bg-red-500 text-white font-bold hover:bg-red-600 transition-colors border-b-4 border-red-700 active:border-b-2 active:mt-1">
    INSERT COIN
  </button>
  <div className="mt-12 text-yellow-400 text-sm">
    <p>HIGH SCORE: 404 | PLAYER 1</p>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-black text-center font-mono border rounded-xl">
          <div className="mb-8 p-4 border-4 border-red-500 bg-gray-900">
            <img
              src="https://picsum.photos/400/200?random=8"
              alt="Arcade"
              className="w-full max-w-md"
            />
          </div>
          <h1 className="text-8xl font-bold text-red-500 mb-4">GAME OVER</h1>
          <h2 className="text-2xl text-yellow-400 mb-6">
            ERROR 404 - LEVEL NOT FOUND
          </h2>
          <p className="text-green-400 max-w-md mb-8">
            The page you requested is not in this game. Insert coin to try
            again.
          </p>
          <button className="px-8 py-3 bg-red-500 text-white font-bold hover:bg-red-600 transition-colors border-b-4 border-red-700 active:border-b-2 active:mt-1">
            INSERT COIN
          </button>
          <div className="mt-12 text-yellow-400 text-sm">
            <p>HIGH SCORE: 404 | PLAYER 1</p>
          </div>
        </div>
      ),
    },
    {
      title: "Glass Morphism",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-100 to-purple-100">
  <div className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-lg border border-white/20 max-w-md w-full text-center">
    <h1 className="text-8xl font-bold text-gray-800 mb-2">404</h1>
    <h2 className="text-2xl font-medium text-gray-700 mb-6">Page Not Found</h2>
    <p className="text-gray-600 mb-8">
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
    </p>
    <button className="px-8 py-3 bg-white/70 text-gray-800 rounded-full font-medium hover:bg-white transition-all shadow-sm hover:shadow-md border border-white/30">
      Return Home
    </button>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-100 to-purple-100 border rounded-xl">
          <div className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-lg border border-white/20 max-w-md w-full text-center">
            <h1 className="text-8xl font-bold text-gray-800 mb-2">404</h1>
            <h2 className="text-2xl font-medium text-gray-700 mb-6">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <button className="px-8 py-3 bg-white/70 text-gray-800 rounded-full font-medium hover:bg-white transition-all shadow-sm hover:shadow-md border border-white/30">
              Return Home
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Paper Cutout",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 text-center">
  <div className="relative mb-8">
    <div className="absolute -inset-2 bg-yellow-100 transform rotate-2"></div>
    <div className="absolute -inset-2 bg-red-100 transform -rotate-1"></div>
    <div className="relative bg-white p-8 shadow-lg">
      <h1 className="text-8xl font-bold text-gray-800 mb-2">404</h1>
      <h2 className="text-2xl font-medium text-gray-600 mb-4">Page Not Found</h2>
      <img 
        src="https://picsum.photos/200/150?random=9" 
        alt="Paper cutout" 
        className="w-32 mx-auto mb-4"
      />
      <p className="text-gray-500 max-w-sm">
        Looks like this page was cut out. Let's tape it back together.
      </p>
    </div>
  </div>
  <button className="px-8 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors shadow-md">
    Fix This Page
  </button>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-gray-100 text-center border rounded-xl">
          <div className="relative mb-8">
            <div className="absolute -inset-2 bg-yellow-100 transform rotate-2"></div>
            <div className="absolute -inset-2 bg-red-100 transform -rotate-1"></div>
            <div className="relative bg-white p-8 shadow-lg">
              <h1 className="text-8xl font-bold text-gray-800 mb-2">404</h1>
              <h2 className="text-2xl font-medium text-gray-600 mb-4">
                Page Not Found
              </h2>
              <img
                src="https://picsum.photos/200/150?random=9"
                alt="Paper cutout"
                className="w-32 mx-auto mb-4"
              />
              <p className="text-gray-500 max-w-sm">
                Looks like this page was cut out. Let's tape it back together.
              </p>
            </div>
          </div>
          <button className="px-8 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors shadow-md">
            Fix This Page
          </button>
        </div>
      ),
    },
    {
      title: "Isometric Design",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-indigo-900 text-center">
  <div className="relative mb-12">
    <div className="w-48 h-48 bg-indigo-700 transform rotate-45 -skew-x-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="w-48 h-48 bg-indigo-600 transform rotate-45 -skew-x-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4 -ml-4"></div>
    <div className="relative z-10">
      <h1 className="text-8xl font-bold text-white mb-2">404</h1>
    </div>
  </div>
  <h2 className="text-2xl font-medium text-indigo-200 mb-6">Page Not Found</h2>
  <p className="text-indigo-300 max-w-md mb-8">
    The page you are looking for doesn't exist or has been moved.
  </p>
  <button className="px-8 py-3 bg-white text-indigo-900 rounded-lg font-bold hover:bg-indigo-100 transition-colors">
    Go Back Home
  </button>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-indigo-900 text-center border rounded-xl">
          <div className="relative mb-12">
            <div className="w-48 h-48 bg-indigo-700 transform rotate-45 -skew-x-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-48 h-48 bg-indigo-600 transform rotate-45 -skew-x-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-4 -ml-4"></div>
            <div className="relative z-10">
              <h1 className="text-8xl font-bold text-white mb-2">404</h1>
            </div>
          </div>
          <h2 className="text-2xl font-medium text-indigo-200 mb-6">
            Page Not Found
          </h2>
          <p className="text-indigo-300 max-w-md mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <button className="px-8 py-3 bg-white text-indigo-900 rounded-lg font-bold hover:bg-indigo-100 transition-colors">
            Go Back Home
          </button>
        </div>
      ),
    },
    {
      title: "Futuristic Hologram",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-900 text-center">
  <div className="relative mb-12">
    <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="relative z-10">
      <img 
        src="https://picsum.photos/300/300?random=10" 
        alt="Hologram" 
        className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-blue-400 shadow-lg shadow-blue-500/30"
      />
      <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
        404
      </h1>
    </div>
  </div>
  <h2 className="text-2xl font-medium text-gray-300 mb-6">SYSTEM ALERT: PAGE NOT FOUND</h2>
  <p className="text-gray-400 max-w-md mb-8">
    The requested resource could not be located in our database.
  </p>
  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
    RETURN TO MAINFRAME
  </button>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-gray-900 text-center border rounded-xl">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative z-10">
              <img
                src="https://picsum.photos/300/300?random=10"
                alt="Hologram"
                className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-blue-400 shadow-lg shadow-blue-500/30"
              />
              <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                404
              </h1>
            </div>
          </div>
          <h2 className="text-2xl font-medium text-gray-300 mb-6">
            SYSTEM ALERT: PAGE NOT FOUND
          </h2>
          <p className="text-gray-400 max-w-md mb-8">
            The requested resource could not be located in our database.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all">
            RETURN TO MAINFRAME
          </button>
        </div>
      ),
    },
    {
      title: "Nature Theme",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-green-50 text-center">
  <div className="mb-8">
    <img 
      src="https://picsum.photos/400/250?random=11" 
      alt="Nature" 
      className="w-full max-w-md rounded-lg shadow-md"
    />
  </div>
  <h1 className="text-6xl font-bold text-green-800 mb-2">404</h1>
  <h2 className="text-2xl font-medium text-green-700 mb-4">Trail Not Found</h2>
  <p className="text-green-600 max-w-md mb-8">
    The path you're looking for has grown over. Let's find you a new route.
  </p>
  <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto">
    <FiArrowRight /> Find New Path
  </button>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-green-50 text-center border rounded-xl">
          <div className="mb-8">
            <img
              src="https://picsum.photos/400/250?random=11"
              alt="Nature"
              className="w-full max-w-md rounded-lg shadow-md"
            />
          </div>
          <h1 className="text-6xl font-bold text-green-800 mb-2">404</h1>
          <h2 className="text-2xl font-medium text-green-700 mb-4">
            Trail Not Found
          </h2>
          <p className="text-green-600 max-w-md mb-8">
            The path you're looking for has grown over. Let's find you a new
            route.
          </p>
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto">
            <FiArrowRight /> Find New Path
          </button>
        </div>
      ),
    },
    {
      title: "Minimalist",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-center">
  <h1 className="text-8xl font-light text-gray-300 mb-4">404</h1>
  <h2 className="text-xl font-medium text-gray-500 mb-8">Page not found</h2>
  <div className="w-24 h-px bg-gray-200 mb-8"></div>
  <p className="text-gray-400 max-w-xs mb-8">
    The page you are looking for doesn't exist or has been moved.
  </p>
  <button className="px-6 py-2 border border-gray-300 text-gray-500 rounded hover:bg-gray-50 transition-colors">
    Back to home
  </button>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-white text-center border rounded-xl">
          <h1 className="text-8xl font-light text-gray-300 mb-4">404</h1>
          <h2 className="text-xl font-medium text-gray-500 mb-8">
            Page not found
          </h2>
          <div className="w-24 h-px bg-gray-200 mb-8"></div>
          <p className="text-gray-400 max-w-xs mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <button className="px-6 py-2 border border-gray-300 text-gray-500 rounded hover:bg-gray-50 transition-colors">
            Back to home
          </button>
        </div>
      ),
    },
    {
      title: "3D Floating",
      code: `<div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 text-center">
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    className="mb-12"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3"></div>
      <div className="absolute inset-0 bg-red-500 rounded-lg transform -rotate-2"></div>
      <div className="relative bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-8xl font-bold text-gray-800">404</h1>
      </div>
    </div>
  </motion.div>
  <h2 className="text-2xl font-medium text-gray-700 mb-6">Whoops! Page Not Found</h2>
  <p className="text-gray-500 max-w-md mb-8">
    Looks like you've hit a snag. The page you're looking for isn't here.
  </p>
  <button className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md">
    Take Me Back
  </button>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-6 bg-gray-100 text-center border rounded-xl">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-red-500 rounded-lg transform -rotate-2"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-xl">
                <h1 className="text-8xl font-bold text-gray-800">404</h1>
              </div>
            </div>
          </motion.div>
          <h2 className="text-2xl font-medium text-gray-700 mb-6">
            Whoops! Page Not Found
          </h2>
          <p className="text-gray-500 max-w-md mb-8">
            Looks like you've hit a snag. The page you're looking for isn't
            here.
          </p>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-md">
            Take Me Back
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 ">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4"
          >
            404 Page Universe
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl ">
            Collection of 20 modern, responsive 404 page designs. Click the{" "}
            <FiCopy className="inline" /> icon to copy the code for any design!
          </p>
        </header>

        {/* 404 Pages Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8"
        >
          {notFoundPages.map((page, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  {page.title}
                </h3>
              </div>
              <div className="relative group">
                {page.component}
                <button
                  onClick={() => copyToClipboard(page.code, index)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-gray-200"
                  aria-label="Copy code"
                >
                  {copiedIndex === index ? (
                    <FiCheck className="text-green-500" />
                  ) : (
                    <FiCopy className="text-gray-600" />
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundShowcase;
