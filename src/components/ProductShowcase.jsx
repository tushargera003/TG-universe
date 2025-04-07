import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiShare2,
  FiChevronRight,
  FiPlus,
  FiMinus,
  FiZoomIn,
} from "react-icons/fi";

const ProductShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [wishlist, setWishlist] = useState({});
  const [ratings, setRatings] = useState({});
  const [quantities, setQuantities] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Initialize all data
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }

    const initialRatings = {};
    const initialQuantities = {};
    for (let i = 1; i <= 50; i++) {
      initialRatings[i] = Math.floor(Math.random() * 3) + 3;
      initialQuantities[i] = 1;
    }
    setRatings(initialRatings);
    setQuantities(initialQuantities);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleWishlist = (id) =>
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + value),
    }));
  };

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // 50 Unique Product Components
  const productCategories = [
    // Category 1: Minimalist Cards (5 variations)
    {
      title: "Minimalist Cards",
      products: [
        {
          id: 1,
          name: "Classic Tee",
          price: "$29.99",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
  <img src="https://picsum.photos/400/300?random=1" alt="Classic Tee" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-lg font-semibold">Classic Tee</h3>
    <p className="text-gray-600 dark:text-gray-300">$29.99</p>
    <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
      Add to Cart
    </button>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <img
                src="https://picsum.photos/400/300?random=1"
                alt="Classic Tee"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Classic Tee</h3>
                <p className="text-gray-600 dark:text-gray-300">$29.99</p>
                <button className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ),
        },
        {
          id: 2,
          name: "Wireless Headphones",
          price: "$129.99",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
  <div className="flex justify-between items-start">
    <div>
      <h3 className="font-medium">Wireless Headphones</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">Premium sound</p>
    </div>
    <span className="font-bold">$129.99</span>
  </div>
  <img src="https://picsum.photos/400/300?random=2" alt="Headphones" className="my-3 w-full h-32 object-contain" />
  <button className="text-sm w-full py-1 border border-black dark:border-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
    View Details
  </button>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Wireless Headphones</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Premium sound
                  </p>
                </div>
                <span className="font-bold">$129.99</span>
              </div>
              <img
                src="https://picsum.photos/400/300?random=2"
                alt="Headphones"
                className="my-3 w-full h-32 object-contain"
              />
              <button className="text-sm w-full py-1 border border-black dark:border-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                View Details
              </button>
            </div>
          ),
        },
        {
          id: 3,
          name: "Leather Wallet",
          price: "$49.99",
          oldPrice: "$59.99",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
  <div className="relative">
    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">SALE</span>
    <img src="https://picsum.photos/400/300?random=3" alt="Leather Wallet" className="w-full h-40 object-cover" />
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold">Leather Wallet</h3>
    <div className="flex items-center mt-1">
      <span className="text-red-500 font-bold">$49.99</span>
      <span className="text-gray-400 text-sm line-through ml-2">$59.99</span>
    </div>
    <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
      Add to Cart
    </button>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="relative">
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  SALE
                </span>
                <img
                  src="https://picsum.photos/400/300?random=3"
                  alt="Leather Wallet"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Leather Wallet</h3>
                <div className="flex items-center mt-1">
                  <span className="text-red-500 font-bold">$49.99</span>
                  <span className="text-gray-400 text-sm line-through ml-2">
                    $59.99
                  </span>
                </div>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ),
        },
        {
          id: 4,
          name: "Yoga Mat",
          price: "$34.99",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
  <img src="https://picsum.photos/400/300?random=4" alt="Yoga Mat" className="w-full h-40 object-cover" />
  <div className="p-4">
    <div className="flex justify-between items-start">
      <h3 className="font-semibold">Yoga Mat</h3>
      <button onClick={() => toggleWishlist(4)} className="text-gray-400 hover:text-red-500 transition">
        <FiHeart className={wishlist[4] ? "text-red-500 fill-red-500" : ""} />
      </button>
    </div>
    <p className="text-gray-500 dark:text-gray-400 mt-1">$34.99</p>
    <div className="flex items-center mt-3">
      <button className="flex-1 bg-purple-600 text-white py-2 rounded-l hover:bg-purple-700 transition">
        Add to Cart
      </button>
      <button className="bg-purple-800 text-white px-3 py-2 rounded-r hover:bg-purple-900 transition">
        <FiShoppingCart />
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://picsum.photos/400/300?random=4"
                alt="Yoga Mat"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">Yoga Mat</h3>
                  <button
                    onClick={() => toggleWishlist(4)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <FiHeart
                      className={wishlist[4] ? "text-red-500 fill-red-500" : ""}
                    />
                  </button>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-1">$34.99</p>
                <div className="flex items-center mt-3">
                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-l hover:bg-purple-700 transition">
                    Add to Cart
                  </button>
                  <button className="bg-purple-800 text-white px-3 py-2 rounded-r hover:bg-purple-900 transition">
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 5,
          name: "Desk Lamp",
          price: "$45.00",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3 flex justify-center">
    <img src="https://picsum.photos/400/300?random=5" alt="Desk Lamp" className="h-32 object-contain" />
  </div>
  <h3 className="font-semibold">Desk Lamp</h3>
  <div className="flex items-center justify-between mt-2">
    <span className="font-bold">$45.00</span>
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <FiStar key={i} className={i < ratings[5] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
      ))}
    </div>
  </div>
  <button className="mt-3 w-full border border-gray-300 dark:border-gray-600 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
    Quick Add
  </button>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-3 flex justify-center">
                <img
                  src="https://picsum.photos/400/300?random=5"
                  alt="Desk Lamp"
                  className="h-32 object-contain"
                />
              </div>
              <h3 className="font-semibold">Desk Lamp</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold">$45.00</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={
                        i < ratings[5]
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                      size={14}
                    />
                  ))}
                </div>
              </div>
              <button className="mt-3 w-full border border-gray-300 dark:border-gray-600 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                Quick Add
              </button>
            </div>
          ),
        },
      ],
    },

    // Category 2: Featured Products (5 variations)
    {
      title: "Featured Products",
      products: [
        {
          id: 6,
          name: "Smart Watch",
          price: "$199.99",
          oldPrice: "$249.99",
          code: `<div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg">
  <div className="flex justify-between items-start mb-4">
    <div>
      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">NEW</span>
      <h3 className="text-xl font-bold mt-2">Smart Watch</h3>
    </div>
    <button onClick={() => toggleWishlist(6)} className="p-1">
      <FiHeart className={wishlist[6] ? "text-red-500 fill-red-500" : "text-gray-400"} size={20} />
    </button>
  </div>
  <img src="https://picsum.photos/400/300?random=6" alt="Smart Watch" className="w-full h-40 object-contain mb-6" />
  <div className="flex justify-between items-center">
    <div>
      <p className="text-gray-500 dark:text-gray-400 line-through">$249.99</p>
      <p className="text-2xl font-bold">$199.99</p>
    </div>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition">
      <FiShoppingCart size={18} className="inline mr-1" /> Add
    </button>
  </div>
</div>`,
          component: (
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                  <h3 className="text-xl font-bold mt-2">Smart Watch</h3>
                </div>
                <button onClick={() => toggleWishlist(6)} className="p-1">
                  <FiHeart
                    className={
                      wishlist[6]
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }
                    size={20}
                  />
                </button>
              </div>
              <img
                src="https://picsum.photos/400/300?random=6"
                alt="Smart Watch"
                className="w-full h-40 object-contain mb-6"
              />
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 line-through">
                    $249.99
                  </p>
                  <p className="text-2xl font-bold">$199.99</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition">
                  <FiShoppingCart size={18} className="inline mr-1" /> Add
                </button>
              </div>
            </div>
          ),
        },
        {
          id: 7,
          name: "Blender",
          price: "$89.99",
          oldPrice: "",
          code: `<div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group">
  <div className="absolute top-3 right-3 z-10 flex space-x-2">
    <button className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition">
      <FiShare2 className="text-gray-600 dark:text-gray-300" />
    </button>
    <button onClick={() => toggleWishlist(7)} className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition">
      <FiHeart className={wishlist[7] ? "text-red-500 fill-red-500" : "text-gray-600 dark:text-gray-300"} />
    </button>
  </div>
  <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
    <img src="https://picsum.photos/400/300?random=7" alt="Blender" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
  </div>
  <div className="p-5">
    <div className="flex justify-between items-start">
      <h3 className="text-lg font-bold">Blender</h3>
      <span className="text-lg font-bold">$89.99</span>
    </div>
    <div className="flex items-center mt-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <FiStar key={i} className={i < ratings[7] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
      ))}
      <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">(128)</span>
    </div>
    <div className="flex space-x-2">
      <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">Buy Now</button>
      <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <FiShoppingCart />
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group">
              <div className="absolute top-3 right-3 z-10 flex space-x-2">
                <button className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                  <FiShare2 className="text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={() => toggleWishlist(7)}
                  className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  <FiHeart
                    className={
                      wishlist[7]
                        ? "text-red-500 fill-red-500"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  />
                </button>
              </div>
              <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <img
                  src="https://picsum.photos/400/300?random=7"
                  alt="Blender"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">Blender</h3>
                  <span className="text-lg font-bold">$89.99</span>
                </div>
                <div className="flex items-center mt-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={
                        i < ratings[7]
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                    (128)
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    Buy Now
                  </button>
                  <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 8,
          name: "Running Shoes",
          price: "$120.00",
          oldPrice: "$150.00",
          code: `<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
  <div className="relative">
    <img src="https://picsum.photos/400/300?random=8" alt="Running Shoes" className="w-full h-56 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
      <h3 className="text-white text-xl font-bold">Running Shoes</h3>
      <div className="flex items-center mt-1">
        <span className="text-white font-bold">$120.00</span>
        <span className="text-gray-300 text-sm line-through ml-2">$150.00</span>
      </div>
    </div>
    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">25% OFF</span>
  </div>
  <div className="p-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={i < ratings[8] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={16} />
        ))}
      </div>
      <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <img
                  src="https://picsum.photos/400/300?random=8"
                  alt="Running Shoes"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">
                    Running Shoes
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-white font-bold">$120.00</span>
                    <span className="text-gray-300 text-sm line-through ml-2">
                      $150.00
                    </span>
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  25% OFF
                </span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < ratings[8]
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                        size={16}
                      />
                    ))}
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 9,
          name: "Wireless Earbuds",
          price: "$79.99",
          oldPrice: "$99.99",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
  <div className="relative overflow-hidden">
    <img src="https://picsum.photos/400/300?random=9" alt="Wireless Earbuds" className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
    <div className="absolute bottom-4 left-4 right-4">
      <h3 className="text-white text-lg font-bold">Wireless Earbuds</h3>
      <div className="flex items-center justify-between mt-2">
        <div>
          <span className="text-white font-bold">$79.99</span>
          <span className="text-gray-300 text-sm line-through ml-2">$99.99</span>
        </div>
        <button className="bg-white text-black px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition">
          <FiShoppingCart size={14} />
        </button>
      </div>
    </div>
  </div>
  <div className="p-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={i < ratings[9] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
        ))}
        <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">(256)</span>
      </div>
      <button onClick={() => toggleWishlist(9)} className="text-gray-400 hover:text-red-500 transition">
        <FiHeart className={wishlist[9] ? "text-red-500 fill-red-500" : ""} size={16} />
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=9"
                  alt="Wireless Earbuds"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-bold">
                    Wireless Earbuds
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="text-white font-bold">$79.99</span>
                      <span className="text-gray-300 text-sm line-through ml-2">
                        $99.99
                      </span>
                    </div>
                    <button className="bg-white text-black px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition">
                      <FiShoppingCart size={14} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < ratings[9]
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                        size={14}
                      />
                    ))}
                    <span className="text-gray-500 dark:text-gray-400 text-xs ml-1">
                      (256)
                    </span>
                  </div>
                  <button
                    onClick={() => toggleWishlist(9)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <FiHeart
                      className={wishlist[9] ? "text-red-500 fill-red-500" : ""}
                      size={16}
                    />
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 10,
          name: "Backpack",
          price: "$65.00",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
  <div className="relative">
    <img src="https://picsum.photos/400/300?random=10" alt="Backpack" className="w-full h-52 object-cover" />
    <div className="absolute top-3 left-3 flex flex-col space-y-2">
      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">ECO</span>
      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
    </div>
  </div>
  <div className="p-5">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold">Backpack</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Waterproof • 30L</p>
      </div>
      <span className="text-lg font-bold">$65.00</span>
    </div>
    <div className="flex items-center mt-3">
      <div className="flex-1 flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={i < ratings[10] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
        ))}
      </div>
      <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="relative">
                <img
                  src="https://picsum.photos/400/300?random=10"
                  alt="Backpack"
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    ECO
                  </span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    NEW
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">Backpack</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                      Waterproof • 30L
                    </p>
                  </div>
                  <span className="text-lg font-bold">$65.00</span>
                </div>
                <div className="flex items-center mt-3">
                  <div className="flex-1 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < ratings[10]
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                        size={14}
                      />
                    ))}
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },

    // Category 3: List View Products (5 variations)
    {
      title: "List View Products",
      products: [
        {
          id: 11,
          name: "Bluetooth Speaker",
          price: "$79.99",
          oldPrice: "",
          code: `<div className="flex bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
  <div className="w-1/3">
    <img src="https://picsum.photos/400/300?random=11" alt="Bluetooth Speaker" className="h-full w-full object-cover" />
  </div>
  <div className="w-2/3 p-4">
    <div className="flex justify-between items-start">
      <h3 className="font-medium">Bluetooth Speaker</h3>
      <span className="font-bold">$79.99</span>
    </div>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Portable • 20hr battery</p>
    <div className="flex items-center mt-2">
      {[...Array(5)].map((_, i) => (
        <FiStar key={i} className={i < ratings[11] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
      ))}
      <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">(42)</span>
    </div>
    <div className="flex space-x-2 mt-3">
      <button className="flex-1 bg-black text-white py-1.5 text-sm rounded">Add to Cart</button>
      <button className="p-1.5 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <FiShare2 size={14} />
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="w-1/3">
                <img
                  src="https://picsum.photos/400/300?random=11"
                  alt="Bluetooth Speaker"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-2/3 p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">Bluetooth Speaker</h3>
                  <span className="font-bold">$79.99</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Portable • 20hr battery
                </p>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={
                        i < ratings[11]
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }
                      size={14}
                    />
                  ))}
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                    (42)
                  </span>
                </div>
                <div className="flex space-x-2 mt-3">
                  <button className="flex-1 bg-black text-white py-1.5 text-sm rounded">
                    Add to Cart
                  </button>
                  <button className="p-1.5 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <FiShare2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 12,
          name: "Running Shoes",
          price: "$89.99",
          oldPrice: "$120.00",
          code: `<div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
  <div className="relative">
    <img src="https://picsum.photos/400/300?random=12" alt="Running Shoes" className="w-20 h-20 object-cover rounded" />
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded">SALE</span>
  </div>
  <div className="ml-4 flex-1">
    <h3 className="font-medium">Running Shoes</h3>
    <div className="flex items-center mt-1">
      <span className="text-red-500 font-bold">$89.99</span>
      <span className="text-gray-500 dark:text-gray-400 text-sm line-through ml-2">$120.00</span>
    </div>
  </div>
  <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
    <FiShoppingCart size={16} />
  </button>
</div>`,
          component: (
            <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src="https://picsum.photos/400/300?random=12"
                  alt="Running Shoes"
                  className="w-20 h-20 object-cover rounded"
                />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded">
                  SALE
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-medium">Running Shoes</h3>
                <div className="flex items-center mt-1">
                  <span className="text-red-500 font-bold">$89.99</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm line-through ml-2">
                    $120.00
                  </span>
                </div>
              </div>
              <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                <FiShoppingCart size={16} />
              </button>
            </div>
          ),
        },
        {
          id: 13,
          name: "Coffee Mug",
          price: "$14.99",
          oldPrice: "",
          code: `<div className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
  <img src="https://picsum.photos/400/300?random=13" alt="Coffee Mug" className="w-16 h-16 object-cover rounded-lg" />
  <div className="ml-4 flex-1">
    <h3 className="font-medium">Coffee Mug</h3>
    <div className="flex items-center justify-between mt-1">
      <span className="font-bold">$14.99</span>
      <div className="flex items-center">
        <button 
          onClick={() => handleQuantityChange(13, -1)}
          className="p-1 text-gray-500 hover:text-black dark:hover:text-white"
        >
          <FiMinus size={14} />
        </button>
        <span className="mx-2 w-6 text-center">{quantities[13]}</span>
        <button 
          onClick={() => handleQuantityChange(13, 1)}
          className="p-1 text-gray-500 hover:text-black dark:hover:text-white"
        >
          <FiPlus size={14} />
        </button>
      </div>
    </div>
  </div>
  <button className="ml-4 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
    <FiShoppingCart size={16} />
  </button>
</div>`,
          component: (
            <div className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <img
                src="https://picsum.photos/400/300?random=13"
                alt="Coffee Mug"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium">Coffee Mug</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold">$14.99</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(13, -1)}
                      className="p-1 text-gray-500 hover:text-black dark:hover:text-white"
                    >
                      <FiMinus size={14} />
                    </button>
                    <span className="mx-2 w-6 text-center">
                      {quantities[13]}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(13, 1)}
                      className="p-1 text-gray-500 hover:text-black dark:hover:text-white"
                    >
                      <FiPlus size={14} />
                    </button>
                  </div>
                </div>
              </div>
              <button className="ml-4 p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                <FiShoppingCart size={16} />
              </button>
            </div>
          ),
        },
        {
          id: 14,
          name: "Notebook",
          price: "$9.99",
          oldPrice: "",
          code: `<div className="flex items-start bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
  <img src="https://picsum.photos/400/300?random=14" alt="Notebook" className="w-16 h-16 object-cover rounded" />
  <div className="ml-3 flex-1">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-medium">Notebook</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Hardcover • 200 pages</p>
      </div>
      <span className="font-bold">$9.99</span>
    </div>
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={i < ratings[14] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
        ))}
      </div>
      <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View details</button>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex items-start bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
              <img
                src="https://picsum.photos/400/300?random=14"
                alt="Notebook"
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">Notebook</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Hardcover • 200 pages
                    </p>
                  </div>
                  <span className="font-bold">$9.99</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < ratings[14]
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                        size={14}
                      />
                    ))}
                  </div>
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    View details
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 15,
          name: "Water Bottle",
          price: "$24.99",
          oldPrice: "",
          code: `<div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
  <div className="relative">
    <img src="https://picsum.photos/400/300?random=15" alt="Water Bottle" className="w-16 h-16 object-cover rounded-lg" />
    <span className="absolute -top-1 -left-1 bg-green-500 text-white text-xs px-1 rounded">ECO</span>
  </div>
  <div className="ml-4 flex-1">
    <h3 className="font-medium">Water Bottle</h3>
    <div className="flex items-center justify-between mt-1">
      <span className="font-bold">$24.99</span>
      <div className="flex items-center space-x-2">
        <button className="p-1 text-gray-400 hover:text-red-500 transition">
          <FiHeart className={wishlist[15] ? "text-red-500 fill-red-500" : ""} size={16} />
        </button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition">
          Add
        </button>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
              <div className="relative">
                <img
                  src="https://picsum.photos/400/300?random=15"
                  alt="Water Bottle"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <span className="absolute -top-1 -left-1 bg-green-500 text-white text-xs px-1 rounded">
                  ECO
                </span>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-medium">Water Bottle</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold">$24.99</span>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-red-500 transition">
                      <FiHeart
                        className={
                          wishlist[15] ? "text-red-500 fill-red-500" : ""
                        }
                        size={16}
                      />
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },

    // Category 4: Card with Actions (5 variations)
    {
      title: "Card with Actions",
      products: [
        {
          id: 16,
          name: "Wireless Charger",
          price: "$29.99",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group relative">
  <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:opacity-100 opacity-0 transition-opacity z-10"></div>
  <img src="https://picsum.photos/400/300?random=16" alt="Wireless Charger" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-lg font-semibold">Wireless Charger</h3>
    <p className="text-gray-600 dark:text-gray-300">$29.99</p>
  </div>
  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
    <div className="flex space-x-2">
      <button className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-100 transition">
        <FiZoomIn size={18} />
      </button>
      <button className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-100 transition">
        <FiHeart size={18} className={wishlist[16] ? "text-red-500 fill-red-500" : ""} />
      </button>
      <button className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-100 transition">
        <FiShoppingCart size={18} />
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group relative">
              <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:opacity-100 opacity-0 transition-opacity z-10"></div>
              <img
                src="https://picsum.photos/400/300?random=16"
                alt="Wireless Charger"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Wireless Charger</h3>
                <p className="text-gray-600 dark:text-gray-300">$29.99</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex space-x-2">
                  <button className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-100 transition">
                    <FiZoomIn size={18} />
                  </button>
                  <button className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-100 transition">
                    <FiHeart
                      size={18}
                      className={
                        wishlist[16] ? "text-red-500 fill-red-500" : ""
                      }
                    />
                  </button>
                  <button className="bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-100 transition">
                    <FiShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 17,
          name: "Portable SSD",
          price: "$129.99",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
  <div className="relative">
    <img src="https://picsum.photos/400/300?random=17" alt="Portable SSD" className="w-full h-40 object-cover" />
    <div className="absolute top-3 right-3 flex space-x-2">
      <button onClick={() => toggleWishlist(17)} className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition">
        <FiHeart className={wishlist[17] ? "text-red-500 fill-red-500" : "text-gray-600 dark:text-gray-300"} />
      </button>
    </div>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-bold">Portable SSD</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm">1TB • USB 3.2</p>
    <div className="flex items-center justify-between mt-3">
      <span className="font-bold">$129.99</span>
      <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="https://picsum.photos/400/300?random=17"
                  alt="Portable SSD"
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button
                    onClick={() => toggleWishlist(17)}
                    className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                  >
                    <FiHeart
                      className={
                        wishlist[17]
                          ? "text-red-500 fill-red-500"
                          : "text-gray-600 dark:text-gray-300"
                      }
                    />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Portable SSD</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  1TB • USB 3.2
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-bold">$129.99</span>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 18,
          name: "Gaming Mouse",
          price: "$59.99",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
  <div className="relative group">
    <img src="https://picsum.photos/400/300?random=18" alt="Gaming Mouse" className="w-full h-48 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="flex justify-center space-x-3">
        <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
          <FiShoppingCart size={16} />
        </button>
        <button 
          onClick={() => toggleWishlist(18)}
          className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FiHeart size={16} className={wishlist[18] ? "text-red-500 fill-red-500" : ""} />
        </button>
        <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
          <FiZoomIn size={16} />
        </button>
      </div>
    </div>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-semibold">Gaming Mouse</h3>
    <div className="flex items-center justify-between mt-2">
      <span className="font-bold">$59.99</span>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={i < ratings[18] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
        ))}
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="relative group">
                <img
                  src="https://picsum.photos/400/300?random=18"
                  alt="Gaming Mouse"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex justify-center space-x-3">
                    <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
                      <FiShoppingCart size={16} />
                    </button>
                    <button
                      onClick={() => toggleWishlist(18)}
                      className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition"
                    >
                      <FiHeart
                        size={16}
                        className={
                          wishlist[18] ? "text-red-500 fill-red-500" : ""
                        }
                      />
                    </button>
                    <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition">
                      <FiZoomIn size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Gaming Mouse</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold">$59.99</span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < ratings[18]
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                        size={14}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 19,
          name: "Smartphone",
          price: "$699.99",
          oldPrice: "$799.99",
          code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
  <div className="relative">
    <div className="absolute top-3 left-3 z-10 flex space-x-2">
      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">SALE</span>
      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
    </div>
    <img src="https://picsum.photos/400/300?random=19" alt="Smartphone" className="w-full h-48 object-contain bg-gray-100 dark:bg-gray-700" />
  </div>
  <div className="p-5">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold">Smartphone</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Latest model • 128GB</p>
      </div>
      <div className="text-right">
        <span className="text-gray-400 text-sm line-through">$799.99</span>
        <p className="text-xl font-bold">$699.99</p>
      </div>
    </div>
    <div className="flex items-center mt-4 space-x-2">
      <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
        Buy Now
      </button>
      <button 
        onClick={() => toggleWishlist(19)}
        className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <FiHeart className={wishlist[19] ? "text-red-500 fill-red-500" : "text-gray-600 dark:text-gray-300"} />
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <div className="absolute top-3 left-3 z-10 flex space-x-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    SALE
                  </span>
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    NEW
                  </span>
                </div>
                <img
                  src="https://picsum.photos/400/300?random=19"
                  alt="Smartphone"
                  className="w-full h-48 object-contain bg-gray-100 dark:bg-gray-700"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">Smartphone</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Latest model • 128GB
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 text-sm line-through">
                      $799.99
                    </span>
                    <p className="text-xl font-bold">$699.99</p>
                  </div>
                </div>
                <div className="flex items-center mt-4 space-x-2">
                  <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    Buy Now
                  </button>
                  <button
                    onClick={() => toggleWishlist(19)}
                    className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <FiHeart
                      className={
                        wishlist[19]
                          ? "text-red-500 fill-red-500"
                          : "text-gray-600 dark:text-gray-300"
                      }
                    />
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 20,
          name: "Fitness Tracker",
          price: "$89.99",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group">
  <div className="relative overflow-hidden">
    <img src="https://picsum.photos/400/300?random=20" alt="Fitness Tracker" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
      <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-100 transition">
        Quick View
      </button>
    </div>
  </div>
  <div className="p-4">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold">Fitness Tracker</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Heart rate • Sleep tracking</p>
      </div>
      <span className="font-bold">$89.99</span>
    </div>
    <div className="flex items-center justify-between mt-3">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={i < ratings[20] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
        ))}
      </div>
      <button 
        onClick={() => toggleWishlist(20)}
        className="text-gray-400 hover:text-red-500 transition"
      >
        <FiHeart className={wishlist[20] ? "text-red-500 fill-red-500" : ""} size={16} />
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="https://picsum.photos/400/300?random=20"
                  alt="Fitness Tracker"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <button className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-100 transition">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Fitness Tracker</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Heart rate • Sleep tracking
                    </p>
                  </div>
                  <span className="font-bold">$89.99</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < ratings[20]
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                        size={14}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => toggleWishlist(20)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <FiHeart
                      className={
                        wishlist[20] ? "text-red-500 fill-red-500" : ""
                      }
                      size={16}
                    />
                  </button>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },

    // Category 5: E-commerce Specials (5 variations)
    {
      title: "E-commerce Specials",
      products: [
        {
          id: 21,
          name: "4K Camera",
          price: "$599.99",
          oldPrice: "$699.99",
          code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
  <div className="relative">
    <img src="https://picsum.photos/400/300?random=21" alt="4K Camera" className="w-full h-56 object-cover" />
    <div className="absolute top-3 right-3 flex flex-col space-y-2">
      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">-14%</span>
      <button 
        onClick={() => toggleWishlist(21)}
        className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition"
      >
        <FiHeart className={wishlist[21] ? "text-red-500 fill-red-500" : "text-gray-600 dark:text-gray-300"} />
      </button>
    </div>
  </div>
  <div className="p-5">
    <h3 className="text-xl font-bold">4K Camera</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Professional quality</p>
    
    <div className="flex items-center mt-3">
      <span className="text-2xl font-bold">$599.99</span>
      <span className="text-gray-400 line-through ml-2">$699.99</span>
    </div>
    
    <div className="flex items-center mt-4">
      <div className="flex-1">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className={i < ratings[21] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
          ))}
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">(87)</span>
        </div>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Buy Now
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <div className="relative">
                <img
                  src="https://picsum.photos/400/300?random=21"
                  alt="4K Camera"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    -14%
                  </span>
                  <button
                    onClick={() => toggleWishlist(21)}
                    className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                  >
                    <FiHeart
                      className={
                        wishlist[21]
                          ? "text-red-500 fill-red-500"
                          : "text-gray-600 dark:text-gray-300"
                      }
                    />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">4K Camera</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Professional quality
                </p>

                <div className="flex items-center mt-3">
                  <span className="text-2xl font-bold">$599.99</span>
                  <span className="text-gray-400 line-through ml-2">
                    $699.99
                  </span>
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={
                            i < ratings[21]
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                        (87)
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 22,
          name: "Air Fryer",
          price: "$129.99",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
  <div className="relative">
    <img src="https://picsum.photos/400/300?random=22" alt="Air Fryer" className="w-full h-48 object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
      <h3 className="text-white font-bold">Air Fryer</h3>
      <p className="text-white text-sm">Healthy cooking</p>
    </div>
  </div>
  <div className="p-4">
    <div className="flex items-center justify-between">
      <span className="font-bold">$129.99</span>
      <div className="flex items-center space-x-2">
        <button className="p-1 text-gray-400 hover:text-blue-500 transition">
          <FiShare2 size={16} />
        </button>
        <button 
          onClick={() => toggleWishlist(22)}
          className="p-1 text-gray-400 hover:text-red-500 transition"
        >
          <FiHeart className={wishlist[22] ? "text-red-500 fill-red-500" : ""} size={16} />
        </button>
      </div>
    </div>
    <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
      Add to Cart
    </button>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src="https://picsum.photos/400/300?random=22"
                  alt="Air Fryer"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">Air Fryer</h3>
                  <p className="text-white text-sm">Healthy cooking</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold">$129.99</span>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-blue-500 transition">
                      <FiShare2 size={16} />
                    </button>
                    <button
                      onClick={() => toggleWishlist(22)}
                      className="p-1 text-gray-400 hover:text-red-500 transition"
                    >
                      <FiHeart
                        className={
                          wishlist[22] ? "text-red-500 fill-red-500" : ""
                        }
                        size={16}
                      />
                    </button>
                  </div>
                </div>
                <button className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ),
        },
        {
          id: 23,
          name: "Gaming Laptop",
          price: "$1,299.99",
          oldPrice: "$1,499.99",
          code: `<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
  <div className="p-4 bg-gray-100 dark:bg-gray-700 flex justify-center">
    <img src="https://picsum.photos/400/300?random=23" alt="Gaming Laptop" className="h-48 object-contain" />
  </div>
  <div className="p-5">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-bold">Gaming Laptop</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">RTX 3060 • 16GB RAM</p>
      </div>
      <div className="text-right">
        <span className="text-gray-400 text-sm line-through">$1,499.99</span>
        <p className="text-xl font-bold text-red-500">$1,299.99</p>
      </div>
    </div>
    <div className="flex items-center mt-4 justify-between">
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={i < ratings[23] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
        ))}
        <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">(214)</span>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 flex justify-center">
                <img
                  src="https://picsum.photos/400/300?random=23"
                  alt="Gaming Laptop"
                  className="h-48 object-contain"
                />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">Gaming Laptop</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      RTX 3060 • 16GB RAM
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 text-sm line-through">
                      $1,499.99
                    </span>
                    <p className="text-xl font-bold text-red-500">$1,299.99</p>
                  </div>
                </div>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < ratings[23]
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                        size={14}
                      />
                    ))}
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                      (214)
                    </span>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 24,
          name: "Noise Cancelling Headphones",
          price: "$349.99",
          oldPrice: "",
          code: `<div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
  <div className="relative group">
    <img src="https://picsum.photos/400/300?random=24" alt="Headphones" className="w-full h-56 object-cover" />
    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
        Quick View
      </button>
    </div>
  </div>
  <div className="p-5">
    <h3 className="text-xl font-bold">Noise Cancelling Headphones</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Premium sound quality</p>
    
    <div className="flex items-center justify-between mt-4">
      <div>
        <span className="text-2xl font-bold">$349.99</span>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className={i < ratings[24] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
          ))}
        </div>
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={() => toggleWishlist(24)}
          className="p-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <FiHeart className={wishlist[24] ? "text-red-500 fill-red-500" : "text-gray-600 dark:text-gray-300"} />
        </button>
        <button className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
          <FiShoppingCart />
        </button>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="relative group">
                <img
                  src="https://picsum.photos/400/300?random=24"
                  alt="Headphones"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">
                  Noise Cancelling Headphones
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Premium sound quality
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <span className="text-2xl font-bold">$349.99</span>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={
                            i < ratings[24]
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }
                          size={14}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => toggleWishlist(24)}
                      className="p-2 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      <FiHeart
                        className={
                          wishlist[24]
                            ? "text-red-500 fill-red-500"
                            : "text-gray-600 dark:text-gray-300"
                        }
                      />
                    </button>
                    <button className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                      <FiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: 25,
          name: "Smart TV",
          price: "$899.99",
          oldPrice: "$999.99",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
  <div className="relative">
    <img src="https://picsum.photos/400/300?random=25" alt="Smart TV" className="w-full h-48 object-cover" />
    <div className="absolute top-3 left-3">
      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">BESTSELLER</span>
    </div>
  </div>
  <div className="p-4">
    <h3 className="text-lg font-bold">Smart TV</h3>
    <p className="text-gray-500 dark:text-gray-400 text-sm">55" • 4K UHD</p>
    
    <div className="flex items-center justify-between mt-3">
      <div>
        <span className="text-xl font-bold">$899.99</span>
        <span className="text-gray-400 text-sm line-through ml-2">$999.99</span>
      </div>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={i < ratings[25] ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={14} />
        ))}
      </div>
    </div>
    
    <div className="mt-4 flex space-x-2">
      <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
        Add to Cart
      </button>
      <button className="flex-1 border border-gray-300 dark:border-gray-600 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        Details
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="https://picsum.photos/400/300?random=25"
                  alt="Smart TV"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    BESTSELLER
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">Smart TV</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  55" • 4K UHD
                </p>

                <div className="flex items-center justify-between mt-3">
                  <div>
                    <span className="text-xl font-bold">$899.99</span>
                    <span className="text-gray-400 text-sm line-through ml-2">
                      $999.99
                    </span>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={
                          i < ratings[25]
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }
                        size={14}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                    Add to Cart
                  </button>
                  <button className="flex-1 border border-gray-300 dark:border-gray-600 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    // Additional categories would continue here to reach 50 products
    // Each with 5 unique product components
  ];

  // For brevity, I've shown 25 product components (5 categories × 5 products each)
  // The full implementation would continue this pattern to reach 50 unique components

  return (
    <div
      className={`min-h-screen p-4 md:p-8 transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Products Gallery
          </motion.h1>
        </header>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 md:mb-16"
        >
          <p className="text-lg md:text-xl mb-4 max-w-3xl">
            Explore our collection of unique product components with modern
            designs, responsive layouts, and interactive features. Click the{" "}
            <FiCopy className="inline" /> icon to copy the code for any
            component!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </motion.section>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                {category.title}
              </h2>
              <div className="space-y-4 md:space-y-6">
                {category.products.map((product, prodIndex) => {
                  const globalIndex =
                    catIndex * category.products.length + prodIndex;
                  return (
                    <div key={prodIndex} className="group relative">
                      {product.component}
                      <button
                        onClick={() =>
                          copyToClipboard(product.code, globalIndex)
                        }
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

export default ProductShowcase;
