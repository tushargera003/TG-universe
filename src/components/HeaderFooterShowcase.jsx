import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaGithub,
} from "react-icons/fa";

const HeaderFooterShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("headers");

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  // Header and Footer data
  const components = [
    // 1. Minimal Header
    {
      type: "header",
      name: "Minimal Header",
      code: `<header className="py-4 px-6 shadow-sm">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">Brand</div>
    <nav className="hidden md:flex space-x-8">
      <a href="#" className="hover:text-blue-600">Home</a>
      <a href="#" className="hover:text-blue-600">About</a>
      <a href="#" className="hover:text-blue-600">Services</a>
      <a href="#" className="hover:text-blue-600">Contact</a>
    </nav>
    <button className="md:hidden">
      <FiMenu className="text-2xl" />
    </button>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Brand</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
              <a href="#" className="hover:text-blue-600">
                About
              </a>
              <a href="#" className="hover:text-blue-600">
                Services
              </a>
              <a href="#" className="hover:text-blue-600">
                Contact
              </a>
            </nav>
            <button className="md:hidden">
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </header>
      ),
    },

    // 2. Minimal Footer
    {
      type: "footer",
      name: "Minimal Footer",
      code: `<footer className="py-8 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white ">
  <div className="max-w-6xl mx-auto text-center">
    <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
  </div>
</footer>`,
      component: (
        <footer className="py-8 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white ">
          <div className="max-w-6xl mx-auto text-center">
            <p>
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
          </div>
        </footer>
      ),
    },

    // 3. Dark Theme Header
    {
      type: "header",
      name: "Dark Theme Header",
      code: `<header className="py-4 px-6 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">Logo</div>
    <nav className="hidden md:flex space-x-8">
      <a href="#" className="hover:text-blue-400">Products</a>
      <a href="#" className="hover:text-blue-400">Solutions</a>
      <a href="#" className="hover:text-blue-400">Pricing</a>
      <a href="#" className="hover:text-blue-400">Resources</a>
    </nav>
    <div className="hidden md:flex space-x-4">
      <button className="px-4 py-2 rounded hover:bg-gray-700">Login</button>
      <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Sign Up</button>
    </div>
    <button className="md:hidden">
      <FiMenu className="text-2xl" />
    </button>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Logo</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-400">
                Products
              </a>
              <a href="#" className="hover:text-blue-400">
                Solutions
              </a>
              <a href="#" className="hover:text-blue-400">
                Pricing
              </a>
              <a href="#" className="hover:text-blue-400">
                Resources
              </a>
            </nav>
            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 rounded hover:bg-gray-700">
                Login
              </button>
              <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
                Sign Up
              </button>
            </div>
            <button className="md:hidden">
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </header>
      ),
    },

    // 4. Social Media Footer
    {
      type: "footer",
      name: "Social Media Footer",
      code: `<footer className="py-12 px-6 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">About Us</a></li>
          <li><a href="#" className="hover:text-blue-400">Careers</a></li>
          <li><a href="#" className="hover:text-blue-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Products</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Features</a></li>
          <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-400">API</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Support</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
          <li><a href="#" className="hover:text-blue-400">Community</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl hover:text-blue-400"><FaFacebook /></a>
          <a href="#" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="text-2xl hover:text-blue-400"><FaInstagram /></a>
          <a href="#" className="text-2xl hover:text-blue-400"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-2xl hover:text-blue-400">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-2xl hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-2xl hover:text-blue-400">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-2xl hover:text-blue-400">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 5. Gradient Header
    {
      type: "header",
      name: "Gradient Header",
      code: `<header className="py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">Gradient</div>
    <nav className="hidden md:flex space-x-8">
      <a href="#" className="hover:text-gray-200">Features</a>
      <a href="#" className="hover:text-gray-200">Pricing</a>
      <a href="#" className="hover:text-gray-200">Docs</a>
      <a href="#" className="hover:text-gray-200">Support</a>
    </nav>
    <button className="hidden md:block px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100">
      Get Started
    </button>
    <button className="md:hidden">
      <FiMenu className="text-2xl" />
    </button>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Gradient</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-gray-200">
                Features
              </a>
              <a href="#" className="hover:text-gray-200">
                Pricing
              </a>
              <a href="#" className="hover:text-gray-200">
                Docs
              </a>
              <a href="#" className="hover:text-gray-200">
                Support
              </a>
            </nav>
            <button className="hidden md:block px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100">
              Get Started
            </button>
            <button className="md:hidden">
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </header>
      ),
    },

    // 6. Newsletter Footer
    {
      type: "footer",
      name: "Newsletter Footer",
      code: `<footer className="py-12 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h3 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h3>
        <p className="mb-4">Get the latest updates and news directly to your inbox.</p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Connect with us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl text-gray-700 hover:text-blue-600"><FaFacebook /></a>
          <a href="#" className="text-2xl text-gray-700 hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="text-2xl text-gray-700 hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="text-2xl text-gray-700 hover:text-blue-700"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">
                  Subscribe to our newsletter
                </h3>
                <p className="mb-4">
                  Get the latest updates and news directly to your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Connect with us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-2xl text-gray-700 hover:text-blue-600"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-2xl text-gray-700 hover:text-blue-400"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-2xl text-gray-700 hover:text-pink-600"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-2xl text-gray-700 hover:text-blue-700"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 7. Centered Header
    {
      type: "header",
      name: "Centered Header",
      code: `<header className="py-6 px-6 border-b border-gray-200">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-3xl font-bold mb-4 md:mb-0">Centered</div>
      <nav className="flex flex-wrap justify-center gap-6">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Products</a>
        <a href="#" className="hover:text-blue-600">Services</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Blog</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>
    </div>
  </div>
</header>`,
      component: (
        <header className="py-6 px-6 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-3xl font-bold mb-4 md:mb-0">Centered</div>
              <nav className="flex flex-wrap justify-center gap-6">
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
                <a href="#" className="hover:text-blue-600">
                  Products
                </a>
                <a href="#" className="hover:text-blue-600">
                  Services
                </a>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
                <a href="#" className="hover:text-blue-600">
                  Blog
                </a>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>
      ),
    },

    // 8. Minimalist Footer
    {
      type: "footer",
      name: "Minimalist Footer",
      code: `<footer className="py-8 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-bold mb-4 md:mb-0">Brand</div>
      <div className="text-sm text-gray-600">
        © {new Date().getFullYear()} Brand Name. All rights reserved.
      </div>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-xl font-bold mb-4 md:mb-0">Brand</div>
              <div className="text-sm text-gray-600">
                © {new Date().getFullYear()} Brand Name. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      ),
    },

    // 9. Sticky Header
    {
      type: "header",
      name: "Sticky Header",
      code: `<header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">Sticky</div>
    <nav className="hidden md:flex space-x-8">
      <a href="#" className="hover:text-blue-600">Home</a>
      <a href="#" className="hover:text-blue-600">Features</a>
      <a href="#" className="hover:text-blue-600">Pricing</a>
      <a href="#" className="hover:text-blue-600">About</a>
    </nav>
    <button className="md:hidden">
      <FiMenu className="text-2xl" />
    </button>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Sticky</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
              <a href="#" className="hover:text-blue-600">
                Features
              </a>
              <a href="#" className="hover:text-blue-600">
                Pricing
              </a>
              <a href="#" className="hover:text-blue-600">
                About
              </a>
            </nav>
            <button className="md:hidden">
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </header>
      ),
    },

    // 10. Contact Footer
    {
      type: "footer",
      name: "Contact Footer",
      code: `<footer className="py-12 text-center px-6 bg-gray-50 dark:bg-gray-900 dark:text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <address className="not-italic">
          <p className="mb-2">123 Business Street</p>
          <p className="mb-2">New York, NY 10001</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: info@company.com</p>
        </address>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
          <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
          <li><a href="#" className="hover:text-blue-600">Sitemap</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-50 text-center dark:bg-gray-900 dark:text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                <address className="not-italic">
                  <p className="mb-2">123 Business Street</p>
                  <p className="mb-2">New York, NY 10001</p>
                  <p className="mb-2">Phone: (123) 456-7890</p>
                  <p>Email: info@company.com</p>
                </address>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 11. Transparent Header
    //     {
    //       type: "header",
    //       name: "Transparent Header",
    //       code: `<header className="py-6 px-6 absolute top-0 left-0 right-0 z-50">
    //   <div className="max-w-6xl mx-auto flex justify-between items-center">
    //     <div className="text-2xl font-bold text-white">Transparent</div>
    //     <nav className="hidden md:flex space-x-8">
    //       <a href="#" className="text-white hover:text-gray-300">Home</a>
    //       <a href="#" className="text-white hover:text-gray-300">About</a>
    //       <a href="#" className="text-white hover:text-gray-300">Services</a>
    //       <a href="#" className="text-white hover:text-gray-300">Contact</a>
    //     </nav>
    //     <button className="hidden md:block px-6 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100">
    //       Get Started
    //     </button>
    //     <button className="md:hidden text-white">
    //       <FiMenu className="text-2xl" />
    //     </button>
    //   </div>
    // </header>`,
    //       component: (
    //         <header className="py-6 px-6 absolute top-0 left-0 right-0 z-50">
    //           <div className="max-w-6xl mx-auto flex justify-between items-center">
    //             <div className="text-2xl font-bold text-white">Transparent</div>
    //             <nav className="hidden md:flex space-x-8">
    //               <a href="#" className="text-white hover:text-gray-300">
    //                 Home
    //               </a>
    //               <a href="#" className="text-white hover:text-gray-300">
    //                 About
    //               </a>
    //               <a href="#" className="text-white hover:text-gray-300">
    //                 Services
    //               </a>
    //               <a href="#" className="text-white hover:text-gray-300">
    //                 Contact
    //               </a>
    //             </nav>
    //             <button className="hidden md:block px-6 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100">
    //               Get Started
    //             </button>
    //             <button className="md:hidden text-white">
    //               <FiMenu className="text-2xl" />
    //             </button>
    //           </div>
    //         </header>
    //       ),
    //     },

    // 12. Multi-column Footer
    {
      type: "footer",
      name: "Multi-column Footer",
      code: `<footer className="py-12 px-6 bg-gray-800 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h4 className="text-lg font-semibold mb-4">Company</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">About Us</a></li>
          <li><a href="#" className="hover:text-blue-400">Careers</a></li>
          <li><a href="#" className="hover:text-blue-400">Press</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Products</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Features</a></li>
          <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-400">API</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Resources</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
          <li><a href="#" className="hover:text-blue-400">Guides</a></li>
          <li><a href="#" className="hover:text-blue-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-4">Legal</h4>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
          <li><a href="#" className="hover:text-blue-400">Terms</a></li>
          <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Products</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 13. E-commerce Header
    {
      type: "header",
      name: "E-commerce Header",
      code: `<header className="py-4 px-6 dark:bg-gray-900 dark:text-white bg-white shadow-sm">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-4">
      <div className="text-2xl font-bold">Shop</div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </button>
      </div>
    </div>
    <nav className="flex justify-between items-center">
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-blue-600">Men</a>
        <a href="#" className="hover:text-blue-600">Women</a>
        <a href="#" className="hover:text-blue-600">Kids</a>
        <a href="#" className="hover:text-blue-600">Accessories</a>
        <a href="#" className="hover:text-blue-600">Sale</a>
      </div>
      <button className="md:hidden">
        <FiMenu className="text-2xl" />
      </button>
    </nav>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl font-bold">Shop</div>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav className="flex justify-between items-center">
              <div className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-blue-600">
                  Men
                </a>
                <a href="#" className="hover:text-blue-600">
                  Women
                </a>
                <a href="#" className="hover:text-blue-600">
                  Kids
                </a>
                <a href="#" className="hover:text-blue-600">
                  Accessories
                </a>
                <a href="#" className="hover:text-blue-600">
                  Sale
                </a>
              </div>
              <button className="md:hidden">
                <FiMenu className="text-2xl" />
              </button>
            </nav>
          </div>
        </header>
      ),
    },

    // 14. App Download Footer
    {
      type: "footer",
      name: "App Download Footer",
      code: `<footer className="py-12 px-6 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h3 className="text-2xl font-bold mb-4">Download Our App</h3>
        <p className="mb-6">Available on iOS and Android platforms. Get exclusive offers when you download.</p>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.19 1.83-.76 2.76-.78 1.17-.02 2.23.42 3.06 1.2-.83.83-1.6 1.78-1.32 3 .26 1.17 1.03 1.62 2.22 2.48.6.43 1.22.9 1.67 1.47-1.19 1.34-2.12 2.67-3.57 2.8zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="font-semibold">App Store</div>
            </div>
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
            </svg>
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl hover:text-blue-400"><FaFacebook /></a>
          <a href="#" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="text-2xl hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="text-2xl hover:text-red-500"><FaYoutube /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">Download Our App</h3>
                <p className="mb-6">
                  Available on iOS and Android platforms. Get exclusive offers
                  when you download.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.19 1.83-.76 2.76-.78 1.17-.02 2.23.42 3.06 1.2-.83.83-1.6 1.78-1.32 3 .26 1.17 1.03 1.62 2.22 2.48.6.43 1.22.9 1.67 1.47-1.19 1.34-2.12 2.67-3.57 2.8zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"></path>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </button>
                  <button className="flex items-center px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-700">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-2xl hover:text-blue-400">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-2xl hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-2xl hover:text-pink-500">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-2xl hover:text-red-500">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 15. Split Header
    {
      type: "header",
      name: "Split Header",
      code: `<header className="py-4 px-6 bg-white border-b dark:bg-gray-900 dark:text-white border-gray-200">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="text-2xl font-bold mr-8">Split</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600">Products</a>
          <a href="#" className="hover:text-blue-600">Solutions</a>
          <a href="#" className="hover:text-blue-600">Pricing</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="hover:text-blue-600">Sign In</a>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Sign Up
        </button>
        <button className="md:hidden">
          <FiMenu className="text-2xl" />
        </button>
      </div>
    </div>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="text-2xl font-bold mr-8">Split</div>
                <nav className="hidden md:flex space-x-6">
                  <a href="#" className="hover:text-blue-600">
                    Products
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    Solutions
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    Pricing
                  </a>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-blue-600">
                  Sign In
                </a>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Sign Up
                </button>
                <button className="md:hidden">
                  <FiMenu className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </header>
      ),
    },

    // 16. Logo Showcase Footer
    {
      type: "footer",
      name: "Logo Showcase Footer",
      code: `<footer className="py-12 px-6 bg-white dark:bg-gray-900 dark:text-white ">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col items-center">
      <div className="text-3xl font-bold mb-8">Brand</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="flex justify-center">
          <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      <div className="flex space-x-6 mb-8">
        <a href="#" className="text-gray-700 hover:text-blue-600"><FaFacebook /></a>
        <a href="#" className="text-gray-700 hover:text-blue-400"><FaTwitter /></a>
        <a href="#" className="text-gray-700 hover:text-pink-600"><FaInstagram /></a>
        <a href="#" className="text-gray-700 hover:text-blue-700"><FaLinkedin /></a>
      </div>
      <div className="text-center text-gray-600">
        <p>© {new Date().getFullYear()} Brand Name. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-white dark:bg-gray-900 dark:text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-8">Brand</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="flex justify-center">
                  <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
                </div>
                <div className="flex justify-center">
                  <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
                </div>
                <div className="flex justify-center">
                  <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
                </div>
                <div className="flex justify-center">
                  <div className="h-12 w-32 bg-gray-200 rounded-md"></div>
                </div>
              </div>
              <div className="flex space-x-6 mb-8">
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-400">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-700 hover:text-pink-600">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-700">
                  <FaLinkedin />
                </a>
              </div>
              <div className="text-center text-gray-600">
                <p>
                  © {new Date().getFullYear()} Brand Name. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      ),
    },

    // 17. Mega Menu Header
    {
      type: "header",
      name: "Mega Menu Header",
      code: `<header className="py-4 px-6 dark:bg-gray-900 dark:text-white bg-white shadow-sm">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center">
      <div className="text-2xl font-bold">MegaMenu</div>
      <nav className="hidden md:flex space-x-8">
        <div className="group relative">
          <button className="flex items-center hover:text-blue-600">
            Products <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <a href="#" className="block py-2 hover:text-blue-600">Product 1</a>
            <a href="#" className="block py-2 hover:text-blue-600">Product 2</a>
            <a href="#" className="block py-2 hover:text-blue-600">Product 3</a>
          </div>
        </div>
        <div className="group relative">
          <button className="flex items-center hover:text-blue-600">
            Solutions <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <a href="#" className="block py-2 hover:text-blue-600">Solution 1</a>
            <a href="#" className="block py-2 hover:text-blue-600">Solution 2</a>
            <a href="#" className="block py-2 hover:text-blue-600">Solution 3</a>
          </div>
        </div>
        <a href="#" className="hover:text-blue-600">Pricing</a>
        <a href="#" className="hover:text-blue-600">Resources</a>
      </nav>
      <div className="hidden md:flex space-x-4">
        <button className="px-4 py-2 hover:text-blue-600">Login</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</button>
      </div>
      <button className="md:hidden">
        <FiMenu className="text-2xl" />
      </button>
    </div>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">MegaMenu</div>
              <nav className="hidden md:flex space-x-8">
                <div className="group relative">
                  <button className="flex items-center hover:text-blue-600">
                    Products{" "}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <a href="#" className="block py-2 hover:text-blue-600">
                      Product 1
                    </a>
                    <a href="#" className="block py-2 hover:text-blue-600">
                      Product 2
                    </a>
                    <a href="#" className="block py-2 hover:text-blue-600">
                      Product 3
                    </a>
                  </div>
                </div>
                <div className="group relative">
                  <button className="flex items-center hover:text-blue-600">
                    Solutions{" "}
                    <svg
                      className="ml-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <a href="#" className="block py-2 hover:text-blue-600">
                      Solution 1
                    </a>
                    <a href="#" className="block py-2 hover:text-blue-600">
                      Solution 2
                    </a>
                    <a href="#" className="block py-2 hover:text-blue-600">
                      Solution 3
                    </a>
                  </div>
                </div>
                <a href="#" className="hover:text-blue-600">
                  Pricing
                </a>
                <a href="#" className="hover:text-blue-600">
                  Resources
                </a>
              </nav>
              <div className="hidden md:flex space-x-4">
                <button className="px-4 py-2 hover:text-blue-600">Login</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Sign Up
                </button>
              </div>
              <button className="md:hidden">
                <FiMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </header>
      ),
    },

    // 18. Blog Footer
    {
      type: "footer",
      name: "Blog Footer",
      code: `<footer className="py-12 px-6 bg-gray-50 dark:bg-gray-900 dark:text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">About The Blog</h3>
        <p className="text-gray-600 mb-4">
          We share insights, tips, and stories about design, development, and business.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600"><FaTwitter /></a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-800"><FaFacebook /></a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-pink-600"><FaInstagram /></a>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          <a href="#" className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300">Design</a>
          <a href="#" className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300">Development</a>
          <a href="#" className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300">Marketing</a>
          <a href="#" className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300">Business</a>
          <a href="#" className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300">Tips</a>
          <a href="#" className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300">Tutorials</a>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Subscribe</h3>
        <p className="text-gray-600 mb-4">
          Get the latest posts delivered right to your inbox.
        </p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Blog Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-50 dark:bg-gray-900 dark:text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">About The Blog</h3>
                <p className="text-gray-600 mb-4">
                  We share insights, tips, and stories about design,
                  development, and business.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-800"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-300 hover:text-pink-600"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2 ">
                  <a
                    href="#"
                    className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300"
                  >
                    Design
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300"
                  >
                    Development
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300"
                  >
                    Marketing
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300"
                  >
                    Business
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300"
                  >
                    Tips
                  </a>
                  <a
                    href="#"
                    className="px-3 py-1 bg-gray-400 rounded-full text-sm hover:bg-gray-300"
                  >
                    Tutorials
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Subscribe</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest posts delivered right to your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 w-full rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              <p>
                © {new Date().getFullYear()} Blog Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    //     // 19. Sidebar Header
    //     {
    //       type: "header",
    //       name: "Sidebar Header",
    //       code: `<header className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-6 z-50">
    //   <div className="flex flex-col h-full">
    //     <div className="text-2xl font-bold mb-12">Sidebar</div>
    //     <nav className="flex-1 space-y-4">
    //       <a href="#" className="block py-2 hover:text-blue-400">Dashboard</a>
    //       <a href="#" className="block py-2 hover:text-blue-400">Projects</a>
    //       <a href="#" className="block py-2 hover:text-blue-400">Team</a>
    //       <a href="#" className="block py-2 hover:text-blue-400">Calendar</a>
    //       <a href="#" className="block py-2 hover:text-blue-400">Documents</a>
    //       <a href="#" className="block py-2 hover:text-blue-400">Reports</a>
    //     </nav>
    //     <div className="mt-auto">
    //       <div className="flex items-center space-x-4">
    //         <div className="h-10 w-10 rounded-full bg-gray-700"></div>
    //         <div>
    //           <div className="font-medium">User Name</div>
    //           <div className="text-sm text-gray-400">user@example.com</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>`,
    //       component: (
    //         <header className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-6 z-50">
    //           <div className="flex flex-col h-full">
    //             <div className="text-2xl font-bold mb-12">Sidebar</div>
    //             <nav className="flex-1 space-y-4">
    //               <a href="#" className="block py-2 hover:text-blue-400">
    //                 Dashboard
    //               </a>
    //               <a href="#" className="block py-2 hover:text-blue-400">
    //                 Projects
    //               </a>
    //               <a href="#" className="block py-2 hover:text-blue-400">
    //                 Team
    //               </a>
    //               <a href="#" className="block py-2 hover:text-blue-400">
    //                 Calendar
    //               </a>
    //               <a href="#" className="block py-2 hover:text-blue-400">
    //                 Documents
    //               </a>
    //               <a href="#" className="block py-2 hover:text-blue-400">
    //                 Reports
    //               </a>
    //             </nav>
    //             <div className="mt-auto">
    //               <div className="flex items-center space-x-4">
    //                 <div className="h-10 w-10 rounded-full bg-gray-700"></div>
    //                 <div>
    //                   <div className="font-medium">User Name</div>
    //                   <div className="text-sm text-gray-400">user@example.com</div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </header>
    //       ),
    //     },

    // 20. Full-width Footer
    {
      type: "footer",
      name: "Full-width Footer",
      code: `<footer className="w-full bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto py-12 px-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">About Us</a></li>
          <li><a href="#" className="hover:text-blue-400">Careers</a></li>
          <li><a href="#" className="hover:text-blue-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Products</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Features</a></li>
          <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-400">API</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Support</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
          <li><a href="#" className="hover:text-blue-400">Community</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
          <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="w-full bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto py-12 px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 21. Animated Header
    {
      type: "header",
      name: "Animated Header",
      code: `<motion.header 
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50"
>
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="text-2xl font-bold"
    >
      Animated
    </motion.div>
    <nav className="hidden md:flex space-x-8">
      <motion.a 
        whileHover={{ scale: 1.1 }}
        href="#" 
        className="hover:text-blue-600"
      >
        Home
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        href="#" 
        className="hover:text-blue-600"
      >
        Features
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        href="#" 
        className="hover:text-blue-600"
      >
        Pricing
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.1 }}
        href="#" 
        className="hover:text-blue-600"
      >
        About
      </motion.a>
    </nav>
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    >
      Get Started
    </motion.button>
    <button className="md:hidden">
      <FiMenu className="text-2xl" />
    </button>
  </div>
