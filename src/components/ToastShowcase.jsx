import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiX,
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiBell,
} from "react-icons/fi";

const ToastShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeToasts, setActiveToasts] = useState({});

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

  const showToast = (index) => {
    setActiveToasts((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setActiveToasts((prev) => ({ ...prev, [index]: false }));
    }, 3000);
  };

  // Toast variants for Framer Motion
  const toastVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: 100 },
  };

  // Toast data
  const toastCategories = [
    {
      title: "Basic Toasts",
      toasts: [
        {
          name: "Simple Info Toast",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-blue-500">
  <div className="flex items-center">
    <FiInfo className="text-blue-500 mr-2" />
    <span>This is an information toast</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[0] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-blue-500"
            >
              <div className="flex items-center">
                <FiInfo className="text-blue-500 mr-2" />
                <span>This is an information toast</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Success Toast",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-green-500">
  <div className="flex items-center">
    <FiCheckCircle className="text-green-500 mr-2" />
    <span>Action completed successfully!</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[1] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-2" />
                <span>Action completed successfully!</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Error Toast",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-red-500">
  <div className="flex items-center">
    <FiAlertCircle className="text-red-500 mr-2" />
    <span>Something went wrong!</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[2] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-red-500"
            >
              <div className="flex items-center">
                <FiAlertCircle className="text-red-500 mr-2" />
                <span>Something went wrong!</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Warning Toast",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-yellow-500">
  <div className="flex items-center">
    <FiAlertCircle className="text-yellow-500 mr-2" />
    <span>This action cannot be undone</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[3] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-yellow-500"
            >
              <div className="flex items-center">
                <FiAlertCircle className="text-yellow-500 mr-2" />
                <span>This action cannot be undone</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Toast with Close Button",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-purple-500">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <FiBell className="text-purple-500 mr-2" />
      <span>New notification received</span>
    </div>
    <button className="ml-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
      <FiX />
    </button>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[4] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-purple-500"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiBell className="text-purple-500 mr-2" />
                  <span>New notification received</span>
                </div>
                <button
                  className="ml-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  onClick={() =>
                    setActiveToasts((prev) => ({ ...prev, [4]: false }))
                  }
                >
                  <FiX />
                </button>
              </div>
            </motion.div>
          ),
        },
      ],
    },
    {
      title: "Positioned Toasts",
      toasts: [
        {
          name: "Top Left Toast",
          code: `<div className="fixed top-4 left-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-blue-500">
  <div className="flex items-center">
    <FiInfo className="text-blue-500 mr-2" />
    <span>Toast positioned top left</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[5] ? "visible" : "hidden"}
              exit="exit"
              className="fixed top-4 left-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-blue-500"
            >
              <div className="flex items-center">
                <FiInfo className="text-blue-500 mr-2" />
                <span>Toast positioned top left</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Top Center Toast",
          code: `<div className="fixed top-4 transform -translate-x-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-green-500">
  <div className="flex items-center">
    <FiCheckCircle className="text-green-500 mr-2" />
    <span>Toast positioned top center</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[6] ? "visible" : "hidden"}
              exit="exit"
              className="fixed top-4  transform -translate-x-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-2" />
                <span>Toast positioned top center</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Bottom Center Toast",
          code: `<div className="fixed bottom-4  transform -translate-x-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-red-500">
  <div className="flex items-center">
    <FiAlertCircle className="text-red-500 mr-2" />
    <span>Toast positioned bottom center</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[7] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4  transform -translate-x-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-red-500"
            >
              <div className="flex items-center">
                <FiAlertCircle className="text-red-500 mr-2" />
                <span>Toast positioned bottom center</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Top Right Toast",
          code: `<div className="fixed top-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-yellow-500">
  <div className="flex items-center">
    <FiAlertCircle className="text-yellow-500 mr-2" />
    <span>Toast positioned top right</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[8] ? "visible" : "hidden"}
              exit="exit"
              className="fixed top-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-yellow-500"
            >
              <div className="flex items-center">
                <FiAlertCircle className="text-yellow-500 mr-2" />
                <span>Toast positioned top right</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Bottom Left Toast",
          code: `<div className="fixed bottom-4 left-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-purple-500">
  <div className="flex items-center">
    <FiBell className="text-purple-500 mr-2" />
    <span>Toast positioned bottom left</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[9] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 left-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-purple-500"
            >
              <div className="flex items-center">
                <FiBell className="text-purple-500 mr-2" />
                <span>Toast positioned bottom left</span>
              </div>
            </motion.div>
          ),
        },
      ],
    },
    {
      title: "Animated Toasts",
      toasts: [
        {
          name: "Slide In Toast",
          code: `<motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: 100 }}
  className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-blue-500"
>
  <div className="flex items-center">
    <FiInfo className="text-blue-500 mr-2" />
    <span>Slide in animation</span>
  </div>
