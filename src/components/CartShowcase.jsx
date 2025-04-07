import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiX,
  FiShoppingCart,
  FiPlus,
  FiMinus,
  FiTrash2,
  FiHeart,
  FiChevronRight,
} from "react-icons/fi";
import { RiVisaLine } from "react-icons/ri";
import {
  FaCcPaypal,
  FaCcMastercard,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa";
import { GrAmex } from "react-icons/gr";
const CartShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [quantities, setQuantities] = useState(Array(20).fill(1));

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

  const updateQuantity = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + value);
    setQuantities(newQuantities);
  };

  const cartVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  // Product data
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 199.99,
      category: "Electronics",
    },
    { id: 2, name: "Wireless Keyboard", price: 89.99, category: "Electronics" },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      category: "Clothing",
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      price: 24.99,
      category: "Accessories",
    },
    { id: 5, name: "Running Shoes", price: 129.99, category: "Footwear" },
  ];

  // Cart components data
  const cartComponents = [
    {
      name: "Minimal Cart Item",
      code: `<div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
  <div className="flex items-center space-x-4">
    <img 
      src="https://picsum.photos/200/200?random=1" 
      alt="Product" 
      className="w-16 h-16 object-cover rounded"
    />
    <div>
      <h3 className="font-medium">${products[0].name}</h3>
      <p className="text-gray-500 dark:text-gray-400">$${products[0].price.toFixed(
        2
      )}</p>
    </div>
  </div>
  <button className="text-red-500 hover:text-red-700">
    <FiX size={20} />
  </button>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center space-x-4">
            <img
              src="https://picsum.photos/200/200?random=1"
              alt="Product"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-medium">{products[0].name}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                ${products[0].price.toFixed(2)}
              </p>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-700">
            <FiX size={20} />
          </button>
        </motion.div>
      ),
    },
    {
      name: "Quantity Adjustable Cart",
      code: `<div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
  <div className="flex items-center space-x-4">
    <img 
      src="https://picsum.photos/200/200?random=2" 
      alt="Product" 
      className="w-20 h-20 object-cover rounded-lg"
    />
    <div>
      <h3 className="font-medium text-lg">${products[1].name}</h3>
      <p className="text-gray-500 dark:text-gray-400">$${products[1].price.toFixed(
        2
      )}</p>
      <div className="flex items-center mt-2">
        <button 
          onClick={() => updateQuantity(1, -1)} 
          className="p-1 rounded-full bg-gray-100 dark:bg-gray-700"
        >
          <FiMinus size={16} />
        </button>
        <span className="mx-3 w-8 text-center">1</span>
        <button 
          onClick={() => updateQuantity(1, 1)} 
          className="p-1 rounded-full bg-gray-100 dark:bg-gray-700"
        >
          <FiPlus size={16} />
        </button>
      </div>
    </div>
  </div>
  <button className="text-gray-400 hover:text-red-500">
    <FiTrash2 size={20} />
  </button>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
        >
          <div className="flex items-center space-x-4">
            <img
              src="https://picsum.photos/200/200?random=2"
              alt="Product"
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-medium text-lg">{products[1].name}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                ${products[1].price.toFixed(2)}
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => updateQuantity(1, -1)}
                  className="p-1 rounded-full bg-gray-100 dark:bg-gray-700"
                >
                  <FiMinus size={16} />
                </button>
                <span className="mx-3 w-8 text-center">{quantities[1]}</span>
                <button
                  onClick={() => updateQuantity(1, 1)}
                  className="p-1 rounded-full bg-gray-100 dark:bg-gray-700"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-red-500">
            <FiTrash2 size={20} />
          </button>
        </motion.div>
      ),
    },
    ,
    {
      name: "Sidebar Cart",
      code: `<div className="w-80 h-full bg-white dark:bg-gray-800 shadow-xl flex flex-col">
  <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
    <h2 className="text-xl font-bold">Your Cart</h2>
    <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
      <FiX size={24} />
    </button>
  </div>
  <div className="flex-1 overflow-y-auto p-4 space-y-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img 
          src="https://picsum.photos/200/200?random=3" 
          alt="Product" 
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">${products[2].name}</h3>
          <p className="text-gray-500 dark:text-gray-400">$${products[2].price.toFixed(
            2
          )}</p>
        </div>
      </div>
      <button className="text-gray-400 hover:text-red-500">
        <FiTrash2 size={18} />
      </button>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img 
          src="https://picsum.photos/200/200?random=4" 
          alt="Product" 
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">${products[3].name}</h3>
          <p className="text-gray-500 dark:text-gray-400">$${products[3].price.toFixed(
            2
          )}</p>
        </div>
      </div>
      <button className="text-gray-400 hover:text-red-500">
        <FiTrash2 size={18} />
      </button>
    </div>
  </div>
  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
    <div className="flex justify-between mb-2">
      <span>Subtotal</span>
      <span className="font-medium">$${(
        products[2].price + products[3].price
      ).toFixed(2)}</span>
    </div>
    <div className="flex justify-between mb-4">
      <span>Shipping</span>
      <span className="font-medium">Free</span>
    </div>
    <button className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
      Checkout
    </button>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="w-80 h-full bg-white dark:bg-gray-800 shadow-xl flex flex-col"
        >
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <FiX size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src="https://picsum.photos/200/200?random=3"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{products[2].name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    ${products[2].price.toFixed(2)}
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <FiTrash2 size={18} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src="https://picsum.photos/200/200?random=4"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{products[3].name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    ${products[3].price.toFixed(2)}
                  </p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span className="font-medium">
                ${(products[2].price + products[3].price).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <button className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
              Checkout
            </button>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Compact Cart Item",
      code: `<div className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
  <div className="flex items-center space-x-3">
    <img 
      src="https://picsum.photos/200/200?random=5" 
      alt="Product" 
      className="w-12 h-12 object-cover rounded"
    />
    <div className="flex-1 min-w-0">
      <h3 className="text-sm font-medium truncate">${products[4].name}</h3>
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500 dark:text-gray-400">$${products[4].price.toFixed(
          2
        )}</p>
        <div className="flex items-center space-x-2">
          <button className="text-xs p-1 text-gray-500 hover:text-blue-500">
            <FiMinus size={12} />
          </button>
          <span className="text-xs">1</span>
          <button className="text-xs p-1 text-gray-500 hover:text-blue-500">
            <FiPlus size={12} />
          </button>
        </div>
      </div>
    </div>
  </div>
  <button className="text-gray-400 hover:text-red-500 ml-2">
    <FiX size={16} />
  </button>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <div className="flex items-center space-x-3">
            <img
              src="https://picsum.photos/200/200?random=5"
              alt="Product"
              className="w-12 h-12 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium truncate">
                {products[4].name}
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ${products[4].price.toFixed(2)}
                </p>
                <div className="flex items-center space-x-2">
                  <button className="text-xs p-1 text-gray-500 hover:text-blue-500">
                    <FiMinus size={12} />
                  </button>
                  <span className="text-xs">{quantities[4]}</span>
                  <button className="text-xs p-1 text-gray-500 hover:text-blue-500">
                    <FiPlus size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-red-500 ml-2">
            <FiX size={16} />
          </button>
        </motion.div>
      ),
    },
    {
      name: "Card Style Cart Item",
      code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <div className="relative">
    <img 
      src="https://picsum.photos/300/200?random=6" 
      alt="Product" 
      className="w-full h-40 object-cover"
    />
    <button className="absolute top-2 right-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600">
      <FiHeart className="text-gray-700 dark:text-gray-300" />
    </button>
  </div>
  <div className="p-4">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-medium">${products[0].name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">${
          products[0].category
        }</p>
      </div>
      <span className="font-bold">$${products[0].price.toFixed(2)}</span>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
        <button 
          onClick={() => updateQuantity(5, -1)} 
          className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FiMinus />
        </button>
        <span className="px-3">1</span>
        <button 
          onClick={() => updateQuantity(5, 1)} 
          className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FiPlus />
        </button>
      </div>
      <button className="text-red-500 hover:text-red-700">
        <FiTrash2 size={18} />
      </button>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="relative">
            <img
              src="https://picsum.photos/300/200?random=6"
              alt="Product"
              className="w-full h-40 object-cover"
            />
            <button className="absolute top-2 right-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600">
              <FiHeart className="text-gray-700 dark:text-gray-300" />
            </button>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{products[0].name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {products[0].category}
                </p>
              </div>
              <span className="font-bold">${products[0].price.toFixed(2)}</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
                <button
                  onClick={() => updateQuantity(5, -1)}
                  className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiMinus />
                </button>
                <span className="px-3">{quantities[5]}</span>
                <button
                  onClick={() => updateQuantity(5, 1)}
                  className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiPlus />
                </button>
              </div>
              <button className="text-red-500 hover:text-red-700">
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Color Options",
      code: `<div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
  <div className="flex space-x-4">
    <img 
      src="https://picsum.photos/200/200?random=7" 
      alt="Product" 
      className="w-24 h-24 object-cover rounded-lg"
    />
    <div className="flex-1">
      <div className="flex justify-between">
        <h3 className="font-medium">${products[1].name}</h3>
        <button className="text-gray-400 hover:text-red-500">
          <FiX size={18} />
        </button>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">$${products[1].price.toFixed(
        2
      )}</p>
      
      <div className="mt-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">Color: Black</p>
        <div className="flex space-x-2 mt-1">
          <button className="w-6 h-6 rounded-full bg-black border-2 border-gray-300"></button>
          <button className="w-6 h-6 rounded-full bg-gray-400 border border-gray-300"></button>
          <button className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></button>
        </div>
      </div>
      
      <div className="mt-3 flex items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mr-3">Qty:</span>
        <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
          <button 
            onClick={() => updateQuantity(6, -1)} 
            className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiMinus size={14} />
          </button>
          <span className="px-3 text-sm">1</span>
          <button 
            onClick={() => updateQuantity(6, 1)} 
            className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiPlus size={14} />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
        >
          <div className="flex space-x-4">
            <img
              src="https://picsum.photos/200/200?random=7"
              alt="Product"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{products[1].name}</h3>
                <button className="text-gray-400 hover:text-red-500">
                  <FiX size={18} />
                </button>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                ${products[1].price.toFixed(2)}
              </p>

              <div className="mt-3">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Color: Black
                </p>
                <div className="flex space-x-2 mt-1">
                  <button className="w-6 h-6 rounded-full bg-black border-2 border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-gray-400 border border-gray-300"></button>
                  <button className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300"></button>
                </div>
              </div>

              <div className="mt-3 flex items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400 mr-3">
                  Qty:
                </span>
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
                  <button
                    onClick={() => updateQuantity(6, -1)}
                    className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FiMinus size={14} />
                  </button>
                  <span className="px-3 text-sm">{quantities[6]}</span>
                  <button
                    onClick={() => updateQuantity(6, 1)}
                    className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Size Options",
      code: `<div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700">
  <div className="flex space-x-4">
    <img 
      src="https://picsum.photos/200/200?random=8" 
      alt="Product" 
      className="w-20 h-20 object-cover rounded"
    />
    <div className="flex-1">
      <div className="flex justify-between">
        <h3 className="font-medium">${products[2].name}</h3>
        <span className="font-medium">$${products[2].price.toFixed(2)}</span>
      </div>
      
      <div className="mt-2">
        <p className="text-sm text-gray-500 dark:text-gray-400">Size: M</p>
        <div className="flex space-x-2 mt-1">
          <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">XS</button>
          <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">S</button>
          <button className="text-xs px-2 py-1 border border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">M</button>
          <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">L</button>
          <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">XL</button>
        </div>
      </div>
      
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
          <button 
            onClick={() => updateQuantity(7, -1)} 
            className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiMinus size={14} />
          </button>
          <span className="px-3 text-sm">1</span>
          <button 
            onClick={() => updateQuantity(7, 1)} 
            className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiPlus size={14} />
          </button>
        </div>
        <button className="text-red-500 hover:text-red-700 text-sm flex items-center">
          <FiTrash2 size={14} className="mr-1" /> Remove
        </button>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="flex space-x-4">
            <img
              src="https://picsum.photos/200/200?random=8"
              alt="Product"
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{products[2].name}</h3>
                <span className="font-medium">
                  ${products[2].price.toFixed(2)}
                </span>
              </div>

              <div className="mt-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Size: M
                </p>
                <div className="flex space-x-2 mt-1">
                  <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    XS
                  </button>
                  <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    S
                  </button>
                  <button className="text-xs px-2 py-1 border border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                    M
                  </button>
                  <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    L
                  </button>
                  <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    XL
                  </button>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
                  <button
                    onClick={() => updateQuantity(7, -1)}
                    className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FiMinus size={14} />
                  </button>
                  <span className="px-3 text-sm">{quantities[7]}</span>
                  <button
                    onClick={() => updateQuantity(7, 1)}
                    className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>
                <button className="text-red-500 hover:text-red-700 text-sm flex items-center">
                  <FiTrash2 size={14} className="mr-1" /> Remove
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Saved for Later",
      code: `<div className="space-y-6">
  <div>
    <h3 className="font-medium text-lg mb-4">Your Cart (2)</h3>
    <div className="space-y-4">
      <div className="flex items-start justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="flex space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=9" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <h4 className="font-medium">${products[3].name}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[3].price.toFixed(
              2
            )}</p>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                <button 
                  onClick={() => updateQuantity(8, -1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiMinus size={14} />
                </button>
                <span className="px-2 text-sm">1</span>
                <button 
                  onClick={() => updateQuantity(8, 1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiPlus size={14} />
                </button>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-sm">
                Save for later
              </button>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <FiX size={18} />
        </button>
      </div>
      
      <div className="flex items-start justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="flex space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=10" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <h4 className="font-medium">${products[4].name}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[4].price.toFixed(
              2
            )}</p>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                <button 
                  onClick={() => updateQuantity(9, -1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiMinus size={14} />
                </button>
                <span className="px-2 text-sm">1</span>
                <button 
                  onClick={() => updateQuantity(9, 1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiPlus size={14} />
                </button>
              </div>
              <button className="text-blue-500 hover:text-blue-700 text-sm">
                Save for later
              </button>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <FiX size={18} />
        </button>
      </div>
    </div>
  </div>
  
  <div>
    <h3 className="font-medium text-lg mb-4">Saved for Later (1)</h3>
    <div className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
      <div className="flex space-x-4">
        <img 
          src="https://picsum.photos/200/200?random=11" 
          alt="Product" 
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h4 className="font-medium">${products[0].name}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[0].price.toFixed(
            2
          )}</p>
          <button className="mt-2 text-blue-500 hover:text-blue-700 text-sm">
            Move to cart
          </button>
        </div>
      </div>
      <button className="text-gray-400 hover:text-red-500">
        <FiX size={18} />
      </button>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="space-y-6"
        >
          <div>
            <h3 className="font-medium text-lg mb-4">Your Cart (2)</h3>
            <div className="space-y-4">
              <div className="flex items-start justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="flex space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=9"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">{products[3].name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[3].price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                        <button
                          onClick={() => updateQuantity(8, -1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="px-2 text-sm">{quantities[8]}</span>
                        <button
                          onClick={() => updateQuantity(8, 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                      <button className="text-blue-500 hover:text-blue-700 text-sm">
                        Save for later
                      </button>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiX size={18} />
                </button>
              </div>

              <div className="flex items-start justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="flex space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=10"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium">{products[4].name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[4].price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                        <button
                          onClick={() => updateQuantity(9, -1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="px-2 text-sm">{quantities[9]}</span>
                        <button
                          onClick={() => updateQuantity(9, 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                      <button className="text-blue-500 hover:text-blue-700 text-sm">
                        Save for later
                      </button>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiX size={18} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Saved for Later (1)</h3>
            <div className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex space-x-4">
                <img
                  src="https://picsum.photos/200/200?random=11"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium">{products[0].name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    ${products[0].price.toFixed(2)}
                  </p>
                  <button className="mt-2 text-blue-500 hover:text-blue-700 text-sm">
                    Move to cart
                  </button>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <FiX size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Order Summary",
      code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="md:col-span-2 space-y-4">
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <img 
          src="https://picsum.photos/200/200?random=12" 
          alt="Product" 
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">${products[1].name}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[1].price.toFixed(
            2
          )}</p>
          <div className="mt-2 flex items-center space-x-4">
            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
              <button 
                onClick={() => updateQuantity(10, -1)} 
                className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiMinus size={14} />
              </button>
              <span className="px-2 text-sm">1</span>
              <button 
                onClick={() => updateQuantity(10, 1)} 
                className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiPlus size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="text-gray-400 hover:text-red-500">
        <FiTrash2 size={18} />
      </button>
    </div>
    
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <img 
          src="https://picsum.photos/200/200?random=13" 
          alt="Product" 
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-medium">${products[2].name}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[2].price.toFixed(
            2
          )}</p>
          <div className="mt-2 flex items-center space-x-4">
            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
              <button 
                onClick={() => updateQuantity(11, -1)} 
                className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiMinus size={14} />
              </button>
              <span className="px-2 text-sm">1</span>
              <button 
                onClick={() => updateQuantity(11, 1)} 
                className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiPlus size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="text-gray-400 hover:text-red-500">
        <FiTrash2 size={18} />
      </button>
    </div>
  </div>
  
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-fit sticky top-4">
    <h3 className="font-medium text-lg mb-4">Order Summary</h3>
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
        <span>$${(products[1].price + products[2].price).toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500 dark:text-gray-400">Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500 dark:text-gray-400">Tax</span>
        <span>$5.99</span>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
      <div className="flex justify-between font-medium">
        <span>Total</span>
        <span>$${(products[1].price + products[2].price + 5.99).toFixed(
          2
        )}</span>
      </div>
    </div>
    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mt-6 transition-colors">
      Proceed to Checkout
    </button>
    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
      or <a href="#" className="text-blue-500 hover:underline">Continue Shopping</a>
    </p>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src="https://picsum.photos/200/200?random=12"
                  alt="Product"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{products[1].name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    ${products[1].price.toFixed(2)}
                  </p>
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                      <button
                        onClick={() => updateQuantity(10, -1)}
                        className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="px-2 text-sm">{quantities[10]}</span>
                      <button
                        onClick={() => updateQuantity(10, 1)}
                        className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <FiTrash2 size={18} />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src="https://picsum.photos/200/200?random=13"
                  alt="Product"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{products[2].name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    ${products[2].price.toFixed(2)}
                  </p>
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                      <button
                        onClick={() => updateQuantity(11, -1)}
                        className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <FiMinus size={14} />
                      </button>
                      <span className="px-2 text-sm">{quantities[11]}</span>
                      <button
                        onClick={() => updateQuantity(11, 1)}
                        className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-red-500">
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-fit sticky top-4">
            <h3 className="font-medium text-lg mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Subtotal
                </span>
                <span>
                  ${(products[1].price + products[2].price).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Shipping
                </span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Tax</span>
                <span>$5.99</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>
                  ${(products[1].price + products[2].price + 5.99).toFixed(2)}
                </span>
              </div>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mt-6 transition-colors">
              Proceed to Checkout
            </button>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              or{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Continue Shopping
              </a>
            </p>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Discount Code",
      code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <div className="p-6">
    <h2 className="text-xl font-bold mb-6">Your Cart</h2>
    
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=14" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[3].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[3].price.toFixed(
              2
            )}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
            <button 
              onClick={() => updateQuantity(12, -1)} 
              className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FiMinus size={14} />
            </button>
            <span className="px-3">1</span>
            <button 
              onClick={() => updateQuantity(12, 1)} 
              className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FiPlus size={14} />
            </button>
          </div>
          <span className="font-medium w-20 text-right">$${products[3].price.toFixed(
            2
          )}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=15" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[4].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[4].price.toFixed(
              2
            )}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
            <button 
              onClick={() => updateQuantity(13, -1)} 
              className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FiMinus size={14} />
            </button>
            <span className="px-3">1</span>
            <button 
              onClick={() => updateQuantity(13, 1)} 
              className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FiPlus size={14} />
            </button>
          </div>
          <span className="font-medium w-20 text-right">$${products[4].price.toFixed(
            2
          )}</span>
        </div>
      </div>
    </div>
    
    <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
      <div className="flex mb-4">
        <input 
          type="text" 
          placeholder="Discount code" 
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
          Apply
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
          <span>$${(products[3].price + products[4].price).toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 dark:text-gray-400">Shipping</span>
          <span>Free</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 dark:text-gray-400">Discount</span>
          <span className="text-green-500">-$10.00</span>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>$${(products[3].price + products[4].price - 10).toFixed(
            2
          )}</span>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mt-6 transition-colors">
        Checkout
      </button>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Your Cart</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=14"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[3].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[3].price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
                    <button
                      onClick={() => updateQuantity(12, -1)}
                      className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FiMinus size={14} />
                    </button>
                    <span className="px-3">{quantities[12]}</span>
                    <button
                      onClick={() => updateQuantity(12, 1)}
                      className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FiPlus size={14} />
                    </button>
                  </div>
                  <span className="font-medium w-20 text-right">
                    ${products[3].price.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=15"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[4].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[4].price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg">
                    <button
                      onClick={() => updateQuantity(13, -1)}
                      className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FiMinus size={14} />
                    </button>
                    <span className="px-3">{quantities[13]}</span>
                    <button
                      onClick={() => updateQuantity(13, 1)}
                      className="px-3 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <FiPlus size={14} />
                    </button>
                  </div>
                  <span className="font-medium w-20 text-right">
                    ${products[4].price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-r-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                  Apply
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Subtotal
                  </span>
                  <span>
                    ${(products[3].price + products[4].price).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Shipping
                  </span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">
                    Discount
                  </span>
                  <span className="text-green-500">-$10.00</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>
                    ${(products[3].price + products[4].price - 10).toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mt-6 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Empty Cart State",
      code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
  <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
    <FiShoppingCart size={40} className="text-gray-400 dark:text-gray-500" />
  </div>
  <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
  <p className="text-gray-500 dark:text-gray-400 mb-6">Looks like you haven't added anything to your cart yet</p>
  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
    Continue Shopping
  </button>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center"
        >
          <div className="mx-auto w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-6">
            <FiShoppingCart
              size={40}
              className="text-gray-400 dark:text-gray-500"
            />
          </div>
          <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Looks like you haven't added anything to your cart yet
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Continue Shopping
          </button>
        </motion.div>
      ),
    },
    {
      name: "Cart with Progress Bar",
      code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium">Free shipping on orders over $50</span>
            <span className="text-sm font-medium">\${(50 - (products[0].price + products[1].price)).toFixed(2)} away</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-blue-500 h-2.5 rounded-full" 
              style={{ width: \`\${Math.min(100, ((products[0].price + products[1].price) / 50 * 100))}%\` }}
            ></div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://picsum.photos/200/200?random=16" 
                alt="Product" 
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-medium">{products[0].name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">\${products[0].price.toFixed(2)}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <FiTrash2 size={18} />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://picsum.photos/200/200?random=17" 
                alt="Product" 
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-medium">{products[1].name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">\${products[1].price.toFixed(2)}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-500">
              <FiTrash2 size={18} />
            </button>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex justify-between font-medium text-lg mb-6">
            <span>Subtotal</span>
            <span>\${(products[0].price + products[1].price).toFixed(2)}</span>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
            Proceed to Checkout
          </button>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            or <a href="#" className="text-blue-500 hover:underline">Continue Shopping</a>
          </p>
        </div>
      </div>
    </div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">
                  Free shipping on orders over $50
                </span>
                <span className="text-sm font-medium">
                  ${(50 - (products[0].price + products[1].price)).toFixed(2)}{" "}
                  away
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{
                    width: `${Math.min(
                      100,
                      ((products[0].price + products[1].price) / 50) * 100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=16"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[0].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[0].price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={18} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=17"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[1].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[1].price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>

            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Subtotal</span>
                <span>
                  ${(products[0].price + products[1].price).toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
                Proceed to Checkout
              </button>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                or{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Continue Shopping
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Product Options",
      code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex space-x-4">
            <img 
              src="https://picsum.photos/200/200?random=18" 
              alt="Product" 
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <h3 className="font-medium">{products[2].name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">\${products[2].price.toFixed(2)}</p>
              
              <div className="mt-2 space-y-2">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Color: Black</p>
                  <div className="flex space-x-2 mt-1">
                    <button className="w-5 h-5 rounded-full bg-black border-2 border-gray-300"></button>
                    <button className="w-5 h-5 rounded-full bg-gray-400 border border-gray-300"></button>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Size: M</p>
                  <div className="flex space-x-2 mt-1">
                    <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">S</button>
                    <button className="text-xs px-2 py-1 border border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">M</button>
                    <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">L</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <button className="text-gray-400 hover:text-red-500 mb-4">
              <FiX size={18} />
            </button>
            <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
              <button 
                onClick={() => updateQuantity(14, -1)} 
                className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiMinus size={14} />
              </button>
              <span className="px-3 text-sm">{quantities[14]}</span>
              <button 
                onClick={() => updateQuantity(14, 1)} 
                className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiPlus size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
        >
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex space-x-4">
                <img
                  src="https://picsum.photos/200/200?random=18"
                  alt="Product"
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{products[2].name}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    ${products[2].price.toFixed(2)}
                  </p>

                  <div className="mt-2 space-y-2">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Color: Black
                      </p>
                      <div className="flex space-x-2 mt-1">
                        <button className="w-5 h-5 rounded-full bg-black border-2 border-gray-300"></button>
                        <button className="w-5 h-5 rounded-full bg-gray-400 border border-gray-300"></button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Size: M
                      </p>
                      <div className="flex space-x-2 mt-1">
                        <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                          S
                        </button>
                        <button className="text-xs px-2 py-1 border border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded">
                          M
                        </button>
                        <button className="text-xs px-2 py-1 border border-gray-200 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                          L
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <button className="text-gray-400 hover:text-red-500 mb-4">
                  <FiX size={18} />
                </button>
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
                  <button
                    onClick={() => updateQuantity(14, -1)}
                    className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FiMinus size={14} />
                  </button>
                  <span className="px-3 text-sm">{quantities[14]}</span>
                  <button
                    onClick={() => updateQuantity(14, 1)}
                    className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FiPlus size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Estimated Delivery",
      code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <div className="p-6">
    <h2 className="text-xl font-bold mb-6">Order Summary</h2>
    
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=19" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[3].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[3].price.toFixed(
              2
            )}</p>
          </div>
        </div>
        <span className="font-medium">$${products[3].price.toFixed(2)}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=20" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[4].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[4].price.toFixed(
              2
            )}</p>
          </div>
        </div>
        <span className="font-medium">$${products[4].price.toFixed(2)}</span>
      </div>
    </div>
    
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
      <div className="flex items-start">
        <div className="bg-blue-100 dark:bg-blue-800/30 p-2 rounded-full mr-3">
          <FiShoppingCart className="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Free shipping</h4>
          <p className="text-blue-600 dark:text-blue-400 text-sm">Estimated delivery by <span className="font-medium">June 15</span></p>
        </div>
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
        <span>$${(products[3].price + products[4].price).toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500 dark:text-gray-400">Shipping</span>
        <span>Free</span>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>$${(products[3].price + products[4].price).toFixed(2)}</span>
      </div>
    </div>
    
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mt-6 transition-colors">
      Proceed to Checkout
    </button>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=19"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[3].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[3].price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <span className="font-medium">
                  ${products[3].price.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=20"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[4].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[4].price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <span className="font-medium">
                  ${products[4].price.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-800/30 p-2 rounded-full mr-3">
                  <FiShoppingCart className="text-blue-500 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">
                    Free shipping
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">
                    Estimated delivery by{" "}
                    <span className="font-medium">June 15</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Subtotal
                </span>
                <span>
                  ${(products[3].price + products[4].price).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Shipping
                </span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>
                  ${(products[3].price + products[4].price).toFixed(2)}
                </span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium mt-6 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Continue Shopping",
      code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <div className="p-6">
    <h2 className="text-xl font-bold mb-6">Your Cart (2)</h2>
    
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=21" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[0].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[0].price.toFixed(
              2
            )}</p>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                <button 
                  onClick={() => updateQuantity(15, -1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiMinus size={14} />
                </button>
                <span className="px-2 text-sm">1</span>
                <button 
                  onClick={() => updateQuantity(15, 1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <FiTrash2 size={18} />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=22" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[1].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[1].price.toFixed(
              2
            )}</p>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                <button 
                  onClick={() => updateQuantity(16, -1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiMinus size={14} />
                </button>
                <span className="px-2 text-sm">1</span>
                <button 
                  onClick={() => updateQuantity(16, 1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
    
    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
      <div className="flex justify-between font-medium text-lg mb-6">
        <span>Subtotal</span>
        <span>$${(products[0].price + products[1].price).toFixed(2)}</span>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mb-4 transition-colors">
        Proceed to Checkout
      </button>
      <button className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
        Continue Shopping
      </button>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Your Cart (2)</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=21"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[0].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[0].price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                        <button
                          onClick={() => updateQuantity(15, -1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="px-2 text-sm">{quantities[15]}</span>
                        <button
                          onClick={() => updateQuantity(15, 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={18} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=22"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[1].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[1].price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                        <button
                          onClick={() => updateQuantity(16, -1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="px-2 text-sm">{quantities[16]}</span>
                        <button
                          onClick={() => updateQuantity(16, 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Subtotal</span>
                <span>
                  ${(products[0].price + products[1].price).toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mb-4 transition-colors">
                Proceed to Checkout
              </button>
              <button className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 py-3 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                Continue Shopping
              </button>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Secure Checkout",
      code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <div className="p-6">
    <h2 className="text-xl font-bold mb-6">Your Cart</h2>
    
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=23" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[2].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[2].price.toFixed(
              2
            )}</p>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                <button 
                  onClick={() => updateQuantity(17, -1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiMinus size={14} />
                </button>
                <span className="px-2 text-sm">1</span>
                <button 
                  onClick={() => updateQuantity(17, 1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
    
    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
      <div className="flex justify-between font-medium text-lg mb-6">
        <span>Subtotal</span>
        <span>$${products[2].price.toFixed(2)}</span>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mb-4 transition-colors flex items-center justify-center">
        <span>Secure Checkout</span>
        <FiChevronRight className="ml-2" />
      </button>
      <div className="flex items-center justify-center space-x-4">
        <RiVisaLine size={24} />
        <FaCcMastercard size={24}/>
        <GrAmex size={24} />
        <FaCcPaypal size={24} />
      </div>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Your Cart</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=23"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[2].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[2].price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                        <button
                          onClick={() => updateQuantity(17, -1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="px-2 text-sm">{quantities[17]}</span>
                        <button
                          onClick={() => updateQuantity(17, 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Subtotal</span>
                <span>${products[2].price.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mb-4 transition-colors flex items-center justify-center">
                <span>Secure Checkout</span>
                <FiChevronRight className="ml-2" />
              </button>
              <div className="flex items-center justify-center space-x-4">
                <RiVisaLine size={24} />
                <FaCcMastercard size={24} />
                <GrAmex size={24} />
                <FaCcPaypal size={24} />
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Gift Options",
      code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <div className="p-6">
    <h2 className="text-xl font-bold mb-6">Your Cart (1)</h2>
    
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=24" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[3].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[3].price.toFixed(
              2
            )}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
    
    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
      <div className="flex items-start">
        <input type="checkbox" id="gift" className="mt-1 mr-3" />
        <div>
          <label htmlFor="gift" className="font-medium block mb-1">This is a gift</label>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Add gift wrapping and a personalized message</p>
          <div className="mt-3 hidden" id="gift-options">
            <textarea 
              placeholder="Personalized message (optional)" 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            ></textarea>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Max 200 characters</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
      <div className="flex justify-between font-medium text-lg mb-6">
        <span>Total</span>
        <span>$${products[3].price.toFixed(2)}</span>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Your Cart (1)</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=24"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[3].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[3].price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-6">
              <div className="flex items-start">
                <input type="checkbox" id="gift" className="mt-1 mr-3" />
                <div>
                  <label htmlFor="gift" className="font-medium block mb-1">
                    This is a gift
                  </label>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Add gift wrapping and a personalized message
                  </p>
                  <div className="mt-3 hidden" id="gift-options">
                    <textarea
                      placeholder="Personalized message (optional)"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                    ></textarea>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Max 200 characters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Total</span>
                <span>${products[3].price.toFixed(2)}</span>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Express Checkout",
      code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
  <div className="p-6">
    <h2 className="text-xl font-bold mb-6">Your Cart (2)</h2>
    
    <div className="space-y-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=25" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[4].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[4].price.toFixed(
              2
            )}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <FiTrash2 size={18} />
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=26" 
            alt="Product" 
            className="w-16 h-16 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[0].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[0].price.toFixed(
              2
            )}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
    
    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
      <div className="flex justify-between font-medium text-lg mb-6">
        <span>Total</span>
        <span>$${(products[4].price + products[0].price).toFixed(2)}</span>
      </div>
      
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mb-4 transition-colors">
        Proceed to Checkout
      </button>
      
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
            Or checkout with
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        <button className="flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FaCcPaypal size={24} />
                </button>
                <button className="flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                <FaGooglePay size={36} />
                </button>
                <button className="flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                <FaApplePay size={36} />
                </button>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Your Cart (2)</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=25"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[4].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[4].price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={18} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=26"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[0].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[0].price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="flex justify-between font-medium text-lg mb-6">
                <span>Total</span>
                <span>
                  ${(products[4].price + products[0].price).toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mb-4 transition-colors">
                Proceed to Checkout
              </button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or checkout with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button className="flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FaCcPaypal size={24} />
                </button>
                <button className="flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FaGooglePay size={36} />
                </button>
                <button className="flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700">
                  <FaApplePay size={36} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      name: "Cart with Recently Viewed",
      code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="md:col-span-2">
    <h2 className="text-xl font-bold mb-6">Your Cart (2)</h2>
    
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=27" 
            alt="Product" 
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[1].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[1].price.toFixed(
              2
            )}</p>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                <button 
                  onClick={() => updateQuantity(18, -1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiMinus size={14} />
                </button>
                <span className="px-2 text-sm">1</span>
                <button 
                  onClick={() => updateQuantity(18, 1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <FiTrash2 size={18} />
        </button>
      </div>
      
      <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <div className="flex items-center space-x-4">
          <img 
            src="https://picsum.photos/200/200?random=28" 
            alt="Product" 
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <h3 className="font-medium">${products[2].name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">$${products[2].price.toFixed(
              2
            )}</p>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                <button 
                  onClick={() => updateQuantity(19, -1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiMinus size={14} />
                </button>
                <span className="px-2 text-sm">1</span>
                <button 
                  onClick={() => updateQuantity(19, 1)} 
                  className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
    
    <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <h3 className="font-medium mb-3">Recently Viewed</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="cursor-pointer">
          <img 
            src="https://picsum.photos/200/200?random=29" 
            alt="Product" 
            className="w-full h-24 object-cover rounded-lg mb-2"
          />
          <p className="text-sm font-medium">Wireless Earbuds</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">$59.99</p>
        </div>
        <div className="cursor-pointer">
          <img 
            src="https://picsum.photos/200/200?random=30" 
            alt="Product" 
            className="w-full h-24 object-cover rounded-lg mb-2"
          />
          <p className="text-sm font-medium">Smart Watch</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">$129.99</p>
        </div>
        <div className="cursor-pointer">
          <img 
            src="https://picsum.photos/200/200?random=31" 
            alt="Product" 
            className="w-full h-24 object-cover rounded-lg mb-2"
          />
          <p className="text-sm font-medium">Backpack</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">$45.99</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-fit sticky top-4">
    <h3 className="font-medium text-lg mb-4">Order Summary</h3>
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
        <span>$${(products[1].price + products[2].price).toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500 dark:text-gray-400">Shipping</span>
        <span>Free</span>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
      <div className="flex justify-between font-medium">
        <span>Total</span>
        <span>$${(products[1].price + products[2].price).toFixed(2)}</span>
      </div>
    </div>
    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mt-6 transition-colors">
      Proceed to Checkout
    </button>
  </div>
</div>`,
      component: (
        <motion.div
          variants={cartVariants}
          whileHover="hover"
          whileTap="tap"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-6">Your Cart (2)</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=27"
                    alt="Product"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[1].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[1].price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                        <button
                          onClick={() => updateQuantity(18, -1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="px-2 text-sm">{quantities[18]}</span>
                        <button
                          onClick={() => updateQuantity(18, 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={18} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://picsum.photos/200/200?random=28"
                    alt="Product"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{products[2].name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      ${products[2].price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center space-x-4">
                      <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                        <button
                          onClick={() => updateQuantity(19, -1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="px-2 text-sm">{quantities[19]}</span>
                        <button
                          onClick={() => updateQuantity(19, 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>

            <div className="mt-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3">Recently Viewed</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="cursor-pointer">
                  <img
                    src="https://picsum.photos/200/200?random=29"
                    alt="Product"
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm font-medium">Wireless Earbuds</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    $59.99
                  </p>
                </div>
                <div className="cursor-pointer">
                  <img
                    src="https://picsum.photos/200/200?random=30"
                    alt="Product"
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm font-medium">Smart Watch</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    $129.99
                  </p>
                </div>
                <div className="cursor-pointer">
                  <img
                    src="https://picsum.photos/200/200?random=31"
                    alt="Product"
                    className="w-full h-24 object-cover rounded-lg mb-2"
                  />
                  <p className="text-sm font-medium">Backpack</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    $45.99
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-fit sticky top-4">
            <h3 className="font-medium text-lg mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Subtotal
                </span>
                <span>
                  ${(products[1].price + products[2].price).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Shipping
                </span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 my-3"></div>
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>
                  ${(products[1].price + products[2].price).toFixed(2)}
                </span>
              </div>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium mt-6 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
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
            Cart Components Collection
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
            Explore our collection of meticulously crafted cart components with
            modern designs, responsive layouts, and interactive features. Click
            the <FiCopy className="inline" /> icon to copy the code for any
            component!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Cart Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {cartComponents.map((cart, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative"
            >
              <h2 className="text-2xl font-semibold mb-6">{cart.name}</h2>
              <div className="group relative">
                {cart.component}
                <button
                  onClick={() => copyToClipboard(cart.code, index)}
                  className="absolute -top-2 -right-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
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
                    className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded"
                  >
                    Copied!
                  </motion.div>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartShowcase;
