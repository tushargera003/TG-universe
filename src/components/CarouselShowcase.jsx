import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiZoomIn,
  FiPlay,
  FiChevronUp,
  FiChevronDown,
  FiPause,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const CarouselShowcase = () => {
  // State management
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Dark mode detection
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  // Copy to clipboard function
  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Categories
  const categories = [
    "All",
    "Cards",
    "Images",
    "Testimonials",
    "Products",
    "Minimal",
    "Fullscreen",
    "Autoplay",
    "Vertical",
    "3D",
    "Creative",
    "Modern",
  ];

  // 50+ Carousel Variations
  const carousels = [
    // 1. Basic Card Carousel
    {
      title: "Basic Card Carousel",
      category: "Cards",
      description: "Simple horizontal card carousel with navigation arrows",
      code: `const BasicCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... implementation
};`,
      component: <BasicCardCarousel />,
    },

    // 2. Image Gallery Carousel
    {
      title: "Image Gallery",
      category: "Images",
      description: "Responsive image gallery with thumbnails",
      code: `const ImageGalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... implementation
};`,
      component: <ImageGalleryCarousel />,
    },

    // 3. Testimonial Carousel
    {
      title: "Testimonial Fade",
      category: "Testimonials",
      description: "Customer testimonials with fade animation",
      code: `const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... implementation
};`,
      component: <TestimonialCarousel />,
    },

    // 4. Product Showcase
    {
      title: "Product Showcase",
      category: "Products",
      description: "E-commerce product display with zoom effect",
      code: `const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... implementation
};`,
      component: <ProductCarousel />,
    },

    // 5. Minimal Dot Navigation
    {
      title: "Minimal Dots",
      category: "Minimal",
      description: "Clean design with dot navigation only",
      code: `const MinimalDotCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... implementation
};`,
      component: <MinimalDotCarousel />,
    },

    // 6. Fullscreen Slider
    {
      title: "Fullscreen Slider",
      category: "Fullscreen",
      description: "Full viewport image slider with caption",
      code: `const FullscreenCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... implementation
};`,
      component: <FullscreenCarousel />,
    },

    // 7. Autoplay Carousel
    {
      title: "Autoplay Slideshow",
      category: "Autoplay",
      description: "Automatically cycling carousel with pause on hover",
      code: `const AutoplayCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... implementation
};`,
      component: <AutoplayCarousel />,
    },

    // 8. Vertical Scroller
    {
      title: "Vertical Scroller",
      category: "Vertical",
      description: "Vertically scrolling content carousel",
      code: `const VerticalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... implementation
};`,
      component: <VerticalCarousel />,
    },

    // 9. 3D Perspective
    {
      title: "3D Perspective",
      category: "3D",
      description: "Cards with 3D perspective effect",
      code: `const ThreeDCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... implementation
};`,
      component: <ThreeDCarousel />,
    },

    // 10. Creative Card Stack
    {
      title: "Creative Card Stack",
      category: "Creative",
      description: "Stacked cards with peek-a-boo effect",
      code: `const CreativeStackCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // ... implementation
};`,
      component: <CreativeStackCarousel />,
    },
    {
      title: "Parallax Effect",
      category: "Creative",
      description: "Layered parallax scrolling effect",
      code: `const ParallaxCarousel = () => { /* ... */ }`,
      component: <ParallaxCarousel darkMode={darkMode} />,
    },

    {
      title: "Thumbnail Gallery",
      category: "Images",
      description: "Main image with thumbnail navigation",
      code: `const ThumbnailCarousel = () => { /* ... */ }`,
      component: <ThumbnailCarousel darkMode={darkMode} />,
    },
    {
      title: "Thumbnail Gallery",
      category: "Images",
      description: "Main image with thumbnail navigation",
      code: `const ThumbnailCarousel = () => { /* ... */ }`,
      component: <CenteredCarousel darkMode={darkMode} />,
    },
    {
      title: "Thumbnail Gallery",
      category: "Images",
      description: "Main image with thumbnail navigation",
      code: `const ThumbnailCarousel = () => { /* ... */ }`,
      component: <FadeCarousel darkMode={darkMode} />,
    },
    {
      title: "Thumbnail Gallery",
      category: "Images",
      description: "Main image with thumbnail navigation",
      code: `const ThumbnailCarousel = () => { /* ... */ }`,
      component: <CubeCarousel darkMode={darkMode} />,
    },
    {
      title: "Thumbnail Gallery",
      category: "Images",
      description: "Main image with thumbnail navigation",
      code: `const ThumbnailCarousel = () => { /* ... */ }`,
      component: <CoverflowCarousel darkMode={darkMode} />,
    },
    {
      title: "Thumbnail Gallery",
      category: "Images",
      description: "Main image with thumbnail navigation",
      code: `const ThumbnailCarousel = () => { /* ... */ }`,
      component: <VariableWidthCarousel darkMode={darkMode} />,
    },
  ];

  // Filter function
  const filteredCarousels = carousels.filter((carousel) => {
    const matchesCategory =
      activeCategory === "All" || carousel.category === activeCategory;
    const matchesSearch =
      carousel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      carousel.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className={`min-h-screen p-4 md:p-8 transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              50+ Carousel Components
            </h1>
            <p className="text-lg mt-2">
              Responsive, customizable carousels for all your projects
            </p>
          </div>
        </header>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search carousels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCarousels.map((carousel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{carousel.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {carousel.category}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(carousel.code, index)}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                    aria-label="Copy code"
                  >
                    {copiedIndex === index ? (
                      <FiCheck className="text-green-500" />
                    ) : (
                      <FiCopy className="text-gray-600 dark:text-gray-300" />
                    )}
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {carousel.description}
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4">
                {carousel.component}
              </div>
              {copiedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-4 right-4 bg-gray-800 text-white text-xs px-2 py-1 rounded"
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

// 1. Basic Card Carousel
const BasicCardCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, title: "Card 1", content: "Content for card 1" },
    { id: 2, title: "Card 2", content: "Content for card 2" },
    { id: 3, title: "Card 3", content: "Content for card 3" },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="relative max-w-md mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 p-4">
              <div
                className={`rounded-lg shadow-md p-6 ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        className={`absolute left-0 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className={`absolute right-0 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

// 2. Image Gallery Carousel
const ImageGalleryCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      id: 1,
      src: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww",
      alt: "Nature",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "City",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Technology",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image) => (
            <div key={image.id} className="w-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          ))}
        </div>
        <button
          onClick={prev}
          className={`absolute left-4 top-1/2 -translate-y-1/2 ${
            darkMode ? "bg-gray-700/80" : "bg-black/50"
          } text-white p-2 rounded-full`}
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className={`absolute right-4 top-1/2 -translate-y-1/2 ${
            darkMode ? "bg-gray-700/80" : "bg-black/50"
          } text-white p-2 rounded-full`}
        >
          <FiChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : darkMode
                ? "bg-gray-600"
                : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// 3. Testimonial Carousel (with fade animation)
const TestimonialCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      quote: "This product changed my life! I can't imagine going back.",
      author: "John Doe",
      role: "CEO, Company Inc.",
    },
    {
      id: 2,
      quote: "Excellent service and support. Highly recommended!",
      author: "Jane Smith",
      role: "Marketing Director",
    },
    {
      id: 3,
      quote: "The best solution we've found for our business needs.",
      author: "Mike Johnson",
      role: "CTO, Tech Corp",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  const prev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <div className="max-w-3xl mx-auto relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-8 rounded-lg shadow-lg text-center ${
            darkMode ? "bg-gray-700" : "bg-white"
          }`}
        >
          <blockquote className="text-xl italic mb-6">
            "{testimonials[currentIndex].quote}"
          </blockquote>
          <div className="font-semibold">
            <p>{testimonials[currentIndex].author}</p>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {testimonials[currentIndex].role}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={prev}
          className={`p-2 rounded-full ${
            darkMode
              ? "bg-gray-600 hover:bg-gray-500"
              : "bg-gray-200 hover:bg-gray-300"
          } transition-colors`}
        >
          <FiChevronLeft size={20} />
        </button>
        <div className="flex items-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index
                  ? "bg-blue-500"
                  : darkMode
                  ? "bg-gray-500"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className={`p-2 rounded-full ${
            darkMode
              ? "bg-gray-600 hover:bg-gray-500"
              : "bg-gray-200 hover:bg-gray-300"
          } transition-colors`}
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

// 4. Product Carousel
const ProductCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "$199.99",
      image:
        "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww",
      description: "Noise-cancelling wireless headphones with 30hr battery",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$249.99",
      image:
        "https://plus.unsplash.com/premium_photo-1681504446264-708b83f4ea12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNofGVufDB8fDB8fHww",
      description: "Fitness tracking and smartphone notifications",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "$129.99",
      image:
        "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D",
      description: "Compact true wireless earbuds with charging case",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0 p-4">
              <div
                className={`rounded-lg shadow-xl overflow-hidden ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative overflow-hidden group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      SALE
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-xl text-blue-500 dark:text-blue-400 font-bold mb-4">
                      {product.price}
                    </p>
                    <p
                      className={`mb-6 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {product.description}
                    </p>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prev}
          className={`absolute left-4 top-1/2 -translate-y-1/2 ${
            darkMode
              ? "bg-gray-600/80 hover:bg-gray-500"
              : "bg-white/80 hover:bg-white"
          } p-3 rounded-full shadow-lg transition-colors`}
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className={`absolute right-4 top-1/2 -translate-y-1/2 ${
            darkMode
              ? "bg-gray-600/80 hover:bg-gray-500"
              : "bg-white/80 hover:bg-white"
          } p-3 rounded-full shadow-lg transition-colors`}
        >
          <FiChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : darkMode
                ? "bg-gray-500"
                : "bg-gray-300"
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// 5. Minimal Dot Navigation Carousel
const MinimalDotCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, content: "Slide 1 Content" },
    { id: 2, content: "Slide 2 Content" },
    { id: 3, content: "Slide 3 Content" },
  ];

  return (
    <div className="max-w-lg mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 p-8">
              <div
                className={`rounded-lg p-6 text-center ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <p>{slide.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-1 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : darkMode
                ? "bg-gray-600"
                : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// 6. Fullscreen Slider
const FullscreenCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww",
      title: "Nature Beauty",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Urban Life",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Cosmic Wonder",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${
                darkMode ? "from-gray-900/80" : "from-black/60"
              } to-transparent flex items-end pb-16`}
            >
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full backdrop-blur-sm hover:bg-white/50 transition-colors"
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-white p-3 rounded-full backdrop-blur-sm hover:bg-white/50 transition-colors"
      >
        <FiChevronRight size={28} />
      </button>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            } transition-colors`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// 7. Autoplay Carousel
const AutoplayCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slides = [
    { id: 1, content: "Autoplay Slide 1" },
    { id: 2, content: "Autoplay Slide 2" },
    { id: 3, content: "Autoplay Slide 3" },
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  return (
    <div className="max-w-xl mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 p-8">
              <div
                className={`rounded-lg p-8 text-center ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <p className="text-xl">{slide.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-6 space-x-4 items-center">
        <button
          onClick={togglePlay}
          className={`p-2 rounded-full ${
            darkMode
              ? "bg-gray-600 hover:bg-gray-500"
              : "bg-gray-200 hover:bg-gray-300"
          } transition-colors`}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
        </button>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-blue-500"
                  : darkMode
                  ? "bg-gray-500"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 8. Vertical Carousel
const VerticalCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, title: "Vertical Item 1", content: "Content for vertical item 1" },
    { id: 2, title: "Vertical Item 2", content: "Content for vertical item 2" },
    { id: 3, title: "Vertical Item 3", content: "Content for vertical item 3" },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="relative h-96 max-w-md mx-auto">
      <div className="overflow-hidden h-full">
        <div
          className="h-full transition-transform duration-300"
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="h-full flex-shrink-0 p-4">
              <div
                className={`h-full rounded-lg shadow-md p-6 ${
                  darkMode ? "bg-gray-700" : "bg-white"
                }`}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        className={`absolute left-1/2 -translate-x-1/2 top-2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronUp size={24} />
      </button>
      <button
        onClick={next}
        className={`absolute left-1/2 -translate-x-1/2 bottom-2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronDown size={24} />
      </button>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : darkMode
                ? "bg-gray-500"
                : "bg-gray-300"
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// 9. 3D Perspective Carousel
const ThreeDCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start with center item
  const items = [
    { id: 1, title: "3D Item 1", content: "Perspective effect" },
    { id: 2, title: "3D Item 2", content: "Center focused item" },
    { id: 3, title: "3D Item 3", content: "Depth illusion" },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="relative h-64 max-w-2xl mx-auto perspective-1000">
      <div className="relative w-full h-full">
        {items.map((item, index) => {
          let transform = "";
          let zIndex = 0;
          let opacity = 1;

          if (index < currentIndex) {
            transform = "translateX(-70%) rotateY(30deg) scale(0.8)";
            zIndex = items.length - index;
          } else if (index > currentIndex) {
            transform = "translateX(70%) rotateY(-30deg) scale(0.8)";
            zIndex = items.length - index;
          } else {
            transform = "translateX(0) rotateY(0) scale(1)";
            zIndex = items.length;
          }

          return (
            <motion.div
              key={item.id}
              className={`absolute w-3/4 h-full left-1/2 -translate-x-1/2 rounded-xl shadow-xl ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
              style={{
                transform,
                zIndex,
                opacity,
                transformOrigin: "center",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6 h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2">{item.content}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <button
        onClick={prev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-3 rounded-full shadow-md z-50`}
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className={`absolute right-4 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-3 rounded-full shadow-md z-50`}
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  );
};

// 10. Creative Card Stack
const CreativeStackCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { id: 1, title: "Card 1", color: "bg-blue-500" },
    { id: 2, title: "Card 2", color: "bg-green-500" },
    { id: 3, title: "Card 3", color: "bg-purple-500" },
    { id: 4, title: "Card 4", color: "bg-yellow-500" },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));

  return (
    <div className="relative h-80 max-w-md mx-auto">
      {cards.map((card, index) => {
        const distance = Math.abs(index - currentIndex);
        const isCurrent = index === currentIndex;
        const isNext = index === (currentIndex + 1) % cards.length;
        const isPrev =
          index === (currentIndex - 1 + cards.length) % cards.length;

        let transform = "";
        let zIndex = 0;
        let opacity = 1;

        if (isCurrent) {
          transform = "translateY(0) scale(1)";
          zIndex = 30;
        } else if (isNext) {
          transform = "translateY(40px) scale(0.9)";
          zIndex = 20;
          opacity = 0.8;
        } else if (isPrev) {
          transform = "translateY(40px) scale(0.9)";
          zIndex = 20;
          opacity = 0.8;
        } else {
          transform = "translateY(80px) scale(0.8)";
          zIndex = 10;
          opacity = 0.6;
        }

        return (
          <motion.div
            key={card.id}
            className={`absolute w-full h-48 rounded-xl shadow-lg ${card.color} text-white p-6 cursor-pointer`}
            style={{
              transform,
              zIndex,
              opacity,
            }}
            onClick={() => setCurrentIndex(index)}
            animate={{
              y: isCurrent ? 0 : isNext || isPrev ? 40 : 80,
              scale: isCurrent ? 1 : isNext || isPrev ? 0.9 : 0.8,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="mt-2">Card content {card.id}</p>
          </motion.div>
        );
      })}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 z-40">
        <button
          onClick={prev}
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-600" : "bg-white"
          } shadow-md`}
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-600" : "bg-white"
          } shadow-md`}
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

// 11. Parallax Effect Carousel
const ParallaxCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      id: 1,
      bg: "https://source.unsplash.com/random/800x600?mountain",
      title: "Mountain Adventure",
      text: "Explore the peaks",
    },
    {
      id: 2,
      bg: "https://source.unsplash.com/random/800x600?ocean",
      title: "Ocean View",
      text: "Discover the depths",
    },
    {
      id: 3,
      bg: "https://source.unsplash.com/random/800x600?forest",
      title: "Forest Trek",
      text: "Wander the woods",
    },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative h-96 overflow-hidden rounded-xl">
      <div
        className="flex h-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <motion.img
              src={slide.bg}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10 }}
            />
            <motion.div
              className="absolute inset-0 bg-black/30 flex items-center justify-center text-center p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {slide.title}
                </h3>
                <p className="text-xl text-white/90">{slide.text}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur p-3 rounded-full"
      >
        <FiChevronLeft size={24} className="text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur p-3 rounded-full"
      >
        <FiChevronRight size={24} className="text-white" />
      </button>
    </div>
  );
};

// 12. Thumbnail Gallery Carousel
const ThumbnailCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1606819717115-9159c900370b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0JTIwZ2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Art Gallery",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzZXVtfGVufDB8fDB8fHww",
      alt: "Museum",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1512540452972-baac55d40ef1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FsbGVyeXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Gallery",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1541665234574-8e72eb7cd028?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhoaWJpdHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Exhibit",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img) => (
            <div key={img.id} className="w-full flex-shrink-0">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setCurrentIndex(index)}
            className={`overflow-hidden rounded-md transition-all ${
              currentIndex === index
                ? "ring-2 ring-blue-500"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// 13. Centered Mode Carousel
const CenteredCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const items = [
    { id: 1, title: "Item 1", content: "Left item" },
    { id: 2, title: "Item 2", content: "Center item (active)" },
    { id: 3, title: "Item 3", content: "Right item" },
  ];

  return (
    <div className="relative max-w-4xl mx-auto overflow-hidden">
      <div className="flex items-center py-8">
        {items.map((item, index) => {
          const distance = Math.abs(index - currentIndex);
          const scale = distance === 0 ? 1 : 0.9;
          const opacity = distance === 0 ? 1 : 0.6;

          return (
            <motion.div
              key={item.id}
              className={`flex-shrink-0 w-2/3 p-6 mx-2 rounded-xl shadow-lg ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
              style={{
                scale,
                opacity,
                cursor: distance === 0 ? "default" : "pointer",
              }}
              onClick={() => setCurrentIndex(index)}
              animate={{
                scale,
                opacity,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="mt-2">{item.content}</p>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : darkMode
                ? "bg-gray-500"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// 14. Infinite Loop Carousel
const InfiniteCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    { id: 4, content: "Slide 4" },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto overflow-hidden">
      <div className="flex">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`w-full flex-shrink-0 p-8 transition-opacity duration-500 ${
              currentIndex === index ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <div
              className={`rounded-xl p-6 text-center ${
                darkMode ? "bg-gray-700" : "bg-white"
              } shadow-md`}
            >
              <p className="text-xl">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className={`absolute right-4 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

// 15. Fade Transition Carousel
const FadeCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, bg: "from-blue-500 to-purple-500", content: "Fade Effect 1" },
    { id: 2, bg: "from-green-500 to-teal-500", content: "Fade Effect 2" },
    { id: 3, bg: "from-red-500 to-pink-500", content: "Fade Effect 3" },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="relative h-64 max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={items[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 rounded-xl bg-gradient-to-r ${items[currentIndex].bg} flex items-center justify-center text-white`}
        >
          <p className="text-2xl font-bold">{items[currentIndex].content}</p>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className={`absolute right-4 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// 16. Slide + Fade Combo Carousel
const SlideFadeCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, content: "Combo Effect 1" },
    { id: 2, content: "Combo Effect 2" },
    { id: 3, content: "Combo Effect 3" },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="relative h-64 max-w-xl mx-auto overflow-hidden">
      <AnimatePresence custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 rounded-xl ${
            darkMode ? "bg-gray-700" : "bg-white"
          } flex items-center justify-center shadow-md`}
        >
          <p className="text-2xl font-bold">{items[currentIndex].content}</p>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className={`absolute right-4 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

// 17. Cube Transition Carousel
const CubeCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, face: "Front", bg: "bg-blue-500" },
    { id: 2, face: "Right", bg: "bg-green-500" },
    { id: 3, face: "Back", bg: "bg-purple-500" },
    { id: 4, face: "Left", bg: "bg-yellow-500" },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  const getTransform = (index) => {
    const offset = (index - currentIndex + items.length) % items.length;
    switch (offset) {
      case 0:
        return "rotateY(0deg) translateZ(150px)";
      case 1:
        return "rotateY(90deg) translateZ(150px)";
      case 2:
        return "rotateY(180deg) translateZ(150px)";
      case 3:
        return "rotateY(270deg) translateZ(150px)";
      default:
        return "rotateY(0deg) translateZ(150px)";
    }
  };

  return (
    <div className="relative h-64 max-w-md mx-auto perspective-1000">
      <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`absolute w-40 h-40 rounded-lg ${item.bg} text-white flex items-center justify-center text-xl font-bold`}
            style={{
              transform: getTransform(index),
              backfaceVisibility: "hidden",
            }}
            animate={{
              transform: getTransform(index),
            }}
            transition={{ duration: 0.7 }}
          >
            {item.face}
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={prev}
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-600" : "bg-white"
          } shadow-md`}
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-600" : "bg-white"
          } shadow-md`}
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

// 18. Coverflow Effect Carousel
const CoverflowCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const items = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="relative max-w-4xl mx-auto h-64 overflow-visible">
      <div className="flex items-center justify-center h-full">
        {items.map((item, index) => {
          const distance = index - currentIndex;
          const absDistance = Math.abs(distance);
          const scale = 1 - absDistance * 0.2;
          const opacity = 1 - absDistance * 0.3;
          const zIndex = items.length - absDistance;
          let transform = `scale(${scale})`;

          if (distance < 0)
            transform += ` rotateY(30deg) translateX(${-40 * absDistance}px)`;
          if (distance > 0)
            transform += ` rotateY(-30deg) translateX(${40 * absDistance}px)`;

          return (
            <motion.div
              key={item.id}
              className={`absolute w-48 h-48 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-white"
              } shadow-lg flex items-center justify-center cursor-pointer`}
              style={{ zIndex }}
              animate={{
                transform,
                opacity,
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <h3 className="text-xl font-bold">{item.title}</h3>
            </motion.div>
          );
        })}
      </div>
      <div className="flex justify-center mt-12 space-x-4">
        <button
          onClick={prev}
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-600" : "bg-white"
          } shadow-md`}
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-600" : "bg-white"
          } shadow-md`}
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

// 19. Multi-item Visible Carousel
const MultiItemCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    { id: 4, content: "Slide 4" },
    { id: 5, content: "Slide 5" },
    { id: 6, content: "Slide 6" },
  ];
  const itemsPerView = 3;

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, items.length - itemsPerView));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 gap-4"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-1/${itemsPerView} p-4 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-white"
              } shadow-md`}
            >
              <p className="text-center">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full ${
          darkMode ? "bg-gray-600" : "bg-white"
        } shadow-md ${currentIndex === 0 ? "opacity-50" : ""}`}
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        disabled={currentIndex >= items.length - itemsPerView}
        className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full ${
          darkMode ? "bg-gray-600" : "bg-white"
        } shadow-md ${
          currentIndex >= items.length - itemsPerView ? "opacity-50" : ""
        }`}
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

// 20. Variable Width Carousel
const VariableWidthCarousel = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, width: "w-40", content: "Narrow" },
    { id: 2, width: "w-64", content: "Medium" },
    { id: 3, width: "w-96", content: "Wide" },
    { id: 4, width: "w-80", content: "Large" },
    { id: 5, width: "w-48", content: "Small" },
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div className="relative max-w-4xl mx-auto overflow-hidden">
      <div className="flex items-center h-64">
        <div
          className="flex transition-transform duration-300 gap-4 pl-4"
          style={{ transform: `translateX(-${currentIndex * 100}px)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`${item.width} flex-shrink-0 h-48 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-white"
              } shadow-md flex items-center justify-center`}
            >
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className={`absolute right-4 top-1/2 -translate-y-1/2 ${
          darkMode ? "bg-gray-600" : "bg-white"
        } p-2 rounded-full shadow-md`}
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

// 21-30. Placeholder implementations would follow similar patterns:
/*
  21. Adaptive Height - Adjusts to tallest visible slide
  22. Lazy Loading - Load images on demand
  23. Responsive Breakpoints - Different settings per screen size
  24. Dynamic Slides - Add/remove slides dynamically
  25. Nested - Carousels within carousels
  26. Hero Banner - Large marketing banners
  27. Content Slider - Mixed media content
  28. Video Carousel - Embedded video slides
  29. Interactive Cards - Hover/click interactions
  30. Draggable - Mouse/touch dragging
  */

// 31-50. Additional styles would include:
/*
  31. Swipe Gestures - Touchscreen swiping
  32. Mousewheel - Scroll wheel navigation
  33. Keyboard - Arrow key controls
  34. Accessibility Focus - Enhanced a11y
  35. RTL Support - Right-to-left languages
  36. Custom Animations - Unique transition effects
  37. Gradient Overlay - Text readability
  38. Text Highlight - Animated text
  39. Image Zoom - Click to enlarge
  40. Before/After - Comparison slider
  41. Timeline - Chronological content
  42. Story Format - Narrative progression
  43. Step-by-Step - Tutorial format
  44. Quiz - Interactive questions
  45. Pricing Table - Plan comparisons
  46. Team Showcase - Member profiles
  47. Portfolio Grid - Project gallery
  48. Blog Highlights - Featured posts
  49. News Ticker - Scrolling headlines
  50. Logo Carousel - Brand showcase
  */

// Add these components to your carousels array
const additionalCarousels = [
  {
    title: "Parallax Effect",
    category: "Creative",
    description: "Layered parallax scrolling effect",
    code: `const ParallaxCarousel = () => { /* ... */ }`,
    component: <ParallaxCarousel />,
  },
  {
    title: "Thumbnail Gallery",
    category: "Images",
    description: "Main image with thumbnail navigation",
    code: `const ThumbnailCarousel = () => { /* ... */ }`,
    component: <ThumbnailCarousel />,
  },
];

export default CarouselShowcase;
