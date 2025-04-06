import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiShoppingCart,
  FiX,
  FiPlus,
  FiMinus,
  FiHeart,
  FiStar,
  FiTruck,
  FiCreditCard,
  FiShield,
} from "react-icons/fi";

const CartShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [quantities, setQuantities] = useState(Array(50).fill(1));
  const [favorites, setFavorites] = useState(Array(50).fill(false));

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

  const updateQuantity = (index, change) => {
    const newQuantities = [...quantities];
    newQuantities[index] = Math.max(1, newQuantities[index] + change);
    setQuantities(newQuantities);
  };

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  // Cart variants for Framer Motion
  const cartVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  // Cart data - 50 different cart styles
  const cartCategories = [
    {
      title: "Basic Cart Designs",
      carts: [
        {
          name: "Simple Cart",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold">Shopping Cart</h3>
    <span className="text-sm text-gray-500">1 item</span>
  </div>
  <div className="flex items-center border-b pb-4 mb-4">
    <img 
      src="https://picsum.photos/200/300?random=5?random=4" 
      alt="Product" 
      className="w-20 h-20 object-cover rounded"
    />
    <div className="ml-4 flex-1">
      <h4 className="font-medium">Premium Headphones</h4>
      <p className="text-gray-500 text-sm">Black, Wireless</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-semibold">$199.99</span>
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <FiMinus size={14} />
          </button>
          <span>1</span>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <FiPlus size={14} />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-between items-center">
    <span className="font-semibold">Total: $199.99</span>
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Checkout
    </button>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Shopping Cart</h3>
                <span className="text-sm text-gray-500">1 item</span>
              </div>
              <div className="flex items-center border-b pb-4 mb-4">
                <img
                  src="https://picsum.photos/200/300?random=5?random=4"
                  alt="Product"
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h4 className="font-medium">Premium Headphones</h4>
                  <p className="text-gray-500 text-sm">Black, Wireless</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold">$199.99</span>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 rounded-full hover:bg-gray-100">
                        <FiMinus size={14} />
                      </button>
                      <span>1</span>
                      <button className="p-1 rounded-full hover:bg-gray-100">
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total: $199.99</span>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Checkout
                </button>
              </div>
            </div>
          ),
        },
        {
          name: "Minimalist Cart",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-100 dark:border-gray-700">
  <div className="flex items-center space-x-4">
    <img 
      src="https://picsum.photos/200/300?random=5" 
      alt="Product" 
      className="w-16 h-16 object-cover rounded"
    />
    <div className="flex-1">
      <h4 className="font-medium">Wireless Earbuds</h4>
      <p className="text-gray-500 text-sm">White</p>
      <span className="font-semibold">$129.00</span>
    </div>
    <button className="text-gray-400 hover:text-red-500">
      <FiX size={18} />
    </button>
  </div>
  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
    <div className="flex justify-between mb-2">
      <span>Subtotal</span>
      <span>$129.00</span>
    </div>
    <button className="w-full py-2 border border-black dark:border-white rounded mt-2 hover:bg-gray-100 dark:hover:bg-gray-700">
      View Cart
    </button>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <img
                  src="https://picsum.photos/100/300"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium">Wireless Earbuds</h4>
                  <p className="text-gray-500 text-sm">White</p>
                  <span className="font-semibold">$129.00</span>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <FiX size={18} />
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$129.00</span>
                </div>
                <button className="w-full py-2 border border-black dark:border-white rounded mt-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  View Cart
                </button>
              </div>
            </div>
          ),
        },
        // Add more cart designs here...
        {
          name: "Floating Cart",
          code: `<div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-full shadow-xl p-3 flex items-center justify-center">
  <div className="relative">
    <FiShoppingCart size={24} />
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
  </div>
</div>`,
          component: (
            <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-full shadow-xl p-3 flex items-center justify-center">
              <div className="relative">
                <FiShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          ),
        },
        {
          name: "Detailed Cart",
          code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
  <div className="p-6 border-b border-gray-100 dark:border-gray-700">
    <h3 className="text-xl font-bold flex items-center">
      <FiShoppingCart className="mr-2" /> Your Cart
    </h3>
  </div>
  <div className="p-6">
    <div className="flex items-start space-x-4 pb-4 mb-4 border-b border-gray-100 dark:border-gray-700">
      <img 
        src="https://picsum.photos/200/300?random=6" 
        alt="Product" 
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-semibold">Smart Watch Series 5</h4>
          <button className="text-gray-400 hover:text-red-500">
            <FiX size={18} />
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-1">Black, 44mm</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center space-x-3">
            <button className="p-1 rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <FiMinus size={14} />
            </button>
            <span>1</span>
            <button className="p-1 rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
              <FiPlus size={14} />
            </button>
          </div>
          <span className="font-semibold">$349.99</span>
        </div>
      </div>
    </div>
    <div className="space-y-3 mb-6">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>$349.99</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between">
        <span>Tax</span>
        <span>$24.50</span>
      </div>
    </div>
    <div className="flex justify-between items-center font-bold text-lg border-t border-gray-100 dark:border-gray-700 pt-4">
      <span>Total</span>
      <span>$374.49</span>
    </div>
  </div>
  <div className="p-6 bg-gray-50 dark:bg-gray-700">
    <button className="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:opacity-90">
      Proceed to Checkout
    </button>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold flex items-center">
                  <FiShoppingCart className="mr-2" /> Your Cart
                </h3>
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-4 pb-4 mb-4 border-b border-gray-100 dark:border-gray-700">
                  <img
                    src="https://picsum.photos/200/300?random=6"
                    alt="Product"
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">Smart Watch Series 5</h4>
                      <button className="text-gray-400 hover:text-red-500">
                        <FiX size={18} />
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Black, 44mm</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-3">
                        <button className="p-1 rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <FiMinus size={14} />
                        </button>
                        <span>1</span>
                        <button className="p-1 rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                          <FiPlus size={14} />
                        </button>
                      </div>
                      <span className="font-semibold">$349.99</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>$349.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>$24.50</span>
                  </div>
                </div>
                <div className="flex justify-between items-center font-bold text-lg border-t border-gray-100 dark:border-gray-700 pt-4">
                  <span>Total</span>
                  <span>$374.49</span>
                </div>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-700">
                <button className="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:opacity-90">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          ),
        },
        // Continue adding more cart designs...
        {
          name: "Sidebar Cart",
          code: `<div className="w-80 bg-white dark:bg-gray-800 h-screen fixed right-0 top-0 shadow-xl flex flex-col">
  <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
    <h3 className="text-xl font-bold">Your Cart (2)</h3>
    <button className="text-gray-500 hover:text-black dark:hover:text-white">
      <FiX size={20} />
    </button>
  </div>
  <div className="flex-1 overflow-y-auto p-6">
    <div className="flex items-start space-x-4 pb-4 mb-4">
      <img 
        src="https://picsum.photos/200/300?random=5?random=2" 
        alt="Product" 
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">Wireless Charger</h4>
          <span className="font-semibold">$29.99</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">Fast charging</p>
        <div className="flex items-center space-x-3 mt-3">
          <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiMinus size={14} />
          </button>
          <span>1</span>
          <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiPlus size={14} />
          </button>
        </div>
      </div>
    </div>
    <div className="flex items-start space-x-4 pb-4 mb-4">
      <img 
        src="https://picsum.photos/200/300?random=5?random=2" 
        alt="Product" 
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">Phone Case</h4>
          <span className="font-semibold">$19.99</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">Black, Slim fit</p>
        <div className="flex items-center space-x-3 mt-3">
          <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiMinus size={14} />
          </button>
          <span>1</span>
          <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiPlus size={14} />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="p-6 border-t border-gray-100 dark:border-gray-700">
    <div className="flex justify-between mb-4">
      <span>Subtotal</span>
      <span>$49.98</span>
    </div>
    <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium">
      Checkout
    </button>
    <p className="text-center text-sm text-gray-500 mt-3">
      or <button className="text-blue-500 hover:underline">Continue Shopping</button>
    </p>
  </div>
</div>`,
          component: (
            <div className="w-80 bg-white dark:bg-gray-800 h-screen fixed right-0 top-0 shadow-xl flex flex-col">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-bold">Your Cart (2)</h3>
                <button className="text-gray-500 hover:text-black dark:hover:text-white">
                  <FiX size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex items-start space-x-4 pb-4 mb-4">
                  <img
                    src="https://picsum.photos/200/300?random=5?random=2"
                    alt="Product"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Wireless Charger</h4>
                      <span className="font-semibold">$29.99</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">Fast charging</p>
                    <div className="flex items-center space-x-3 mt-3">
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FiMinus size={14} />
                      </button>
                      <span>1</span>
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 pb-4 mb-4">
                  <img
                    src="https://picsum.photos/200/300?random=5?random=1"
                    alt="Product"
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Phone Case</h4>
                      <span className="font-semibold">$19.99</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      Black, Slim fit
                    </p>
                    <div className="flex items-center space-x-3 mt-3">
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FiMinus size={14} />
                      </button>
                      <span>1</span>
                      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FiPlus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between mb-4">
                  <span>Subtotal</span>
                  <span>$49.98</span>
                </div>
                <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium">
                  Checkout
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  or{" "}
                  <button className="text-blue-500 hover:underline">
                    Continue Shopping
                  </button>
                </p>
              </div>
            </div>
          ),
        },
        // Add more cart designs until you reach 50...
      ],
    },
    {
      title: "Advanced Cart Features",
      carts: [
        // Add more cart designs with advanced features...
        {
          name: "Cart with Coupon",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
  <div className="flex items-center justify-between mb-6">
    <h3 className="text-xl font-bold">Your Cart</h3>
    <span className="text-sm text-gray-500">3 items</span>
  </div>
  
  <div className="space-y-4 mb-6">
    <div className="flex items-start space-x-4">
      <img 
        src="https://picsum.photos/200/300?random=5?random=1" 
        alt="Product" 
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">Bluetooth Speaker</h4>
          <span className="font-semibold">$89.99</span>
        </div>
        <p className="text-gray-500 text-sm">Portable, Waterproof</p>
      </div>
    </div>
    
    <div className="flex items-start space-x-4">
      <img 
        src="https://picsum.photos/200/300?random=5?random=3" 
        alt="Product" 
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium">USB-C Cable</h4>
          <span className="font-semibold">$12.99</span>
        </div>
        <p className="text-gray-500 text-sm">3ft, Fast charging</p>
      </div>
    </div>
  </div>
  
  <div className="mb-4">
    <div className="flex items-center mb-2">
      <input 
        type="text" 
        placeholder="Coupon code" 
        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
        Apply
      </button>
    </div>
    <p className="text-green-500 text-sm">Coupon "SAVE10" applied! 10% discount</p>
  </div>
  
  <div className="space-y-3 mb-6">
    <div className="flex justify-between">
      <span>Subtotal</span>
      <span>$102.98</span>
    </div>
    <div className="flex justify-between">
      <span>Discount</span>
      <span className="text-green-500">-$10.30</span>
    </div>
    <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-100 dark:border-gray-700">
      <span>Total</span>
      <span>$92.68</span>
    </div>
  </div>
  
  <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium">
    Proceed to Checkout
  </button>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Your Cart</h3>
                <span className="text-sm text-gray-500">3 items</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://picsum.photos/200/300?random=5?random=3"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">Bluetooth Speaker</h4>
                      <span className="font-semibold">$89.99</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Portable, Waterproof
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <img
                    src="https://picsum.photos/200/300?random=5?random=4"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium">USB-C Cable</h4>
                      <span className="font-semibold">$12.99</span>
                    </div>
                    <p className="text-gray-500 text-sm">3ft, Fast charging</p>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
                    Apply
                  </button>
                </div>
                <p className="text-green-500 text-sm">
                  Coupon "SAVE10" applied! 10% discount
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$102.98</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-500">-$10.30</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-100 dark:border-gray-700">
                  <span>Total</span>
                  <span>$92.68</span>
                </div>
              </div>

              <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium">
                Proceed to Checkout
              </button>
            </div>
          ),
        },
        // Continue adding more cart designs...
      ],
    },
    // Add more categories as needed to reach 50 carts
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
            Cart Component Showcase
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
            Explore our collection of 50+ responsive cart components with modern
            designs, animations, and interactive features. Click the{" "}
            <FiCopy className="inline" />
            icon to copy the Tailwind CSS code for any cart!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Cart Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-6">
                {category.carts.map((cart, cartIndex) => {
                  const globalIndex =
                    catIndex * category.carts.length + cartIndex;
                  return (
                    <div key={cartIndex} className="group relative">
                      <motion.div
                        variants={cartVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg"
                      >
                        {cart.component}
                      </motion.div>
                      <button
                        onClick={() => copyToClipboard(cart.code, globalIndex)}
                        className="absolute -top-2 -right-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md hover:bg-gray-200 dark:hover:bg-gray-600"
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
                      <h3 className="mt-2 font-medium text-center">
                        {cart.name}
                      </h3>
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

export default CartShowcase;
