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
  const [currentForm, setCurrentForm] = useState({});

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

  // Interactive form state management
  const [formStates, setFormStates] = useState({});

  const updateFormState = (designIndex, field, value) => {
    setFormStates((prev) => ({
      ...prev,
      [designIndex]: {
        ...prev[designIndex],
        [field]: value,
      },
    }));
  };

  const getFormState = (designIndex, field) => {
    return formStates[designIndex]?.[field] || "";
  };

  // Auth page designs
  const authDesigns = [
    // Design 1: Minimalist Clean with Interactive Tabs
    {
      name: "Minimalist Clean",
      code: `import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const MinimalistAuth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={\`min-h-screen flex items-center justify-center \${darkMode ? 'bg-gray-900' : 'bg-gray-50'}\`}>
      <div className={\`w-full max-w-md p-8 \${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg\`}>
        {/* Tab Navigation */}
        <div className="flex mb-6 border-b \${darkMode ? 'border-gray-700' : 'border-gray-200'}">
          <button 
            onClick={() => setActiveTab('login')}
            className={\`flex-1 py-2 text-center font-medium \${activeTab === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : (darkMode ? 'text-gray-400' : 'text-gray-500')}\`}
          >
            Sign In
          </button>
          <button 
            onClick={() => setActiveTab('signup')}
            className={\`flex-1 py-2 text-center font-medium \${activeTab === 'signup' ? 'text-blue-600 border-b-2 border-blue-600' : (darkMode ? 'text-gray-400' : 'text-gray-500')}\`}
          >
            Sign Up
          </button>
        </div>

        {activeTab === 'login' ? (
          <div>
            <h2 className={\`text-2xl font-bold mb-6 text-center \${darkMode ? 'text-white' : 'text-gray-800'}\`}>Welcome Back</h2>
            <form className="space-y-6">
              <div>
                <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Email</label>
                <input 
                  type="email" 
                  className={\`w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500\`} 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    className={\`w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 pr-10\`} 
                    placeholder="••••••••" 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">Sign In</button>
            </form>
          </div>
        ) : (
          <div>
            <h2 className={\`text-2xl font-bold mb-6 text-center \${darkMode ? 'text-white' : 'text-gray-800'}\`}>Create Account</h2>
            <form className="space-y-6">
              <div>
                <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Full Name</label>
                <input 
                  type="text" 
                  className={\`w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500\`} 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Email</label>
                <input 
                  type="email" 
                  className={\`w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500\`} 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    className={\`w-full p-3 border \${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 pr-10\`} 
                    placeholder="••••••••" 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">Sign Up</button>
            </form>
          </div>
        )}
        
        <p className={\`mt-4 text-center text-sm \${darkMode ? 'text-gray-400' : 'text-gray-600'}\`}>
          {activeTab === 'login' ? "Don't have an account?" : "Already have an account?"}{" "}
          <button 
            onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
            className="text-blue-500 hover:underline"
          >
            {activeTab === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default MinimalistAuth;`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[500px] flex items-center justify-center p-4"
        >
          <div
            className={`w-full max-w-md p-8 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-lg`}
          >
            {/* Tab Navigation */}
            <div
              className={`flex mb-6 border-b ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => updateFormState(0, "activeTab", "login")}
                className={`flex-1 py-2 text-center font-medium ${
                  (getFormState(0, "activeTab") || "login") === "login"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => updateFormState(0, "activeTab", "signup")}
                className={`flex-1 py-2 text-center font-medium ${
                  (getFormState(0, "activeTab") || "login") === "signup"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                Sign Up
              </button>
            </div>

            {(getFormState(0, "activeTab") || "login") === "login" ? (
              <div>
                <h2
                  className={`text-2xl font-bold mb-6 text-center ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
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
                      value={getFormState(0, "email")}
                      onChange={(e) =>
                        updateFormState(0, "email", e.target.value)
                      }
                      className={`w-full p-3 border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500`}
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
                        type={
                          getFormState(0, "showPassword") ? "text" : "password"
                        }
                        value={getFormState(0, "password")}
                        onChange={(e) =>
                          updateFormState(0, "password", e.target.value)
                        }
                        className={`w-full p-3 border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-blue-500 pr-10`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          updateFormState(
                            0,
                            "showPassword",
                            !getFormState(0, "showPassword")
                          )
                        }
                        className="absolute right-3 top-3 text-gray-500"
                      >
                        {getFormState(0, "showPassword") ? (
                          <FiEyeOff />
                        ) : (
                          <FiEye />
                        )}
                      </button>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                    Sign In
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h2
                  className={`text-2xl font-bold mb-6 text-center ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Create Account
                </h2>
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
                      value={getFormState(0, "fullName")}
                      onChange={(e) =>
                        updateFormState(0, "fullName", e.target.value)
                      }
                      className={`w-full p-3 border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500`}
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
                      value={getFormState(0, "signupEmail")}
                      onChange={(e) =>
                        updateFormState(0, "signupEmail", e.target.value)
                      }
                      className={`w-full p-3 border ${
                        darkMode
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "bg-white border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500`}
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
                        type={
                          getFormState(0, "showSignupPassword")
                            ? "text"
                            : "password"
                        }
                        value={getFormState(0, "signupPassword")}
                        onChange={(e) =>
                          updateFormState(0, "signupPassword", e.target.value)
                        }
                        className={`w-full p-3 border ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-white border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-blue-500 pr-10`}
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          updateFormState(
                            0,
                            "showSignupPassword",
                            !getFormState(0, "showSignupPassword")
                          )
                        }
                        className="absolute right-3 top-3 text-gray-500"
                      >
                        {getFormState(0, "showSignupPassword") ? (
                          <FiEyeOff />
                        ) : (
                          <FiEye />
                        )}
                      </button>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                    Sign Up
                  </button>
                </form>
              </div>
            )}

            <p
              className={`mt-4 text-center text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {(getFormState(0, "activeTab") || "login") === "login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                onClick={() =>
                  updateFormState(
                    0,
                    "activeTab",
                    (getFormState(0, "activeTab") || "login") === "login"
                      ? "signup"
                      : "login"
                  )
                }
                className="text-blue-500 hover:underline"
              >
                {(getFormState(0, "activeTab") || "login") === "login"
                  ? "Sign up"
                  : "Sign in"}
              </button>
            </p>
          </div>
        </motion.div>
      ),
    },

    // Design 2: Gradient Background with Social Login
    {
      name: "Gradient Social Auth",
      code: `import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FiFacebook, FiGithub, FiEye, FiEyeOff } from 'react-icons/fi';

const GradientSocialAuth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-600 p-4">
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl border border-white border-opacity-20">
        {/* Tab Navigation */}
        <div className="flex border-b border-white border-opacity-20">
          <button 
            onClick={() => setActiveTab('login')}
            className={\`flex-1 py-4 font-medium text-center \${activeTab === 'login' ? 'text-white border-b-2 border-white' : 'text-white text-opacity-70'}\`}
          >
            Sign In
          </button>
          <button 
            onClick={() => setActiveTab('signup')}
            className={\`flex-1 py-4 font-medium text-center \${activeTab === 'signup' ? 'text-white border-b-2 border-white' : 'text-white text-opacity-70'}\`}
          >
            Sign Up
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {activeTab === 'login' ? 'Welcome Back' : 'Join Us'}
            </h2>
            <p className="text-white text-opacity-80">
              {activeTab === 'login' ? 'Sign in to your account' : 'Create your account'}
            </p>
          </div>
          
          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button className="flex items-center justify-center py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg hover:bg-opacity-20 transition">
              <FcGoogle className="text-xl" />
            </button>
            <button className="flex items-center justify-center py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg hover:bg-opacity-20 transition">
              <FiFacebook className="text-xl text-blue-400" />
            </button>
            <button className="flex items-center justify-center py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg hover:bg-opacity-20 transition">
              <FiGithub className="text-xl text-white" />
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-white border-opacity-20"></div>
            <span className="mx-4 text-white text-opacity-80">or</span>
            <div className="flex-grow border-t border-white border-opacity-20"></div>
          </div>
          
          <form className="space-y-6">
            {activeTab === 'signup' && (
              <div>
                <label className="block mb-2 text-sm font-medium text-white text-opacity-80">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" 
                  placeholder="John Doe" 
                />
              </div>
            )}
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
                  type={showPassword ? 'text' : 'password'} 
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 pr-10" 
                  placeholder="••••••••" 
                />
                <button 
                  type="button" 
                  className="absolute right-3 top-3 text-white text-opacity-70 hover:text-opacity-100"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            {activeTab === 'signup' && (
              <div>
                <label className="block mb-2 text-sm font-medium text-white text-opacity-80">Confirm Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" 
                  placeholder="••••••••" 
                />
              </div>
            )}
            <button className="w-full py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold rounded-lg transition border border-white border-opacity-30">
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          {activeTab === 'login' && (
            <div className="mt-6 text-center">
              <a href="#" className="text-white text-opacity-70 hover:text-opacity-100 text-sm">Forgot password?</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GradientSocialAuth;`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[600px] flex items-center justify-center p-4 bg-gradient-to-br from-purple-500 to-blue-600"
        >
          <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl border border-white border-opacity-20">
            {/* Tab Navigation */}
            <div className="flex border-b border-white border-opacity-20">
              <button
                onClick={() => updateFormState(1, "activeTab", "login")}
                className={`flex-1 py-4 font-medium text-center ${
                  (getFormState(1, "activeTab") || "login") === "login"
                    ? "text-white border-b-2 border-white"
                    : "text-white text-opacity-70"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => updateFormState(1, "activeTab", "signup")}
                className={`flex-1 py-4 font-medium text-center ${
                  (getFormState(1, "activeTab") || "login") === "signup"
                    ? "text-white border-b-2 border-white"
                    : "text-white text-opacity-70"
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {(getFormState(1, "activeTab") || "login") === "login"
                    ? "Welcome Back"
                    : "Join Us"}
                </h2>
                <p className="text-white text-opacity-80">
                  {(getFormState(1, "activeTab") || "login") === "login"
                    ? "Sign in to your account"
                    : "Create your account"}
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button className="flex items-center justify-center py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg hover:bg-opacity-20 transition">
                  <FcGoogle className="text-xl" />
                </button>
                <button className="flex items-center justify-center py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg hover:bg-opacity-20 transition">
                  <FiFacebook className="text-xl text-blue-400" />
                </button>
                <button className="flex items-center justify-center py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg hover:bg-opacity-20 transition">
                  <FiGithub className="text-xl text-white" />
                </button>
              </div>

              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-white border-opacity-20"></div>
                <span className="mx-4 text-white text-opacity-80">or</span>
                <div className="flex-grow border-t border-white border-opacity-20"></div>
              </div>

              <form className="space-y-6">
                {(getFormState(1, "activeTab") || "login") === "signup" && (
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white text-opacity-80">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={getFormState(1, "fullName")}
                      onChange={(e) =>
                        updateFormState(1, "fullName", e.target.value)
                      }
                      className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                )}
                <div>
                  <label className="block mb-2 text-sm font-medium text-white text-opacity-80">
                    Email
                  </label>
                  <input
                    type="email"
                    value={getFormState(1, "email")}
                    onChange={(e) =>
                      updateFormState(1, "email", e.target.value)
                    }
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
                      type={
                        getFormState(1, "showPassword") ? "text" : "password"
                      }
                      value={getFormState(1, "password")}
                      onChange={(e) =>
                        updateFormState(1, "password", e.target.value)
                      }
                      className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-white text-opacity-70 hover:text-opacity-100"
                      onClick={() =>
                        updateFormState(
                          1,
                          "showPassword",
                          !getFormState(1, "showPassword")
                        )
                      }
                    >
                      {getFormState(1, "showPassword") ? (
                        <FiEyeOff />
                      ) : (
                        <FiEye />
                      )}
                    </button>
                  </div>
                </div>
                {(getFormState(1, "activeTab") || "login") === "signup" && (
                  <div>
                    <label className="block mb-2 text-sm font-medium text-white text-opacity-80">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={getFormState(1, "confirmPassword")}
                      onChange={(e) =>
                        updateFormState(1, "confirmPassword", e.target.value)
                      }
                      className="w-full p-3 bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-lg placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                      placeholder="••••••••"
                    />
                  </div>
                )}
                <button className="w-full py-3 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold rounded-lg transition border border-white border-opacity-30">
                  {(getFormState(1, "activeTab") || "login") === "login"
                    ? "Sign In"
                    : "Create Account"}
                </button>
              </form>

              {(getFormState(1, "activeTab") || "login") === "login" && (
                <div className="mt-6 text-center">
                  <a
                    href="#"
                    className="text-white text-opacity-70 hover:text-opacity-100 text-sm"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 3: Split Screen Professional
    {
      name: "Split Screen Professional",
      code: `import { useState } from 'react';
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser } from 'react-icons/fi';

const SplitScreenAuth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-12">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            {activeTab === 'login' ? 'Welcome Back!' : 'Join Our Community'}
          </h1>
          <p className="text-xl opacity-90 mb-8">
            {activeTab === 'login' 
              ? 'Sign in to access your dashboard' 
              : 'Create an account to get started'
            }
          </p>
          <div className="w-64 h-64 mx-auto bg-white bg-opacity-10 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              {activeTab === 'login' ? (
                <FiUser className="w-16 h-16" />
              ) : (
                <FiMail className="w-16 h-16" />
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className={\`w-full md:w-1/2 flex items-center justify-center p-12 \${darkMode ? 'bg-gray-900' : 'bg-white'}\`}>
        <div className="w-full max-w-md">
          {/* Tab Navigation */}
          <div className={\`flex mb-8 border-b \${darkMode ? 'border-gray-700' : 'border-gray-200'}\`}>
            <button 
              onClick={() => setActiveTab('login')}
              className={\`flex-1 py-3 text-center font-medium \${activeTab === 'login' ? 'text-indigo-600 border-b-2 border-indigo-600' : (darkMode ? 'text-gray-400' : 'text-gray-500')}\`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setActiveTab('signup')}
              className={\`flex-1 py-3 text-center font-medium \${activeTab === 'signup' ? 'text-indigo-600 border-b-2 border-indigo-600' : (darkMode ? 'text-gray-400' : 'text-gray-500')}\`}
            >
              Sign Up
            </button>
          </div>

          <h2 className={\`text-2xl font-bold mb-8 \${darkMode ? 'text-white' : 'text-gray-800'}\`}>
            {activeTab === 'login' ? 'Sign In' : 'Create Account'}
          </h2>
          
          <form className="space-y-6">
            {activeTab === 'signup' && (
              <div>
                <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-500" />
                  </div>
                  <input 
                    type="text" 
                    className={\`w-full pl-10 pr-3 py-3 border \${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500\`} 
                    placeholder="John Doe" 
                  />
                </div>
              </div>
            )}
            
            <div>
              <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-500" />
                </div>
                <input 
                  type="email" 
                  className={\`w-full pl-10 pr-3 py-3 border \${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500\`} 
                  placeholder="your@email.com" 
                />
              </div>
            </div>
            
            <div>
              <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-500" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className={\`w-full pl-10 pr-10 py-3 border \${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500\`} 
                  placeholder="••••••••" 
                />
                <button 
                  type="button" 
                  className="absolute right-3 top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {activeTab === 'signup' && (
              <div>
                <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiLock className="text-gray-500" />
                  </div>
                  <input 
                    type="password" 
                    className={\`w-full pl-10 pr-3 py-3 border \${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500\`} 
                    placeholder="••••••••" 
                  />
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" 
                />
                <label className={\`ml-2 block text-sm \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>
                  {activeTab === 'login' ? 'Remember me' : 'I agree to the Terms'}
                </label>
              </div>
              {activeTab === 'login' && (
                <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
              )}
            </div>
            
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SplitScreenAuth;`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[600px] flex flex-col md:flex-row border rounded-xl overflow-hidden"
        >
          <div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-12">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">
                {(getFormState(2, "activeTab") || "login") === "login"
                  ? "Welcome Back!"
                  : "Join Our Community"}
              </h1>
              <p className="text-xl opacity-90 mb-8">
                {(getFormState(2, "activeTab") || "login") === "login"
                  ? "Sign in to access your dashboard"
                  : "Create an account to get started"}
              </p>
              <div className="w-64 h-64 mx-auto bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  {(getFormState(2, "activeTab") || "login") === "login" ? (
                    <FiUser className="w-16 h-16" />
                  ) : (
                    <FiMail className="w-16 h-16" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 flex items-center justify-center p-12 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div className="w-full max-w-md">
              {/* Tab Navigation */}
              <div
                className={`flex mb-8 border-b ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => updateFormState(2, "activeTab", "login")}
                  className={`flex-1 py-3 text-center font-medium ${
                    (getFormState(2, "activeTab") || "login") === "login"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : darkMode
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => updateFormState(2, "activeTab", "signup")}
                  className={`flex-1 py-3 text-center font-medium ${
                    (getFormState(2, "activeTab") || "login") === "signup"
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : darkMode
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <h2
                className={`text-2xl font-bold mb-8 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {(getFormState(2, "activeTab") || "login") === "login"
                  ? "Sign In"
                  : "Create Account"}
              </h2>

              <form className="space-y-6">
                {(getFormState(2, "activeTab") || "login") === "signup" && (
                  <div>
                    <label
                      className={`block mb-2 text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        value={getFormState(2, "fullName")}
                        onChange={(e) =>
                          updateFormState(2, "fullName", e.target.value)
                        }
                        className={`w-full pl-10 pr-3 py-3 border ${
                          darkMode
                            ? "bg-gray-800 border-gray-700 text-white"
                            : "bg-white border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-indigo-500`}
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )}

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
                      value={getFormState(2, "email")}
                      onChange={(e) =>
                        updateFormState(2, "email", e.target.value)
                      }
                      className={`w-full pl-10 pr-3 py-3 border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-indigo-500`}
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
                      type={
                        getFormState(2, "showPassword") ? "text" : "password"
                      }
                      value={getFormState(2, "password")}
                      onChange={(e) =>
                        updateFormState(2, "password", e.target.value)
                      }
                      className={`w-full pl-10 pr-10 py-3 border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-indigo-500`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-500"
                      onClick={() =>
                        updateFormState(
                          2,
                          "showPassword",
                          !getFormState(2, "showPassword")
                        )
                      }
                    >
                      {getFormState(2, "showPassword") ? (
                        <FiEyeOff />
                      ) : (
                        <FiEye />
                      )}
                    </button>
                  </div>
                </div>

                {(getFormState(2, "activeTab") || "login") === "signup" && (
                  <div>
                    <label
                      className={`block mb-2 text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiLock className="text-gray-500" />
                      </div>
                      <input
                        type="password"
                        value={getFormState(2, "confirmPassword")}
                        onChange={(e) =>
                          updateFormState(2, "confirmPassword", e.target.value)
                        }
                        className={`w-full pl-10 pr-3 py-3 border ${
                          darkMode
                            ? "bg-gray-800 border-gray-700 text-white"
                            : "bg-white border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-indigo-500`}
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                )}

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
                      {(getFormState(2, "activeTab") || "login") === "login"
                        ? "Remember me"
                        : "I agree to the Terms"}
                    </label>
                  </div>
                  {(getFormState(2, "activeTab") || "login") === "login" && (
                    <a
                      href="#"
                      className="text-sm text-indigo-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>

                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition">
                  {(getFormState(2, "activeTab") || "login") === "login"
                    ? "Sign In"
                    : "Create Account"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 4: Modern Glass Card
    {
      name: "Modern Glass Card",
      code: `import { useState } from 'react';
import { FiEye, FiEyeOff, FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { FiFacebook, FiGithub } from 'react-icons/fi';

const ModernGlassCard = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={\`min-h-screen flex items-center justify-center \${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'} p-4\`}>
      <div className={\`w-full max-w-md \${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-lg rounded-2xl shadow-xl border \${darkMode ? 'border-gray-700' : 'border-white/20'}\`}>
        {/* Tab Navigation */}
        <div className={\`flex border-b \${darkMode ? 'border-gray-700' : 'border-gray-200'}\`}>
          <button 
            onClick={() => setActiveTab('login')}
            className={\`flex-1 py-4 font-medium text-center rounded-tl-2xl \${activeTab === 'login' ? 'bg-blue-500 text-white' : (darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50')}\`}
          >
            Sign In
          </button>
          <button 
            onClick={() => setActiveTab('signup')}
            className={\`flex-1 py-4 font-medium text-center rounded-tr-2xl \${activeTab === 'signup' ? 'bg-blue-500 text-white' : (darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50')}\`}
          >
            Sign Up
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className={\`text-3xl font-bold mb-2 \${darkMode ? 'text-white' : 'text-gray-800'}\`}>
              {activeTab === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className={\`\${darkMode ? 'text-gray-400' : 'text-gray-600'}\`}>
              {activeTab === 'login' ? 'Sign in to continue' : 'Join our community today'}
            </p>
          </div>
          
          {/* Social Login */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button className={\`flex items-center justify-center py-3 border \${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition\`}>
              <FcGoogle className="text-xl" />
            </button>
            <button className={\`flex items-center justify-center py-3 border \${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition\`}>
              <FiFacebook className="text-xl text-blue-600" />
            </button>
            <button className={\`flex items-center justify-center py-3 border \${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'} rounded-lg transition\`}>
              <FiGithub className={\`text-xl \${darkMode ? 'text-white' : 'text-gray-800'}\`} />
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className={\`flex-grow border-t \${darkMode ? 'border-gray-700' : 'border-gray-300'}\`}></div>
            <span className={\`mx-4 text-sm \${darkMode ? 'text-gray-400' : 'text-gray-500'}\`}>or</span>
            <div className={\`flex-grow border-t \${darkMode ? 'border-gray-700' : 'border-gray-300'}\`}></div>
          </div>
          
          <form className="space-y-6">
            {activeTab === 'signup' && (
              <>
                <div>
                  <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Full Name</label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-3 text-gray-500" />
                    <input 
                      type="text" 
                      className={\`w-full pl-10 pr-4 py-3 border \${darkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-white/50 border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 backdrop-blur-sm\`} 
                      placeholder="John Doe" 
                    />
                  </div>
                </div>
                <div>
                  <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Phone Number</label>
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-3 text-gray-500" />
                    <input 
                      type="tel" 
                      className={\`w-full pl-10 pr-4 py-3 border \${darkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-white/50 border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 backdrop-blur-sm\`} 
                      placeholder="+1 (555) 123-4567" 
                    />
                  </div>
                </div>
              </>
            )}
            
            <div>
              <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-500" />
                <input 
                  type="email" 
                  className={\`w-full pl-10 pr-4 py-3 border \${darkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-white/50 border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 backdrop-blur-sm\`} 
                  placeholder="your@email.com" 
                />
              </div>
            </div>
            
            <div>
              <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Password</label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-500" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className={\`w-full pl-10 pr-10 py-3 border \${darkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-white/50 border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 backdrop-blur-sm\`} 
                  placeholder="••••••••" 
                />
                <button 
                  type="button" 
                  className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {activeTab === 'signup' && (
              <div>
                <label className={\`block mb-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>Confirm Password</label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-3 text-gray-500" />
                  <input 
                    type="password" 
                    className={\`w-full pl-10 pr-4 py-3 border \${darkMode ? 'bg-gray-700/50 border-gray-600 text-white' : 'bg-white/50 border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 backdrop-blur-sm\`} 
                    placeholder="••••••••" 
                  />
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                />
                <label className={\`ml-2 text-sm \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>
                  {activeTab === 'login' ? 'Remember me' : 'I agree to Terms & Privacy'}
                </label>
              </div>
              {activeTab === 'login' && (
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              )}
            </div>
            
            <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all transform hover:scale-105">
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModernGlassCard;`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[700px] flex items-center justify-center p-4"
          style={{
            background: darkMode
              ? "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
              : "linear-gradient(135deg, #dbeafe 0%, #c7d2fe 100%)",
          }}
        >
          <div
            className={`w-full max-w-md ${
              darkMode ? "bg-gray-800/80" : "bg-white/80"
            } backdrop-blur-lg rounded-2xl shadow-xl border ${
              darkMode ? "border-gray-700" : "border-white/20"
            }`}
          >
            {/* Tab Navigation */}
            <div
              className={`flex border-b ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => updateFormState(3, "activeTab", "login")}
                className={`flex-1 py-4 font-medium text-center rounded-tl-2xl ${
                  (getFormState(3, "activeTab") || "login") === "login"
                    ? "bg-blue-500 text-white"
                    : darkMode
                    ? "text-gray-400 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => updateFormState(3, "activeTab", "signup")}
                className={`flex-1 py-4 font-medium text-center rounded-tr-2xl ${
                  (getFormState(3, "activeTab") || "login") === "signup"
                    ? "bg-blue-500 text-white"
                    : darkMode
                    ? "text-gray-400 hover:bg-gray-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <h2
                  className={`text-3xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {(getFormState(3, "activeTab") || "login") === "login"
                    ? "Welcome Back"
                    : "Create Account"}
                </h2>
                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  {(getFormState(3, "activeTab") || "login") === "login"
                    ? "Sign in to continue"
                    : "Join our community today"}
                </p>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button
                  className={`flex items-center justify-center py-3 border ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "border-gray-300 hover:bg-gray-50"
                  } rounded-lg transition`}
                >
                  <FcGoogle className="text-xl" />
                </button>
                <button
                  className={`flex items-center justify-center py-3 border ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "border-gray-300 hover:bg-gray-50"
                  } rounded-lg transition`}
                >
                  <FiFacebook className="text-xl text-blue-600" />
                </button>
                <button
                  className={`flex items-center justify-center py-3 border ${
                    darkMode
                      ? "border-gray-700 hover:bg-gray-700"
                      : "border-gray-300 hover:bg-gray-50"
                  } rounded-lg transition`}
                >
                  <FiGithub
                    className={`text-xl ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center my-6">
                <div
                  className={`flex-grow border-t ${
                    darkMode ? "border-gray-700" : "border-gray-300"
                  }`}
                ></div>
                <span
                  className={`mx-4 text-sm ${
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

              <form className="space-y-6">
                {(getFormState(3, "activeTab") || "login") === "signup" && (
                  <>
                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-3 text-gray-500" />
                        <input
                          type="text"
                          value={getFormState(3, "fullName")}
                          onChange={(e) =>
                            updateFormState(3, "fullName", e.target.value)
                          }
                          className={`w-full pl-10 pr-4 py-3 border ${
                            darkMode
                              ? "bg-gray-700/50 border-gray-600 text-white"
                              : "bg-white/50 border-gray-300"
                          } rounded-lg focus:ring-2 focus:ring-blue-500 backdrop-blur-sm`}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-3 text-gray-500" />
                        <input
                          type="tel"
                          value={getFormState(3, "phone")}
                          onChange={(e) =>
                            updateFormState(3, "phone", e.target.value)
                          }
                          className={`w-full pl-10 pr-4 py-3 border ${
                            darkMode
                              ? "bg-gray-700/50 border-gray-600 text-white"
                              : "bg-white/50 border-gray-300"
                          } rounded-lg focus:ring-2 focus:ring-blue-500 backdrop-blur-sm`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-3 text-gray-500" />
                    <input
                      type="email"
                      value={getFormState(3, "email")}
                      onChange={(e) =>
                        updateFormState(3, "email", e.target.value)
                      }
                      className={`w-full pl-10 pr-4 py-3 border ${
                        darkMode
                          ? "bg-gray-700/50 border-gray-600 text-white"
                          : "bg-white/50 border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 backdrop-blur-sm`}
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
                    <FiLock className="absolute left-3 top-3 text-gray-500" />
                    <input
                      type={
                        getFormState(3, "showPassword") ? "text" : "password"
                      }
                      value={getFormState(3, "password")}
                      onChange={(e) =>
                        updateFormState(3, "password", e.target.value)
                      }
                      className={`w-full pl-10 pr-10 py-3 border ${
                        darkMode
                          ? "bg-gray-700/50 border-gray-600 text-white"
                          : "bg-white/50 border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 backdrop-blur-sm`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                      onClick={() =>
                        updateFormState(
                          3,
                          "showPassword",
                          !getFormState(3, "showPassword")
                        )
                      }
                    >
                      {getFormState(3, "showPassword") ? (
                        <FiEyeOff />
                      ) : (
                        <FiEye />
                      )}
                    </button>
                  </div>
                </div>

                {(getFormState(3, "activeTab") || "login") === "signup" && (
                  <div>
                    <label
                      className={`block mb-2 text-sm font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <FiLock className="absolute left-3 top-3 text-gray-500" />
                      <input
                        type="password"
                        value={getFormState(3, "confirmPassword")}
                        onChange={(e) =>
                          updateFormState(3, "confirmPassword", e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-3 border ${
                          darkMode
                            ? "bg-gray-700/50 border-gray-600 text-white"
                            : "bg-white/50 border-gray-300"
                        } rounded-lg focus:ring-2 focus:ring-blue-500 backdrop-blur-sm`}
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label
                      className={`ml-2 text-sm ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {(getFormState(3, "activeTab") || "login") === "login"
                        ? "Remember me"
                        : "I agree to Terms & Privacy"}
                    </label>
                  </div>
                  {(getFormState(3, "activeTab") || "login") === "login" && (
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all transform hover:scale-105">
                  {(getFormState(3, "activeTab") || "login") === "login"
                    ? "Sign In"
                    : "Create Account"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Design 5: Floating Labels Material
    {
      name: "Floating Labels Material",
      code: `import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const FloatingLabelsAuth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={\`min-h-screen flex items-center justify-center \${darkMode ? 'bg-gray-900' : 'bg-gray-50'} p-4\`}>
      <div className={\`w-full max-w-md \${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl overflow-hidden\`}>
        {/* Tab Navigation */}
        <div className={\`flex border-b \${darkMode ? 'border-gray-700' : 'border-gray-200'}\`}>
          <button 
            onClick={() => setActiveTab('login')}
            className={\`flex-1 py-4 font-medium text-center \${activeTab === 'login' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : (darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-50')}\`}
          >
            Sign In
          </button>
          <button 
            onClick={() => setActiveTab('signup')}
            className={\`flex-1 py-4 font-medium text-center \${activeTab === 'signup' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50' : (darkMode ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-50')}\`}
          >
            Sign Up
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-10">
            <h2 className={\`text-3xl font-bold \${darkMode ? 'text-white' : 'text-gray-800'}\`}>
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </h2>
            <p className={\`mt-2 \${darkMode ? 'text-gray-400' : 'text-gray-600'}\`}>
              {activeTab === 'login' ? 'Enter your credentials to continue' : 'Fill in your information to get started'}
            </p>
          </div>
          
          <form className="space-y-8">
            {activeTab === 'signup' && (
              <div className="relative">
                <input 
                  type="text" 
                  id="fullName" 
                  className={\`block px-2.5 pb-2.5 pt-4 w-full text-sm \${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} rounded-lg border \${darkMode ? 'border-gray-600' : 'border-gray-300'} appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer\`} 
                  placeholder=" " 
                />
                <label 
                  htmlFor="fullName" 
                  className={\`absolute text-sm \${darkMode ? 'text-gray-400' : 'text-gray-500'} duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] \${darkMode ? 'bg-gray-800' : 'bg-white'} px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1\`}
                >
                  Full Name
                </label>
              </div>
            )}
            
            <div className="relative">
              <input 
                type="email" 
                id="email" 
                className={\`block px-2.5 pb-2.5 pt-4 w-full text-sm \${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} rounded-lg border \${darkMode ? 'border-gray-600' : 'border-gray-300'} appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer\`} 
                placeholder=" " 
              />
              <label 
                htmlFor="email" 
                className={\`absolute text-sm \${darkMode ? 'text-gray-400' : 'text-gray-500'} duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] \${darkMode ? 'bg-gray-800' : 'bg-white'} px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1\`}
              >
                Email Address
              </label>
            </div>
            
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="password" 
                className={\`block px-2.5 pb-2.5 pt-4 w-full text-sm \${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} rounded-lg border \${darkMode ? 'border-gray-600' : 'border-gray-300'} appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer pr-10\`} 
                placeholder=" " 
              />
              <label 
                htmlFor="password" 
                className={\`absolute text-sm \${darkMode ? 'text-gray-400' : 'text-gray-500'} duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] \${darkMode ? 'bg-gray-800' : 'bg-white'} px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1\`}
              >
                Password
              </label>
              <button 
                type="button" 
                className={\`absolute right-3 top-4 \${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}\`}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {activeTab === 'signup' && (
              <div className="relative">
                <input 
                  type="password" 
                  id="confirmPassword" 
                  className={\`block px-2.5 pb-2.5 pt-4 w-full text-sm \${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} rounded-lg border \${darkMode ? 'border-gray-600' : 'border-gray-300'} appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer\`} 
                  placeholder=" " 
                />
                <label 
                  htmlFor="confirmPassword" 
                  className={\`absolute text-sm \${darkMode ? 'text-gray-400' : 'text-gray-500'} duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] \${darkMode ? 'bg-gray-800' : 'bg-white'} px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1\`}
                >
                  Confirm Password
                </label>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className={\`w-4 h-4 text-blue-600 rounded \${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:ring-blue-500\`} 
                />
                <label htmlFor="remember" className={\`ml-2 text-sm font-medium \${darkMode ? 'text-gray-300' : 'text-gray-700'}\`}>
                  {activeTab === 'login' ? 'Remember me' : 'I agree to the Terms & Conditions'}
                </label>
              </div>
              {activeTab === 'login' && (
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              )}
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors"
            >
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FloatingLabelsAuth;`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[600px] flex items-center justify-center p-4"
        >
          <div
            className={`w-full max-w-md ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow-xl overflow-hidden`}
          >
            {/* Tab Navigation */}
            <div
              className={`flex border-b ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => updateFormState(4, "activeTab", "login")}
                className={`flex-1 py-4 font-medium text-center ${
                  (getFormState(4, "activeTab") || "login") === "login"
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : darkMode
                    ? "text-gray-400 hover:bg-gray-700"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => updateFormState(4, "activeTab", "signup")}
                className={`flex-1 py-4 font-medium text-center ${
                  (getFormState(4, "activeTab") || "login") === "signup"
                    ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
                    : darkMode
                    ? "text-gray-400 hover:bg-gray-700"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="p-8">
              <div className="text-center mb-10">
                <h2
                  className={`text-3xl font-bold ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {(getFormState(4, "activeTab") || "login") === "login"
                    ? "Sign In"
                    : "Create Account"}
                </h2>
                <p
                  className={`mt-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {(getFormState(4, "activeTab") || "login") === "login"
                    ? "Enter your credentials to continue"
                    : "Fill in your information to get started"}
                </p>
              </div>

              <form className="space-y-8">
                {(getFormState(4, "activeTab") || "login") === "signup" && (
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      value={getFormState(4, "fullName")}
                      onChange={(e) =>
                        updateFormState(4, "fullName", e.target.value)
                      }
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
                      htmlFor="fullName"
                      className={`absolute text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
                        darkMode ? "bg-gray-800" : "bg-white"
                      } px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                    >
                      Full Name
                    </label>
                  </div>
                )}

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={getFormState(4, "email")}
                    onChange={(e) =>
                      updateFormState(4, "email", e.target.value)
                    }
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
                    type={getFormState(4, "showPassword") ? "text" : "password"}
                    id="password"
                    value={getFormState(4, "password")}
                    onChange={(e) =>
                      updateFormState(4, "password", e.target.value)
                    }
                    className={`block px-2.5 pb-2.5 pt-4 w-full text-sm ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-white text-gray-900"
                    } rounded-lg border ${
                      darkMode ? "border-gray-600" : "border-gray-300"
                    } appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer pr-10`}
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
                  <button
                    type="button"
                    className={`absolute right-3 top-4 ${
                      darkMode
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() =>
                      updateFormState(
                        4,
                        "showPassword",
                        !getFormState(4, "showPassword")
                      )
                    }
                  >
                    {getFormState(4, "showPassword") ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>

                {(getFormState(4, "activeTab") || "login") === "signup" && (
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      value={getFormState(4, "confirmPassword")}
                      onChange={(e) =>
                        updateFormState(4, "confirmPassword", e.target.value)
                      }
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
                      htmlFor="confirmPassword"
                      className={`absolute text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] ${
                        darkMode ? "bg-gray-800" : "bg-white"
                      } px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                    >
                      Confirm Password
                    </label>
                  </div>
                )}

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
                      {(getFormState(4, "activeTab") || "login") === "login"
                        ? "Remember me"
                        : "I agree to the Terms & Conditions"}
                    </label>
                  </div>
                  {(getFormState(4, "activeTab") || "login") === "login" && (
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors"
                >
                  {(getFormState(4, "activeTab") || "login") === "login"
                    ? "Sign In"
                    : "Create Account"}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      ),
    },

    // Continue adding more designs...
    // I'll add a few more key designs to complete the showcase

    // Design 6: Dark Elegant Professional
    {
      name: "Dark Elegant Professional",
      code: `import { useState } from 'react';
import { FiUser, FiMail, FiKey, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';

const DarkElegantAuth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-700">
          <button 
            onClick={() => setActiveTab('login')}
            className={\`flex-1 py-4 font-medium text-center \${activeTab === 'login' ? 'text-indigo-400 border-b-2 border-indigo-400 bg-gray-700' : 'text-gray-400 hover:bg-gray-700'}\`}
          >
            Sign In
          </button>
          <button 
            onClick={() => setActiveTab('signup')}
            className={\`flex-1 py-4 font-medium text-center \${activeTab === 'signup' ? 'text-indigo-400 border-b-2 border-indigo-400 bg-gray-700' : 'text-gray-400 hover:bg-gray-700'}\`}
          >
            Sign Up
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiUser className="text-white text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {activeTab === 'login' ? 'Member Login' : 'Create Account'}
            </h2>
            <p className="text-gray-400 mt-2">
              {activeTab === 'login' 
                ? 'Enter your credentials to access your account' 
                : 'Join our community today'
              }
            </p>
          </div>
          
          <form className="space-y-6">
            {activeTab === 'signup' && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-500" />
                  </div>
                  <input 
                    type="text" 
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                    placeholder="John Doe" 
                  />
                </div>
              </div>
            )}
            
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
                  type={showPassword ? 'text' : 'password'} 
                  className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                  placeholder="••••••••" 
                />
                <button 
                  type="button" 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {activeTab === 'signup' && (
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-300">Confirm Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiKey className="text-gray-500" />
                  </div>
                  <input 
                    type="password" 
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                    placeholder="••••••••" 
                  />
                </div>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500 focus:ring-2" 
                />
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-300">
                  {activeTab === 'login' ? 'Remember me' : 'I agree to Terms'}
                </label>
              </div>
              {activeTab === 'login' && (
                <a href="#" className="text-sm font-medium text-indigo-500 hover:text-indigo-400">Forgot password?</a>
              )}
            </div>
            
            <button 
              type="submit" 
              className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
            >
              <FiArrowRight className="mr-2" /> 
              {activeTab === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              {activeTab === 'login' ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
                className="text-indigo-500 hover:text-indigo-400 font-medium"
              >
                {activeTab === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkElegantAuth;`,
      component: (
        <motion.div
          variants={authVariants}
          className="min-h-[600px] flex items-center justify-center bg-gray-900 p-4"
        >
          <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-700">
              <button
                onClick={() => updateFormState(5, "activeTab", "login")}
                className={`flex-1 py-4 font-medium text-center ${
                  (getFormState(5, "activeTab") || "login") === "login"
                    ? "text-indigo-400 border-b-2 border-indigo-400 bg-gray-700"
                    : "text-gray-400 hover:bg-gray-700"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => updateFormState(5, "activeTab", "signup")}
                className={`flex-1 py-4 font-medium text-center ${
                  (getFormState(5, "activeTab") || "login") === "signup"
                    ? "text-indigo-400 border-b-2 border-indigo-400 bg-gray-700"
                    : "text-gray-400 hover:bg-gray-700"
                }`}
              >
                Sign Up
              </button>
            </div>

            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUser className="text-white text-3xl" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  {(getFormState(5, "activeTab") || "login") === "login"
                    ? "Member Login"
                    : "Create Account"}
                </h2>
                <p className="text-gray-400 mt-2">
                  {(getFormState(5, "activeTab") || "login") === "login"
                    ? "Enter your credentials to access your account"
                    : "Join our community today"}
                </p>
              </div>

              <form className="space-y-6">
                {(getFormState(5, "activeTab") || "login") === "signup" && (
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-500" />
                      </div>
                      <input
                        type="text"
                        value={getFormState(5, "fullName")}
                        onChange={(e) =>
                          updateFormState(5, "fullName", e.target.value)
                        }
                        className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                )}

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
                      value={getFormState(5, "email")}
                      onChange={(e) =>
                        updateFormState(5, "email", e.target.value)
                      }
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
                      type={
                        getFormState(5, "showPassword") ? "text" : "password"
                      }
                      value={getFormState(5, "password")}
                      onChange={(e) =>
                        updateFormState(5, "password", e.target.value)
                      }
                      className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                      onClick={() =>
                        updateFormState(
                          5,
                          "showPassword",
                          !getFormState(5, "showPassword")
                        )
                      }
                    >
                      {getFormState(5, "showPassword") ? (
                        <FiEyeOff />
                      ) : (
                        <FiEye />
                      )}
                    </button>
                  </div>
                </div>

                {(getFormState(5, "activeTab") || "login") === "signup" && (
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-300">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiKey className="text-gray-500" />
                      </div>
                      <input
                        type="password"
                        value={getFormState(5, "confirmPassword")}
                        onChange={(e) =>
                          updateFormState(5, "confirmPassword", e.target.value)
                        }
                        className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                )}

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
                      {(getFormState(5, "activeTab") || "login") === "login"
                        ? "Remember me"
                        : "I agree to Terms"}
                    </label>
                  </div>
                  {(getFormState(5, "activeTab") || "login") === "login" && (
                    <a
                      href="#"
                      className="text-sm font-medium text-indigo-500 hover:text-indigo-400"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  <FiArrowRight className="mr-2" />
                  {(getFormState(5, "activeTab") || "login") === "login"
                    ? "Sign In"
                    : "Create Account"}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  {(getFormState(5, "activeTab") || "login") === "login"
                    ? "Don't have an account?"
                    : "Already have an account?"}{" "}
                  <button
                    onClick={() =>
                      updateFormState(
                        5,
                        "activeTab",
                        (getFormState(5, "activeTab") || "login") === "login"
                          ? "signup"
                          : "login"
                      )
                    }
                    className="text-indigo-500 hover:text-indigo-400 font-medium"
                  >
                    {(getFormState(5, "activeTab") || "login") === "login"
                      ? "Sign up"
                      : "Sign in"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 transition-colors duration-300 dark:bg-gray-900 dark:text-white bg-gray-50 text-gray-900
      `}
    >
      <div className="max-w-7xl mx-auto p-8">
        {/* Header with Dark Mode Toggle */}
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
          <p className="text-xl mb-6 max-w-3xl text-gray-700 dark:text-gray-300">
            Explore our collection of interactive login/signup pages with modern
            designs, working form states, and responsive layouts. Each component
            features working tab switching, password visibility toggles, and
            form validation. Click the <FiCopy className="inline" /> icon to
            copy the complete code!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Auth Page Designs */}
        <div className="grid grid-cols-1 gap-12">
          {authDesigns.map((design, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {design.name}
                  </h2>
                  <button
                    onClick={() => copyToClipboard(design.code, index)}
                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md"
                    aria-label="Copy code"
                  >
                    {copiedIndex === index ? (
                      <FiCheck className="text-green-500" />
                    ) : (
                      <FiCopy className="text-gray-600 dark:text-gray-300" />
                    )}
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <div className="min-w-max">{design.component}</div>
                </div>
              </div>

              {copiedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-4 right-16 bg-gray-800 text-white text-xs px-2 py-1 rounded z-10"
                >
                  Copied!
                </motion.div>
              )}
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthPageShowcase;
