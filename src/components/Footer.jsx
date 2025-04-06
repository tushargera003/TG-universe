import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            TG UNIVERSE
          </h3>
          <p className="text-lg">Built with ❤️ by Tushar Gera</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/tushargera006"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-gera"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/tushar_gera_06"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-600">
        &copy; {new Date().getFullYear()} TG UNIVERSE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