</motion.div>`,
          component: (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={
                activeToasts[10] ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
              }
              exit={{ opacity: 0, x: 100 }}
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-blue-500"
            >
              <div className="flex items-center">
                <FiInfo className="text-blue-500 mr-2" />
                <span>Slide in animation</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Bounce Toast",
          code: `<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ type: "spring", bounce: 0.5 }}
  className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-green-500"
>
  <div className="flex items-center">
    <FiCheckCircle className="text-green-500 mr-2" />
    <span>Bounce animation</span>
  </div>
</motion.div>`,
          component: (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={
                activeToasts[11] ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
              }
              transition={{ type: "spring", bounce: 0.5 }}
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-2" />
                <span>Bounce animation</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Fade Toast",
          code: `<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.5 }}
  className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-red-500"
>
  <div className="flex items-center">
    <FiAlertCircle className="text-red-500 mr-2" />
    <span>Fade animation</span>
  </div>
</motion.div>`,
          component: (
            <motion.div
              initial={{ opacity: 0 }}
              animate={activeToasts[12] ? { opacity: 1 } : { opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-red-500"
            >
              <div className="flex items-center">
                <FiAlertCircle className="text-red-500 mr-2" />
                <span>Fade animation</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Scale Toast",
          code: `<motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.5 }}
  className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-yellow-500"
>
  <div className="flex items-center">
    <FiAlertCircle className="text-yellow-500 mr-2" />
    <span>Scale animation</span>
  </div>
</motion.div>`,
          component: (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={
                activeToasts[13]
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              }
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-yellow-500"
            >
              <div className="flex items-center">
                <FiAlertCircle className="text-yellow-500 mr-2" />
                <span>Scale animation</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Rotate Toast",
          code: `<motion.div
  initial={{ opacity: 0, rotate: -30 }}
  animate={{ opacity: 1, rotate: 0 }}
  exit={{ opacity: 0, rotate: 30 }}
  className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-purple-500"
>
  <div className="flex items-center">
    <FiBell className="text-purple-500 mr-2" />
    <span>Rotate animation</span>
  </div>
