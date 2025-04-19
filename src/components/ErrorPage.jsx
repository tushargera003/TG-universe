import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-900 text-center border-8 border-pink-500">
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">
        404
      </h1>
      <h2 className="text-3xl font-bold text-pink-400 mb-6 uppercase tracking-widest">
        Access Denied
      </h2>
      <p className="text-gray-300 max-w-md mb-8 font-mono">
        &gt;_ System cannot locate the requested resource. [Error Code: 0x404]
      </p>
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-mono font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all"
        >
          BACK TO HOME
        </motion.button>
      </Link>

      <div className="mt-12">
        <p className="text-gray-500 text-sm font-mono">
          SYSTEM STATUS: <span className="text-pink-400">ERROR</span>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
