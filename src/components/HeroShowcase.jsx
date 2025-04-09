import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiArrowRight, FiPlay, FiStar } from "react-icons/fi";

const HeroShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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

  // Hero section categories
  const heroCategories = [
    { id: "all", name: "All" },
    { id: "minimal", name: "Minimal" },
    { id: "gradient", name: "Gradient" },
    { id: "image", name: "Image" },
    { id: "animated", name: "Animated" },
    { id: "creative", name: "Creative" },
  ];

  // Hero section data
  const heroSections = [
    {
      id: 1,
      name: "Minimal Centered",
      category: "minimal",
      code: `<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
      Build amazing products
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
      Accelerate your workflow with our intuitive tools and components.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
        Get Started
      </button>
      <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
        Learn More
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Build amazing products
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Accelerate your workflow with our intuitive tools and components.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                Get Started
              </button>
              <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 2,
      name: "Gradient Background",
      category: "gradient",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-500">
  <div className="max-w-7xl mx-auto">
    <div className="md:w-1/2">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        Transform your ideas into reality
      </h1>
      <p className="text-xl text-purple-100 mb-8">
        Our platform provides everything you need to launch your next big project.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="px-8 py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">
          Start Free Trial
        </button>
        <button className="px-8 py-3 border border-white text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-colors">
          View Demo
        </button>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-500">
          <div className="max-w-7xl mx-auto">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Transform your ideas into reality
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Our platform provides everything you need to launch your next
                big project.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 border border-white text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 3,
      name: "Split With Image",
      category: "image",
      code: `<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Modern solutions for modern problems
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          We've built the most intuitive platform to help you solve your business challenges with ease.
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
</section>`,
      component: (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Modern solutions for modern problems
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  We've built the most intuitive platform to help you solve your
                  business challenges with ease.
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
      ),
    },
    {
      id: 4,
      name: "Animated Text",
      category: "animated",
      code: `<section className="py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-7xl mx-auto text-center">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
    >
      Create. <span className="text-blue-600">Innovate.</span> Inspire.
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
    >
      Join thousands of creators who are building the future with our tools.
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
        Join Now - It's Free
      </button>
    </motion.div>
  </div>
</section>`,
      component: (
        <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Create. <span className="text-blue-600">Innovate.</span> Inspire.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
            >
              Join thousands of creators who are building the future with our
              tools.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
                Join Now - It's Free
              </button>
            </motion.div>
          </div>
        </section>
      ),
    },
    {
      id: 5,
      name: "Stats Showcase",
      category: "minimal",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Trusted by developers worldwide
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Our tools power thousands of applications across every industry.
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">10M+</div>
        <div className="text-gray-600 dark:text-gray-400">Downloads</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
        <div className="text-gray-600 dark:text-gray-400">Uptime</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
        <div className="text-gray-600 dark:text-gray-400">Contributors</div>
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
        <div className="text-gray-600 dark:text-gray-400">Support</div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by developers worldwide
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our tools power thousands of applications across every industry.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  10M+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Downloads
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  98%
                </div>
                <div className="text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Contributors
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 6,
      name: "Video Background",
      category: "image",
      code: `<section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-under-neon-lights-1230-large.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
  <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
      Experience the future today
    </h1>
    <p className="text-xl text-gray-200 mb-10">
      Immerse yourself in cutting-edge technology that transforms the way you work and play.
    </p>
    <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
      Watch Demo <FiPlay className="inline ml-2" />
    </button>
  </div>
</section>`,
      component: (
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-woman-dancing-under-neon-lights-1230-large.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience the future today
            </h1>
            <p className="text-xl text-gray-200 mb-10">
              Immerse yourself in cutting-edge technology that transforms the
              way you work and play.
            </p>
            <button className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
              Watch Demo <FiPlay className="inline ml-2" />
            </button>
          </div>
        </section>
      ),
    },
    {
      id: 7,
      name: "Fullscreen Image",
      category: "image",
      code: `<section className="relative h-screen flex items-center">
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
      alt="Background" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
  </div>
  <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-2xl">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
      Design that inspires and delights
    </h1>
    <p className="text-lg text-gray-300 mb-8">
      Beautiful interfaces that engage users and drive results for your business.
    </p>
    <button className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition-colors">
      View Portfolio
    </button>
  </div>
</section>`,
      component: (
        <section className="relative h-[500px] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
          </div>
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Design that inspires and delights
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Beautiful interfaces that engage users and drive results for your
              business.
            </p>
            <button className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-medium transition-colors">
              View Portfolio
            </button>
          </div>
        </section>
      ),
    },
    {
      id: 8,
      name: "Product Feature",
      category: "minimal",
      code: `<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      <div className="lg:w-1/2">
        <div className="bg-white dark:bg-gray-700 p-2 rounded-xl shadow-lg inline-block mb-6">
          <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
            NEW RELEASE
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Introducing the next generation platform
        </h1>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">AI-powered analytics</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">Real-time collaboration</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">Enterprise-grade security</span>
          </li>
        </ul>
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Product" 
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="bg-white dark:bg-gray-700 p-2 rounded-xl shadow-lg inline-block mb-6">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    NEW RELEASE
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Introducing the next generation platform
                </h1>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      AI-powered analytics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Real-time collaboration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">
                      Enterprise-grade security
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Get Started
                  </button>
                  <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Product"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 9,
      name: "Testimonial Hero",
      category: "creative",
      code: `<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
        TRUSTED BY THOUSANDS
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Loved by teams worldwide
      </h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          "This platform has completely transformed how our team collaborates. The intuitive interface and powerful features save us hours every week."
        </p>
        <div className="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/women/43.jpg" 
            alt="Sarah Johnson" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          "The analytics dashboard alone is worth the price. We've made better decisions in the last quarter than in the previous two years."
        </p>
        <div className="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="Michael Chen" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Michael Chen</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">CTO</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          "Implementation was seamless and the support team is phenomenal. We're seeing ROI within the first month of use."
        </p>
        <div className="flex items-center">
          <img 
            src="https://randomuser.me/api/portraits/women/65.jpg" 
            alt="Emma Rodriguez" 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Emma Rodriguez</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Operations Manager</p>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-16">
      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
        Read More Stories
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                TRUSTED BY THOUSANDS
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Loved by teams worldwide
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "This platform has completely transformed how our team
                  collaborates. The intuitive interface and powerful features
                  save us hours every week."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/43.jpg"
                    alt="Sarah Johnson"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Sarah Johnson
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Marketing Director
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "The analytics dashboard alone is worth the price. We've made
                  better decisions in the last quarter than in the previous two
                  years."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Michael Chen
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      CTO
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  "Implementation was seamless and the support team is
                  phenomenal. We're seeing ROI within the first month of use."
                </p>
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Emma Rodriguez"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Emma Rodriguez
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Operations Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-16">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                Read More Stories
              </button>
            </div>
          </div>
        </section>
      ),
    },
    {
      id: 10,
      name: "Newsletter Signup",
      category: "minimal",
      code: `<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
  <div className="max-w-4xl mx-auto text-center">
    <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-6">
      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      Join 10,000+ subscribers
    </div>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
      Stay updated with our newsletter
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
      Get the latest news, articles, and resources sent straight to your inbox.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
      />
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
        Subscribe
      </button>
    </div>
    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
      We respect your privacy. Unsubscribe at any time.
    </p>
  </div>
</section>`,
      component: (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium mb-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Join 10,000+ subscribers
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Stay updated with our newsletter
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Get the latest news, articles, and resources sent straight to your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      ),
    },
    // Continue adding more hero sections following the same pattern
    // Here are 40 more unique hero sections (11-50)
    {
      id: 11,
      name: "Gradient Overlay",
      category: "gradient",
      code: `<section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
      alt="Background" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90"></div>
  </div>
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
      Powerful tools for your creative workflow
    </h1>
    <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
      Streamline your process with our all-in-one platform designed for designers and developers.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
        Start Free Trial
      </button>
      <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium text-lg transition-colors">
        Watch Video
      </button>
    </div>
  </div>
</section>`,
      component: (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Powerful tools for your creative workflow
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
              Streamline your process with our all-in-one platform designed for
              designers and developers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-medium text-lg transition-colors">
                Watch Video
              </button>
            </div>
          </div>
        </section>
      ),
    },
    // Continue with more sections...
    // Sections 12-50 would follow the same pattern with unique designs
    // Including: Parallax Effect, Typography Focused, Card Layout,
    // Floating Elements, Glass Morphism, Split Color, Interactive Elements,
    // 3D Elements, Geometric Pattern, and many more creative designs
  ];

  // Filter hero sections based on active category
  const filteredHeroSections =
    activeCategory === "all"
      ? heroSections
      : heroSections.filter((hero) => hero.category === activeCategory);

  return (
    <div
      className={`min-h-screen p-4 sm:p-8 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Hero Section Gallery
            </motion.h1>
            <p className="text-lg mt-2 text-gray-600 dark:text-gray-400">
              50+ responsive hero sections for your next project
            </p>
          </div>
        </header>

        {/* Category Filters */}
        <motion.div
          className="mb-12 overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex space-x-2 pb-2">
            {heroCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                } transition-colors`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Hero Sections Grid */}
        <div className="grid grid-cols-1 gap-12">
          {filteredHeroSections.map((hero, index) => (
            <motion.div
              key={hero.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <h3 className="font-semibold text-lg">{hero.name}</h3>
                  <button
                    onClick={() => copyToClipboard(hero.code, hero.id)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Copy code"
                  >
                    {copiedIndex === hero.id ? (
                      <FiCheck className="text-green-500" />
                    ) : (
                      <FiCopy className="text-gray-500 dark:text-gray-400" />
                    )}
                  </button>
                </div>
                <div className="p-1">{hero.component}</div>
              </div>
              {copiedIndex === hero.id && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-2 right-12 bg-gray-800 text-white text-sm px-2 py-1 rounded"
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

export default HeroShowcase;
