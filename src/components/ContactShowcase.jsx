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

    {
      name: "Glassmorphism Contact",
      code: `<div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 flex items-center justify-center">
  <div className="max-w-md w-full backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-8 shadow-2xl">
    <div className="text-center mb-8">
      <div className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
        <FiMessageSquare className="text-white text-2xl" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
      <p className="text-white/80">We'd love to hear from you</p>
    </div>
    
    <form className="space-y-4">
      <div>
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50" 
        />
      </div>
      <div>
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50" 
        />
      </div>
      <div>
        <textarea 
          rows="4" 
          placeholder="Your Message" 
          className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
        ></textarea>
      </div>
      <button className="w-full py-3 bg-white/30 hover:bg-white/40 text-white font-medium rounded-lg backdrop-blur-sm transition duration-300">
        Send Message
      </button>
    </form>
  </div>
</div>`,
      component: (
        <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 flex items-center justify-center">
          <div className="max-w-md w-full backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                <FiMessageSquare className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Get in Touch
              </h2>
              <p className="text-white/80">We'd love to hear from you</p>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                ></textarea>
              </div>
              <button className="w-full py-3 bg-white/30 hover:bg-white/40 text-white font-medium rounded-lg backdrop-blur-sm transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      ),
    },

    // Design 2: Neumorphism Style
    {
      name: "Neumorphism Contact",
      code: `<div className="min-h-screen bg-gray-200 dark:bg-gray-800 p-8 flex items-center justify-center">
  <div className="max-w-lg w-full bg-gray-200 dark:bg-gray-800 rounded-3xl p-8 shadow-neumorphism">
    <div className="text-center mb-8">
      <div className="w-20 h-20 mx-auto mb-6 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center shadow-neumorphism-inset">
        <FiSend className="text-blue-500 text-3xl" />
      </div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Contact Us</h2>
      <p className="text-gray-600 dark:text-gray-400">Let's start a conversation</p>
    </div>
    
    <form className="space-y-6">
      <div>
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full p-4 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphism-inset text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none" 
        />
      </div>
      <div>
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full p-4 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphism-inset text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none" 
        />
      </div>
      <div>
        <textarea 
          rows="4" 
          placeholder="Your Message" 
          className="w-full p-4 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-neumorphism-inset text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none resize-none"
        ></textarea>
      </div>
      <button className="w-full py-4 bg-gray-200 dark:bg-gray-800 text-blue-500 font-semibold rounded-2xl shadow-neumorphism hover:shadow-neumorphism-pressed transition duration-300">
        Send Message
      </button>
    </form>
  </div>
</div>`,
      component: (
        <div className="min-h-screen bg-gray-200 dark:bg-gray-800 p-8 flex items-center justify-center">
          <div
            className="max-w-lg w-full bg-gray-200 dark:bg-gray-800 rounded-3xl p-8"
            style={{
              boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
            }}
          >
            <div className="text-center mb-8">
              <div
                className="w-20 h-20 mx-auto mb-6 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center"
                style={{
                  boxShadow:
                    "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
                }}
              >
                <FiSend className="text-blue-500 text-3xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Let's start a conversation
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 bg-gray-200 dark:bg-gray-800 rounded-2xl text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none"
                  style={{
                    boxShadow:
                      "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 bg-gray-200 dark:bg-gray-800 rounded-2xl text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none"
                  style={{
                    boxShadow:
                      "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
                  }}
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-4 bg-gray-200 dark:bg-gray-800 rounded-2xl text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none resize-none"
                  style={{
                    boxShadow:
                      "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
                  }}
                ></textarea>
              </div>
              <button
                className="w-full py-4 bg-gray-200 dark:bg-gray-800 text-blue-500 font-semibold rounded-2xl hover:opacity-90 transition duration-300"
                style={{
                  boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      ),
    },

    // Design 3: Floating Labels
    {
      name: "Floating Labels Contact",
      code: `<div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Contact Form</h2>
    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
  </div>
  
  <form className="space-y-8">
    <div className="relative">
      <input 
        type="text" 
        id="name" 
        className="peer w-full p-4 pt-6 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-white" 
        placeholder=" "
      />
      <label 
        htmlFor="name" 
        className="absolute left-4 top-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
      >
        Your Name
      </label>
    </div>
    
    <div className="relative">
      <input 
        type="email" 
        id="email" 
        className="peer w-full p-4 pt-6 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-white" 
        placeholder=" "
      />
      <label 
        htmlFor="email" 
        className="absolute left-4 top-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
      >
        Email Address
      </label>
    </div>
    
    <div className="relative">
      <input 
        type="text" 
        id="subject" 
        className="peer w-full p-4 pt-6 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-white" 
        placeholder=" "
      />
      <label 
        htmlFor="subject" 
        className="absolute left-4 top-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
      >
        Subject
      </label>
    </div>
    
    <div className="relative">
      <textarea 
        id="message" 
        rows="4" 
        className="peer w-full p-4 pt-6 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-white resize-none" 
        placeholder=" "
      ></textarea>
      <label 
        htmlFor="message" 
        className="absolute left-4 top-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
      >
        Your Message
      </label>
    </div>
    
    <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 transform hover:scale-105">
      Send Message
    </button>
  </form>
</div>`,
      component: (
        <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Contact Form
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <form className="space-y-8">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full p-4 pt-6 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-white"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
              >
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full p-4 pt-6 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-white"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="subject"
                className="peer w-full p-4 pt-6 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-white"
                placeholder=" "
              />
              <label
                htmlFor="subject"
                className="absolute left-4 top-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
              >
                Subject
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows="4"
                className="peer w-full p-4 pt-6 bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-gray-800 dark:text-white resize-none"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500 dark:peer-focus:text-blue-400"
              >
                Your Message
              </label>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      ),
    },

    // Design 4: Multi-Step Contact Form
    {
      name: "Multi-Step Contact Form",
      code: `<div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
  <div className="mb-8">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
        <span className="text-blue-500 font-medium">Personal Info</span>
      </div>
      <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 mx-4 rounded-full">
        <div className="h-full bg-blue-500 rounded-full" style={{width: '33%'}}></div>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
        <span className="text-gray-400">Contact Details</span>
      </div>
      <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 mx-4 rounded-full"></div>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
        <span className="text-gray-400">Message</span>
      </div>
    </div>
  </div>
  
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Tell us about yourself</h2>
    <p className="text-gray-600 dark:text-gray-400">We'd like to know who we're talking to</p>
  </div>
  
  <form className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
        <input 
          type="text" 
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
        <input 
          type="text" 
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
        />
      </div>
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company (Optional)</label>
      <input 
        type="text" 
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
      />
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Title</label>
      <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
        <option>Select your role</option>
        <option>CEO/Founder</option>
        <option>Manager</option>
        <option>Developer</option>
        <option>Designer</option>
        <option>Other</option>
      </select>
    </div>
    
    <div className="flex justify-between pt-6">
      <button type="button" className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition">
        Back
      </button>
      <button type="button" className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Next Step
      </button>
    </div>
  </form>
</div>`,
      component: (
        <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <span className="text-blue-500 font-medium">Personal Info</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 mx-4 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "33%" }}
                ></div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <span className="text-gray-400">Contact Details</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 dark:bg-gray-700 mx-4 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <span className="text-gray-400">Message</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Tell us about yourself
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We'd like to know who we're talking to
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company (Optional)
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Title
              </label>
              <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                <option>Select your role</option>
                <option>CEO/Founder</option>
                <option>Manager</option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex justify-between pt-6">
              <button
                type="button"
                className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
              >
                Back
              </button>
              <button
                type="button"
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Next Step
              </button>
            </div>
          </form>
        </div>
      ),
    },

    // Design 5: Video Call Integration
    {
      name: "Video Call Integration",
      code: `<div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Let's Schedule a Call</h2>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Choose your preferred way to connect with us. We're here to help you succeed.
    </p>
  </div>
  
  <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <FiVideo className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Video Call</h3>
            <p className="text-blue-100">Face-to-face conversation</p>
          </div>
        </div>
        <p className="text-sm text-blue-100 mb-4">
          Perfect for detailed discussions, demos, and building relationships.
        </p>
        <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg transition">
          Schedule Video Call
        </button>
      </div>
      
      <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-xl text-white">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <FiPhone className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Phone Call</h3>
            <p className="text-green-100">Quick and convenient</p>
          </div>
        </div>
        <p className="text-sm text-green-100 mb-4">
          Ideal for quick questions and immediate support.
        </p>
        <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg transition">
          Schedule Phone Call
        </button>
      </div>
      
      <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-xl text-white">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <FiMessageSquare className="text-2xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Live Chat</h3>
            <p className="text-orange-100">Instant messaging</p>
          </div>
        </div>
        <p className="text-sm text-orange-100 mb-4">
          Get immediate answers to your questions.
        </p>
        <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg transition">
          Start Live Chat
        </button>
      </div>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Or send us a message</h3>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
          <input 
            type="text" 
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
          <input 
            type="email" 
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Meeting Time</label>
          <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
            <option>Morning (9AM - 12PM)</option>
            <option>Afternoon (12PM - 5PM)</option>
            <option>Evening (5PM - 8PM)</option>
            <option>I'm flexible</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
          <textarea 
            rows="4" 
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Tell us what you'd like to discuss..."
          ></textarea>
        </div>
        
        <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Let's Schedule a Call
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose your preferred way to connect with us. We're here to help
              you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FiVideo className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Video Call</h3>
                    <p className="text-blue-100">Face-to-face conversation</p>
                  </div>
                </div>
                <p className="text-sm text-blue-100 mb-4">
                  Perfect for detailed discussions, demos, and building
                  relationships.
                </p>
                <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg transition">
                  Schedule Video Call
                </button>
              </div>

              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-xl text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FiPhone className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Phone Call</h3>
                    <p className="text-green-100">Quick and convenient</p>
                  </div>
                </div>
                <p className="text-sm text-green-100 mb-4">
                  Ideal for quick questions and immediate support.
                </p>
                <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg transition">
                  Schedule Phone Call
                </button>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6 rounded-xl text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <FiMessageSquare className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Live Chat</h3>
                    <p className="text-orange-100">Instant messaging</p>
                  </div>
                </div>
                <p className="text-sm text-orange-100 mb-4">
                  Get immediate answers to your questions.
                </p>
                <button className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-lg transition">
                  Start Live Chat
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                Or send us a message
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Meeting Time
                  </label>
                  <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                    <option>Morning (9AM - 12PM)</option>
                    <option>Afternoon (12PM - 5PM)</option>
                    <option>Evening (5PM - 8PM)</option>
                    <option>I'm flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Tell us what you'd like to discuss..."
                  ></textarea>
                </div>

                <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      ),
    },

    // Design 6: File Upload Contact
    {
      name: "File Upload Contact",
      code: `<div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Project Inquiry</h2>
    <p className="text-gray-600 dark:text-gray-400">
      Share your project details and files with us. We'll get back to you within 24 hours.
    </p>
  </div>
  
  <form className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
        <input 
          type="text" 
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
        <input 
          type="email" 
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
        />
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
        <input 
          type="text" 
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Budget Range</label>
        <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
          <option>Select budget range</option>
          <option>$1,000 - $5,000</option>
          <option>$5,000 - $10,000</option>
          <option>$10,000 - $25,000</option>
          <option>$25,000+</option>
        </select>
      </div>
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project Description</label>
      <textarea 
        rows="4" 
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        placeholder="Tell us about your project goals, requirements, and timeline..."
      ></textarea>
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project Files</label>
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 dark:hover:border-blue-400 transition">
        <div className="space-y-2">
          <FiUpload className="mx-auto text-3xl text-gray-400" />
          <div>
            <p className="text-gray-600 dark:text-gray-400">
              <span className="font-medium text-blue-500 hover:text-blue-600 cursor-pointer">Click to upload</span> or drag and drop
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              PNG, JPG, PDF, DOC up to 10MB each
            </p>
          </div>
        </div>
        <input type="file" className="hidden" multiple accept=".png,.jpg,.jpeg,.pdf,.doc,.docx" />
      </div>
      
      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">project-mockup.png</p>
              <p className="text-xs text-gray-500">2.1 MB</p>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-700">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <div className="flex items-center space-x-3">
      <input type="checkbox" id="terms" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
      <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
        I agree to the <a href="#" className="text-blue-500 hover:text-blue-600">Terms of Service</a> and <a href="#" className="text-blue-500 hover:text-blue-600">Privacy Policy</a>
      </label>
    </div>
    
    <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition">
      Submit Project Inquiry
    </button>
  </form>
</div>`,
      component: (
        <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Project Inquiry
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Share your project details and files with us. We'll get back to
              you within 24 hours.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Budget Range
                </label>
                <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                  <option>Select budget range</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Description
              </label>
              <textarea
                rows="4"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Tell us about your project goals, requirements, and timeline..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Files
              </label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 dark:hover:border-blue-400 transition">
                <div className="space-y-2">
                  <FiUpload className="mx-auto text-3xl text-gray-400" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium text-blue-500 hover:text-blue-600 cursor-pointer">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      PNG, JPG, PDF, DOC up to 10MB each
                    </p>
                  </div>
                </div>
                <input
                  type="file"
                  className="hidden"
                  multiple
                  accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
                />
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        project-mockup.png
                      </p>
                      <p className="text-xs text-gray-500">2.1 MB</p>
                    </div>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 hover:text-blue-600">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition">
              Submit Project Inquiry
            </button>
          </form>
        </div>
      ),
    },

    // Design 7: Testimonial Contact
    {
      name: "Testimonial Contact",
      code: `<div className="max-w-6xl mx-auto p-8">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">What Our Clients Say</h2>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
    </p>
  </div>
  
  <div className="grid md:grid-cols-3 gap-6 mb-12">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        "Exceptional service and attention to detail. The team delivered exactly what we needed and more."
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-500 font-semibold">
          JS
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-800 dark:text-white">John Smith</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">CEO, Tech Corp</p>
        </div>
      </div>
    </div>
    
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        "Professional, reliable, and results-driven. I couldn't be happier with the outcome of our project."
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-500 font-semibold">
          SD
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-800 dark:text-white">Sarah Davis</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Marketing Director</p>
        </div>
      </div>
    </div>
    
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
          <FiStar className="fill-current" />
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        "Outstanding communication and project management. They made the entire process seamless."
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-500 font-semibold">
          MJ
        </div>
        <div className="ml-3">
          <p className="font-semibold text-gray-800 dark:text-white">Mike Johnson</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Startup Founder</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
      <p className="mb-8 text-blue-100">
        Let's discuss how we can help you achieve your goals. Get in touch today for a free consultation.
      </p>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50" 
          />
        </div>
        <input 
          type="text" 
          placeholder="Company Name" 
          className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50" 
        />
        <textarea 
          rows="3" 
          placeholder="Tell us about your project..." 
          className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
        ></textarea>
        <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
          Get Free Consultation
        </button>
      </form>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-6xl mx-auto p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "Exceptional service and attention to detail. The team delivered
                exactly what we needed and more."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-500 font-semibold">
                  JS
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    John Smith
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    CEO, Tech Corp
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "Professional, reliable, and results-driven. I couldn't be
                happier with the outcome of our project."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-500 font-semibold">
                  SD
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    Sarah Davis
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Marketing Director
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                "Outstanding communication and project management. They made the
                entire process seamless."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-500 font-semibold">
                  MJ
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800 dark:text-white">
                    Mike Johnson
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Startup Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="mb-8 text-blue-100">
                Let's discuss how we can help you achieve your goals. Get in
                touch today for a free consultation.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <textarea
                  rows="3"
                  placeholder="Tell us about your project..."
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                ></textarea>
                <button className="w-full py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      ),
    },

    // Design 8: Calendar Booking
    {
      name: "Calendar Booking",
      code: `<div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Book a Meeting</h2>
    <p className="text-gray-600 dark:text-gray-400">
      Choose a time that works for you and let's discuss your project in detail.
    </p>
  </div>
  
  <div className="grid md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Select Date & Time</h3>
      
      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-medium text-gray-800 dark:text-white">December 2024</h4>
          <div className="flex space-x-2">
            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center text-sm">
          <div className="p-2 text-gray-500 dark:text-gray-400">Sun</div>
          <div className="p-2 text-gray-500 dark:text-gray-400">Mon</div>
          <div className="p-2 text-gray-500 dark:text-gray-400">Tue</div>
          <div className="p-2 text-gray-500 dark:text-gray-400">Wed</div>
          <div className="p-2 text-gray-500 dark:text-gray-400">Thu</div>
          <div className="p-2 text-gray-500 dark:text-gray-400">Fri</div>
          <div className="p-2 text-gray-500 dark:text-gray-400">Sat</div>
          
          <div className="p-2 text-gray-400">1</div>
          <div className="p-2 text-gray-400">2</div>
          <div className="p-2 text-gray-400">3</div>
          <div className="p-2 text-gray-400">4</div>
          <div className="p-2 text-gray-400">5</div>
          <div className="p-2 text-gray-400">6</div>
          <div className="p-2 text-gray-400">7</div>
          
          <div className="p-2 text-gray-400">8</div>
          <div className="p-2 text-gray-400">9</div>
          <div className="p-2 text-gray-400">10</div>
          <div className="p-2 text-gray-400">11</div>
          <div className="p-2 text-gray-400">12</div>
          <div className="p-2 text-gray-400">13</div>
          <div className="p-2 text-gray-400">14</div>
          
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">15</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">16</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">17</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">18</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">19</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">20</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">21</div>
          
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">22</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">23</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">24</div>
          <div className="p-2 bg-blue-500 text-white rounded">25</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">26</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">27</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">28</div>
          
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">29</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">30</div>
          <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">31</div>
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Available Times</h4>
        <div className="grid grid-cols-3 gap-2">
          <button className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900">9:00 AM</button>
          <button className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900">10:00 AM</button>
          <button className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900">11:00 AM</button>
          <button className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900">2:00 PM</button>
          <button className="p-2 text-sm bg-blue-500 text-white rounded">3:00 PM</button>
          <button className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900">4:00 PM</button>
        </div>
      </div>
    </div>
    
    <div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Meeting Details</h3>
      
      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-6">
        <div className="flex items-center space-x-3 mb-2">
          <FiCalendar className="text-blue-500" />
          <span className="font-medium text-gray-800 dark:text-white">December 25, 2024</span>
        </div>
        <div className="flex items-center space-x-3 mb-2">
          <FiClock className="text-blue-500" />
          <span className="font-medium text-gray-800 dark:text-white">3:00 PM - 4:00 PM</span>
        </div>
        <div className="flex items-center space-x-3">
          <FiVideo className="text-blue-500" />
          <span className="font-medium text-gray-800 dark:text-white">Video Call (Zoom)</span>
        </div>
      </div>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
          <input 
            type="text" 
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
          <input 
            type="email" 
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
          <input 
            type="tel" 
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Meeting Purpose</label>
          <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
            <option>General Consultation</option>
            <option>Project Discussion</option>
            <option>Technical Support</option>
            <option>Partnership Inquiry</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Additional Notes</label>
          <textarea 
            rows="3" 
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            placeholder="Anything specific you'd like to discuss?"
          ></textarea>
        </div>
        
        <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Confirm Meeting
        </button>
      </form>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Book a Meeting
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Choose a time that works for you and let's discuss your project in
              detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                Select Date & Time
              </h3>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-white">
                    December 2024
                  </h4>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  <div className="p-2 text-gray-500 dark:text-gray-400">
                    Sun
                  </div>
                  <div className="p-2 text-gray-500 dark:text-gray-400">
                    Mon
                  </div>
                  <div className="p-2 text-gray-500 dark:text-gray-400">
                    Tue
                  </div>
                  <div className="p-2 text-gray-500 dark:text-gray-400">
                    Wed
                  </div>
                  <div className="p-2 text-gray-500 dark:text-gray-400">
                    Thu
                  </div>
                  <div className="p-2 text-gray-500 dark:text-gray-400">
                    Fri
                  </div>
                  <div className="p-2 text-gray-500 dark:text-gray-400">
                    Sat
                  </div>

                  <div className="p-2 text-gray-400">1</div>
                  <div className="p-2 text-gray-400">2</div>
                  <div className="p-2 text-gray-400">3</div>
                  <div className="p-2 text-gray-400">4</div>
                  <div className="p-2 text-gray-400">5</div>
                  <div className="p-2 text-gray-400">6</div>
                  <div className="p-2 text-gray-400">7</div>

                  <div className="p-2 text-gray-400">8</div>
                  <div className="p-2 text-gray-400">9</div>
                  <div className="p-2 text-gray-400">10</div>
                  <div className="p-2 text-gray-400">11</div>
                  <div className="p-2 text-gray-400">12</div>
                  <div className="p-2 text-gray-400">13</div>
                  <div className="p-2 text-gray-400">14</div>

                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    15
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    16
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    17
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    18
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    19
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    20
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    21
                  </div>

                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    22
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    23
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    24
                  </div>
                  <div className="p-2 bg-blue-500 text-white rounded">25</div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    26
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    27
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    28
                  </div>

                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    29
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    30
                  </div>
                  <div className="p-2 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900 rounded">
                    31
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                  Available Times
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <button className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900">
                    9:00 AM
                  </button>
                  <button className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900">
                    10:00 AM
                  </button>
                  <button className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900">
                    11:00 AM
                  </button>
                  <button className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900">
                    2:00 PM
                  </button>
                  <button className="p-2 text-sm bg-blue-500 text-white rounded">
                    3:00 PM
                  </button>
                  <button className="p-2 text-sm border border-gray-300 dark:border-gray-600 rounded hover:bg-blue-50 dark:hover:bg-blue-900">
                    4:00 PM
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
                Meeting Details
              </h3>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <FiCalendar className="text-blue-500" />
                  <span className="font-medium text-gray-800 dark:text-white">
                    December 25, 2024
                  </span>
                </div>
                <div className="flex items-center space-x-3 mb-2">
                  <FiClock className="text-blue-500" />
                  <span className="font-medium text-gray-800 dark:text-white">
                    3:00 PM - 4:00 PM
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiVideo className="text-blue-500" />
                  <span className="font-medium text-gray-800 dark:text-white">
                    Video Call (Zoom)
                  </span>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Meeting Purpose
                  </label>
                  <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                    <option>General Consultation</option>
                    <option>Project Discussion</option>
                    <option>Technical Support</option>
                    <option>Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    rows="3"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Anything specific you'd like to discuss?"
                  ></textarea>
                </div>

                <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                  Confirm Meeting
                </button>
              </form>
            </div>
          </div>
        </div>
      ),
    },

    // Continue with designs 9-20...
    // Each design would follow the same pattern with unique styling and features

    // Design 9: Pricing Integration Contact
    {
      name: "Pricing Integration Contact",
      code: `<div className="max-w-6xl mx-auto p-8">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Choose Your Plan</h2>
    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      Select the perfect plan for your needs. Need something custom? Contact us directly.
    </p>
  </div>
  
  <div className="grid md:grid-cols-3 gap-8 mb-12">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Starter</h3>
        <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">$29</div>
        <p className="text-gray-600 dark:text-gray-400">per month</p>
      </div>
      <ul className="space-y-3 mb-6">
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">5 Projects</span>
        </li>
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">10GB Storage</span>
        </li>
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">Email Support</span>
        </li>
      </ul>
      <button className="w-full py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
        Get Started
      </button>
    </div>
    
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-blue-500 relative">
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Popular</span>
      </div>
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Professional</h3>
        <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">$79</div>
        <p className="text-gray-600 dark:text-gray-400">per month</p>
      </div>
      <ul className="space-y-3 mb-6">
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">25 Projects</span>
        </li>
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">100GB Storage</span>
        </li>
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">Priority Support</span>
        </li>
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">Advanced Analytics</span>
        </li>
      </ul>
      <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
    
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Enterprise</h3>
        <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">$199</div>
        <p className="text-gray-600 dark:text-gray-400">per month</p>
      </div>
      <ul className="space-y-3 mb-6">
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">Unlimited Projects</span>
        </li>
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">1TB Storage</span>
        </li>
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">24/7 Support</span>
        </li>
        <li className="flex items-center space-x-3">
          <FiCheck className="text-green-500" />
          <span className="text-gray-600 dark:text-gray-400">Custom Integrations</span>
        </li>
      </ul>
      <button className="w-full py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
        Contact Sales
      </button>
    </div>
  </div>
  
  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Need a Custom Solution?</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Our plans don't fit your needs? Let's create a custom package that's perfect for your business.
      </p>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Company Name" 
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" 
          />
          <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
            <option>Team Size</option>
            <option>1-10 employees</option>
            <option>11-50 employees</option>
            <option>51-200 employees</option>
            <option>200+ employees</option>
          </select>
        </div>
        
        <textarea 
          rows="4" 
          placeholder="Tell us about your specific requirements..." 
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        ></textarea>
        
        <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Request Custom Quote
        </button>
      </form>
    </div>
  </div>
</div>`,
      component: (
        <div className="max-w-6xl mx-auto p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Select the perfect plan for your needs. Need something custom?
              Contact us directly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Starter
                </h3>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                  $29
                </div>
                <p className="text-gray-600 dark:text-gray-400">per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    5 Projects
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    10GB Storage
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Email Support
                  </span>
                </li>
              </ul>
              <button className="w-full py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                Get Started
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Professional
                </h3>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                  $79
                </div>
                <p className="text-gray-600 dark:text-gray-400">per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    25 Projects
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    100GB Storage
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Priority Support
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Advanced Analytics
                  </span>
                </li>
              </ul>
              <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Get Started
              </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Enterprise
                </h3>
                <div className="text-3xl font-bold text-gray-800 dark:text-white mb-1">
                  $199
                </div>
                <p className="text-gray-600 dark:text-gray-400">per month</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Unlimited Projects
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    1TB Storage
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    24/7 Support
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FiCheck className="text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Custom Integrations
                  </span>
                </li>
              </ul>
              <button className="w-full py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Our plans don't fit your needs? Let's create a custom package
                that's perfect for your business.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <select className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                    <option>Team Size</option>
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>200+ employees</option>
                  </select>
                </div>

                <textarea
                  rows="4"
                  placeholder="Tell us about your specific requirements..."
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                ></textarea>

                <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                  Request Custom Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      ),
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
