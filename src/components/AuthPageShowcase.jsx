import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiSun,
  FiMoon,
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiLogIn,
  FiKey,
  FiPhone,
  FiCalendar,
  FiCreditCard,
  FiGithub,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const AuthPageShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const authVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  // Auth page designs
  const authDesigns = [
    // Design 1: Minimalist
    {
      name: "Minimalist Clean",
      code: `<div className="min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }">
  <div className="w-full max-w-md p-8 ${
    darkMode ? "bg-gray-800" : "bg-white"
  } rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
    <form className="space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium">Email</label>
        <input type="email" className="w-full p-3 border ${
          darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
        } rounded-lg" placeholder="your@email.com" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium">Password</label>
        <input type="password" className="w-full p-3 border ${
          darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"
        } rounded-lg" placeholder="••••••••" />
      </div>
      <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">Sign In</button>
    </form>
    <p className="mt-4 text-center text-sm">
      Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
    </p>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4"
        >
          <div
            className={`w-full max-w-md p-8 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-lg`}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Welcome Back
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full p-3 border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300"
                  } rounded-lg`}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Password
                </label>
                <input
                  type="password"
                  className={`w-full p-3 border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300"
                  } rounded-lg`}
                  placeholder="••••••••"
                />
              </div>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                Sign In
              </button>
            </form>
            <p
              className={`mt-4 text-center text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </motion.div>
      ),
    },

    // Design 2: Gradient Background
    {
      name: "Gradient Background",
      code: `<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600">
  <div className="w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl border border-white border-opacity-20">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-white mb-2">Welcome</h2>
      <p className="text-white text-opacity-80">Sign in to your account</p>
    </div>
    <form className="space-y-6">
      <div>
        <label className="block mb-2 text-sm font-medium text-white text-opacity-80">Email</label>
        <input type="email" className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50" placeholder="your@email.com" />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-white text-opacity-80">Password</label>
        <input type="password" className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50" placeholder="••••••••" />
      </div>
      <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-lg transition hover:bg-opacity-90">Sign In</button>
    </form>
    <div className="mt-6 text-center">
      <a href="#" className="text-white text-opacity-70 hover:text-opacity-100 text-sm">Forgot password?</a>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4 bg-gradient-to-br from-purple-500 to-blue-600"
        >
          <div className="w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl border border-white border-opacity-20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Welcome</h2>
              <p className="text-white text-opacity-80">
                Sign in to your account
              </p>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-white text-opacity-80">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white text-opacity-80">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50"
                  placeholder="••••••••"
                />
              </div>
              <button className="w-full py-3 bg-white text-purple-600 font-bold rounded-lg transition hover:bg-opacity-90">
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-white text-opacity-70 hover:text-opacity-100 text-sm"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 3: Split Screen
    {
      name: "Split Screen",
      code: `<div className="min-h-screen flex flex-col md:flex-row">
  <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-12">
    <div className="text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
      <p className="text-xl opacity-90">Sign in to access your dashboard</p>
    </div>
  </div>
  <div className="w-full md:w-1/2 flex items-center justify-center p-12 ${
    darkMode ? "bg-gray-900" : "bg-white"
  }">
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-8">Sign In</h2>
      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Email Address</label>
          <input type="email" className="w-full p-3 border ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-300"
          } rounded-lg" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Password</label>
          <div className="relative">
            <input type="${
              showPassword ? "text" : "password"
            }" className="w-full p-3 border ${
        darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
      } rounded-lg pr-10" placeholder="••••••••" />
            <button type="button" className="absolute right-3 top-3 text-gray-500" onClick={togglePasswordVisibility}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <label className="ml-2 block text-sm">Remember me</label>
          </div>
          <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
        </div>
        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">Sign In</button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm">Don't have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a></p>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex flex-col md:flex-row border rounded-xl overflow-hidden"
        >
          <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-12">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
              <p className="text-xl opacity-90">
                Sign in to access your dashboard
              </p>
            </div>
          </div>
          <div
            className={`w-full md:w-1/2 flex items-center justify-center p-12 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-bold mb-8">Sign In</h2>
              <form className="space-y-6">
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className={`w-full p-3 border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300"
                    } rounded-lg`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full p-3 border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300"
                      } rounded-lg pr-10`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      className={`ml-2 block text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
                  Sign In
                </button>
              </form>
              <div className="mt-6 text-center">
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Don't have an account?{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 4: Card with Social Login
    {
      name: "Social Login Card",
      code: `<div className="min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } p-4">
  <div className="w-full max-w-md ${
    darkMode ? "bg-gray-800" : "bg-white"
  } rounded-xl shadow-lg overflow-hidden">
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Create Account</h2>
        <p className="text-gray-500">Join us today! It takes only few steps</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button className="flex items-center justify-center py-2 px-4 border ${
          darkMode
            ? "border-gray-700 hover:bg-gray-700"
            : "border-gray-300 hover:bg-gray-100"
        } rounded-lg transition">
          <FcGoogle className="mr-2" /> Google
        </button>
        <button className="flex items-center justify-center py-2 px-4 border ${
          darkMode
            ? "border-gray-700 hover:bg-gray-700"
            : "border-gray-300 hover:bg-gray-100"
        } rounded-lg transition">
          <FiFacebook className="mr-2 text-blue-500" /> Facebook
        </button>
      </div>
      
      <div className="flex items-center my-6">
        <div className="flex-grow border-t ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }"></div>
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }"></div>
      </div>
      
      <form className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">Full Name</label>
          <input type="text" className="w-full p-3 border ${
            darkMode
              ? "bg-gray-700 border-gray-600"
              : "bg-white border-gray-300"
          } rounded-lg" placeholder="John Doe" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input type="email" className="w-full p-3 border ${
            darkMode
              ? "bg-gray-700 border-gray-600"
              : "bg-white border-gray-300"
          } rounded-lg" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Password</label>
          <input type="password" className="w-full p-3 border ${
            darkMode
              ? "bg-gray-700 border-gray-600"
              : "bg-white border-gray-300"
          } rounded-lg" placeholder="••••••••" />
        </div>
        <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-medium">Sign Up</button>
      </form>
      
      <p className="mt-6 text-center text-sm">
        Already have an account? <a href="#" className="text-purple-600 hover:underline">Sign in</a>
      </p>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4"
        >
          <div
            className={`w-full max-w-md ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl shadow-lg overflow-hidden`}
          >
            <div className="p-8">
              <div className="text-center mb-8">
                <h2
                  className={`text-3xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Create Account
                </h2>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  Join us today! It takes only few steps
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  className={`flex items-center justify-center py-2 px-4 ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "border-gray-300 hover:bg-gray-100"
                  } rounded-lg transition border`}
                >
                  <FcGoogle className="mr-2" /> Google
                </button>
                <button
                  className={`flex items-center justify-center py-2 px-4 ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "border-gray-300 hover:bg-gray-100"
                  } rounded-lg transition border`}
                >
                  <FiFacebook className="mr-2 text-blue-500" /> Facebook
                </button>
              </div>

              <div className="flex items-center my-6">
                <div
                  className={`flex-grow border-t ${
                    darkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                ></div>
                <span
                  className={`mx-4 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  or
                </span>
                <div
                  className={`flex-grow border-t ${
                    darkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                ></div>
              </div>

              <form className="space-y-4">
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`w-full p-3 border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300"
                    } rounded-lg`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full p-3 border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300"
                    } rounded-lg`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className={`w-full p-3 border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300"
                    } rounded-lg`}
                    placeholder="••••••••"
                  />
                </div>
                <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-medium">
                  Sign Up
                </button>
              </form>

              <p
                className={`mt-6 text-center text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Already have an account?{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 5: Animated Tab Login/Signup
    {
      name: "Animated Tabs",
      code: `<div className="min-h-screen flex items-center justify-center \${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-4">
  <div className="w-full max-w-md \${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden">
    <div className="flex border-b \${darkMode ? 'border-gray-700' : 'border-gray-200'}">
      <button 
        className={\`flex-1 py-4 font-medium \${activeTab === 'login' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}\`}
        onClick={() => setActiveTab('login')}
      >
        Sign In
      </button>
      <button 
        className={\`flex-1 py-4 font-medium \${activeTab === 'signup' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}\`}
        onClick={() => setActiveTab('signup')}
      >
        Sign Up
      </button>
    </div>
    
    <div className="p-8">
      {activeTab === 'login' ? (
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-gray-500">Sign in to continue to your account</p>
          
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input type="email" className="w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} rounded-lg" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Password</label>
              <input type="password" className="w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} rounded-lg" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <label className="ml-2 block text-sm">Remember me</label>
              </div>
              <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
            </div>
            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">Sign In</button>
          </form>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">Don't have an account? <button onClick={() => setActiveTab('signup')} className="text-purple-600 hover:underline">Sign up</button></p>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Create account</h2>
          <p className="text-gray-500">Get started with your free account</p>
          
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Full Name</label>
              <input type="text" className="w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} rounded-lg" placeholder="John Doe" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input type="email" className="w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} rounded-lg" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Password</label>
              <input type="password" className="w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} rounded-lg" placeholder="••••••••" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Confirm Password</label>
              <input type="password" className="w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} rounded-lg" placeholder="••••••••" />
            </div>
            <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">Sign Up</button>
          </form>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">Already have an account? <button onClick={() => setActiveTab('login')} className="text-purple-600 hover:underline">Sign in</button></p>
          </div>
        </motion.div>
      )}
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4"
        >
          <div
            className={`w-full max-w-md ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl shadow-lg overflow-hidden`}
          >
            <div
              className={`flex border-b ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <button
                className={`flex-1 py-4 font-medium ${
                  activeTab === "login"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Sign In
              </button>
              <button
                className={`flex-1 py-4 font-medium ${
                  activeTab === "signup"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>

            <div className="p-8">
              {activeTab === "login" ? (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2
                    className={`text-2xl font-bold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Welcome back
                  </h2>
                  <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                    Sign in to continue to your account
                  </p>

                  <form className="space-y-6">
                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className={`w-full p-3 border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300"
                        } rounded-lg`}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className={`w-full p-3 border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300"
                        } rounded-lg`}
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <label
                          className={`ml-2 block text-sm ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Remember me
                        </label>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-purple-600 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
                      Sign In
                    </button>
                  </form>

                  <div className="text-center">
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Don't have an account?{" "}
                      <button
                        onClick={() => setActiveTab("signup")}
                        className="text-purple-600 hover:underline"
                      >
                        Sign up
                      </button>
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2
                    className={`text-2xl font-bold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Create account
                  </h2>
                  <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
                    Get started with your free account
                  </p>

                  <form className="space-y-6">
                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className={`w-full p-3 border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300"
                        } rounded-lg`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className={`w-full p-3 border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300"
                        } rounded-lg`}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className={`w-full p-3 border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300"
                        } rounded-lg`}
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className={`w-full p-3 border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300"
                        } rounded-lg`}
                        placeholder="••••••••"
                      />
                    </div>
                    <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
                      Sign Up
                    </button>
                  </form>

                  <div className="text-center">
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Already have an account?{" "}
                      <button
                        onClick={() => setActiveTab("login")}
                        className="text-purple-600 hover:underline"
                      >
                        Sign in
                      </button>
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 6: Floating Labels
    {
      name: "Floating Labels",
      code: `<div className="min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } p-4">
  <div className="w-full max-w-md ${
    darkMode ? "bg-gray-800" : "bg-white"
  } rounded-lg shadow-xl overflow-hidden p-8">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold">Sign In</h2>
      <p className="text-gray-500 mt-2">Enter your credentials to continue</p>
    </div>
    
    <form className="space-y-8">
      <div className="relative">
        <input 
          type="email" 
          id="email" 
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
          } rounded-lg border ${
        darkMode ? "border-gray-600" : "border-gray-300"
      } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          placeholder=" " 
        />
        <label 
          htmlFor="email" 
          className="absolute text-sm ${
            darkMode ? "text-gray-400" : "text-gray-500"
          } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
        darkMode ? "bg-gray-800" : "bg-white"
      } px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Email Address
        </label>
      </div>
      
      <div className="relative">
        <input 
          type="password" 
          id="password" 
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
          } rounded-lg border ${
        darkMode ? "border-gray-600" : "border-gray-300"
      } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
          placeholder=" " 
        />
        <label 
          htmlFor="password" 
          className="absolute text-sm ${
            darkMode ? "text-gray-400" : "text-gray-500"
          } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
        darkMode ? "bg-gray-800" : "bg-white"
      } px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >
          Password
        </label>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input type="checkbox" id="remember" className="w-4 h-4 text-blue-600 rounded ${
            darkMode
              ? "bg-gray-700 border-gray-600"
              : "bg-white border-gray-300"
          } focus:ring-blue-500" />
          <label htmlFor="remember" className="ml-2 text-sm font-medium">Remember me</label>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
      </div>
      
      <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors">
        Sign In
      </button>
      
      <p className="text-sm text-center text-gray-500">
        Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
      </p>
    </form>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4"
        >
          <div
            className={`w-full max-w-md ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-xl overflow-hidden p-8`}
          >
            <div className="text-center mb-10">
              <h2
                className={`text-3xl font-bold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Sign In
              </h2>
              <p
                className={
                  darkMode ? "text-gray-400 mt-2" : "text-gray-500 mt-2"
                }
              >
                Enter your credentials to continue
              </p>
            </div>

            <form className="space-y-8">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-900"
                  } rounded-lg border ${
                    darkMode ? "border-gray-600" : "border-gray-300"
                  } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className={`absolute text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                >
                  Email Address
                </label>
              </div>

              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className={`block px-2.5 pb-2.5 pt-4 w-full text-sm ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-900"
                  } rounded-lg border ${
                    darkMode ? "border-gray-600" : "border-gray-300"
                  } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className={`absolute text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                >
                  Password
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className={`w-4 h-4 text-blue-600 rounded ${
                      darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-white border-gray-300"
                    } focus:ring-blue-500`}
                  />
                  <label
                    htmlFor="remember"
                    className={`ml-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors"
              >
                Sign In
              </button>

              <p
                className={`text-sm text-center ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </motion.div>
      ),
    },

    // Design 7: Glass Morphism
    {
      name: "Glass Morphism",
      code: `<div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
  <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl border border-white border-opacity-20 overflow-hidden">
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
        <p className="text-white text-opacity-80 mt-2">Sign in to your account</p>
      </div>
      
      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-white text-opacity-80">Email</label>
          <input 
            type="email" 
            className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" 
            placeholder="your@email.com" 
          />
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-white text-opacity-80">Password</label>
          <div className="relative">
            <input 
              type="${showPassword ? "text" : "password"}" 
              className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 pr-10" 
              placeholder="••••••••" 
            />
            <button 
              type="button" 
              className="absolute right-3 top-3 text-white text-opacity-70 hover:text-opacity-100"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="remember" 
              className="w-4 h-4 bg-white bg-opacity-10 border border-white border-opacity-30 rounded focus:ring-white focus:ring-opacity-50" 
            />
            <label htmlFor="remember" className="ml-2 text-sm text-white text-opacity-80">Remember me</label>
          </div>
          <a href="#" className="text-sm text-white text-opacity-80 hover:text-opacity-100">Forgot password?</a>
        </div>
        
        <button 
          type="submit" 
          className="w-full py-3 px-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium rounded-lg transition-colors border border-white border-opacity-30"
        >
          Sign In
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-white text-opacity-80">
          Don't have an account? <a href="#" className="text-white hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
        >
          <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl border border-white border-opacity-20 overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                <p className="text-white text-opacity-80 mt-2">
                  Sign in to your account
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white text-opacity-80">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-white text-opacity-80">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-white text-opacity-70 hover:text-opacity-100"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 bg-white bg-opacity-10 border border-white border-opacity-30 rounded focus:ring-white focus:ring-opacity-50"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm text-white text-opacity-80"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-white text-opacity-80 hover:text-opacity-100"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium rounded-lg transition-colors border border-white border-opacity-30"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-white text-opacity-80">
                  Don't have an account?{" "}
                  <a href="#" className="text-white hover:underline">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 8: Neumorphism
    {
      name: "Neumorphism",
      code: `<div className={\`min-h-screen flex items-center justify-center p-4 \${darkMode ? 'bg-gray-900' : 'bg-gray-100'}\`}>
  <div className={\`w-full max-w-md p-8 rounded-xl \${darkMode ? 'neumorphism-dark' : 'neumorphism-light'}\`}>
    <div className="text-center mb-8">
      <h2 className={\`text-3xl font-bold mb-2 \${darkMode ? 'text-white' : 'text-gray-800'}\`}>Sign In</h2>
      <p className={\`\${darkMode ? 'text-gray-400' : 'text-gray-600'}\`}>Access your account</p>
    </div>
    
    <form className="space-y-6">
      <div>
        <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Email</label>
        <input 
          type="email" 
          className={\`w-full p-3 rounded-lg \${darkMode ? 'neumorphism-input-dark' : 'neumorphism-input-light'} focus:outline-none focus:ring-2 \${darkMode ? 'focus:ring-purple-500' : 'focus:ring-blue-500'}\`}
          placeholder="your@email.com" 
        />
      </div>
      
      <div>
        <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Password</label>
        <div className="relative">
          <input 
            type={\`\${showPassword ? 'text' : 'password'}\`} 
            className={\`w-full p-3 rounded-lg \${darkMode ? 'neumorphism-input-dark' : 'neumorphism-input-light'} focus:outline-none focus:ring-2 \${darkMode ? 'focus:ring-purple-500' : 'focus:ring-blue-500'} pr-10\`}
            placeholder="••••••••" 
          />
          <button 
            type="button" 
            className={\`absolute right-3 top-3 \${darkMode ? 'text-gray-400' : 'text-gray-500'}\`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="remember" 
            className={\`w-4 h-4 rounded \${darkMode ? 'neumorphism-checkbox-dark' : 'neumorphism-checkbox-light'} focus:ring-2 \${darkMode ? 'focus:ring-purple-500' : 'focus:ring-blue-500'}\`}
          />
          <label htmlFor="remember" className={\`ml-2 text-sm \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Remember me</label>
        </div>
        <a href="#" className={\`text-sm \${darkMode ? 'text-purple-400' : 'text-blue-600'} hover:underline\`}>Forgot password?</a>
      </div>
      
      <button 
        type="submit" 
        className={\`w-full py-3 px-4 rounded-lg \${darkMode ? 'neumorphism-button-dark' : 'neumorphism-button-light'} font-medium transition-all\`}
      >
        Sign In
      </button>
    </form>
    
    <div className="mt-6 text-center">
      <p className={\`text-sm \${darkMode ? 'text-gray-400' : 'text-gray-600'}\`}>
        Don't have an account? <a href="#" className={\`\${darkMode ? 'text-purple-400' : 'text-blue-600'} hover:underline\`}>Sign up</a>
      </p>
    </div>
  </div>
</div>

<style jsx>{\`
  .neumorphism-light {
    background: #f0f0f0;
    box-shadow: 8px 8px 16px #d9d9d9, 
                -8px -8px 16px #ffffff;
  }
  
  .neumorphism-dark {
    background: #1a1a1a;
    box-shadow: 8px 8px 16px #0d0d0d, 
                -8px -8px 16px #272727;
  }
  
  .neumorphism-input-light {
    background: #f0f0f0;
    box-shadow: inset 3px 3px 5px #d9d9d9, 
                inset -3px -3px 5px #ffffff;
    border: none;
  }
  
  .neumorphism-input-dark {
    background: #1a1a1a;
    box-shadow: inset 3px 3px 5px #0d0d0d, 
                inset -3px -3px 5px #272727;
    border: none;
    color: white;
  }
  
  .neumorphism-button-light {
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: 3px 3px 5px #d9d9d9, 
                -3px -3px 5px #ffffff;
    color: #4f46e5;
  }
  
  .neumorphism-button-dark {
    background: linear-gradient(145deg, #1e1e1e, #1a1a1a);
    box-shadow: 3px 3px 5px #0d0d0d, 
                -3px -3px 5px #272727;
    color: #a78bfa;
  }
  
  .neumorphism-checkbox-light {
    background: #f0f0f0;
    box-shadow: inset 1px 1px 2px #d9d9d9, 
                inset -1px -1px 2px #ffffff;
  }
  
  .neumorphism-checkbox-dark {
    background: #1a1a1a;
    box-shadow: inset 1px 1px 2px #0d0d0d, 
                inset -1px -1px 2px #272727;
  }
\`}</style>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4"
        >
          <div
            className={`w-full max-w-md p-8 rounded-xl ${
              darkMode
                ? "bg-gray-900 shadow-[8px_8px_16px_#0d0d0d,-8px_-8px_16px_#272727]"
                : "bg-gray-100 shadow-[8px_8px_16px_#d9d9d9,-8px_-8px_16px_#ffffff]"
            }`}
          >
            <div className="text-center mb-8">
              <h2
                className={`text-3xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Sign In
              </h2>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                Access your account
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full p-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-900 shadow-[inset_3px_3px_5px_#0d0d0d,inset_-3px_-3px_5px_#272727] text-white"
                      : "bg-gray-100 shadow-[inset_3px_3px_5px_#d9d9d9,inset_-3px_-3px_5px_#ffffff]"
                  } focus:outline-none focus:ring-2 ${
                    darkMode ? "focus:ring-purple-500" : "focus:ring-blue-500"
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  className={`block mb-2 text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`w-full p-3 rounded-lg ${
                      darkMode
                        ? "bg-gray-900 shadow-[inset_3px_3px_5px_#0d0d0d,inset_-3px_-3px_5px_#272727] text-white"
                        : "bg-gray-100 shadow-[inset_3px_3px_5px_#d9d9d9,inset_-3px_-3px_5px_#ffffff]"
                    } focus:outline-none focus:ring-2 ${
                      darkMode ? "focus:ring-purple-500" : "focus:ring-blue-500"
                    } pr-10`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className={`absolute right-3 top-3 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className={`w-4 h-4 rounded ${
                      darkMode
                        ? "bg-gray-900 shadow-[inset_1px_1px_2px_#0d0d0d,inset_-1px_-1px_2px_#272727]"
                        : "bg-gray-100 shadow-[inset_1px_1px_2px_#d9d9d9,inset_-1px_-1px_2px_#ffffff]"
                    } focus:ring-2 ${
                      darkMode ? "focus:ring-purple-500" : "focus:ring-blue-500"
                    }`}
                  />
                  <label
                    htmlFor="remember"
                    className={`ml-2 text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className={`text-sm ${
                    darkMode ? "text-purple-400" : "text-blue-600"
                  } hover:underline`}
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-lg ${
                  darkMode
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 shadow-[3px_3px_5px_#0d0d0d,-3px_-3px_5px_#272727] text-purple-300"
                    : "bg-gradient-to-br from-gray-100 to-white shadow-[3px_3px_5px_#d9d9d9,-3px_-3px_5px_#ffffff] text-blue-600"
                } font-medium transition-all`}
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Don't have an account?{" "}
                <a
                  href="#"
                  className={
                    darkMode
                      ? "text-purple-400 hover:underline"
                      : "text-blue-600 hover:underline"
                  }
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 9: Side Illustration
    {
      name: "Side Illustration",
      code: `<div className="min-h-screen flex ${
        darkMode ? "bg-gray-900" : "bg-white"
      }">
  <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 items-center justify-center p-12">
    <div className="max-w-md text-center text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
      <p className="text-xl mb-8">To keep connected with us please login with your personal info</p>
      <div className="relative h-64">
        <div className="absolute inset-0 bg-[url('https://illustrations.popsy.co/amber/login.svg')] bg-contain bg-center bg-no-repeat opacity-80"></div>
      </div>
    </div>
  </div>
  
  <div className="w-full md:w-1/2 flex items-center justify-center p-12">
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-bold mb-2">Sign in to Account</h2>
      <div className="h-1 w-20 bg-blue-500 mb-8"></div>
      
      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-500" />
            </div>
            <input 
              type="email" 
              className="w-full pl-10 pr-3 py-3 border ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500" 
              placeholder="your@email.com" 
            />
          </div>
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiLock className="text-gray-500" />
            </div>
            <input 
              type="${showPassword ? "text" : "password"}" 
              className="w-full pl-10 pr-10 py-3 border ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              } rounded-lg focus:ring-blue-500 focus:border-blue-500" 
              placeholder="••••••••" 
            />
            <button 
              type="button" 
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
            />
            <label className="ml-2 block text-sm">Remember me</label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
        </div>
        
        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center justify-center">
          <FiLogIn className="mr-2" /> Sign In
        </button>
      </form>
      
      <div className="mt-8">
        <p className="text-center text-sm">Or sign in with</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="p-2 rounded-full border ${
            darkMode
              ? "border-gray-700 hover:bg-gray-800"
              : "border-gray-300 hover:bg-gray-100"
          } transition">
            <FcGoogle className="text-red-500" />
          </button>
          <button className="p-2 rounded-full border ${
            darkMode
              ? "border-gray-700 hover:bg-gray-800"
              : "border-gray-300 hover:bg-gray-100"
          } transition">
            <FiFacebook className="text-blue-600" />
          </button>
          <button className="p-2 rounded-full border ${
            darkMode
              ? "border-gray-700 hover:bg-gray-800"
              : "border-gray-300 hover:bg-gray-100"
          } transition">
            <FiTwitter className="text-blue-400" />
          </button>
        </div>
      </div>
      
      <p className="mt-8 text-center text-sm">
        Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex border rounded-xl overflow-hidden"
        >
          <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 items-center justify-center p-12">
            <div className="max-w-md text-center text-white">
              <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
              <p className="text-xl mb-8">
                To keep connected with us please login with your personal info
              </p>
              <div className="relative h-64">
                <div className="absolute inset-0 bg-[url('https://illustrations.popsy.co/amber/login.svg')] bg-contain bg-center bg-no-repeat opacity-80"></div>
              </div>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 flex items-center justify-center p-12 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className="w-full max-w-md">
              <h2
                className={`text-3xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Sign in to Account
              </h2>
              <div className="h-1 w-20 bg-blue-500 mb-8"></div>

              <form className="space-y-6">
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      className={`w-full pl-10 pr-3 py-3 border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300"
                      } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="text-gray-500" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full pl-10 pr-10 py-3 border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300"
                      } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      className={`ml-2 block text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center justify-center">
                  <FiLogIn className="mr-2" /> Sign In
                </button>
              </form>

              <div className="mt-8">
                <p
                  className={`text-center text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Or sign in with
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    className={`p-2 rounded-full border ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-800"
                        : "border-gray-300 hover:bg-gray-100"
                    } transition`}
                  >
                    <FcGoogle className="text-red-500" />
                  </button>
                  <button
                    className={`p-2 rounded-full border ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-800"
                        : "border-gray-300 hover:bg-gray-100"
                    } transition`}
                  >
                    <FiFacebook className="text-blue-600" />
                  </button>
                  <button
                    className={`p-2 rounded-full border ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-800"
                        : "border-gray-300 hover:bg-gray-100"
                    } transition`}
                  >
                    <FiTwitter className="text-blue-400" />
                  </button>
                </div>
              </div>

              <p
                className={`mt-8 text-center text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 10: Dark Elegant
    {
      name: "Dark Elegant",
      code: `<div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
  <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
    <div className="p-8">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <FiUser className="text-white text-3xl" />
        </div>
        <h2 className="text-2xl font-bold text-white">Member Login</h2>
        <p className="text-gray-400 mt-2">Enter your credentials to access your account</p>
      </div>
      
      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-500" />
            </div>
            <input 
              type="email" 
              className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="your@email.com" 
            />
          </div>
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiKey className="text-gray-500" />
            </div>
            <input 
              type="${showPassword ? "text" : "password"}" 
              className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
              placeholder="••••••••" 
            />
            <button 
              type="button" 
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="remember" 
              className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2" 
            />
            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-300">Remember me</label>
          </div>
          <a href="#" className="text-sm font-medium text-indigo-500 hover:text-indigo-400">Forgot password?</a>
        </div>
        
        <button 
          type="submit" 
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
        >
          <FiArrowRight className="mr-2" /> Sign In
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          Don't have an account? <a href="#" className="text-indigo-500 hover:text-indigo-400 font-medium">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center bg-gray-900 p-4"
        >
          <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUser className="text-white text-3xl" />
                </div>
                <h2 className="text-2xl font-bold text-white">Member Login</h2>
                <p className="text-gray-400 mt-2">
                  Enter your credentials to access your account
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiKey className="text-gray-500" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2"
                    />
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-500 hover:text-indigo-400"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  <FiArrowRight className="mr-2" /> Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="text-indigo-500 hover:text-indigo-400 font-medium"
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 11: Modern Card
    {
      name: "Modern Card",
      code: `<div className={\`min-h-screen flex items-center justify-center \${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-4\`}>
      <div className={\`w-full max-w-md \${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden\`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Sign In</h2>
            <div className={\`text-sm \${darkMode ? 'text-gray-400' : 'text-gray-500'}\`}>
              New user? <a href="#" className="text-blue-500 hover:underline">Create account</a>
            </div>
          </div>
    
          <form className="space-y-6">
            <div>
              <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Email address</label>
              <input 
                type="email" 
                className={\`w-full px-4 py-3 rounded-lg border \${darkMode ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-white' : 'bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500'}\`}
                placeholder="Enter your email" 
              />
            </div>
    
            <div>
              <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Password</label>
              <div className="relative">
                <input 
                  type={\`\${showPassword ? 'text' : 'password'}\`} 
                  className={\`w-full px-4 py-3 rounded-lg border \${darkMode ? 'bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-white' : 'bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500'} pr-10\`}
                  placeholder="Enter your password" 
                />
                <button 
                  type="button" 
                  className={\`absolute inset-y-0 right-0 pr-3 flex items-center \${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}\`}
                  onClick={togglePasswordVisibility}
                >
                  {\`${showPassword ? "<FiEyeOff />" : "<FiEye />"}\`}
                </button>
              </div>
            </div>
    
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                />
                <label htmlFor="remember" className={\`ml-2 text-sm \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
    
            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Sign In
            </button>
          </form>
    
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={\`w-full border-t \${darkMode ? 'border-gray-700' : 'border-gray-300'}\`}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={\`px-2 \${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'}\`}>Or continue with</span>
              </div>
            </div>
    
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className={\`w-full flex items-center justify-center py-2 px-4 border \${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition\`}>
                <FiFacebook className="text-blue-600" />
              </button>
              <button className={\`w-full flex items-center justify-center py-2 px-4 border \${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition\`}>
                <FiTwitter className="text-blue-400" />
              </button>
              <button className={\`w-full flex items-center justify-center py-2 px-4 border \${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition\`}>
                <FcGoogle className="text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4"
        >
          <div
            className={`w-full max-w-md ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-lg overflow-hidden`}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Sign In
                </h2>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  New user?{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Create account
                  </a>
                </div>
              </div>

              <form className="space-y-6">
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-white"
                        : "bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    }`}
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 text-white"
                          : "bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      } pr-10`}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                        darkMode
                          ? "text-gray-400 hover:text-gray-300"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="remember"
                      className={`ml-2 text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div
                      className={`w-full border-t ${
                        darkMode ? "border-gray-700" : "border-gray-300"
                      }`}
                    ></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span
                      className={`px-2 ${
                        darkMode
                          ? "bg-gray-800 text-gray-400"
                          : "bg-white text-gray-500"
                      }`}
                    >
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    className={`w-full flex items-center justify-center py-2 px-4 border ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-700"
                        : "border-gray-300 hover:bg-gray-50"
                    } rounded-lg transition`}
                  >
                    <FiFacebook className="text-blue-600" />
                  </button>
                  <button
                    className={`w-full flex items-center justify-center py-2 px-4 border ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-700"
                        : "border-gray-300 hover:bg-gray-50"
                    } rounded-lg transition`}
                  >
                    <FiTwitter className="text-blue-400" />
                  </button>
                  <button
                    className={`w-full flex items-center justify-center py-2 px-4 border ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-700"
                        : "border-gray-300 hover:bg-gray-50"
                    } rounded-lg transition`}
                  >
                    <FcGoogle className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 12: Simple and Clean
    {
      name: "Simple and Clean",
      code: `<div className={\`min-h-screen flex items-center justify-center \${darkMode ? 'bg-gray-900' : 'bg-white'} p-4\`}>
      <div className={\`w-full max-w-sm \${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-8\`}>
        <div className="text-center mb-8">
          <h1 className={\`text-3xl font-bold \${darkMode ? 'text-white' : 'text-gray-800'} mb-2\`}>Sign in</h1>
          <p className={\`\${darkMode ? 'text-gray-400' : 'text-gray-600'}\`}>Enter your details to get started</p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className={\`block mb-1 text-sm \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Email</label>
            <input 
              type="email" 
              className={\`w-full px-4 py-2 border \${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\`}
              placeholder="your@email.com" 
            />
          </div>
          
          <div>
            <label className={\`block mb-1 text-sm \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Password</label>
            <input 
              type="password" 
              className={\`w-full px-4 py-2 border \${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\`}
              placeholder="••••••••" 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className={\`text-sm \${darkMode ? 'text-gray-400' : 'text-gray-600'}\`}>
            Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4"
        >
          <div
            className={`w-full max-w-sm ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-md p-8`}
          >
            <div className="text-center mb-8">
              <h1
                className={`text-3xl font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Sign in
              </h1>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                Enter your details to get started
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  className={`block mb-1 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  className={`block mb-1 text-sm ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Password
                </label>
                <input
                  type="password"
                  className={`w-full px-4 py-2 border ${
                    darkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 13: Material Design
    {
      name: "Material Design",
      code: `<div className="min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } p-4">
  <div className="w-full max-w-md ${
    darkMode ? "bg-gray-800" : "bg-white"
  } rounded-lg shadow-md overflow-hidden">
    <div className="bg-blue-600 p-6 text-white">
      <h2 className="text-2xl font-bold">Welcome Back</h2>
      <p className="opacity-90">Please sign in to continue</p>
    </div>
    
    <div className="p-6">
      <form className="space-y-6">
        <div className="relative">
          <input 
            type="email" 
            id="email" 
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
            } rounded-lg border ${
        darkMode ? "border-gray-600" : "border-gray-300"
      } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
          />
          <label 
            htmlFor="email" 
            className="absolute text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
        darkMode ? "bg-gray-800" : "bg-white"
      } px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Email Address
          </label>
        </div>
        
        <div className="relative">
          <input 
            type="password" 
            id="password" 
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm ${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
            } rounded-lg border ${
        darkMode ? "border-gray-600" : "border-gray-300"
      } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
          />
          <label 
            htmlFor="password" 
            className="absolute text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
        darkMode ? "bg-gray-800" : "bg-white"
      } px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Password
          </label>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="remember" 
              className="w-4 h-4 text-blue-600 rounded ${
                darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-white border-gray-300"
              } focus:ring-blue-500" 
            />
            <label htmlFor="remember" className="ml-2 text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }">Remember me</label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
        </div>
        
        <button 
          type="submit" 
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors"
        >
          Sign In
        </button>
      </form>
      
      <div className="mt-6">
        <p className="text-sm text-center ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }>
          Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4"
        >
          <div
            className={`w-full max-w-md ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-md overflow-hidden`}
          >
            <div className="bg-blue-600 p-6 text-white">
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <p className="opacity-90">Please sign in to continue</p>
            </div>

            <div className="p-6">
              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-white text-gray-900"
                    } rounded-lg border ${
                      darkMode ? "border-gray-600" : "border-gray-300"
                    } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className={`absolute text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-white text-gray-900"
                    } rounded-lg border ${
                      darkMode ? "border-gray-600" : "border-gray-300"
                    } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className={`absolute text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                  >
                    Password
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className={`w-4 h-4 text-blue-600 rounded ${
                        darkMode
                          ? "bg-gray-700 border-gray-600"
                          : "bg-white border-gray-300"
                      } focus:ring-blue-500`}
                    />
                    <label
                      htmlFor="remember"
                      className={`ml-2 text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6">
                <p
                  className={`text-sm text-center ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Don't have an account?{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 14: Full-Screen Hero
    {
      name: "Full-Screen Hero",
      code: `<div className="min-h-screen flex \${darkMode ? 'bg-gray-900' : 'bg-gray-50'}">
  <div className="hidden lg:block w-1/2 bg-gradient-to-r from-purple-600 to-indigo-600">
    <div className="h-full flex items-center justify-center p-12">
      <div className="max-w-md text-white">
        <h1 className="text-5xl font-bold mb-6">Welcome Back</h1>
        <p className="text-xl mb-8">We're so excited to see you again!</p>
        <div className="h-64 bg-[url('https://illustrations.popsy.co/amber/secure-login.svg')] bg-contain bg-center bg-no-repeat"></div>
      </div>
    </div>
  </div>

  <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
    <div className="w-full max-w-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold \${darkMode ? 'text-white' : 'text-gray-800'} mb-2">Sign in to your account</h2>
        <p className="\${darkMode ? 'text-gray-400' : 'text-gray-600'}">Or <a href="#" className="text-purple-600 hover:underline">start your 14-day free trial</a></p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}">Email address</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 rounded-lg border \${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            placeholder="your@email.com" 
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}">Password</label>
          <div className="relative">
            <input 
              type="\${showPassword ? 'text' : 'password'}" 
              className="w-full px-4 py-3 rounded-lg border \${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-10"
              placeholder="••••••••" 
            />
            <button 
              type="button" 
              className="absolute inset-y-0 right-0 pr-3 flex items-center \${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500" 
            />
            <label className="ml-2 text-sm \${darkMode ? 'text-gray-300' : 'text-gray-700'}">Remember me</label>
          </div>
          <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
        </div>

        <button 
          type="submit" 
          className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
        >
          Sign in
        </button>
      </form>

      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t \${darkMode ? 'border-gray-700' : 'border-gray-300'}"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 \${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-50 text-gray-500'}">Or continue with</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <button className="w-full flex items-center justify-center py-2 px-4 border \${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'} rounded-lg transition">
            <FiFacebook className="text-blue-600" />
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 border \${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'} rounded-lg transition">
            <FiTwitter className="text-blue-400" />
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 border \${darkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'} rounded-lg transition">
            <FcGoogle className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex border rounded-xl overflow-hidden"
        >
          <div className="hidden lg:block w-1/2 bg-gradient-to-r from-purple-600 to-indigo-600">
            <div className="h-full flex items-center justify-center p-12">
              <div className="max-w-md text-white">
                <h1 className="text-5xl font-bold mb-6">Welcome Back</h1>
                <p className="text-xl mb-8">
                  We're so excited to see you again!
                </p>
                <div className="h-64 bg-[url('https://illustrations.popsy.co/amber/secure-login.svg')] bg-contain bg-center bg-no-repeat"></div>
              </div>
            </div>
          </div>

          <div
            className={`w-full lg:w-1/2 flex items-center justify-center p-12 ${
              darkMode ? "bg-gray-900" : "bg-gray-50"
            }`}
          >
            <div className="w-full max-w-md">
              <div className="text-center mb-10">
                <h2
                  className={`text-3xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  } mb-2`}
                >
                  Sign in to your account
                </h2>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Or{" "}
                  <a href="#" className="text-purple-600 hover:underline">
                    start your 14-day free trial
                  </a>
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300"
                    } focus:ring-2 focus:ring-purple-500 focus:border-purple-500`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300"
                      } focus:ring-2 focus:ring-purple-500 focus:border-purple-500 pr-10`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
                        darkMode
                          ? "text-gray-400 hover:text-gray-300"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <label
                      className={`ml-2 text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-purple-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                >
                  Sign in
                </button>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div
                      className={`w-full border-t ${
                        darkMode ? "border-gray-700" : "border-gray-300"
                      }`}
                    ></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span
                      className={`px-2 ${
                        darkMode
                          ? "bg-gray-900 text-gray-400"
                          : "bg-gray-50 text-gray-500"
                      }`}
                    >
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    className={`w-full flex items-center justify-center py-2 px-4 border ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-800"
                        : "border-gray-300 hover:bg-gray-100"
                    } rounded-lg transition`}
                  >
                    <FiFacebook className="text-blue-600" />
                  </button>
                  <button
                    className={`w-full flex items-center justify-center py-2 px-4 border ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-800"
                        : "border-gray-300 hover:bg-gray-100"
                    } rounded-lg transition`}
                  >
                    <FiTwitter className="text-blue-400" />
                  </button>
                  <button
                    className={`w-full flex items-center justify-center py-2 px-4 border ${
                      darkMode
                        ? "border-gray-700 hover:bg-gray-800"
                        : "border-gray-300 hover:bg-gray-100"
                    } rounded-lg transition`}
                  >
                    <FcGoogle className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 15: Animated Background
    {
      name: "Animated Background",
      code: `<div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
  </div>
  
  <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden z-10">
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to your account</p>
      </div>
      
      <form className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="your@email.com" 
          />
        </div>
        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
          <div className="relative">
            <input 
              type="${showPassword ? "text" : "password"}" 
              className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10" 
              placeholder="••••••••" 
            />
            <button 
              type="button" 
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              className="w-4 h-4 bg-white bg-opacity-50 border-gray-300 rounded focus:ring-blue-500" 
            />
            <label className="ml-2 text-sm text-gray-700">Remember me</label>
          </div>
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
        </div>
        
        <button 
          type="submit" 
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
        >
          Sign In
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</div>`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[400px] flex items-center justify-center p-4 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          </div>

          <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden z-10">
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Welcome Back
                </h2>
                <p className="text-gray-600 mt-2">Sign in to your account</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full px-4 py-3 bg-white bg-opacity-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 bg-white bg-opacity-50 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
  ];

  // Add more designs here to reach 50 total...

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
            Auth Page Universe
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
            Explore our collection of meticulously crafted login/signup pages
            with modern designs, animations, and responsive layouts. Click the{" "}
            <FiCopy className="inline" /> icon to copy the code for any design!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Auth Page Designs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authDesigns.map((design, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{design.name}</h2>
              <div className="group relative">
                {design.component}
                <button
                  onClick={() => copyToClipboard(design.code, index)}
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

export default AuthPageShowcase;
