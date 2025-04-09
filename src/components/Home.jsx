import React, { useState, useEffect } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeProvider";
const Home = () => {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white  min-h-screen">
      {/* Header */}

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Modern UI Components
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Click "Components" above to explore Buttons, Cart, Toast, and
                more.
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
    </div>
  );
};

export default Home;
