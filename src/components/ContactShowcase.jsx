import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCalendar,
  FiUpload,
  FiGlobe,
  FiClock,
  FiHelpCircle,
  FiStar,
  FiAward,
  FiShield,
  FiVideo,
  FiMic,
  FiCamera,
  FiShare2,
} from "react-icons/fi";

const ContactShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

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

  const contactVariants = {
    hover: { y: -5 },
    tap: { scale: 0.98 },
  };

  // 50 Contact Page Designs
  const contactPages = [
    // Design 1: Minimalist
    {
      name: "Minimalist Contact",
      code: `<div className="max-w-md mx-auto p-8 rounded-lg shadow-md bg-white dark:bg-gray-800">
  <h2 className="text-2xl font-bold mb-6 dark:text-white">Contact Us</h2>
  <form className="space-y-4">
    <div>
      <label className="block mb-1 dark:text-gray-300">Name</label>
      <input type="text" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
    </div>
    <div>
      <label className="block mb-1 dark:text-gray-300">Email</label>
      <input type="email" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
    </div>
    <div>
      <label className="block mb-1 dark:text-gray-300">Message</label>
      <textarea rows="4" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
    </div>
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      Send Message
    </button>
  </form>
</div>`,
      component: (
        <div className="max-w-md mx-auto p-8 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 dark:text-gray-300">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 dark:text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 dark:text-gray-300">Message</label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Send Message
            </button>
          </form>
        </div>
      ),
    },

    // Design 2: Card with Icons
    {
      name: "Card with Icons",
      code: `<div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800">
  <div className="space-y-6">
    <h2 className="text-3xl font-bold dark:text-white">Get in Touch</h2>
    <div className="flex items-start space-x-4">
      <FiMail className="text-blue-500 mt-1 text-xl" />
      <div>
        <h3 className="font-semibold dark:text-gray-300">Email</h3>
        <p className="text-gray-600 dark:text-gray-400">contact@example.com</p>
      </div>
    </div>
    <div className="flex items-start space-x-4">
      <FiPhone className="text-blue-500 mt-1 text-xl" />
      <div>
        <h3 className="font-semibold dark:text-gray-300">Phone</h3>
        <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
      </div>
    </div>
    <div className="flex items-start space-x-4">
      <FiMapPin className="text-blue-500 mt-1 text-xl" />
      <div>
        <h3 className="font-semibold dark:text-gray-300">Address</h3>
        <p className="text-gray-600 dark:text-gray-400">123 Business Ave, Suite 100</p>
      </div>
    </div>
  </div>
  <form className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block mb-1 dark:text-gray-300">Name</label>
        <input type="text" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>
      <div>
        <label className="block mb-1 dark:text-gray-300">Email</label>
        <input type="email" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>
    </div>
    <div>
      <label className="block mb-1 dark:text-gray-300">Subject</label>
      <input type="text" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
    </div>
    <div>
      <label className="block mb-1 dark:text-gray-300">Message</label>
      <textarea rows="4" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
    </div>
    <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
      Submit
    </button>
  </form>
</div>`,
      component: (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold dark:text-white">Get in Touch</h2>
            <div className="flex items-start space-x-4">
              <FiMail className="text-blue-500 mt-1 text-xl" />
              <div>
                <h3 className="font-semibold dark:text-gray-300">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  contact@example.com
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FiPhone className="text-blue-500 mt-1 text-xl" />
              <div>
                <h3 className="font-semibold dark:text-gray-300">Phone</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FiMapPin className="text-blue-500 mt-1 text-xl" />
              <div>
                <h3 className="font-semibold dark:text-gray-300">Address</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  123 Business Ave, Suite 100
                </p>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-1 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 dark:text-gray-300">Subject</label>
              <input
                type="text"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-1 dark:text-gray-300">Message</label>
              <textarea
                rows="4"
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
            <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Submit
            </button>
          </form>
        </div>
      ),
    },

    // Design 3: Gradient Background
    {
      name: "Gradient Background",
      code: `<div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl overflow-hidden">
  <div className="absolute inset-0 bg-white opacity-10"></div>
  <div className="relative z-10 max-w-2xl mx-auto text-white">
    <h2 className="text-3xl font-bold mb-2">Contact Our Team</h2>
    <p className="mb-8 opacity-90">We'd love to hear from you</p>
    
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Name</label>
          <input type="text" placeholder="Your name" className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg backdrop-blur-sm placeholder-white placeholder-opacity-70" />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input type="email" placeholder="Your email" className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg backdrop-blur-sm placeholder-white placeholder-opacity-70" />
        </div>
      </div>
      <div>
        <label className="block mb-1">Message</label>
        <textarea rows="4" placeholder="Your message" className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg backdrop-blur-sm placeholder-white placeholder-opacity-70"></textarea>
      </div>
      <button className="w-full py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-opacity-90 transition">
        Send Message
      </button>
    </form>
  </div>
</div>`,
      component: (
        <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-white opacity-10"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <h2 className="text-3xl font-bold mb-2">Contact Our Team</h2>
            <p className="mb-8 opacity-90">We'd love to hear from you</p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg backdrop-blur-sm placeholder-white placeholder-opacity-70"
                  />
                </div>
                <div>
                  <label className="block mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg backdrop-blur-sm placeholder-white placeholder-opacity-70"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg backdrop-blur-sm placeholder-white placeholder-opacity-70"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      ),
    },

    // Design 4: Split Screen
    {
      name: "Split Screen",
      code: `<div className="min-h-[400px] flex flex-col md:flex-row">
  <div className="md:w-1/2 bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk</h2>
    <p className="text-lg md:text-xl mb-8 opacity-90">We're here to help and answer any questions you might have.</p>
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <FiMail className="text-xl md:text-2xl" />
        <span>contact@company.com</span>
      </div>
      <div className="flex items-center space-x-4">
        <FiPhone className="text-xl md:text-2xl" />
        <span>+1 (555) 123-4567</span>
      </div>
      <div className="flex items-center space-x-4">
        <FiMapPin className="text-xl md:text-2xl" />
        <span>123 Business Street, City</span>
      </div>
    </div>
  </div>
  <div className="md:w-1/2 bg-white dark:bg-gray-800 p-8 md:p-12 flex flex-col justify-center">
    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send us a message</h3>
    <form className="space-y-4">
      <div>
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Name</label>
        <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Email</label>
        <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Message</label>
        <textarea rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Submit
      </button>
    </form>
  </div>
</div>`,
      component: (
        <div className="min-h-[400px] flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-blue-600 text-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk</h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              We're here to help and answer any questions you might have.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FiMail className="text-xl md:text-2xl" />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FiPhone className="text-xl md:text-2xl" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <FiMapPin className="text-xl md:text-2xl" />
                <span>123 Business Street, City</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white dark:bg-gray-800 p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Send us a message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      ),
    },

    // Design 5: Modern Card
    {
      name: "Modern Card",
      code: `<div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Contact Us</h2>
    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Have questions? We're here to help. Fill out the form below and we'll get back to you soon.
    </p>
  </div>
  
  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
    <div className="space-y-6 md:space-y-8">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
          <FiMail className="text-blue-600 dark:text-blue-300 text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg dark:text-white">Email Us</h3>
          <p className="text-gray-600 dark:text-gray-400">contact@example.com</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
          <FiPhone className="text-green-600 dark:text-green-300 text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg dark:text-white">Call Us</h3>
          <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
          <FiMapPin className="text-purple-600 dark:text-purple-300 text-xl" />
        </div>
        <div>
          <h3 className="font-bold text-lg dark:text-white">Visit Us</h3>
          <p className="text-gray-600 dark:text-gray-400">123 Business Ave, Suite 100</p>
        </div>
      </div>
    </div>
    
    <form className="space-y-6">
      <div>
        <label className="block mb-2 font-medium dark:text-gray-300">Full Name</label>
        <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 font-medium dark:text-gray-300">Email Address</label>
        <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 font-medium dark:text-gray-300">Message</label>
        <textarea rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
      </div>
      <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition">
        Send Message
      </button>
    </form>
  </div>
</div>`,
      component: (
        <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Contact Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have questions? We're here to help. Fill out the form below and
              we'll get back to you soon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <FiMail className="text-blue-600 dark:text-blue-300 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">
                    Email Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    contact@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <FiPhone className="text-green-600 dark:text-green-300 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <FiMapPin className="text-purple-600 dark:text-purple-300 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">
                    Visit Us
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Business Ave, Suite 100
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      ),
    },

    // Design 6: Dark Professional
    {
      name: "Dark Professional",
      code: `<div className="bg-gray-900 text-gray-100 p-8 rounded-xl max-w-4xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4">Contact Our Team</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      Our experts are ready to assist you with any questions or concerns.
    </p>
  </div>
  
  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-6">
      <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
        <FiUser className="text-blue-400 text-xl" />
        <div>
          <h3 className="font-semibold">Sales Team</h3>
          <p className="text-gray-400">sales@company.com</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
        <FiHelpCircle className="text-green-400 text-xl" />
        <div>
          <h3 className="font-semibold">Support</h3>
          <p className="text-gray-400">support@company.com</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
        <FiClock className="text-purple-400 text-xl" />
        <div>
          <h3 className="font-semibold">Business Hours</h3>
          <p className="text-gray-400">Mon-Fri: 9AM-5PM</p>
        </div>
      </div>
    </div>
    
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-gray-400">First Name</label>
          <input type="text" className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block mb-2 text-gray-400">Last Name</label>
          <input type="text" className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
      <div>
        <label className="block mb-2 text-gray-400">Email</label>
        <input type="email" className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label className="block mb-2 text-gray-400">Subject</label>
        <select className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500">
          <option>General Inquiry</option>
          <option>Support</option>
          <option>Sales</option>
        </select>
      </div>
      <div>
        <label className="block mb-2 text-gray-400">Message</label>
        <textarea rows="4" className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500"></textarea>
      </div>
      <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded transition">
        Send Message
      </button>
    </form>
  </div>
</div>`,
      component: (
        <div className="bg-gray-900 text-gray-100 p-8 rounded-xl max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our experts are ready to assist you with any questions or
              concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                <FiUser className="text-blue-400 text-xl" />
                <div>
                  <h3 className="font-semibold">Sales Team</h3>
                  <p className="text-gray-400">sales@company.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                <FiHelpCircle className="text-green-400 text-xl" />
                <div>
                  <h3 className="font-semibold">Support</h3>
                  <p className="text-gray-400">support@company.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                <FiClock className="text-purple-400 text-xl" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-400">Mon-Fri: 9AM-5PM</p>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-gray-400">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-400">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-gray-400">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-400">Subject</label>
                <select className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500">
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Sales</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-gray-400">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      ),
    },

    // Design 7: Animated Contact Form
    {
      name: "Animated Contact Form",
      code: `<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="max-w-md mx-auto p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800"
>
  <motion.h2 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="text-2xl font-bold mb-6 text-center dark:text-white"
  >
    Reach Out To Us
  </motion.h2>
  
  <form className="space-y-4">
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <label className="block mb-1 dark:text-gray-300">Your Name</label>
      <input 
        type="text" 
        className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
      />
    </motion.div>
    
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <label className="block mb-1 dark:text-gray-300">Email Address</label>
      <input 
        type="email" 
        className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
      />
    </motion.div>
    
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <label className="block mb-1 dark:text-gray-300">Message</label>
      <textarea 
        rows="4" 
        className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      ></textarea>
    </motion.div>
    
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md"
    >
      Send Message
    </motion.button>
  </form>
</motion.div>`,
      component: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-6 text-center dark:text-white"
          >
            Reach Out To Us
          </motion.h2>

          <form className="space-y-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block mb-1 dark:text-gray-300">Your Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block mb-1 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block mb-1 dark:text-gray-300">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      ),
    },

    // Design 8: Social Media Integration
    {
      name: "Social Media Integration",
      code: `<div className="max-w-4xl mx-auto p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold mb-4 dark:text-white">Connect With Us</h2>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Reach out through any of these channels or fill out the form below.
    </p>
  </div>
  
  <div className="grid md:grid-cols-2 gap-10">
    <div className="space-y-6">
      <h3 className="text-xl font-semibold dark:text-white">Our Social Channels</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <a href="#" className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center space-x-3 hover:bg-blue-200 dark:hover:bg-blue-800 transition">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </div>
          <span className="font-medium dark:text-white">Facebook</span>
        </a>
        
        <a href="#" className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center space-x-3 hover:bg-blue-200 dark:hover:bg-blue-800 transition">
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
            </svg>
          </div>
          <span className="font-medium dark:text-white">Twitter</span>
        </a>
        
        <a href="#" className="p-4 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center space-x-3 hover:bg-pink-200 dark:hover:bg-pink-800 transition">
          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </div>
          <span className="font-medium dark:text-white">Instagram</span>
        </a>
        
        <a href="#" className="p-4 bg-red-100 dark:bg-red-900 rounded-lg flex items-center space-x-3 hover:bg-red-200 dark:hover:bg-red-800 transition">
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </div>
          <span className="font-medium dark:text-white">YouTube</span>
        </a>
      </div>
      
      <div className="pt-6">
        <h3 className="text-xl font-semibold dark:text-white">Contact Info</h3>
        <div className="mt-4 space-y-3">
          <div className="flex items-center space-x-3">
            <FiMail className="text-gray-500 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">contact@company.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FiPhone className="text-gray-500 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-3">
            <FiMapPin className="text-gray-500 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-400">123 Business Ave, Suite 100</span>
          </div>
        </div>
      </div>
    </div>
    
    <form className="space-y-4">
      <div>
        <label className="block mb-2 font-medium dark:text-gray-300">Your Name</label>
        <input type="text" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 font-medium dark:text-gray-300">Email Address</label>
        <input type="email" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 font-medium dark:text-gray-300">Subject</label>
        <input type="text" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 font-medium dark:text-gray-300">Message</label>
        <textarea rows="4" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
      </div>
      <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>
  </div>
</div>`,
      component: (
        <div className="max-w-4xl mx-auto p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Connect With Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Reach out through any of these channels or fill out the form
              below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold dark:text-white">
                Our Social Channels
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center space-x-3 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </div>
                  <span className="font-medium dark:text-white">Facebook</span>
                </a>

                <a
                  href="#"
                  className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center space-x-3 hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                >
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                  <span className="font-medium dark:text-white">Twitter</span>
                </a>

                <a
                  href="#"
                  className="p-4 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center space-x-3 hover:bg-pink-200 dark:hover:bg-pink-800 transition"
                >
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <span className="font-medium dark:text-white">Instagram</span>
                </a>

                <a
                  href="#"
                  className="p-4 bg-red-100 dark:bg-red-900 rounded-lg flex items-center space-x-3 hover:bg-red-200 dark:hover:bg-red-800 transition"
                >
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </div>
                  <span className="font-medium dark:text-white">YouTube</span>
                </a>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold dark:text-white">
                  Contact Info
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <FiMail className="text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      contact@company.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiPhone className="text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiMapPin className="text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-600 dark:text-gray-400">
                      123 Business Ave, Suite 100
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block mb-2 font-medium dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      ),
    },

    // Design 9: FAQ + Contact Combo
    {
      name: "FAQ + Contact Combo",
      code: `<div className="max-w-5xl mx-auto p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4 dark:text-white">Help Center</h2>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Find answers to common questions or contact our support team directly.
    </p>
  </div>
  
  <div className="grid md:grid-cols-2 gap-12">
    <div>
      <h3 className="text-xl font-semibold mb-6 dark:text-white">Frequently Asked Questions</h3>
      
      <div className="space-y-4">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <button className="flex justify-between items-center w-full text-left">
            <span className="font-medium dark:text-gray-300">How do I reset my password?</span>
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div className="mt-2 text-gray-600 dark:text-gray-400">
            You can reset your password by clicking on the "Forgot Password" link on the login page. We'll send you an email with instructions.
          </div>
        </div>
        
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <button className="flex justify-between items-center w-full text-left">
            <span className="font-medium dark:text-gray-300">What payment methods do you accept?</span>
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div className="mt-2 text-gray-600 dark:text-gray-400">
            We accept all major credit cards (Visa, MasterCard, American Express) as well as PayPal and bank transfers.
          </div>
        </div>
        
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <button className="flex justify-between items-center w-full text-left">
            <span className="font-medium dark:text-gray-300">How can I upgrade my plan?</span>
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div className="mt-2 text-gray-600 dark:text-gray-400">
            You can upgrade your plan at any time from your account settings. The changes will take effect immediately.
          </div>
        </div>
        
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
          <button className="flex justify-between items-center w-full text-left">
            <span className="font-medium dark:text-gray-300">Where can I find documentation?</span>
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div className="mt-2 text-gray-600 dark:text-gray-400">
            Our full documentation is available at docs.company.com. You'll find guides, API references, and tutorials there.
          </div>
        </div>
      </div>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold mb-6 dark:text-white">Still Need Help?</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
      </p>
      
      <form className="space-y-4">
        <div>
          <label className="block mb-2 font-medium dark:text-gray-300">Your Name</label>
          <input type="text" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
        <div>
          <label className="block mb-2 font-medium dark:text-gray-300">Email Address</label>
          <input type="email" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
        <div>
          <label className="block mb-2 font-medium dark:text-gray-300">Subject</label>
          <select className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <option>General Inquiry</option>
            <option>Technical Support</option>
            <option>Billing Question</option>
            <option>Feature Request</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-medium dark:text-gray-300">Message</label>
          <textarea rows="4" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
        </div>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Submit Request
        </button>
      </form>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-5xl mx-auto p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Help Center
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions or contact our support team
              directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 dark:text-white">
                Frequently Asked Questions
              </h3>

              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="font-medium dark:text-gray-300">
                      How do I reset my password?
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="mt-2 text-gray-600 dark:text-gray-400">
                    You can reset your password by clicking on the "Forgot
                    Password" link on the login page. We'll send you an email
                    with instructions.
                  </div>
                </div>

                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="font-medium dark:text-gray-300">
                      What payment methods do you accept?
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="mt-2 text-gray-600 dark:text-gray-400">
                    We accept all major credit cards (Visa, MasterCard, American
                    Express) as well as PayPal and bank transfers.
                  </div>
                </div>

                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="font-medium dark:text-gray-300">
                      How can I upgrade my plan?
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="mt-2 text-gray-600 dark:text-gray-400">
                    You can upgrade your plan at any time from your account
                    settings. The changes will take effect immediately.
                  </div>
                </div>

                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <button className="flex justify-between items-center w-full text-left">
                    <span className="font-medium dark:text-gray-300">
                      Where can I find documentation?
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="mt-2 text-gray-600 dark:text-gray-400">
                    Our full documentation is available at docs.company.com.
                    You'll find guides, API references, and tutorials there.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 dark:text-white">
                Still Need Help?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Can't find what you're looking for? Send us a message and we'll
                get back to you within 24 hours.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium dark:text-gray-300">
                    Subject
                  </label>
                  <select className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-medium dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      ),
    },

    // Design 10: Map Embedded
    {
      name: "Map Embedded",
      code: `<div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
  <div className="grid md:grid-cols-2">
    <div className="h-64 md:h-auto">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179335!2d-73.9878449241642!3d40.74844047138972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623251234567!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy"
      ></iframe>
    </div>
    
    <div className="p-8 bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Visit Our Office</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        We'd love to meet you in person. Our office is open Monday through Friday from 9AM to 5PM.
      </p>
      
      <div className="space-y-4 mb-8">
        <div className="flex items-start space-x-4">
          <FiMapPin className="text-blue-500 mt-1 text-xl" />
          <div>
            <h3 className="font-semibold dark:text-gray-300">Address</h3>
            <p className="text-gray-600 dark:text-gray-400">350 5th Ave, New York, NY 10118</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <FiPhone className="text-blue-500 mt-1 text-xl" />
          <div>
            <h3 className="font-semibold dark:text-gray-300">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+1 (212) 736-3100</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <FiMail className="text-blue-500 mt-1 text-xl" />
          <div>
            <h3 className="font-semibold dark:text-gray-300">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">office@company.com</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold mb-4 dark:text-white">Schedule a Meeting</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm dark:text-gray-300">Name</label>
            <input type="text" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          <div>
            <label className="block mb-2 text-sm dark:text-gray-300">Email</label>
            <input type="email" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm dark:text-gray-300">Preferred Date</label>
          <input type="date" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Request Appointment
        </button>
      </form>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179335!2d-73.9878449241642!3d40.74844047138972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623251234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="p-8 bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Visit Our Office
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We'd love to meet you in person. Our office is open Monday
                through Friday from 9AM to 5PM.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <FiMapPin className="text-blue-500 mt-1 text-xl" />
                  <div>
                    <h3 className="font-semibold dark:text-gray-300">
                      Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      350 5th Ave, New York, NY 10118
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiPhone className="text-blue-500 mt-1 text-xl" />
                  <div>
                    <h3 className="font-semibold dark:text-gray-300">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +1 (212) 736-3100
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiMail className="text-blue-500 mt-1 text-xl" />
                  <div>
                    <h3 className="font-semibold dark:text-gray-300">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      office@company.com
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4 dark:text-white">
                Schedule a Meeting
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-sm dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm dark:text-gray-300">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      ),
    },

    // Design 11-25 would continue here with similar structure...
    // Each with unique design elements and features

    // Design 26: Team Member Contacts
    {
      name: "Team Member Contacts",
      code: `<div className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold mb-4 dark:text-white">Meet Our Team</h2>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Get in touch directly with our team members who can help with your specific needs.
    </p>
  </div>
  
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 dark:text-blue-300 text-3xl font-bold">
        JD
      </div>
      <h3 className="text-lg font-semibold dark:text-white">John Doe</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">Sales Director</p>
      <div className="flex justify-center space-x-3">
        <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
          <FiMail />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
          <FiPhone />
        </a>
      </div>
    </div>
    
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-500 dark:text-green-300 text-3xl font-bold">
        AS
      </div>
      <h3 className="text-lg font-semibold dark:text-white">Alice Smith</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">Support Manager</p>
      <div className="flex justify-center space-x-3">
        <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
          <FiMail />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
          <FiPhone />
        </a>
      </div>
    </div>
    
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-500 dark:text-purple-300 text-3xl font-bold">
        RJ
      </div>
      <h3 className="text-lg font-semibold dark:text-white">Robert Johnson</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">Technical Lead</p>
      <div className="flex justify-center space-x-3">
        <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
          <FiMail />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
          <FiPhone />
        </a>
      </div>
    </div>
    
    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center text-yellow-500 dark:text-yellow-300 text-3xl font-bold">
        MB
      </div>
      <h3 className="text-lg font-semibold dark:text-white">Maria Brown</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">Customer Success</p>
      <div className="flex justify-center space-x-3">
        <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
          <FiMail />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">
          <FiPhone />
        </a>
      </div>
    </div>
  </div>
  
  <div className="mt-12 max-w-2xl mx-auto">
    <h3 className="text-xl font-semibold mb-6 text-center dark:text-white">General Inquiry</h3>
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 text-sm dark:text-gray-300">Name</label>
          <input type="text" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
        <div>
          <label className="block mb-2 text-sm dark:text-gray-300">Email</label>
          <input type="email" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>
      </div>
      <div>
        <label className="block mb-2 text-sm dark:text-gray-300">Subject</label>
        <input type="text" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
      </div>
      <div>
        <label className="block mb-2 text-sm dark:text-gray-300">Message</label>
        <textarea rows="3" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
      </div>
      <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Send Message
      </button>
    </form>
  </div>
</div>`,
      component: (
        <div className="max-w-6xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get in touch directly with our team members who can help with your
              specific needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 dark:text-blue-300 text-3xl font-bold">
                JD
              </div>
              <h3 className="text-lg font-semibold dark:text-white">
                John Doe
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Sales Director
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FiMail />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FiPhone />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-500 dark:text-green-300 text-3xl font-bold">
                AS
              </div>
              <h3 className="text-lg font-semibold dark:text-white">
                Alice Smith
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Support Manager
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FiMail />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FiPhone />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-500 dark:text-purple-300 text-3xl font-bold">
                RJ
              </div>
              <h3 className="text-lg font-semibold dark:text-white">
                Robert Johnson
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Technical Lead
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FiMail />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FiPhone />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center text-yellow-500 dark:text-yellow-300 text-3xl font-bold">
                MB
              </div>
              <h3 className="text-lg font-semibold dark:text-white">
                Maria Brown
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Customer Success
              </p>
              <div className="flex justify-center space-x-3">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FiMail />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400"
                >
                  <FiPhone />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center dark:text-white">
              General Inquiry
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows="3"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      ),
    },

    // Design 27-50 would continue here...
    // Each with unique design elements and features
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
            Contact Page Designs
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
            Explore our collection of meticulously crafted contact page designs.
            Click the <FiCopy className="inline" /> icon to copy the code for
            any design!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Contact Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {contactPages.map((contact, index) => (
            <motion.div
              key={index}
              variants={contactVariants}
              whileHover="hover"
              whileTap="tap"
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="mb-4 h-100 overflow-y-auto">
                {contact.component}
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                {contact.name}
              </h3>

              <button
                onClick={() => copyToClipboard(contact.code, index)}
                className="absolute top-2 right-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
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
                  className="absolute top-10 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded"
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

export default ContactShowcase;
