import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiMessageSquare,
  FiSettings,
  FiHeart,
  FiShare2,
  FiBookmark,
  FiShoppingCart,
  FiStar,
  FiLayers,
  FiSmartphone,
  FiBarChart2,
  FiEye,
} from "react-icons/fi";

const CardShowcase = () => {
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

  // Card variants for Framer Motion
  const cardVariants = {
    hover: { y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" },
    tap: { scale: 0.98 },
  };

  // Card data
  const cardCategories = [
    {
      title: "Product Cards",
      cards: [
        {
          name: "Basic Product Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64">
  <img src="/product.jpg" alt="Product" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Product Name</h3>
    <div className="flex items-center mt-2">
      <div className="flex text-yellow-400">
        <FiStar className="fill-current" />
        <FiStar className="fill-current" />
        <FiStar className="fill-current" />
        <FiStar className="fill-current" />
        <FiStar className="text-gray-300" />
      </div>
      <span className="text-gray-600 dark:text-gray-300 text-sm ml-2">(24)</span>
    </div>
    <div className="mt-3 flex justify-between items-center">
      <span className="text-lg font-bold text-gray-800 dark:text-white">$29.99</span>
      <button className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition">
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64"
            >
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Wireless Headphones
                </h3>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    <FiStar className="fill-current" />
                    <FiStar className="fill-current" />
                    <FiStar className="fill-current" />
                    <FiStar className="fill-current" />
                    <FiStar className="text-gray-300" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm ml-2">
                    (24)
                  </span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-800 dark:text-white">
                    $29.99
                  </span>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition">
                    <FiShoppingCart className="inline mr-1" /> Add
                  </button>
                </div>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Product Card with Badge",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64 relative">
  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">SALE</div>
  <img src="/product.jpg" alt="Product" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Product Name</h3>
    <div className="flex items-center mt-1">
      <span className="text-gray-500 dark:text-gray-400 line-through mr-2">$39.99</span>
      <span className="text-lg font-bold text-red-500">$29.99</span>
    </div>
    <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      Add to Cart
    </button>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64 relative"
            >
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                SALE
              </div>
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Bluetooth Speaker
                </h3>
                <div className="flex items-center mt-1">
                  <span className="text-gray-500 dark:text-gray-400 line-through mr-2">
                    $39.99
                  </span>
                  <span className="text-lg font-bold text-red-500">$29.99</span>
                </div>
                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  <FiShoppingCart className="inline mr-1" /> Add to Cart
                </button>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Minimal Product Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden w-56 border border-gray-200 dark:border-gray-700">
  <img src="/product.jpg" alt="Product" className="w-full h-40 object-cover" />
  <div className="p-3">
    <h3 className="text-md font-medium text-gray-800 dark:text-white">Product Name</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Category</p>
    <span className="text-lg font-bold text-gray-800 dark:text-white block mt-2">$29.99</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden w-56 border border-gray-200 dark:border-gray-700"
            >
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="text-md font-medium text-gray-800 dark:text-white">
                  Smart Watch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Electronics
                </p>
                <span className="text-lg font-bold text-gray-800 dark:text-white block mt-2">
                  $129.99
                </span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Product Card with Hover Effect",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-64 group">
  <div className="relative overflow-hidden">
    <img src="/product.jpg" alt="Product" className="w-full h-48 object-cover group-hover:scale-110 transition duration-300" />
    <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
      <FiHeart className="text-gray-700" />
    </button>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-500 transition">Product Name</h3>
    <span className="text-lg font-bold text-gray-800 dark:text-white block mt-2">$29.99</span>
    <button className="mt-4 w-full py-2 bg-gray-900 text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
      Quick View
    </button>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-64 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Product"
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                />
                <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
                  <FiHeart className="text-gray-700" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-500 transition">
                  Running Shoes
                </h3>
                <span className="text-lg font-bold text-gray-800 dark:text-white block mt-2">
                  $89.99
                </span>
                <button className="mt-4 w-full py-2 bg-gray-900 text-white rounded-lg opacity-0 group-hover:opacity-100 transition duration-300">
                  <FiEye className="inline mr-1" /> Quick View
                </button>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Glass Product Card",
          code: `<div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden w-64 border border-white/20 dark:border-gray-700">
  <img src="/product.jpg" alt="Product" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Product Name</h3>
    <div className="flex justify-between items-center mt-3">
      <span className="text-lg font-bold text-gray-800 dark:text-white">$29.99</span>
      <button className="p-2 bg-white/50 dark:bg-gray-700/50 rounded-full hover:bg-white/70 dark:hover:bg-gray-600/70 transition">
        <FiShoppingCart className="text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden w-64 border border-white/20 dark:border-gray-700"
            >
              <img
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Vintage Camera
                </h3>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold text-gray-800 dark:text-white">
                    $149.99
                  </span>
                  <button className="p-2 bg-white/50 dark:bg-gray-700/50 rounded-full hover:bg-white/70 dark:hover:bg-gray-600/70 transition">
                    <FiShoppingCart className="text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ),
        },
      ],
    },
    {
      title: "Blog Cards",
      cards: [
        {
          name: "Basic Blog Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-72">
  <img src="/blog.jpg" alt="Blog" className="w-full h-40 object-cover" />
  <div className="p-4">
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
      <span>Jun 12, 2023</span>
      <span className="mx-2">•</span>
      <span>5 min read</span>
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Blog Post Title</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <a href="#" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm">Read More</a>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-72"
            >
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Blog"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>Jun 12, 2023</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  The Future of Web Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Exploring the latest trends and technologies that are shaping
                  the future of web development in 2023.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Blog Card with Author",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-80">
  <img src="/blog.jpg" alt="Blog" className="w-full h-48 object-cover" />
  <div className="p-5">
    <div className="flex items-center mb-4">
      <img src="/author.jpg" alt="Author" className="w-10 h-10 rounded-full object-cover" />
      <div className="ml-3">
        <h4 className="text-sm font-medium text-gray-800 dark:text-white">Author Name</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">Jun 12, 2023 • 5 min read</p>
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Blog Post Title</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className="flex justify-between items-center">
      <a href="#" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm">Read More</a>
      <div className="flex space-x-3">
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <FiHeart />
        </button>
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <FiBookmark />
        </button>
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
          <FiShare2 />
        </button>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-80"
            >
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-white">
                      John Doe
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Jun 12, 2023 • 5 min read
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                  10 Tips for Better UI Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Learn how to create more effective and engaging user
                  interfaces with these practical tips from industry experts.
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm"
                  >
                    Read More
                  </a>
                  <div className="flex space-x-3">
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                      <FiHeart />
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                      <FiBookmark />
                    </button>
                    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                      <FiShare2 />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Minimal Blog Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden w-64 border border-gray-200 dark:border-gray-700">
  <img src="/blog.jpg" alt="Blog" className="w-full h-40 object-cover" />
  <div className="p-4">
    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</span>
    <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-1 mb-2">Blog Post Title</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">Read More</a>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden w-64 border border-gray-200 dark:border-gray-700"
            >
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Blog"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Technology
                </span>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-1 mb-2">
                  React 18 Features
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  Discover the new features and improvements in React 18.
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Blog Card with Tags",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-72">
  <img src="/blog.jpg" alt="Blog" className="w-full h-40 object-cover" />
  <div className="p-4">
    <div className="flex flex-wrap gap-2 mb-3">
      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs rounded">Technology</span>
      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 text-xs rounded">Web Dev</span>
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Blog Post Title</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className="flex justify-between items-center">
      <a href="#" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm">Read More</a>
      <span className="text-xs text-gray-500 dark:text-gray-400">Jun 12, 2023</span>
    </div>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-72"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Blog"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs rounded">
                    Technology
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 text-xs rounded">
                    Web Dev
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Building Scalable Apps
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Learn the best practices for building applications that can
                  scale with your user base.
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm"
                  >
                    Read More
                  </a>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Jun 12, 2023
                  </span>
                </div>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Glass Blog Card",
          code: `<div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden w-72 border border-white/20 dark:border-gray-700">
  <img src="/blog.jpg" alt="Blog" className="w-full h-40 object-cover" />
  <div className="p-4">
    <span className="text-xs text-gray-600 dark:text-gray-300 uppercase tracking-wider">Category</span>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1 mb-2">Blog Post Title</h3>
    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <a href="#" className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">Read More →</a>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden w-72 border border-white/20 dark:border-gray-700"
            >
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Blog"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  Design
                </span>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1 mb-2">
                  Minimal UI Trends
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Exploring the rise of minimalism in modern user interface
                  design.
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ),
        },
      ],
    },
    {
      title: "Profile Cards",
      cards: [
        {
          name: "Basic Profile Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64 text-center p-6">
  <img src="/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white dark:border-gray-700 shadow" />
  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">John Doe</h3>
  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Web Developer</p>
  <div className="flex justify-center space-x-3">
    <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
      <FiShare2 />
    </button>
    <button className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
      <FiMessageSquare />
    </button>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64 text-center p-6"
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white dark:border-gray-700 shadow"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                John Doe
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Web Developer
              </p>
              <div className="flex justify-center space-x-3">
                <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                  <FiShare2 />
                </button>
                <button className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                  <FiMessageSquare />
                </button>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Profile Card with Stats",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-72">
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-20"></div>
  <div className="px-6 pb-6 -mt-10">
    <img src="/profile.jpg" alt="Profile" className="w-20 h-20 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow" />
    <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mt-3">Sarah Johnson</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm text-center">UI/UX Designer</p>
    <div className="flex justify-between mt-6">
      <div className="text-center">
        <p className="text-gray-800 dark:text-white font-bold">1.2K</p>
        <p className="text-gray-600 dark:text-gray-300 text-xs">Followers</p>
      </div>
      <div className="text-center">
        <p className="text-gray-800 dark:text-white font-bold">583</p>
        <p className="text-gray-600 dark:text-gray-300 text-xs">Following</p>
      </div>
      <div className="text-center">
        <p className="text-gray-800 dark:text-white font-bold">87</p>
        <p className="text-gray-600 dark:text-gray-300 text-xs">Projects</p>
      </div>
    </div>
    <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      Follow
    </button>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-72"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-20"></div>
              <div className="px-6 pb-6 -mt-10">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profile"
                  className="w-20 h-20 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mt-3">
                  Sarah Johnson
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                  UI/UX Designer
                </p>
                <div className="flex justify-between mt-6">
                  <div className="text-center">
                    <p className="text-gray-800 dark:text-white font-bold">
                      1.2K
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                      Followers
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-800 dark:text-white font-bold">
                      583
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                      Following
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-800 dark:text-white font-bold">
                      87
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                      Projects
                    </p>
                  </div>
                </div>
                <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  Follow
                </button>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Minimal Profile Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden w-56 border border-gray-200 dark:border-gray-700 p-5 text-center">
  <img src="/profile.jpg" alt="Profile" className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
  <h3 className="text-lg font-medium text-gray-800 dark:text-white">Alex Chen</h3>
  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Frontend Developer</p>
  <button className="px-4 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition">
    View Profile
  </button>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden w-56 border border-gray-200 dark:border-gray-700 p-5 text-center"
            >
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                Alex Chen
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Frontend Developer
              </p>
              <button className="px-4 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                View Profile
              </button>
            </motion.div>
          ),
        },
        {
          name: "Profile Card with Social Links",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64">
  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-24"></div>
  <div className="px-5 pb-5 -mt-12">
    <img src="/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow" />
    <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mt-3">Michael Brown</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-5">Full Stack Developer</p>
    <div className="flex justify-center space-x-4">
      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      </a>
      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-400">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      </a>
      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-red-500">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      </a>
      <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </div>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-24"></div>
              <div className="px-5 pb-5 -mt-12">
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mt-3">
                  Michael Brown
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm text-center mb-5">
                  Full Stack Developer
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-400"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-red-500"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Glass Profile Card",
          code: `<div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden w-64 border border-white/20 dark:border-gray-700 text-center p-6">
  <img src="/profile.jpg" alt="Profile" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white/30 dark:border-gray-700/50 shadow" />
  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">Emma Wilson</h3>
  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Graphic Designer</p>
  <div className="flex justify-center space-x-3">
    <button className="p-2 bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full hover:bg-white/70 dark:hover:bg-gray-600/70 transition">
      <FiMessageSquare />
    </button>
    <button className="p-2 bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full hover:bg-white/70 dark:hover:bg-gray-600/70 transition">
      <FiShare2 />
    </button>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden w-64 border border-white/20 dark:border-gray-700 text-center p-6"
            >
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white/30 dark:border-gray-700/50 shadow"
              />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                Emma Wilson
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                Graphic Designer
              </p>
              <div className="flex justify-center space-x-3">
                <button className="p-2 bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full hover:bg-white/70 dark:hover:bg-gray-600/70 transition">
                  <FiMessageSquare />
                </button>
                <button className="p-2 bg-white/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full hover:bg-white/70 dark:hover:bg-gray-600/70 transition">
                  <FiShare2 />
                </button>
              </div>
            </motion.div>
          ),
        },
      ],
    },
    {
      title: "Testimonial Cards",
      cards: [
        {
          name: "Basic Testimonial Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-72">
  <div className="flex items-center mb-4">
    <img src="/profile.jpg" alt="Profile" className="w-12 h-12 rounded-full object-cover" />
    <div className="ml-4">
      <h4 className="text-md font-medium text-gray-800 dark:text-white">John Smith</h4>
      <p className="text-xs text-gray-500 dark:text-gray-400">CEO, Company</p>
    </div>
  </div>
  <p className="text-gray-600 dark:text-gray-300 text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
  <div className="flex mt-4 text-yellow-400">
    <FiStar className="fill-current" />
    <FiStar className="fill-current" />
    <FiStar className="fill-current" />
    <FiStar className="fill-current" />
    <FiStar className="fill-current" />
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-72"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/22.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-md font-medium text-gray-800 dark:text-white">
                    John Smith
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    CEO, TechCorp
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                "The service was exceptional! Our website traffic increased by
                300% after implementing their SEO strategies."
              </p>
              <div className="flex mt-4 text-yellow-400">
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
              </div>
            </motion.div>
          ),
        },
        {
          name: "Testimonial Card with Quote",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-80 relative">
  <svg className="absolute top-4 left-4 text-gray-200 dark:text-gray-700 w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
  <p className="text-gray-600 dark:text-gray-300 text-sm pl-10 mb-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
  <div className="flex items-center">
    <img src="/profile.jpg" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
    <div className="ml-3">
      <h4 className="text-sm font-medium text-gray-800 dark:text-white">Sarah Johnson</h4>
      <p className="text-xs text-gray-500 dark:text-gray-400">Marketing Director</p>
    </div>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-80 relative"
            >
              <svg
                className="absolute top-4 left-4 text-gray-200 dark:text-gray-700 w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 dark:text-gray-300 text-sm pl-10 mb-6">
                "Working with this team transformed our digital presence. Their
                creative solutions and attention to detail are unmatched in the
                industry."
              </p>
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/33.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-800 dark:text-white">
                    Sarah Johnson
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Marketing Director
                  </p>
                </div>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Minimal Testimonial Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 w-64">
  <div className="flex mb-3 text-yellow-400">
    <FiStar className="fill-current" />
    <FiStar className="fill-current" />
    <FiStar className="fill-current" />
    <FiStar className="fill-current" />
    <FiStar className="text-gray-300" />
  </div>
  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
  <div className="flex items-center">
    <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
    <span className="text-sm font-medium text-gray-800 dark:text-white ml-2">Alex Chen</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 w-64"
            >
              <div className="flex mb-3 text-yellow-400">
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="text-gray-300" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                "The design work was exactly what we needed to refresh our brand
                identity. Highly recommended!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-800 dark:text-white ml-2">
                  Alex Chen
                </span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Testimonial Card with Stats",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-72 text-center">
  <img src="/profile.jpg" alt="Profile" className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-4 border-white dark:border-gray-800 shadow" />
  <h4 className="text-md font-medium text-gray-800 dark:text-white mb-1">Michael Brown</h4>
  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Product Manager</p>
  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
  <div className="flex justify-around">
    <div>
      <p className="text-gray-800 dark:text-white font-bold">95%</p>
      <p className="text-gray-500 dark:text-gray-400 text-xs">Satisfaction</p>
    </div>
    <div>
      <p className="text-gray-800 dark:text-white font-bold">24</p>
      <p className="text-gray-500 dark:text-gray-400 text-xs">Projects</p>
    </div>
    <div>
      <p className="text-gray-800 dark:text-white font-bold">4.8</p>
      <p className="text-gray-500 dark:text-gray-400 text-xs">Rating</p>
    </div>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-72 text-center"
            >
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-4 border-white dark:border-gray-800 shadow"
              />
              <h4 className="text-md font-medium text-gray-800 dark:text-white mb-1">
                Michael Brown
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                Product Manager
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                "The development team delivered our project ahead of schedule
                with excellent quality. Their communication was outstanding
                throughout the process."
              </p>
              <div className="flex justify-around">
                <div>
                  <p className="text-gray-800 dark:text-white font-bold">95%</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    Satisfaction
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-white font-bold">24</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    Projects
                  </p>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-white font-bold">4.8</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">
                    Rating
                  </p>
                </div>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Glass Testimonial Card",
          code: `<div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg p-6 w-80 border border-white/20 dark:border-gray-700">
  <div className="flex items-center mb-4">
    <img src="/profile.jpg" alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-white/30 dark:border-gray-700/50" />
    <div className="ml-4">
      <h4 className="text-md font-medium text-gray-800 dark:text-white">Emma Wilson</h4>
      <p className="text-xs text-gray-700 dark:text-gray-300">UI/UX Designer</p>
    </div>
  </div>
  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
  <div className="flex text-yellow-400">
    <FiStar className="fill-current" />
    <FiStar className="fill-current" />
    <FiStar className="fill-current" />
    <FiStar className="fill-current" />
    <FiStar className="text-gray-300" />
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg p-6 w-80 border border-white/20 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/29.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/30 dark:border-gray-700/50"
                />
                <div className="ml-4">
                  <h4 className="text-md font-medium text-gray-800 dark:text-white">
                    Emma Wilson
                  </h4>
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    UI/UX Designer
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                "As a designer, I appreciate the attention to detail in their
                work. The team consistently delivers beautiful, functional
                interfaces that users love."
              </p>
              <div className="flex text-yellow-400">
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="fill-current" />
                <FiStar className="text-gray-300" />
              </div>
            </motion.div>
          ),
        },
      ],
    },
    {
      title: "Service Cards",
      cards: [
        {
          name: "Basic Service Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-64 text-center">
  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-500 dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
    <FiSettings className="w-6 h-6" />
  </div>
  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Web Development</h3>
  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <a href="#" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium">Learn More →</a>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-64 text-center"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-500 dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSettings className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Web Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Custom website development tailored to your business needs and
                goals.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
              >
                Learn More →
              </a>
            </motion.div>
          ),
        },
        {
          name: "Service Card with Icon",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64 group">
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32 flex items-center justify-center">
    <FiLayers className="text-white w-12 h-12 group-hover:scale-110 transition duration-300" />
  </div>
  <div className="p-5">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">UI/UX Design</h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
      Get Started
    </button>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64 group"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-32 flex items-center justify-center">
                <FiLayers className="text-white w-12 h-12 group-hover:scale-110 transition duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Beautiful, intuitive interfaces designed to enhance user
                  experience and engagement.
                </p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
                  Get Started
                </button>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Minimal Service Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 w-56">
  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mb-3">
    <FiSmartphone className="w-5 h-5" />
  </div>
  <h3 className="text-md font-bold text-gray-800 dark:text-white mb-2">Mobile Apps</h3>
  <p className="text-gray-600 dark:text-gray-300 text-xs">Lorem ipsum dolor sit amet.</p>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 w-56"
            >
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mb-3">
                <FiSmartphone className="w-5 h-5" />
              </div>
              <h3 className="text-md font-bold text-gray-800 dark:text-white mb-2">
                Mobile Apps
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-xs">
                iOS and Android app development.
              </p>
            </motion.div>
          ),
        },
        {
          name: "Service Card with List",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-72">
  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">SEO Services</h3>
  <ul className="space-y-2 mb-6">
    <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
      <FiCheck className="text-green-500 mr-2" /> Keyword Research
    </li>
    <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
      <FiCheck className="text-green-500 mr-2" /> On-Page Optimization
    </li>
    <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
      <FiCheck className="text-green-500 mr-2" /> Technical SEO
    </li>
    <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
      <FiCheck className="text-green-500 mr-2" /> Content Strategy
    </li>
  </ul>
  <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
    View Packages
  </button>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-72"
            >
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                SEO Services
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                  <FiCheck className="text-green-500 mr-2" /> Keyword Research
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                  <FiCheck className="text-green-500 mr-2" /> On-Page
                  Optimization
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                  <FiCheck className="text-green-500 mr-2" /> Technical SEO
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                  <FiCheck className="text-green-500 mr-2" /> Content Strategy
                </li>
              </ul>
              <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                View Packages
              </button>
            </motion.div>
          ),
        },
        {
          name: "Glass Service Card",
          code: `<div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg p-6 w-64 text-center border border-white/20 dark:border-gray-700">
  <div className="w-12 h-12 bg-white/50 dark:bg-gray-700/50 text-blue-500 dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
    <FiBarChart2 className="w-6 h-6" />
  </div>
  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Analytics</h3>
  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <a href="#" className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium">Learn More →</a>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg p-6 w-64 text-center border border-white/20 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-white/50 dark:bg-gray-700/50 text-blue-500 dark:text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBarChart2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Analytics
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                Data-driven insights to help you understand and grow your
                audience.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
              >
                Learn More →
              </a>
            </motion.div>
          ),
        },
      ],
    },
    {
      title: "Pricing Cards",
      cards: [
        {
          name: "Basic Pricing Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-64 text-center">
  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Starter</h3>
  <div className="mb-4">
    <span className="text-3xl font-bold text-gray-800 dark:text-white">$19</span>
    <span className="text-gray-600 dark:text-gray-300">/month</span>
  </div>
  <ul className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-300">
    <li>5 Projects</li>
    <li>10GB Storage</li>
    <li>Basic Support</li>
    <li className="text-gray-400 dark:text-gray-500">No Analytics</li>
  </ul>
  <button className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
    Get Started
  </button>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-64 text-center"
            >
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Starter
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-800 dark:text-white">
                  $19
                </span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-300">
                <li>5 Projects</li>
                <li>10GB Storage</li>
                <li>Basic Support</li>
                <li className="text-gray-400 dark:text-gray-500">
                  No Analytics
                </li>
              </ul>
              <button className="w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                Get Started
              </button>
            </motion.div>
          ),
        },
        {
          name: "Popular Pricing Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-72 relative">
  <div className="bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full absolute top-4 right-4">POPULAR</div>
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white text-center">
    <h3 className="text-xl font-bold mb-1">Professional</h3>
    <div className="mb-2">
      <span className="text-4xl font-bold">$49</span>
      <span className="opacity-80">/month</span>
    </div>
    <p className="text-sm opacity-90">Best for growing businesses</p>
  </div>
  <div className="p-6">
    <ul className="space-y-3 mb-6 text-sm text-gray-600 dark:text-gray-300">
      <li className="flex items-center">
        <FiCheck className="text-green-500 mr-2" /> 20 Projects
      </li>
      <li className="flex items-center">
        <FiCheck className="text-green-500 mr-2" /> 50GB Storage
      </li>
      <li className="flex items-center">
        <FiCheck className="text-green-500 mr-2" /> Priority Support
      </li>
      <li className="flex items-center">
        <FiCheck className="text-green-500 mr-2" /> Advanced Analytics
      </li>
    </ul>
    <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition">
      Get Started
    </button>
  </div>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-72 relative"
            >
              <div className="bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full absolute top-4 right-4">
                POPULAR
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-1">Professional</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="opacity-80">/month</span>
                </div>
                <p className="text-sm opacity-90">
                  Best for growing businesses
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 mr-2" /> 20 Projects
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 mr-2" /> 50GB Storage
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 mr-2" /> Priority Support
                  </li>
                  <li className="flex items-center">
                    <FiCheck className="text-green-500 mr-2" /> Advanced
                    Analytics
                  </li>
                </ul>
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition">
                  Get Started
                </button>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Minimal Pricing Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 w-56">
  <h3 className="text-md font-bold text-gray-800 dark:text-white mb-2">Basic</h3>
  <div className="mb-3">
    <span className="text-2xl font-bold text-gray-800 dark:text-white">$9</span>
    <span className="text-gray-600 dark:text-gray-300 text-sm">/month</span>
  </div>
  <ul className="space-y-2 mb-4 text-xs text-gray-600 dark:text-gray-300">
    <li>3 Projects</li>
    <li>5GB Storage</li>
    <li>Email Support</li>
  </ul>
  <button className="w-full py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition">
    Choose Plan
  </button>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 w-56"
            >
              <h3 className="text-md font-bold text-gray-800 dark:text-white mb-2">
                Basic
              </h3>
              <div className="mb-3">
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  $9
                </span>
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  /month
                </span>
              </div>
              <ul className="space-y-2 mb-4 text-xs text-gray-600 dark:text-gray-300">
                <li>3 Projects</li>
                <li>5GB Storage</li>
                <li>Email Support</li>
              </ul>
              <button className="w-full py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                Choose Plan
              </button>
            </motion.div>
          ),
        },
        {
          name: "Enterprise Pricing Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-72">
  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Enterprise</h3>
  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Custom solutions for large businesses</p>
  <div className="mb-6">
    <span className="text-3xl font-bold text-gray-800 dark:text-white">Custom</span>
  </div>
  <ul className="space-y-3 mb-6 text-sm text-gray-600 dark:text-gray-300">
    <li className="flex items-center">
      <FiCheck className="text-green-500 mr-2" /> Unlimited Projects
    </li>
    <li className="flex items-center">
      <FiCheck className="text-green-500 mr-2" /> 500GB+ Storage
    </li>
    <li className="flex items-center">
      <FiCheck className="text-green-500 mr-2" /> 24/7 Support
    </li>
    <li className="flex items-center">
      <FiCheck className="text-green-500 mr-2" /> Dedicated Account Manager
    </li>
    <li className="flex items-center">
      <FiCheck className="text-green-500 mr-2" /> Custom Analytics
    </li>
  </ul>
  <button className="w-full py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition">
    Contact Sales
  </button>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-72"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Enterprise
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Custom solutions for large businesses
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-800 dark:text-white">
                  Custom
                </span>
              </div>
              <ul className="space-y-3 mb-6 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" /> Unlimited Projects
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" /> 500GB+ Storage
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" /> 24/7 Support
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" /> Dedicated Account
                  Manager
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-2" /> Custom Analytics
                </li>
              </ul>
              <button className="w-full py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition">
                Contact Sales
              </button>
            </motion.div>
          ),
        },
        {
          name: "Glass Pricing Card",
          code: `<div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg p-6 w-64 text-center border border-white/20 dark:border-gray-700">
  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Premium</h3>
  <div className="mb-4">
    <span className="text-3xl font-bold text-gray-800 dark:text-white">$99</span>
    <span className="text-gray-700 dark:text-gray-300">/month</span>
  </div>
  <ul className="space-y-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
    <li>Unlimited Projects</li>
    <li>100GB Storage</li>
    <li>Premium Support</li>
    <li>Advanced Analytics</li>
  </ul>
  <button className="w-full py-2 bg-blue-500/90 text-white rounded-lg hover:bg-blue-600/90 transition">
    Get Started
  </button>
</div>`,
          component: (
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/50 rounded-xl shadow-lg p-6 w-64 text-center border border-white/20 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                Premium
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-800 dark:text-white">
                  $99
                </span>
                <span className="text-gray-700 dark:text-gray-300">/month</span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
                <li>Unlimited Projects</li>
                <li>100GB Storage</li>
                <li>Premium Support</li>
                <li>Advanced Analytics</li>
              </ul>
              <button className="w-full py-2 bg-blue-500/90 text-white rounded-lg hover:bg-blue-600/90 transition">
                Get Started
              </button>
            </motion.div>
          ),
        },
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900`}
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
            Card Gallery
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
            Explore our collection of 50+ beautifully designed cards for various
            use cases. Click the <FiCopy className="inline" /> icon to copy the
            Tailwind CSS code for any card!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Card Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-6">
                {category.cards.map((card, cardIndex) => {
                  const globalIndex = catIndex * 5 + cardIndex;
                  return (
                    <div key={cardIndex} className="group relative">
                      {card.component}
                      <button
                        onClick={() => copyToClipboard(card.code, globalIndex)}
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

export default CardShowcase;
