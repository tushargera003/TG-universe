import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiEye,
  FiEyeOff,
  FiSearch,
  FiUser,
  FiMail,
  FiLock,
  FiCalendar,
  FiPhone,
  FiCreditCard,
  FiDollarSign,
  FiPercent,
  FiHash,
  FiMapPin,
} from "react-icons/fi";

const InputShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValues, setInputValues] = useState({});

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

  const handleInputChange = (name, value) => {
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Input variants for Framer Motion
  const inputVariants = {
    hover: { scale: 1.01 },
    focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)" },
  };

  // Input categories
  const inputCategories = [
    {
      title: "Basic Inputs",
      inputs: [
        {
          name: "Simple Text Input",
          code: `<input 
  type="text" 
  placeholder="Enter your name" 
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
/>`,
          component: (
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={inputValues["simpleText"] || ""}
              onChange={(e) => handleInputChange("simpleText", e.target.value)}
            />
          ),
        },
        {
          name: "Underline Input",
          code: `<input 
  type="text" 
  placeholder="Search something..." 
  className="w-full px-2 py-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent transition-all duration-300"
/>`,
          component: (
            <input
              type="text"
              placeholder="Search something..."
              className="w-full px-2 py-1 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent transition-all duration-300"
              value={inputValues["underlineInput"] || ""}
              onChange={(e) =>
                handleInputChange("underlineInput", e.target.value)
              }
            />
          ),
        },
        {
          name: "Rounded Full Input",
          code: `<input 
  type="text" 
  placeholder="Type something..." 
  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
/>`,
          component: (
            <input
              type="text"
              placeholder="Type something..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              value={inputValues["roundedFull"] || ""}
              onChange={(e) => handleInputChange("roundedFull", e.target.value)}
            />
          ),
        },
        {
          name: "Glass Morphism Input",
          code: `<input 
  type="text" 
  placeholder="Glass effect..." 
  className="w-full px-4 py-2 bg-gray-900 bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-white placeholder-opacity-70 transition-all duration-300"
/>`,
          component: (
            <input
              type="text"
              placeholder="Glass effect..."
              className="w-full px-4 py-2 bg-gray-900 bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-white placeholder-opacity-70 transition-all duration-300"
              value={inputValues["glassInput"] || ""}
              onChange={(e) => handleInputChange("glassInput", e.target.value)}
            />
          ),
        },
        {
          name: "Neumorphic Input",
          code: `<input 
  type="text" 
  placeholder="Neumorphic design" 
  className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-100 shadow-inset-sm focus:outline-none focus:shadow-inset-md transition-all duration-200 dark:bg-gray-700 dark:border-gray-700"
/>`,
          component: (
            <input
              type="text"
              placeholder="Neumorphic design"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-100 shadow-inset-sm focus:outline-none focus:shadow-inset-md transition-all duration-200 dark:bg-gray-700 dark:border-gray-700"
              value={inputValues["neumorphic"] || ""}
              onChange={(e) => handleInputChange("neumorphic", e.target.value)}
            />
          ),
        },
      ],
    },
    {
      title: "Input with Icons",
      inputs: [
        {
          name: "Left Icon Input",
          code: `<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <FiUser className="text-gray-400" />
  </div>
  <input 
    type="text" 
    placeholder="Username" 
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
</div>`,
          component: (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={inputValues["leftIcon"] || ""}
                onChange={(e) => handleInputChange("leftIcon", e.target.value)}
              />
            </div>
          ),
        },
        {
          name: "Right Icon Input",
          code: `<div className="relative">
  <input 
    type="text" 
    placeholder="Search..." 
    className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
    <FiSearch className="text-gray-400 hover:text-gray-600 cursor-pointer" />
  </div>
</div>`,
          component: (
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={inputValues["rightIcon"] || ""}
                onChange={(e) => handleInputChange("rightIcon", e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <FiSearch className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div>
            </div>
          ),
        },
        {
          name: "Both Side Icons",
          code: `<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <FiMail className="text-gray-400" />
  </div>
  <input 
    type="email" 
    placeholder="Email address" 
    className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
    <span className="text-gray-400">@gmail.com</span>
  </div>
</div>`,
          component: (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={inputValues["bothIcons"] || ""}
                onChange={(e) => handleInputChange("bothIcons", e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-400">@gmail.com</span>
              </div>
            </div>
          ),
        },
        {
          name: "Password with Toggle",
          code: `<div className="relative">
  <input 
    type={showPassword ? "text" : "password"} 
    placeholder="Password" 
    className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
    {showPassword ? (
      <FiEyeOff 
        className="text-gray-400 hover:text-gray-600 cursor-pointer" 
        onClick={togglePasswordVisibility}
      />
    ) : (
      <FiEye 
        className="text-gray-400 hover:text-gray-600 cursor-pointer" 
        onClick={togglePasswordVisibility}
      />
    )}
  </div>
</div>`,
          component: (
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={inputValues["passwordToggle"] || ""}
                onChange={(e) =>
                  handleInputChange("passwordToggle", e.target.value)
                }
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {showPassword ? (
                  <FiEyeOff
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FiEye
                    className="text-gray-400 hover:text-gray-600 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>
          ),
        },
        {
          name: "Icon Inside Input",
          code: `<div className="relative">
  <input 
    type="text" 
    placeholder="Search products..." 
    className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
  />
  <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
    <FiSearch className="text-gray-400" />
  </div>
</div>`,
          component: (
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                value={inputValues["iconInside"] || ""}
                onChange={(e) =>
                  handleInputChange("iconInside", e.target.value)
                }
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                <FiSearch className="text-gray-400" />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Specialized Inputs",
      inputs: [
        {
          name: "Email with Fixed Domain",
          code: `<div className="flex">
  <input 
    type="text" 
    placeholder="username" 
    className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
  <div className="w-1/2 px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg flex items-center">
    @example.com
  </div>
</div>`,
          component: (
            <div className="flex">
              <input
                type="text"
                placeholder="username"
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={inputValues["emailFixed"] || ""}
                onChange={(e) =>
                  handleInputChange("emailFixed", e.target.value)
                }
              />
              <div className="w-1/2 px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg flex items-center dark:bg-gray-700 dark:border-gray-600">
                @example.com
              </div>
            </div>
          ),
        },
        {
          name: "Currency Input",
          code: `<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <FiDollarSign className="text-gray-400" />
  </div>
  <input 
    type="number" 
    placeholder="0.00" 
    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
    <span className="text-gray-400">USD</span>
  </div>
</div>`,
          component: (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiDollarSign className="text-gray-400" />
              </div>
              <input
                type="number"
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={inputValues["currency"] || ""}
                onChange={(e) => handleInputChange("currency", e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-400">USD</span>
              </div>
            </div>
          ),
        },
        {
          name: "Percentage Input",
          code: `<div className="relative">
  <input 
    type="number" 
    placeholder="0" 
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
    <FiPercent className="text-gray-400" />
  </div>
</div>`,
          component: (
            <div className="relative">
              <input
                type="number"
                placeholder="0"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={inputValues["percentage"] || ""}
                onChange={(e) =>
                  handleInputChange("percentage", e.target.value)
                }
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FiPercent className="text-gray-400" />
              </div>
            </div>
          ),
        },
        {
          name: "Phone Number Input",
          code: `<div className="flex">
  <select className="w-1/4 px-2 py-2 bg-gray-100 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:bg-gray-700 dark:border-gray-600">
    <option>+1</option>
    <option>+44</option>
    <option>+91</option>
  </select>
  <input 
    type="tel" 
    placeholder="Phone number" 
    className="w-3/4 px-4 py-2 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
</div>`,
          component: (
            <div className="flex">
              <select className="w-1/4 px-2 py-2 bg-gray-100 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:bg-gray-700 dark:border-gray-600">
                <option>+1</option>
                <option>+44</option>
                <option>+91</option>
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-3/4 px-4 py-2 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={inputValues["phoneNumber"] || ""}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
              />
            </div>
          ),
        },
        {
          name: "Credit Card Input",
          code: `<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <FiCreditCard className="text-gray-400" />
  </div>
  <input 
    type="text" 
    placeholder="Card number" 
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
</div>`,
          component: (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCreditCard className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Card number"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={inputValues["creditCard"] || ""}
                onChange={(e) =>
                  handleInputChange("creditCard", e.target.value)
                }
              />
            </div>
          ),
        },
      ],
    },
    {
      title: "Fancy Inputs",
      inputs: [
        {
          name: "Gradient Border Input",
          code: `<div className="relative p-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
  <input 
    type="text" 
    placeholder="Gradient border" 
    className="w-full px-4 py-2 bg-white dark:bg-gray-900 rounded-md focus:outline-none transition-all duration-200"
  />
</div>`,
          component: (
            <div className="relative p-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
              <input
                type="text"
                placeholder="Gradient border"
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 rounded-md focus:outline-none transition-all duration-200"
                value={inputValues["gradientBorder"] || ""}
                onChange={(e) =>
                  handleInputChange("gradientBorder", e.target.value)
                }
              />
            </div>
          ),
        },
        {
          name: "Animated Label Input",
          code: `<div className="relative">
  <input 
    type="text" 
    id="animatedLabel" 
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer transition-all duration-200"
    placeholder=" "
  />
  <label 
    htmlFor="animatedLabel" 
    className="absolute left-3 top-2 px-1 text-gray-500 bg-white dark:bg-gray-900 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base"
  >
    Animated Label
  </label>
</div>`,
          component: (
            <div className="relative">
              <input
                type="text"
                id="animatedLabel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer transition-all duration-200"
                placeholder=" "
                value={inputValues["animatedLabel"] || ""}
                onChange={(e) =>
                  handleInputChange("animatedLabel", e.target.value)
                }
              />
              <label
                htmlFor="animatedLabel"
                className="absolute left-3 top-2 px-1 text-gray-500 bg-white dark:bg-gray-900 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base"
              >
                Animated Label
              </label>
            </div>
          ),
        },
        {
          name: "Floating Label Input",
          code: `<div className="relative">
  <input 
    type="text" 
    id="floatingLabel" 
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer transition-all duration-200"
    placeholder=" "
  />
  <label 
    htmlFor="floatingLabel" 
    className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-white dark:peer-focus:bg-gray-900 peer-focus:px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
  >
    Floating Label
  </label>
</div>`,
          component: (
            <div className="relative">
              <input
                type="text"
                id="floatingLabel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer transition-all duration-200"
                placeholder=" "
                value={inputValues["floatingLabel"] || ""}
                onChange={(e) =>
                  handleInputChange("floatingLabel", e.target.value)
                }
              />
              <label
                htmlFor="floatingLabel"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-white dark:peer-focus:bg-gray-900 peer-focus:px-1 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
              >
                Floating Label
              </label>
            </div>
          ),
        },
        {
          name: "Material Design Input",
          code: `<div className="relative border-b-2 border-gray-300 focus-within:border-blue-500 transition-all duration-300">
  <input 
    type="text" 
    id="materialInput" 
    className="block w-full px-0 py-2 bg-transparent focus:outline-none focus:ring-0 peer"
    placeholder=" "
  />
  <label 
    htmlFor="materialInput" 
    className="absolute top-2 left-0 text-gray-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base"
  >
    Material Design
  </label>
</div>`,
          component: (
            <div className="relative border-b-2 border-gray-300 focus-within:border-blue-500 transition-all duration-300 dark:border-gray-600">
              <input
                type="text"
                id="materialInput"
                className="block w-full px-0 py-2 bg-transparent focus:outline-none focus:ring-0 peer"
                placeholder=" "
                value={inputValues["materialDesign"] || ""}
                onChange={(e) =>
                  handleInputChange("materialDesign", e.target.value)
                }
              />
              <label
                htmlFor="materialInput"
                className="absolute top-2 left-0 text-gray-500 transition-all duration-300 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base dark:text-gray-400"
              >
                Material Design
              </label>
            </div>
          ),
        },
        {
          name: "Animated Underline Input",
          code: `<div className="relative">
  <input 
    type="text" 
    placeholder="Animated Underline" 
    className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
  />
  <span className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100"></span>
</div>`,
          component: (
            <div className="relative group">
              <input
                type="text"
                placeholder="Animated Underline"
                className="w-full px-4 py-2 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 dark:border-gray-600"
                value={inputValues["animatedUnderline"] || ""}
                onChange={(e) =>
                  handleInputChange("animatedUnderline", e.target.value)
                }
              />
              <span className="absolute bottom-0 left-0 h-0.5 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-300 group-focus-within:scale-x-100"></span>
            </div>
          ),
        },
      ],
    },
    {
      title: "Input with Validation",
      inputs: [
        {
          name: "Valid Input",
          code: `<div className="relative">
  <input 
    type="text" 
    placeholder="Valid input" 
    className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
  />
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </div>
</div>`,
          component: (
            <div className="relative">
              <input
                type="text"
                placeholder="Valid input"
                className="w-full px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                value={inputValues["validInput"] || ""}
                onChange={(e) =>
                  handleInputChange("validInput", e.target.value)
                }
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          ),
        },
        {
          name: "Error Input",
          code: `<div className="relative">
  <input 
    type="text" 
    placeholder="Error input" 
    className="w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
  />
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  </div>
  <p className="mt-1 text-sm text-red-600">This field is required</p>
</div>`,
          component: (
            <div className="relative">
              <input
                type="text"
                placeholder="Error input"
                className="w-full px-4 py-2 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                value={inputValues["errorInput"] || ""}
                onChange={(e) =>
                  handleInputChange("errorInput", e.target.value)
                }
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-1 text-sm text-red-600">
                This field is required
              </p>
            </div>
          ),
        },
        {
          name: "Warning Input",
          code: `<div className="relative">
  <input 
    type="text" 
    placeholder="Warning input" 
    className="w-full px-4 py-2 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
  />
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
    <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  </div>
  <p className="mt-1 text-sm text-yellow-600">Please check your input</p>
</div>`,
          component: (
            <div className="relative">
              <input
                type="text"
                placeholder="Warning input"
                className="w-full px-4 py-2 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                value={inputValues["warningInput"] || ""}
                onChange={(e) =>
                  handleInputChange("warningInput", e.target.value)
                }
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="mt-1 text-sm text-yellow-600">
                Please check your input
              </p>
            </div>
          ),
        },
        {
          name: "Character Counter",
          code: `<div className="relative">
  <textarea 
    placeholder="Type something..." 
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
    rows="3"
    maxLength="100"
    value={inputValues['charCounter'] || ''}
    onChange={(e) => handleInputChange('charCounter', e.target.value)}
  ></textarea>
  <div className="absolute bottom-2 right-2 text-xs text-gray-500">
    {inputValues['charCounter'] ? inputValues['charCounter'].length : 0}/100
  </div>
</div>`,
          component: (
            <div className="relative">
              <textarea
                placeholder="Type something..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none dark:border-gray-600"
                rows="3"
                maxLength="100"
                value={inputValues["charCounter"] || ""}
                onChange={(e) =>
                  handleInputChange("charCounter", e.target.value)
                }
              ></textarea>
              <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                {inputValues["charCounter"]
                  ? inputValues["charCounter"].length
                  : 0}
                /100
              </div>
            </div>
          ),
        },
        {
          name: "Password Strength Meter",
          code: `<div className="space-y-2">
  <div className="relative">
    <input 
      type="password" 
      placeholder="Create password" 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      value={inputValues['passwordStrength'] || ''}
      onChange={(e) => handleInputChange('passwordStrength', e.target.value)}
    />
  </div>
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div 
      className={\`h-2 rounded-full \${
        !inputValues['passwordStrength'] ? 'bg-gray-200' :
        inputValues['passwordStrength'].length < 4 ? 'bg-red-500' :
        inputValues['passwordStrength'].length < 8 ? 'bg-yellow-500' :
        'bg-green-500'
      }\`}
      style={{ width: \`\${Math.min(100, (inputValues['passwordStrength']?.length || 0) * 10)}%\`}}
    ></div>
  </div>
  <p className="text-xs text-gray-500">
    {!inputValues['passwordStrength'] ? 'Enter a password' :
     inputValues['passwordStrength'].length < 4 ? 'Weak' :
     inputValues['passwordStrength'].length < 8 ? 'Moderate' : 'Strong'}
  </p>
</div>`,
          component: (
            <div className="space-y-2">
              <div className="relative">
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:border-gray-600"
                  value={inputValues["passwordStrength"] || ""}
                  onChange={(e) =>
                    handleInputChange("passwordStrength", e.target.value)
                  }
                />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div
                  className={`h-2 rounded-full ${
                    !inputValues["passwordStrength"]
                      ? "bg-gray-200"
                      : inputValues["passwordStrength"].length < 4
                      ? "bg-red-500"
                      : inputValues["passwordStrength"].length < 8
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                  style={{
                    width: `${Math.min(
                      100,
                      (inputValues["passwordStrength"]?.length || 0) * 10
                    )}%`,
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {!inputValues["passwordStrength"]
                  ? "Enter a password"
                  : inputValues["passwordStrength"].length < 4
                  ? "Weak"
                  : inputValues["passwordStrength"].length < 8
                  ? "Moderate"
                  : "Strong"}
              </p>
            </div>
          ),
        },
      ],
    },
    {
      title: "Advanced Inputs",
      inputs: [
        {
          name: "Search with Dropdown",
          code: `<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <FiSearch className="text-gray-400" />
  </div>
  <input 
    type="text" 
    placeholder="Search with suggestions..." 
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
  {inputValues['searchDropdown'] && (
    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="py-1">
        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suggestion 1</div>
        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suggestion 2</div>
        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Suggestion 3</div>
      </div>
    </div>
  )}
</div>`,
          component: (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search with suggestions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:border-gray-600"
                value={inputValues["searchDropdown"] || ""}
                onChange={(e) =>
                  handleInputChange("searchDropdown", e.target.value)
                }
              />
              {inputValues["searchDropdown"] && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                  <div className="py-1">
                    <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                      Suggestion 1
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                      Suggestion 2
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                      Suggestion 3
                    </div>
                  </div>
                </div>
              )}
            </div>
          ),
        },
        {
          name: "Tags Input",
          code: `<div className="flex flex-wrap items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all duration-200 min-h-[42px]">
  {inputValues['tagsInput']?.split(',').filter(tag => tag.trim()).map((tag, index) => (
    <div key={index} className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
      {tag.trim()}
      <button 
        type="button" 
        className="ml-1 text-blue-500 hover:text-blue-700"
        onClick={() => {
          const tags = inputValues['tagsInput'].split(',').filter(t => t.trim() !== tag.trim());
          handleInputChange('tagsInput', tags.join(','));
        }}
      >
        ×
      </button>
    </div>
  ))}
  <input 
    type="text" 
    placeholder="Add tags..." 
    className="flex-grow min-w-[100px] outline-none bg-transparent"
    value={inputValues['tagsInputTemp'] || ''}
    onChange={(e) => handleInputChange('tagsInputTemp', e.target.value)}
    onKeyDown={(e) => {
      if (['Enter', ','].includes(e.key)) {
        e.preventDefault();
        const newTags = inputValues['tagsInput'] 
          ? \`\${inputValues['tagsInput']},${inputValues["tagsInputTemp"]}\` 
          : inputValues['tagsInputTemp'];
        handleInputChange('tagsInput', newTags);
        handleInputChange('tagsInputTemp', '');
      }
    }}
  />
</div>`,
          component: (
            <div className="flex flex-wrap items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all duration-200 min-h-[42px] dark:border-gray-600">
              {inputValues["tagsInput"]
                ?.split(",")
                .filter((tag) => tag.trim())
                .map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tag.trim()}
                    <button
                      type="button"
                      className="ml-1 text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-100"
                      onClick={() => {
                        const tags = inputValues["tagsInput"]
                          .split(",")
                          .filter((t) => t.trim() !== tag.trim());
                        handleInputChange("tagsInput", tags.join(","));
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              <input
                type="text"
                placeholder="Add tags..."
                className="flex-grow min-w-[100px] outline-none bg-transparent"
                value={inputValues["tagsInputTemp"] || ""}
                onChange={(e) =>
                  handleInputChange("tagsInputTemp", e.target.value)
                }
                onKeyDown={(e) => {
                  if (["Enter", ","].includes(e.key)) {
                    e.preventDefault();
                    const newTags = inputValues["tagsInput"]
                      ? `${inputValues["tagsInput"]},${inputValues["tagsInputTemp"]}`
                      : inputValues["tagsInputTemp"];
                    handleInputChange("tagsInput", newTags);
                    handleInputChange("tagsInputTemp", "");
                  }
                }}
              />
            </div>
          ),
        },
        {
          name: "Autocomplete Input",
          code: `<div className="relative">
  <input 
    type="text" 
    placeholder="Start typing..." 
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
    value={inputValues['autocomplete'] || ''}
    onChange={(e) => handleInputChange('autocomplete', e.target.value)}
  />
  {inputValues['autocomplete'] && (
    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
      {['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape']
        .filter(item => item.toLowerCase().includes(inputValues['autocomplete'].toLowerCase()))
        .map((item, index) => (
          <div 
            key={index} 
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleInputChange('autocomplete', item)}
          >
            {item}
          </div>
        ))
      }
    </div>
  )}
</div>`,
          component: (
            <div className="relative">
              <input
                type="text"
                placeholder="Start typing..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:border-gray-600"
                value={inputValues["autocomplete"] || ""}
                onChange={(e) =>
                  handleInputChange("autocomplete", e.target.value)
                }
              />
              {inputValues["autocomplete"] && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto dark:bg-gray-800 dark:border-gray-700">
                  {[
                    "Apple",
                    "Banana",
                    "Cherry",
                    "Date",
                    "Elderberry",
                    "Fig",
                    "Grape",
                  ]
                    .filter((item) =>
                      item
                        .toLowerCase()
                        .includes(inputValues["autocomplete"].toLowerCase())
                    )
                    .map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleInputChange("autocomplete", item)}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              )}
            </div>
          ),
        },
        {
          name: "Range Slider",
          code: `<div className="space-y-2">
  <input 
    type="range" 
    min="0" 
    max="100" 
    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
    value={inputValues['rangeSlider'] || '50'}
    onChange={(e) => handleInputChange('rangeSlider', e.target.value)}
  />
  <div className="flex justify-between text-sm text-gray-500">
    <span>0</span>
    <span>50</span>
    <span>100</span>
  </div>
  <div className="text-center font-medium">
    Value: {inputValues['rangeSlider'] || '50'}
  </div>
</div>`,
          component: (
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500 dark:bg-gray-700"
                value={inputValues["rangeSlider"] || "50"}
                onChange={(e) =>
                  handleInputChange("rangeSlider", e.target.value)
                }
              />
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <div className="text-center font-medium">
                Value: {inputValues["rangeSlider"] || "50"}
              </div>
            </div>
          ),
        },
        {
          name: "Color Picker",
          code: `<div className="flex items-center space-x-4">
  <input 
    type="color" 
    className="w-12 h-12 cursor-pointer bg-transparent"
    value={inputValues['colorPicker'] || '#3b82f6'}
    onChange={(e) => handleInputChange('colorPicker', e.target.value)}
  />
  <div className="flex-1">
    <input 
      type="text" 
      placeholder="Hex color" 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      value={inputValues['colorPicker'] || '#3b82f6'}
      onChange={(e) => handleInputChange('colorPicker', e.target.value)}
    />
  </div>
</div>`,
          component: (
            <div className="flex items-center space-x-4">
              <input
                type="color"
                className="w-12 h-12 cursor-pointer bg-transparent"
                value={inputValues["colorPicker"] || "#3b82f6"}
                onChange={(e) =>
                  handleInputChange("colorPicker", e.target.value)
                }
              />
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Hex color"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:border-gray-600"
                  value={inputValues["colorPicker"] || "#3b82f6"}
                  onChange={(e) =>
                    handleInputChange("colorPicker", e.target.value)
                  }
                />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Input Groups",
      inputs: [
        {
          name: "Addon Before",
          code: `<div className="flex">
  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
    https://
  </span>
  <input 
    type="text" 
    placeholder="yourdomain.com" 
    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
  />
</div>`,
          component: (
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-100 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
                https://
              </span>
              <input
                type="text"
                placeholder="yourdomain.com"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={inputValues["addonBefore"] || ""}
                onChange={(e) =>
                  handleInputChange("addonBefore", e.target.value)
                }
              />
            </div>
          ),
        },
        {
          name: "Addon After",
          code: `<div className="flex">
  <input 
    type="text" 
    placeholder="Amount" 
    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
  />
  <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-100 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
    USD
  </span>
</div>`,
          component: (
            <div className="flex">
              <input
                type="text"
                placeholder="Amount"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={inputValues["addonAfter"] || ""}
                onChange={(e) =>
                  handleInputChange("addonAfter", e.target.value)
                }
              />
              <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-100 text-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400">
                USD
              </span>
            </div>
          ),
        },
        {
          name: "Button Addon",
          code: `<div className="flex">
  <input 
    type="text" 
    placeholder="Search products..." 
    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
  />
  <button className="inline-flex items-center px-4 py-2 rounded-r-lg border border-l-0 border-gray-300 bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200">
    Search
  </button>
</div>`,
          component: (
            <div className="flex">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-l-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={inputValues["buttonAddon"] || ""}
                onChange={(e) =>
                  handleInputChange("buttonAddon", e.target.value)
                }
              />
              <button className="inline-flex items-center px-4 py-2 rounded-r-lg border border-l-0 border-gray-300 bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-200">
                Search
              </button>
            </div>
          ),
        },
        {
          name: "Dropdown Addon",
          code: `<div className="flex">
  <select className="w-1/4 px-3 py-2 bg-gray-100 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </select>
  <input 
    type="text" 
    placeholder="With dropdown" 
    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-lg border border-l-0 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
  />
</div>`,
          component: (
            <div className="flex">
              <select className="w-1/4 px-3 py-2 bg-gray-100 border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
              <input
                type="text"
                placeholder="With dropdown"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-lg border border-l-0 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                value={inputValues["dropdownAddon"] || ""}
                onChange={(e) =>
                  handleInputChange("dropdownAddon", e.target.value)
                }
              />
            </div>
          ),
        },
        {
          name: "Segmented Input",
          code: `<div className="flex border border-gray-300 rounded-lg overflow-hidden dark:border-gray-600">
  <input 
    type="text" 
    placeholder="First" 
    className="flex-1 px-3 py-2 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
    value={inputValues['segmented1'] || ''}
    onChange={(e) => handleInputChange('segmented1', e.target.value)}
  />
  <input 
    type="text" 
    placeholder="Middle" 
    className="flex-1 px-3 py-2 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
    value={inputValues['segmented2'] || ''}
    onChange={(e) => handleInputChange('segmented2', e.target.value)}
  />
  <input 
    type="text" 
    placeholder="Last" 
    className="flex-1 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
    value={inputValues['segmented3'] || ''}
    onChange={(e) => handleInputChange('segmented3', e.target.value)}
  />
</div>`,
          component: (
            <div className="flex border border-gray-300 rounded-lg overflow-hidden dark:border-gray-600">
              <input
                type="text"
                placeholder="First"
                className="flex-1 px-3 py-2 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                value={inputValues["segmented1"] || ""}
                onChange={(e) =>
                  handleInputChange("segmented1", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Middle"
                className="flex-1 px-3 py-2 border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                value={inputValues["segmented2"] || ""}
                onChange={(e) =>
                  handleInputChange("segmented2", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Last"
                className="flex-1 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                value={inputValues["segmented3"] || ""}
                onChange={(e) =>
                  handleInputChange("segmented3", e.target.value)
                }
              />
            </div>
          ),
        },
      ],
    },
    {
      title: "Special Input Types",
      inputs: [
        {
          name: "Date Picker",
          code: `<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <FiCalendar className="text-gray-400" />
  </div>
  <input 
    type="date" 
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
</div>`,
          component: (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-400" />
              </div>
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:border-gray-600"
                value={inputValues["datePicker"] || ""}
                onChange={(e) =>
                  handleInputChange("datePicker", e.target.value)
                }
              />
            </div>
          ),
        },
        {
          name: "Time Picker",
          code: `<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <FiCalendar className="text-gray-400" />
  </div>
  <input 
    type="time" 
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
  />
</div>`,
          component: (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-400" />
              </div>
              <input
                type="time"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:border-gray-600"
                value={inputValues["timePicker"] || ""}
                onChange={(e) =>
                  handleInputChange("timePicker", e.target.value)
                }
              />
            </div>
          ),
        },
        {
          name: "File Upload",
          code: `<div className="flex items-center justify-center w-full">
  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
      </svg>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    </div>
    <input 
      type="file" 
      className="hidden" 
      onChange={(e) => handleInputChange('fileUpload', e.target.files[0]?.name || '')}
    />
  </label>
</div>`,
          component: (
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    handleInputChange(
                      "fileUpload",
                      e.target.files[0]?.name || ""
                    )
                  }
                />
              </label>
            </div>
          ),
        },
        {
          name: "Toggle Switch",
          code: `<label className="relative inline-flex items-center cursor-pointer">
  <input 
    type="checkbox" 
    className="sr-only peer" 
    checked={inputValues['toggleSwitch'] === 'on'}
    onChange={(e) => handleInputChange('toggleSwitch', e.target.checked ? 'on' : 'off')}
  />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
    {inputValues['toggleSwitch'] === 'on' ? 'On' : 'Off'}
  </span>
</label>`,
          component: (
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={inputValues["toggleSwitch"] === "on"}
                onChange={(e) =>
                  handleInputChange(
                    "toggleSwitch",
                    e.target.checked ? "on" : "off"
                  )
                }
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 dark:bg-gray-700"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {inputValues["toggleSwitch"] === "on" ? "On" : "Off"}
              </span>
            </label>
          ),
        },
        {
          name: "Radio Group",
          code: `<div className="space-y-2">
  <div className="flex items-center">
    <input 
      type="radio" 
      id="option1" 
      name="radioGroup" 
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
      checked={inputValues['radioGroup'] === 'option1'}
      onChange={() => handleInputChange('radioGroup', 'option1')}
    />
    <label htmlFor="option1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Option 1
    </label>
  </div>
  <div className="flex items-center">
    <input 
      type="radio" 
      id="option2" 
      name="radioGroup" 
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
      checked={inputValues['radioGroup'] === 'option2'}
      onChange={() => handleInputChange('radioGroup', 'option2')}
    />
    <label htmlFor="option2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Option 2
    </label>
  </div>
  <div className="flex items-center">
    <input 
      type="radio" 
      id="option3" 
      name="radioGroup" 
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
      checked={inputValues['radioGroup'] === 'option3'}
      onChange={() => handleInputChange('radioGroup', 'option3')}
    />
    <label htmlFor="option3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Option 3
    </label>
  </div>
</div>`,
          component: (
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="option1"
                  name="radioGroup"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  checked={inputValues["radioGroup"] === "option1"}
                  onChange={() => handleInputChange("radioGroup", "option1")}
                />
                <label
                  htmlFor="option1"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Option 1
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="option2"
                  name="radioGroup"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  checked={inputValues["radioGroup"] === "option2"}
                  onChange={() => handleInputChange("radioGroup", "option2")}
                />
                <label
                  htmlFor="option2"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Option 2
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="option3"
                  name="radioGroup"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  checked={inputValues["radioGroup"] === "option3"}
                  onChange={() => handleInputChange("radioGroup", "option3")}
                />
                <label
                  htmlFor="option3"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Option 3
                </label>
              </div>
            </div>
          ),
        },
      ],
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
            Input Components Collection
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
            Explore our collection of meticulously crafted input components with
            various styles, functionalities, and designs. Click the{" "}
            <FiCopy className="inline" /> icon to copy the code for any input!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Input Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inputCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.inputs.map((input, btnIndex) => {
                  const globalIndex = catIndex * 5 + btnIndex;
                  return (
                    <div key={btnIndex} className="group relative">
                      <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        {input.name}
                      </div>
                      {input.component}
                      <button
                        onClick={() => copyToClipboard(input.code, globalIndex)}
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

export default InputShowcase;