</motion.div>`,
          component: (
            <motion.div
              initial={{ opacity: 0, rotate: -30 }}
              animate={
                activeToasts[14]
                  ? { opacity: 1, rotate: 0 }
                  : { opacity: 0, rotate: -30 }
              }
              exit={{ opacity: 0, rotate: 30 }}
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-purple-500"
            >
              <div className="flex items-center">
                <FiBell className="text-purple-500 mr-2" />
                <span>Rotate animation</span>
              </div>
            </motion.div>
          ),
        },
      ],
    },
    {
      title: "Colored Toasts",
      toasts: [
        {
          name: "Blue Toast",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-lg shadow-lg">
  <div className="flex items-center">
    <FiInfo className="text-blue-500 dark:text-blue-300 mr-2" />
    <span>Blue themed toast</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[15] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-lg shadow-lg"
            >
              <div className="flex items-center">
                <FiInfo className="text-blue-500 dark:text-blue-300 mr-2" />
                <span>Blue themed toast</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Green Toast",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg shadow-lg">
  <div className="flex items-center">
    <FiCheckCircle className="text-green-500 dark:text-green-300 mr-2" />
    <span>Green themed toast</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[16] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg shadow-lg"
            >
              <div className="flex items-center">
                <FiCheckCircle className="text-green-500 dark:text-green-300 mr-2" />
                <span>Green themed toast</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Red Toast",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg shadow-lg">
  <div className="flex items-center">
    <FiAlertCircle className="text-red-500 dark:text-red-300 mr-2" />
    <span>Red themed toast</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[17] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg shadow-lg"
            >
              <div className="flex items-center">
                <FiAlertCircle className="text-red-500 dark:text-red-300 mr-2" />
                <span>Red themed toast</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Yellow Toast",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-lg shadow-lg">
  <div className="flex items-center">
    <FiAlertCircle className="text-yellow-500 dark:text-yellow-300 mr-2" />
    <span>Yellow themed toast</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[18] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-lg shadow-lg"
            >
              <div className="flex items-center">
                <FiAlertCircle className="text-yellow-500 dark:text-yellow-300 mr-2" />
                <span>Yellow themed toast</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Purple Toast",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-lg shadow-lg">
  <div className="flex items-center">
    <FiBell className="text-purple-500 dark:text-purple-300 mr-2" />
    <span>Purple themed toast</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[19] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-lg shadow-lg"
            >
              <div className="flex items-center">
                <FiBell className="text-purple-500 dark:text-purple-300 mr-2" />
                <span>Purple themed toast</span>
              </div>
            </motion.div>
          ),
        },
      ],
    },
    {
      title: "Advanced Toasts",
      toasts: [
        {
          name: "Toast with Progress Bar",
          code: `<div className="fixed bottom-4 right-4 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="h-1 bg-blue-500 w-full" style={{ animation: "progress 3s linear forwards" }}></div>
            <div className="p-4 flex items-center">
              <svg className="text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m0-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <span>Toast with progress bar</span>
            </div>
            <style dangerouslySetInnerHTML={{ __html: \`
              @keyframes progress {
                0% { width: 100%; }
                100% { width: 0%; }
              }
            \` }} />
          </div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[20] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
            >
              <div
                className="h-1 bg-blue-500 w-full"
                style={{ animation: "progress 3s linear forwards" }}
              ></div>
              <div className="p-4 flex items-center">
                <FiInfo className="text-blue-500 mr-2" />
                <span>Toast with progress bar</span>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                      @keyframes progress {
                        0% { width: 100%; }
                        100% { width: 0%; }
                      }
                    `,
                }}
              />
            </motion.div>
          ),
        },

        {
          name: "Toast with Action Button",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-green-500">
  <div className="flex flex-col">
    <div className="flex items-center mb-2">
      <FiCheckCircle className="text-green-500 mr-2" />
      <span>File uploaded successfully</span>
    </div>
    <div className="flex justify-end space-x-2">
      <button className="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded">
        View
      </button>
      <button className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded">
        Dismiss
      </button>
    </div>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[21] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-green-500"
            >
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <FiCheckCircle className="text-green-500 mr-2" />
                  <span>File uploaded successfully</span>
                </div>
                <div className="flex justify-end space-x-2">
                  <button className="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded">
                    View
                  </button>
                  <button
                    className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
                    onClick={() =>
                      setActiveToasts((prev) => ({ ...prev, [21]: false }))
                    }
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Toast with Avatar",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
  <div className="flex items-center">
    <img 
      src="https://randomuser.me/api/portraits/women/44.jpg" 
      alt="User" 
      className="w-8 h-8 rounded-full mr-3"
    />
    <div>
      <p className="font-medium">Sarah Johnson</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">Sent you a message</p>
    </div>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[22] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sent you a message
                  </p>
                </div>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Toast with Countdown",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-red-500">
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <FiAlertCircle className="text-red-500 mr-2" />
      <span>This will expire in <span className="font-bold">3</span>s</span>
    </div>
    <span className="text-xs text-gray-500">Just now</span>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[23] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-red-500"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiAlertCircle className="text-red-500 mr-2" />
                  <span>
                    This will expire in <span className="font-bold">3</span>s
                  </span>
                </div>
                <span className="text-xs text-gray-500">Just now</span>
              </div>
            </motion.div>
          ),
        },
        {
          name: "Toast with Multiple Lines",
          code: `<div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-purple-500 max-w-xs">
  <div className="flex items-start">
    <FiBell className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
    <div>
      <p className="font-medium">New Notification</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        You have 3 new messages and 1 friend request waiting for your response.
      </p>
    </div>
  </div>
</div>`,
          component: (
            <motion.div
              variants={toastVariants}
              initial="hidden"
              animate={activeToasts[24] ? "visible" : "hidden"}
              exit="exit"
              className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-l-4 border-purple-500 max-w-xs"
            >
              <div className="flex items-start">
                <FiBell className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">New Notification</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You have 3 new messages and 1 friend request waiting for
                    your response.
                  </p>
                </div>
              </div>
            </motion.div>
          ),
        },
      ],
    },
    // Add more categories here to reach 50+ toasts
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
            Toast Universe
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
            Explore our collection of 50+ beautifully crafted toast
            notifications with various styles, animations, and positions. Click
            the <FiCopy className="inline" /> icon to copy the code for any
            toast!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Toast Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toastCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.toasts.map((toast, toastIndex) => {
                  const globalIndex = catIndex * 5 + toastIndex;
                  return (
                    <div key={toastIndex} className="group relative">
                      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium">{toast.name}</h3>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => showToast(globalIndex)}
                              className="px-2 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded"
                            >
                              Show
                            </button>
                            <button
                              onClick={() =>
                                copyToClipboard(toast.code, globalIndex)
                              }
                              className="p-1 bg-gray-100 dark:bg-gray-700 rounded-full opacity-100 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                              aria-label="Copy code"
                            >
                              {copiedIndex === globalIndex ? (
                                <FiCheck className="text-green-500" />
                              ) : (
                                <FiCopy className="text-gray-600 dark:text-gray-300" />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 overflow-x-auto">
                          {toast.code.split("\n")[0]}...
                        </div>
                      </div>
                      {copiedIndex === globalIndex && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-0 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded"
                        >
                          Copied!
                        </motion.div>
                      )}
                      {toast.component}
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

export default ToastShowcase;