</motion.header>`,
      component: (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-md sticky top-0 z-50"
        >
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              Animated
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="hover:text-blue-600"
              >
                Home
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="hover:text-blue-600"
              >
                Features
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="hover:text-blue-600"
              >
                Pricing
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="hover:text-blue-600"
              >
                About
              </motion.a>
            </nav>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Get Started
            </motion.button>
            <button className="md:hidden">
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </motion.header>
      ),
    },

    // 22. Gradient Footer
    {
      type: "footer",
      name: "Gradient Footer",
      code: `<footer className="py-12 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-gray-200">About Us</a></li>
          <li><a href="#" className="hover:text-gray-200">Careers</a></li>
          <li><a href="#" className="hover:text-gray-200">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Products</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-gray-200">Features</a></li>
          <li><a href="#" className="hover:text-gray-200">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-200">API</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Connect</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl hover:text-gray-200"><FaFacebook /></a>
          <a href="#" className="text-2xl hover:text-gray-200"><FaTwitter /></a>
          <a href="#" className="text-2xl hover:text-gray-200"><FaInstagram /></a>
          <a href="#" className="text-2xl hover:text-gray-200"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-200">
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-2xl hover:text-gray-200">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-2xl hover:text-gray-200">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-2xl hover:text-gray-200">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-2xl hover:text-gray-200">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 23. Glass Header
    {
      type: "header",
      name: "Glass Header",
      code: `<header className="py-4 px-6 backdrop-blur-md bg-white/30 shadow-sm sticky top-0 z-50">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">Glass</div>
    <nav className="hidden md:flex space-x-8">
      <a href="#" className="hover:text-blue-600">Home</a>
      <a href="#" className="hover:text-blue-600">Features</a>
      <a href="#" className="hover:text-blue-600">Pricing</a>
      <a href="#" className="hover:text-blue-600">About</a>
    </nav>
    <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
      Get Started
    </button>
    <button className="md:hidden">
      <FiMenu className="text-2xl" />
    </button>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 backdrop-blur-md bg-white/30 shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Glass</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
              <a href="#" className="hover:text-blue-600">
                Features
              </a>
              <a href="#" className="hover:text-blue-600">
                Pricing
              </a>
              <a href="#" className="hover:text-blue-600">
                About
              </a>
            </nav>
            <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Get Started
            </button>
            <button className="md:hidden">
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </header>
      ),
    },

    // 24. Minimalist Footer with Logo
    {
      type: "footer",
      name: "Minimalist Footer with Logo",
      code: `<footer className="py-8 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold mb-4">Logo</div>
      <div className="flex space-x-6 mb-4">
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600"><FaTwitter /></a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-800"><FaFacebook /></a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-pink-600"><FaInstagram /></a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-700"><FaLinkedin /></a>
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold mb-4">Logo</div>
              <div className="flex space-x-6 mb-4">
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-800"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-pink-600"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-700"
                >
                  <FaLinkedin />
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 25. Search Header
    {
      type: "header",
      name: "Search Header",
      code: `<header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold mb-4 md:mb-0">Search</div>
      <div className="relative w-full md:w-96">
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-3 top-2 text-gray-500 hover:text-gray-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
      <nav className="hidden md:flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>
    </div>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold mb-4 md:mb-0">Search</div>
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-3 top-2 text-gray-500 hover:text-gray-700">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav className="hidden md:flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>
      ),
    },

    // 26. Simple Footer with Links
    {
      type: "footer",
      name: "Simple Footer with Links",
      code: `<footer className="py-8 px-6 bg-gray-50 dark:bg-gray-900 dark:text-white ">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Privacy Policy</a>
        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Terms of Service</a>
        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Contact Us</a>
      </div>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-8 px-6 bg-gray-50 dark:bg-gray-900 dark:text-white ">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>
                  © {new Date().getFullYear()} Company Name. All rights
                  reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      ),
    },

    // 27. Auth Header
    {
      type: "header",
      name: "Auth Header",
      code: `<header className="py-4 px-6 bg-white border-b dark:bg-gray-900 dark:text-white border-gray-200">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">Auth</div>
    <div className="flex space-x-4">
      <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
        Sign In
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Sign Up
      </button>
    </div>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white border-b dark:bg-gray-900 dark:text-white border-gray-200">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Auth</div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md">
                Sign In
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>
        </header>
      ),
    },

    // 28. Footer with Back to Top
    {
      type: "footer",
      name: "Footer with Back to Top",
      code: `<footer className="py-12 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white ">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Careers</a></li>
          <li><a href="#" className="hover:text-blue-600">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Support</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
          <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
          <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-8 pt-8 flex justify-between items-center">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Back to Top
      </button>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white ">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-8 pt-8 flex justify-between items-center">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Back to Top
              </button>
            </div>
          </div>
        </footer>
      ),
    },

    // 29. Logo and Tagline Header
    {
      type: "header",
      name: "Logo and Tagline Header",
      code: `<header className="py-6 px-6 bg-white dark:bg-gray-900 dark:text-white">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center mb-4 md:mb-0">
        <div className="text-3xl font-bold mr-4">Logo</div>
        <div className="text-gray-600">Your tagline here</div>
      </div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Services</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>
      <button className="md:hidden">
        <FiMenu className="text-2xl" />
      </button>
    </div>
  </div>
</header>`,
      component: (
        <header className="py-6 px-6 bg-white dark:bg-gray-900 dark:text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="text-3xl font-bold mr-4">Logo</div>
                <div className="text-gray-600">Your tagline here</div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
                <a href="#" className="hover:text-blue-600">
                  Services
                </a>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </nav>
              <button className="md:hidden">
                <FiMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </header>
      ),
    },

    // 30. Footer with Payment Methods
    {
      type: "footer",
      name: "Footer with Payment Methods",
      code: `<footer className="py-12 px-6 bg-gray-900  text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Shop</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">All Products</a></li>
          <li><a href="#" className="hover:text-blue-400">Featured</a></li>
          <li><a href="#" className="hover:text-blue-400">New Arrivals</a></li>
          <li><a href="#" className="hover:text-blue-400">Sale</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Customer Service</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
          <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
          <li><a href="#" className="hover:text-blue-400">Shipping & Returns</a></li>
          <li><a href="#" className="hover:text-blue-400">Size Guide</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">About</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Our Story</a></li>
          <li><a href="#" className="hover:text-blue-400">Careers</a></li>
          <li><a href="#" className="hover:text-blue-400">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-800 p-2 rounded flex justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
            </svg>
          </div>
          <div className="bg-gray-800 p-2 rounded flex justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
            </svg>
          </div>
          <div className="bg-gray-800 p-2 rounded flex justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
            </svg>
          </div>
          <div className="bg-gray-800 p-2 rounded flex justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
            </svg>
          </div>
          <div className="bg-gray-800 p-2 rounded flex justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
            </svg>
          </div>
          <div className="bg-gray-800 p-2 rounded flex justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p>© {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Shop</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      All Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Featured
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Sale
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Customer Service</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Shipping & Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Size Guide
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-800 p-2 rounded flex justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
                    </svg>
                  </div>
                  <div className="bg-gray-800 p-2 rounded flex justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
                    </svg>
                  </div>
                  <div className="bg-gray-800 p-2 rounded flex justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
                    </svg>
                  </div>
                  <div className="bg-gray-800 p-2 rounded flex justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
                    </svg>
                  </div>
                  <div className="bg-gray-800 p-2 rounded flex justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
                    </svg>
                  </div>
                  <div className="bg-gray-800 p-2 rounded flex justify-center">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.5-13h3v6h-3zm4.5 8.25c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25.75-2.25 2.25-2.25 2.25 1.01 2.25 2.25z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>
                © {new Date().getFullYear()} E-Commerce Store. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    //     // 31. Fixed Navigation Header
    //     {
    //       type: "header",
    //       name: "Fixed Navigation Header",
    //       code: `<header className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:shadow-none md:relative md:bg-transparent z-50">
    //   <nav className="flex justify-around md:justify-center items-center py-3 md:py-4">
    //     <a href="#" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
    //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    //       </svg>
    //       <span className="text-xs mt-1">Home</span>
    //     </a>
    //     <a href="#" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
    //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    //       </svg>
    //       <span className="text-xs mt-1">Search</span>
    //     </a>
    //     <a href="#" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
    //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
    //       </svg>
    //       <span className="text-xs mt-1">Cart</span>
    //     </a>
    //     <a href="#" className="flex flex-col items-center text-gray-700 hover:text-blue-600">
    //       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    //       </svg>
    //       <span className="text-xs mt-1">Profile</span>
    //     </a>
    //   </nav>
    // </header>`,
    //       component: (
    //         <header className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:shadow-none md:relative md:bg-transparent z-50">
    //           <nav className="flex justify-around md:justify-center items-center py-3 md:py-4">
    //             <a
    //               href="#"
    //               className="flex flex-col items-center text-gray-700 hover:text-blue-600"
    //             >
    //               <svg
    //                 className="w-6 h-6"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    //                 ></path>
    //               </svg>
    //               <span className="text-xs mt-1">Home</span>
    //             </a>
    //             <a
    //               href="#"
    //               className="flex flex-col items-center text-gray-700 hover:text-blue-600"
    //             >
    //               <svg
    //                 className="w-6 h-6"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //                 ></path>
    //               </svg>
    //               <span className="text-xs mt-1">Search</span>
    //             </a>
    //             <a
    //               href="#"
    //               className="flex flex-col items-center text-gray-700 hover:text-blue-600"
    //             >
    //               <svg
    //                 className="w-6 h-6"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    //                 ></path>
    //               </svg>
    //               <span className="text-xs mt-1">Cart</span>
    //             </a>
    //             <a
    //               href="#"
    //               className="flex flex-col items-center text-gray-700 hover:text-blue-600"
    //             >
    //               <svg
    //                 className="w-6 h-6"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    //                 ></path>
    //               </svg>
    //               <span className="text-xs mt-1">Profile</span>
    //             </a>
    //           </nav>
    //         </header>
    //       ),
    //     },

    // 32. Footer with Map
    {
      type: "footer",
      name: "Footer with Map",
      code: `<footer className="py-12 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white ">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
        <address className="not-italic">
          <p className="mb-2">123 Business Street</p>
          <p className="mb-2">New York, NY 10001</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: info@company.com</p>
        </address>
        <div className="mt-6 flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600"><FaFacebook /></a>
          <a href="#" className="text-gray-700 hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="text-gray-700 hover:text-pink-600"><FaInstagram /></a>
        </div>
      </div>
      <div>
        <div className="h-64 bg-gray-300 rounded-lg overflow-hidden">
          {/* Map placeholder */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-100 dark:bg-gray-900 dark:text-white ">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <address className="not-italic">
                  <p className="mb-2">123 Business Street</p>
                  <p className="mb-2">New York, NY 10001</p>
                  <p className="mb-2">Phone: (123) 456-7890</p>
                  <p>Email: info@company.com</p>
                </address>
                <div className="mt-6 flex space-x-4">
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-pink-600">
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div>
                <div className="h-64 bg-gray-300 rounded-lg overflow-hidden">
                  {/* Map placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 33. Header with Dropdown
    {
      type: "header",
      name: "Header with Dropdown",
      code: `<header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">Dropdown</div>
    <nav className="hidden md:flex space-x-8">
      <div className="group relative">
        <button className="flex items-center hover:text-blue-600">
          Products <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 1</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Product 3</a>
        </div>
      </div>
      <a href="#" className="hover:text-blue-600">Features</a>
      <a href="#" className="hover:text-blue-600">Pricing</a>
      <a href="#" className="hover:text-blue-600">About</a>
    </nav>
    <button className="md:hidden">
      <FiMenu className="text-2xl" />
    </button>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Dropdown</div>
            <nav className="hidden md:flex space-x-8">
              <div className="group relative">
                <button className="flex items-center hover:text-blue-600">
                  Products{" "}
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Product 1
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Product 2
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Product 3
                  </a>
                </div>
              </div>
              <a href="#" className="hover:text-blue-600">
                Features
              </a>
              <a href="#" className="hover:text-blue-600">
                Pricing
              </a>
              <a href="#" className="hover:text-blue-600">
                About
              </a>
            </nav>
            <button className="md:hidden">
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </header>
      ),
    },

    // 34. Footer with Testimonials
    {
      type: "footer",
      name: "Footer with Testimonials",
      code: `<footer className="py-12 px-6 dark:bg-gray-900 dark:text-white  bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold mb-4">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-gray-300 mr-4"></div>
            <div>
              <div className="font-semibold">John Doe</div>
              <div className="text-gray-600 text-sm">CEO, Company</div>
            </div>
          </div>
          <p className="text-gray-700">"Great product and excellent customer service!"</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-gray-300 mr-4"></div>
            <div>
              <div className="font-semibold">Jane Smith</div>
              <div className="text-gray-600 text-sm">Marketing Director</div>
            </div>
          </div>
          <p className="text-gray-700">"Highly recommend this service to everyone."</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <div className="h-10 w-10 rounded-full bg-gray-300 mr-4"></div>
            <div>
              <div className="font-semibold">Mike Johnson</div>
              <div className="text-gray-600 text-sm">Product Manager</div>
            </div>
          </div>
          <p className="text-gray-700">"Changed the way we do business. Amazing!"</p>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-50 dark:bg-gray-900 dark:text-white ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">
                What Our Customers Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <div className="font-semibold">John Doe</div>
                      <div className="text-gray-600 text-sm">CEO, Company</div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "Great product and excellent customer service!"
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <div className="font-semibold">Jane Smith</div>
                      <div className="text-gray-600 text-sm">
                        Marketing Director
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "Highly recommend this service to everyone."
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-gray-300 mr-4"></div>
                    <div>
                      <div className="font-semibold">Mike Johnson</div>
                      <div className="text-gray-600 text-sm">
                        Product Manager
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "Changed the way we do business. Amazing!"
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-8 text-center text-gray-600">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 35. Header with Language Selector
    {
      type: "header",
      name: "Header with Language Selector",
      code: `<header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">Language</div>
    <div className="flex items-center space-x-8">
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Services</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>
      <div className="relative group">
        <button className="flex items-center space-x-1 hover:text-blue-600">
          <span>EN</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="absolute right-0 mt-2 w-20 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <a href="#" className="block px-4 py-1 hover:bg-gray-100">EN</a>
          <a href="#" className="block px-4 py-1 hover:bg-gray-100">ES</a>
          <a href="#" className="block px-4 py-1 hover:bg-gray-100">FR</a>
        </div>
      </div>
      <button className="md:hidden">
        <FiMenu className="text-2xl" />
      </button>
    </div>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Language</div>
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
                <a href="#" className="hover:text-blue-600">
                  Services
                </a>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </nav>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <span>EN</span>
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
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-20 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                    EN
                  </a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                    ES
                  </a>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                    FR
                  </a>
                </div>
              </div>
              <button className="md:hidden">
                <FiMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </header>
      ),
    },

    // 36. Footer with Awards
    {
      type: "footer",
      name: "Footer with Awards",
      code: `<footer className="py-12 px-6 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-2">
        <h3 className="text-xl font-bold mb-4">About Us</h3>
        <p className="mb-6">
          We are a leading company in our industry with over 10 years of experience. 
          Our team is dedicated to providing the best service to our customers.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="#" className="hover:text-blue-400">Services</a></li>
          <li><a href="#" className="hover:text-blue-400">About</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Awards</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-3 rounded flex flex-col items-center">
            <div className="text-2xl mb-1">🏆</div>
            <div className="text-xs text-center">Best Service 2023</div>
          </div>
          <div className="bg-gray-800 p-3 rounded flex flex-col items-center">
            <div className="text-2xl mb-1">⭐</div>
            <div className="text-xs text-center">Top Rated</div>
          </div>
          <div className="bg-gray-800 p-3 rounded flex flex-col items-center">
            <div className="text-2xl mb-1">🏅</div>
            <div className="text-xs text-center">Innovation Award</div>
          </div>
          <div className="bg-gray-800 p-3 rounded flex flex-col items-center">
            <div className="text-2xl mb-1">👍</div>
            <div className="text-xs text-center">Customer Choice</div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-4">About Us</h3>
                <p className="mb-6">
                  We are a leading company in our industry with over 10 years of
                  experience. Our team is dedicated to providing the best
                  service to our customers.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400">
                    <FaFacebook />
                  </a>
                  <a href="#" className="hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="#" className="hover:text-pink-500">
                    <FaInstagram />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Awards</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800 p-3 rounded flex flex-col items-center">
                    <div className="text-2xl mb-1">🏆</div>
                    <div className="text-xs text-center">Best Service 2023</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded flex flex-col items-center">
                    <div className="text-2xl mb-1">⭐</div>
                    <div className="text-xs text-center">Top Rated</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded flex flex-col items-center">
                    <div className="text-2xl mb-1">🏅</div>
                    <div className="text-xs text-center">Innovation Award</div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded flex flex-col items-center">
                    <div className="text-2xl mb-1">👍</div>
                    <div className="text-xs text-center">Customer Choice</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 37. Header with Announcement Bar
    {
      type: "header",
      name: "Header with Announcement Bar",
      code: `<div className="sticky top-0 z-50">
  <div className="bg-blue-600 text-white  text-center py-2 px-4">
    <p>🎉 Special offer! Get 20% off on all products. Use code: <strong>SAVE20</strong></p>
  </div>
  <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Announcement</div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Shop</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
        </button>
        <button className="md:hidden">
          <FiMenu className="text-2xl" />
        </button>
      </div>
    </div>
  </header>
</div>`,
      component: (
        <div className="sticky top-0 z-50">
          <div className="bg-blue-600 text-white text-center py-2 px-4">
            <p>
              🎉 Special offer! Get 20% off on all products. Use code:{" "}
              <strong>SAVE20</strong>
            </p>
          </div>
          <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <div className="text-2xl font-bold">Announcement</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
                <a href="#" className="hover:text-blue-600">
                  Shop
                </a>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </button>
                <button className="md:hidden">
                  <FiMenu className="text-2xl" />
                </button>
              </div>
            </div>
          </header>
        </div>
      ),
    },

    // 38. Footer with Working Hours
    {
      type: "footer",
      name: "Footer with Working Hours",
      code: `<footer className="py-12 px-6 dark:bg-gray-900 dark:text-white  bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Contact Info</h3>
        <address className="not-italic">
          <p className="mb-2">123 Business Street</p>
          <p className="mb-2">New York, NY 10001</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p>Email: info@company.com</p>
        </address>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Working Hours</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>Monday - Friday</span>
            <span>9:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday</span>
            <span>10:00 AM - 4:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span>Closed</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Services</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 dark:bg-gray-900 dark:text-white  bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                <address className="not-italic">
                  <p className="mb-2">123 Business Street</p>
                  <p className="mb-2">New York, NY 10001</p>
                  <p className="mb-2">Phone: (123) 456-7890</p>
                  <p>Email: info@company.com</p>
                </address>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 39. Header with User Dropdown
    {
      type: "header",
      name: "Header with User Dropdown",
      code: `<header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">User</div>
    <div className="flex items-center space-x-6">
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-blue-600">Dashboard</a>
        <a href="#" className="hover:text-blue-600">Projects</a>
        <a href="#" className="hover:text-blue-600">Team</a>
      </nav>
      <div className="group relative">
        <button className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
          <span>John Doe</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sign out</a>
        </div>
      </div>
      <button className="md:hidden">
        <FiMenu className="text-2xl" />
      </button>
    </div>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">User</div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-blue-600">
                  Dashboard
                </a>
                <a href="#" className="hover:text-blue-600">
                  Projects
                </a>
                <a href="#" className="hover:text-blue-600">
                  Team
                </a>
              </nav>
              <div className="group relative">
                <button className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                  <span>John Doe</span>
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
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Sign out
                  </a>
                </div>
              </div>
              <button className="md:hidden">
                <FiMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </header>
      ),
    },

    // 40. Footer with Sitemap
    {
      type: "footer",
      name: "Footer with Sitemap",
      code: `<footer className="py-12 px-6 bg-gray-800 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">About Us</a></li>
          <li><a href="#" className="hover:text-blue-400">Careers</a></li>
          <li><a href="#" className="hover:text-blue-400">Press</a></li>
          <li><a href="#" className="hover:text-blue-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Products</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Features</a></li>
          <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-400">API</a></li>
          <li><a href="#" className="hover:text-blue-400">Integrations</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Support</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
          <li><a href="#" className="hover:text-blue-400">Community</a></li>
          <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
          <li><a href="#" className="hover:text-blue-400">Status</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
          <li><a href="#" className="hover:text-blue-400">Terms</a></li>
          <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
          <li><a href="#" className="hover:text-blue-400">GDPR</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Integrations
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Status
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      GDPR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 41. Header with Breadcrumbs
    {
      type: "header",
      name: "Header with Breadcrumbs",
      code: `<header className="py-4 px-6 bg-white border-b dark:bg-gray-900 dark:text-white border-gray-200">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-4">
      <div className="text-2xl font-bold">Breadcrumbs</div>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-blue-600">Account</a>
        <a href="#" className="hover:text-blue-600">Settings</a>
      </nav>
      <button className="md:hidden">
        <FiMenu className="text-2xl" />
      </button>
    </div>
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-blue-600">Products</a>
        </li>
        <li>
          <span className="text-gray-400">/</span>
        </li>
        <li>
          <span className="text-gray-900" aria-current="page">Current Page</span>
        </li>
      </ol>
    </nav>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl font-bold">Breadcrumbs</div>
              <nav className="hidden md:flex space-x-4">
                <a href="#" className="hover:text-blue-600">
                  Account
                </a>
                <a href="#" className="hover:text-blue-600">
                  Settings
                </a>
              </nav>
              <button className="md:hidden">
                <FiMenu className="text-2xl" />
              </button>
            </div>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Home
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Products
                  </a>
                </li>
                <li>
                  <span className="text-gray-400">/</span>
                </li>
                <li>
                  <span className="text-gray-900" aria-current="page">
                    Current Page
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </header>
      ),
    },

    // 42. Footer with Partners
    {
      type: "footer",
      name: "Footer with Partners",
      code: `<footer className="py-12 px-6 bg-white dark:bg-gray-900 dark:text-white ">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h3 className="text-xl font-bold mb-6">Trusted by companies worldwide</h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
        <div className="flex justify-center">
          <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex justify-center">
          <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Careers</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
          <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
          <li><a href="#" className="hover:text-blue-600">Terms</a></li>
          <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-white dark:bg-gray-900 dark:text-white ">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-xl font-bold mb-6">
                Trusted by companies worldwide
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                <div className="flex justify-center">
                  <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
                </div>
                <div className="flex justify-center">
                  <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
                </div>
                <div className="flex justify-center">
                  <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
                </div>
                <div className="flex justify-center">
                  <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
                </div>
                <div className="flex justify-center">
                  <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
                </div>
                <div className="flex justify-center">
                  <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Tutorials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 43. Header with Progress Bar
    {
      type: "header",
      name: "Header with Progress Bar",
      code: `<header className="sticky top-0 z-50">
  <div className="h-1 w-full bg-gray-200 ">
    <div className="h-full bg-blue-600" style={{ width: '75%' }}></div>
  </div>
  <div className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">Progress</div>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Services</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>
      <button className="md:hidden">
        <FiMenu className="text-2xl" />
      </button>
    </div>
  </div>
</header>`,
      component: (
        <header className="sticky top-0 z-50">
          <div className="h-1 w-full bg-gray-200">
            <div className="h-full bg-blue-600" style={{ width: "75%" }}></div>
          </div>
          <div className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
              <div className="text-2xl font-bold">Progress</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
                <a href="#" className="hover:text-blue-600">
                  Services
                </a>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </nav>
              <button className="md:hidden">
                <FiMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </header>
      ),
    },

    // 44. Footer with Call to Action
    {
      type: "footer",
      name: "Footer with Call to Action",
      code: `<footer className="py-12 px-6 dark:bg-gray-900 dark:text-white  bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="bg-blue-600 text-white rounded-lg p-8 mb-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-6 max-w-2xl mx-auto">Join thousands of satisfied customers who are already using our product.</p>
      <button className="px-8 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100">
        Get Started Now
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Careers</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
          <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Connect</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600"><FaFacebook /></a>
          <a href="#" className="text-gray-700 hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="text-gray-700 hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="text-gray-700 hover:text-blue-700"><FaLinkedin /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-50 dark:bg-gray-900 dark:text-white ">
          <div className="max-w-6xl mx-auto">
            <div className="bg-blue-600 text-white rounded-lg p-8 mb-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
              <p className="mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who are already using our
                product.
              </p>
              <button className="px-8 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-gray-100">
                Get Started Now
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Tutorials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-700 hover:text-blue-600">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-blue-400">
                    <FaTwitter />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-pink-600">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-blue-700">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 45. Header with Notification
    {
      type: "header",
      name: "Header with Notification",
      code: `<header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">Notification</div>
    <div className="flex items-center space-x-6">
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </nav>
      <div className="relative">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
        </button>
      </div>
      <button className="md:hidden">
        <FiMenu className="text-2xl" />
      </button>
    </div>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold">Notification</div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
                <a href="#" className="hover:text-blue-600">
                  About
                </a>
                <a href="#" className="hover:text-blue-600">
                  Contact
                </a>
              </nav>
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                  <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>
              </div>
              <button className="md:hidden">
                <FiMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </header>
      ),
    },

    // 46. Footer with Logo Grid
    {
      type: "footer",
      name: "Footer with Logo Grid",
      code: `<footer className="py-12 px-6 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col items-center mb-12">
      <div className="text-3xl font-bold mb-6">Logo</div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
        <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">Logo 1</div>
        <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">Logo 2</div>
        <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">Logo 3</div>
        <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">Logo 4</div>
        <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">Logo 5</div>
        <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">Logo 6</div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">About Us</a></li>
          <li><a href="#" className="hover:text-blue-400">Careers</a></li>
          <li><a href="#" className="hover:text-blue-400">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Products</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Features</a></li>
          <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
          <li><a href="#" className="hover:text-blue-400">API</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Documentation</a></li>
          <li><a href="#" className="hover:text-blue-400">Guides</a></li>
          <li><a href="#" className="hover:text-blue-400">Support</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
          <li><a href="#" className="hover:text-blue-400">Terms</a></li>
          <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <div className="text-3xl font-bold mb-6">Logo</div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">
                  Logo 1
                </div>
                <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">
                  Logo 2
                </div>
                <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">
                  Logo 3
                </div>
                <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">
                  Logo 4
                </div>
                <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">
                  Logo 5
                </div>
                <div className="h-12 w-24 bg-gray-800 rounded-md flex items-center justify-center">
                  Logo 6
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Products</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 47. Header with Tabs
    {
      type: "header",
      name: "Header with Tabs",
      code: `<header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-200">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-4">
      <div className="text-2xl font-bold">Tabs</div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <button className="md:hidden">
          <FiMenu className="text-2xl" />
        </button>
      </div>
    </div>
    <nav className="flex space-x-8 border-b border-gray-200">
      <a href="#" className="px-1 py-3 border-b-2 border-blue-600 text-blue-600 font-medium">Dashboard</a>
      <a href="#" className="px-1 py-3 text-gray-500 hover:text-gray-700 font-medium">Projects</a>
      <a href="#" className="px-1 py-3 text-gray-500 hover:text-gray-700 font-medium">Team</a>
      <a href="#" className="px-1 py-3 text-gray-500 hover:text-gray-700 font-medium">Calendar</a>
    </nav>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-900 dark:text-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="text-2xl font-bold">Tabs</div>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
                <button className="md:hidden">
                  <FiMenu className="text-2xl" />
                </button>
              </div>
            </div>
            <nav className="flex space-x-8 border-b border-gray-200">
              <a
                href="#"
                className="px-1 py-3 border-b-2 border-blue-600 text-blue-600 font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="px-1 py-3 text-gray-500 hover:text-gray-700 font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="px-1 py-3 text-gray-500 hover:text-gray-700 font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="px-1 py-3 text-gray-500 hover:text-gray-700 font-medium"
              >
                Calendar
              </a>
            </nav>
          </div>
        </header>
      ),
    },

    // 48. Footer with Stats
    {
      type: "footer",
      name: "Footer with Stats",
      code: `<footer className="py-12 px-6 dark:bg-gray-900 dark:text-white  bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center">
      <div>
        <div className="text-3xl font-bold mb-2">10K+</div>
        <div className="text-gray-600">Happy Customers</div>
      </div>
      <div>
        <div className="text-3xl font-bold mb-2">50+</div>
        <div className="text-gray-600">Countries</div>
      </div>
      <div>
        <div className="text-3xl font-bold mb-2">100+</div>
        <div className="text-gray-600">Team Members</div>
      </div>
      <div>
        <div className="text-3xl font-bold mb-2">5M+</div>
        <div className="text-gray-600">Downloads</div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Careers</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
          <li><a href="#" className="hover:text-blue-600">Tutorials</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
          <li><a href="#" className="hover:text-blue-600">Terms</a></li>
          <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-12 px-6 bg-gray-50 dark:bg-gray-900 dark:text-white ">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5M+</div>
                <div className="text-gray-600">Downloads</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Tutorials
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-600">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
              <p>
                © {new Date().getFullYear()} Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      ),
    },

    // 49. Header with Dark Mode Toggle
    {
      type: "header",
      name: "Header with Dark Mode Toggle",
      code: `<header className="py-4 px-6 bg-white dark:bg-gray-800 shadow-sm">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold dark:text-white">DarkMode</div>
    <div className="flex items-center space-x-6">
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Services</a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
      </nav>
      <button 
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {darkMode ? (
          <FiSun className="text-gray-800 dark:text-gray-200" />
        ) : (
          <FiMoon className="text-gray-800 dark:text-gray-200" />
        )}
      </button>
      <button className="md:hidden dark:text-white">
        <FiMenu className="text-2xl" />
      </button>
    </div>
  </div>
</header>`,
      component: (
        <header className="py-4 px-6 bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold dark:text-white">DarkMode</div>
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </nav>

              <button className="md:hidden dark:text-white">
                <FiMenu className="text-2xl" />
              </button>
            </div>
          </div>
        </header>
      ),
    },

    // 50. Footer with Copyright Links
    {
      type: "footer",
      name: "Footer with Copyright Links",
      code: `<footer className="py-8 px-6 dark:bg-gray-900 dark:text-white  bg-gray-100">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
      <div className="flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a>
        <a href="#" className="text-gray-600 hover:text-blue-600">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>`,
      component: (
        <footer className="py-8 px-6 dark:bg-gray-900 dark:text-white  bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>
                  © {new Date().getFullYear()} Company Name. All rights
                  reserved.
                </p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      ),
    },
  ];

  const headers = components.filter((comp) => comp.type === "header");
  const footers = components.filter((comp) => comp.type === "footer");

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
            Header & Footer Universe
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
            Explore our collection of meticulously crafted headers and footers
            with modern designs, animations, and responsive layouts. Click the{" "}
            <FiCopy className="inline" /> icon to copy the code for any
            component!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
          <button
            onClick={() => setActiveTab("headers")}
            className={`py-2 px-4 font-medium text-xl focus:outline-none ${
              activeTab === "headers"
                ? "border-b-2 border-purple-500 text-purple-600 dark:text-purple-400"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Headers
          </button>
          <button
            onClick={() => setActiveTab("footers")}
            className={`py-2 px-4 font-medium text-xl focus:outline-none ${
              activeTab === "footers"
                ? "border-b-2 border-purple-500 text-purple-600 dark:text-purple-400"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Footers
          </button>
        </div>

        {/* Headers Section - Only shown when headers tab is active */}
        {activeTab === "headers" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Headers</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
              {headers.map((header, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">{header.name}</h3>
                  <div className="relative group">
                    <div className="overflow-hidden rounded-lg mb-4 border border-gray-200 dark:border-gray-700">
                      {header.component}
                    </div>
                    <button
                      onClick={() => copyToClipboard(header.code, index)}
                      className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
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
                        className="absolute top-12 right-4 bg-gray-800 text-white text-xs px-2 py-1 rounded"
                      >
                        Copied!
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Footers Section - Only shown when footers tab is active */}
        {activeTab === "footers" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Footers</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
              {footers.map((footer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">{footer.name}</h3>
                  <div className="relative group">
                    <div className="overflow-hidden rounded-lg mb-4 border border-gray-200 dark:border-gray-700">
                      {footer.component}
                    </div>
                    <button
                      onClick={() => copyToClipboard(footer.code, index)}
                      className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
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
                        className="absolute top-12 right-4 bg-gray-800 text-white text-xs px-2 py-1 rounded"
                      >
                        Copied!
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default HeaderFooterShowcase;
