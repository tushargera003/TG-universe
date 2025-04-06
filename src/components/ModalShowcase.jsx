import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiCopy,
  FiCheck,
  FiFile,
  FiX,
  FiAlertCircle,
  FiInfo,
  FiCheckCircle,
  FiHelpCircle,
  FiStar,
  FiHeart,
  FiSettings,
  FiUser,
  FiLock,
  FiMail,
  FiCreditCard,
  FiShoppingCart,
  FiDownload,
  FiUpload,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiBell,
  FiMessageSquare,
  FiImage,
  FiVideo,
  FiMusic,
  FiMic,
  FiAward,
  FiGift,
  FiTruck,
  FiPackage,
  FiHome,
  FiCoffee,
  FiCamera,
  FiPrinter,
  FiWifi,
  FiBattery,
  FiBookmark,
  FiSkipBack,
  FiPlay,
  FiSkipForward,
  FiRepeat,
  FiShuffle,
  FiVolume2,
  FiPhone,
  FiPause,
  FiBluetooth,
  FiCloud,
  FiDatabase,
  FiCpu,
  FiHardDrive,
  FiMonitor,
  FiSmartphone,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
  FiThumbsUp,
  FiThumbsDown,
  FiShare2,
  FiTablet,
} from "react-icons/fi";

const ModalShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

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

  const openModal = (index) => {
    setActiveModal(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "auto";
  };

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideInVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  const scaleUpVariants = {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
    exit: { scale: 0.8 },
  };

  // Modal data - 50+ different modals
  const modalCategories = [
    {
      title: "Basic Modals",
      modals: [
        {
          name: "Simple Centered Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold">Modal Title</h3>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
        <FiX size={24} />
      </button>
    </div>
    <p className="mb-6">This is a simple centered modal with a title, close button, and content area.</p>
    <div className="flex justify-end space-x-3">
      <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
      <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">Confirm</button>
    </div>
  </div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Modal Title</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <p className="mb-6">
                  This is a simple centered modal with a title, close button,
                  and content area.
                </p>
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                    Cancel
                  </button>
                  <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">
                    Confirm
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Full-screen Modal",
          code: `<div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto">
  <div className="min-h-screen p-6">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold">Full-screen Modal</h2>
      <button onClick={closeModal} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
        <FiX size={24} />
      </button>
    </div>
    <div className="space-y-4">
      <p>This modal takes up the entire screen and is useful for complex forms or detailed content.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">Content Section 1</div>
        <div className="p-4 border rounded-lg">Content Section 2</div>
      </div>
    </div>
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-4 border-t flex justify-end space-x-3">
      <button className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-800">Back</button>
      <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">Continue</button>
    </div>
  </div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto">
              <div className="min-h-screen p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Full-screen Modal</h2>
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <div className="space-y-4">
                  <p>
                    This modal takes up the entire screen and is useful for
                    complex forms or detailed content.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      Content Section 1
                    </div>
                    <div className="p-4 border rounded-lg">
                      Content Section 2
                    </div>
                  </div>
                </div>
                <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 p-4 border-t flex justify-end space-x-3">
                  <button className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-800">
                    Back
                  </button>
                  <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Bottom Sheet Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
  <motion.div
    initial={{ y: '100%' }}
    animate={{ y: 0 }}
    exit={{ y: '100%' }}
    transition={{ type: 'spring', damping: 25 }}
    className="w-full bg-white dark:bg-gray-800 rounded-t-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto"
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold">Bottom Sheet</h3>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <FiX size={24} />
      </button>
    </div>
    <p className="mb-6">This modal slides up from the bottom of the screen, perfect for mobile interfaces.</p>
    <div className="space-y-3">
      {['Option 1', 'Option 2', 'Option 3'].map((option) => (
        <button key={option} className="w-full py-3 px-4 text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          {option}
        </button>
      ))}
    </div>
    <button className="w-full mt-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
      Confirm
    </button>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="w-full bg-white dark:bg-gray-800 rounded-t-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Bottom Sheet</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <p className="mb-6">
                  This modal slides up from the bottom of the screen, perfect
                  for mobile interfaces.
                </p>
                <div className="space-y-3">
                  {["Option 1", "Option 2", "Option 3"].map((option) => (
                    <button
                      key={option}
                      className="w-full py-3 px-4 text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                  Confirm
                </button>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Left Sidebar Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
  <motion.div
    initial={{ x: '-100%' }}
    animate={{ x: 0 }}
    exit={{ x: '-100%' }}
    transition={{ type: 'spring', damping: 25 }}
    className="w-full max-w-xs bg-white dark:bg-gray-800 h-full shadow-xl p-6 overflow-y-auto"
  >
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-xl font-semibold">Sidebar Menu</h3>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <FiX size={24} />
      </button>
    </div>
    <nav className="space-y-2">
      {['Dashboard', 'Profile', 'Settings', 'Messages', 'Notifications'].map((item) => (
        <a key={item} href="#" className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          {item}
        </a>
      ))}
    </nav>
    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
      <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
        Logout
      </button>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="w-full max-w-xs bg-white dark:bg-gray-800 h-full shadow-xl p-6 overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-semibold">Sidebar Menu</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <nav className="space-y-2">
                  {[
                    "Dashboard",
                    "Profile",
                    "Settings",
                    "Messages",
                    "Notifications",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                    Logout
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Right Slide-in Panel",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-hidden">
  <motion.div 
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    transition={{ type: 'spring', damping: 25 }}
    className="absolute top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-xl w-full max-w-md"
  >
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Slide-in Panel</h2>
        <button onClick={closeModal} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <FiX size={24} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <p className="mb-4">This modal slides in from the right side of the screen.</p>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-3 border rounded-lg">Item {i + 1}</div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 border-t flex justify-end space-x-3">
        <button className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-800">Back</button>
        <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">Continue</button>
      </div>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-hidden">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="absolute top-0 right-0 h-full bg-white dark:bg-gray-800 shadow-xl w-full max-w-md"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Slide-in Panel</h2>
                    <button
                      onClick={closeModal}
                      className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <p className="mb-4">
                      This modal slides in from the right side of the screen.
                    </p>
                    <div className="space-y-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="p-3 border rounded-lg">
                          Item {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 border-t flex justify-end space-x-3">
                    <button className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-800">
                      Back
                    </button>
                    <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">
                      Continue
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Popup Dialog",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={modalVariants}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6 text-center"
  >
    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
      <FiInfo className="h-6 w-6 text-blue-500 dark:text-blue-400" />
    </div>
    <h3 className="text-lg font-medium mb-2">Popup Dialog</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-6">
      This is a simple popup dialog with an icon and centered text.
    </p>
    <div className="flex justify-center space-x-3">
      <button
        onClick={closeModal}
        className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        Cancel
      </button>
      <button
        onClick={closeModal}
        className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
      >
        Confirm
      </button>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6 text-center"
              >
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <FiInfo className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">Popup Dialog</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This is a simple popup dialog with an icon and centered text.
                </p>
                <div className="flex justify-center space-x-3">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    Confirm
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Alert & Notification Modals",
      modals: [
        {
          name: "Success Alert",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6">
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
        <FiCheckCircle className="text-green-500 dark:text-green-400" size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Success!</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Your action was completed successfully.</p>
      <button 
        onClick={closeModal}
        className="px-6 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white w-full"
      >
        Continue
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                    <FiCheckCircle
                      className="text-green-500 dark:text-green-400"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Success!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Your action was completed successfully.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white w-full"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Error Alert",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6">
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
        <FiAlertCircle className="text-red-500 dark:text-red-400" size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Error Occurred!</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Something went wrong. Please try again.</p>
      <div className="flex space-x-3 w-full">
        <button 
          onClick={closeModal}
          className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 flex-1"
        >
          Cancel
        </button>
        <button 
          onClick={closeModal}
          className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white flex-1"
        >
          Try Again
        </button>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                    <FiAlertCircle
                      className="text-red-500 dark:text-red-400"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Error Occurred!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Something went wrong. Please try again.
                  </p>
                  <div className="flex space-x-3 w-full">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 flex-1"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white flex-1"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Warning Alert",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6">
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-4">
        <FiAlertCircle className="text-yellow-500 dark:text-yellow-400" size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Warning!</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">This action may have unintended consequences.</p>
      <div className="flex space-x-3 w-full">
        <button 
          onClick={closeModal}
          className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 flex-1"
        >
          Cancel
        </button>
        <button 
          onClick={closeModal}
          className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white flex-1"
        >
          Proceed
        </button>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-4">
                    <FiAlertCircle
                      className="text-yellow-500 dark:text-yellow-400"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Warning!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    This action may have unintended consequences.
                  </p>
                  <div className="flex space-x-3 w-full">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 flex-1"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-600 text-white flex-1"
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Info Notification",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6">
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
        <FiInfo className="text-blue-500 dark:text-blue-400" size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Information</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Here's some important information you should know about.</p>
      <button 
        onClick={closeModal}
        className="px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full"
      >
        Got it!
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <FiInfo
                      className="text-blue-500 dark:text-blue-400"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Information</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Here's some important information you should know about.
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white w-full"
                  >
                    Got it!
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Question Dialog",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6">
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
        <FiHelpCircle className="text-purple-500 dark:text-purple-400" size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Are you sure?</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Do you really want to perform this action?</p>
      <div className="flex space-x-3 w-full">
        <button 
          onClick={closeModal}
          className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 flex-1"
        >
          No
        </button>
        <button 
          onClick={closeModal}
          className="px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white flex-1"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-sm w-full p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                    <FiHelpCircle
                      className="text-purple-500 dark:text-purple-400"
                      size={32}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Are you sure?</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Do you really want to perform this action?
                  </p>
                  <div className="flex space-x-3 w-full">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 flex-1"
                    >
                      No
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 rounded-md bg-purple-500 hover:bg-purple-600 text-white flex-1"
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Toast Notification",
          code: `<div className="fixed top-4 right-4 z-50">
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-80 border-l-4 border-green-500 flex items-start"
  >
    <div className="flex-shrink-0">
      <FiCheckCircle className="h-6 w-6 text-green-500" />
    </div>
    <div className="ml-3">
      <h3 className="text-sm font-medium">Success</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
        Your changes have been saved successfully.
      </p>
    </div>
    <button
      onClick={closeModal}
      className="ml-auto -mx-1.5 -my-1.5 p-1.5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
    >
      <FiX className="h-5 w-5" />
    </button>
  </motion.div>
</div>`,
          component: (
            <div className="fixed top-4 right-4 z-50">
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-80 border-l-4 border-green-500 flex items-start"
              >
                <div className="flex-shrink-0">
                  <FiCheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium">Success</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Your changes have been saved successfully.
                  </p>
                </div>
                <button
                  onClick={closeModal}
                  className="ml-auto -mx-1.5 -my-1.5 p-1.5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Creative & Animated Modals",
      modals: [
        {
          name: "Gradient Background Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div 
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={modalVariants}
    className="rounded-xl shadow-xl max-w-md w-full overflow-hidden"
  >
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Gradient Border</h3>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <FiX size={24} />
          </button>
        </div>
        <p className="mb-6">This modal has a beautiful gradient border effect.</p>
        <div className="flex justify-end space-x-3">
          <button className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-700">Cancel</button>
          <button className="px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Accept
          </button>
        </div>
      </div>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="rounded-xl shadow-xl max-w-md w-full overflow-hidden"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">Gradient Border</h3>
                      <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        <FiX size={24} />
                      </button>
                    </div>
                    <p className="mb-6">
                      This modal has a beautiful gradient border effect.
                    </p>
                    <div className="flex justify-end space-x-3">
                      <button className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-700">
                        Cancel
                      </button>
                      <button className="px-4 py-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Glass Morphism Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={modalVariants}
    className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 rounded-xl shadow-xl max-w-md w-full p-6"
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold">Glass Effect</h3>
      <button onClick={closeModal} className="text-white dark:text-gray-300 hover:text-white/80">
        <FiX size={24} />
      </button>
    </div>
    <p className="mb-6 text-white dark:text-gray-300">This modal has a modern glass morphism effect with backdrop blur.</p>
    <div className="flex justify-end space-x-3">
      <button className="px-4 py-2 rounded border border-white/30 hover:bg-white/20 text-white">
        Cancel
      </button>
      <button className="px-4 py-2 rounded bg-white/30 hover:bg-white/40 text-gray-900 font-medium">
        Confirm
      </button>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="backdrop-blur-lg bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30 rounded-xl shadow-xl max-w-md w-full p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Glass Effect</h3>
                  <button
                    onClick={closeModal}
                    className="text-white dark:text-gray-300 hover:text-white/80"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <p className="mb-6 text-white dark:text-gray-300">
                  This modal has a modern glass morphism effect with backdrop
                  blur.
                </p>
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 rounded border border-white/30 hover:bg-white/20 text-white">
                    Cancel
                  </button>
                  <button className="px-4 py-2 rounded bg-white/30 hover:bg-white/40 text-gray-900 font-medium">
                    Confirm
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "3D Flip Animation",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div
    initial={{ rotateY: 90, opacity: 0 }}
    animate={{ rotateY: 0, opacity: 1 }}
    exit={{ rotateY: -90, opacity: 0 }}
    transition={{ type: 'spring', damping: 20 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold">3D Flip Effect</h3>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <FiX size={24} />
      </button>
    </div>
    <p className="mb-6">This modal has a cool 3D flip animation when opening and closing.</p>
    <div className="flex justify-end space-x-3">
      <button className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-700">Cancel</button>
      <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">Confirm</button>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">3D Flip Effect</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <p className="mb-6">
                  This modal has a cool 3D flip animation when opening and
                  closing.
                </p>
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-700">
                    Cancel
                  </button>
                  <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">
                    Confirm
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Bounce Animation Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div
    initial={{ scale: 0.7, opacity: 0 }}
    animate={{ 
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.6,
        duration: 0.8
      }
    }}
    exit={{ scale: 0.7, opacity: 0 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold">Bounce Effect</h3>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <FiX size={24} />
      </button>
    </div>
    <p className="mb-6">This modal has a playful bounce animation when it appears.</p>
    <div className="flex justify-end space-x-3">
      <button className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-700">Cancel</button>
      <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">Confirm</button>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.6,
                    duration: 0.8,
                  },
                }}
                exit={{ scale: 0.7, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Bounce Effect</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <p className="mb-6">
                  This modal has a playful bounce animation when it appears.
                </p>
                <div className="flex justify-end space-x-3">
                  <button className="px-4 py-2 rounded border hover:bg-gray-100 dark:hover:bg-gray-700">
                    Cancel
                  </button>
                  <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white">
                    Confirm
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Neon Glow Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={modalVariants}
    className="bg-gray-900 rounded-xl shadow-xl max-w-md w-full p-6 border border-purple-500/30 relative"
  >
    <div className="absolute inset-0 rounded-xl overflow-hidden">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20"></div>
    </div>
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-purple-400">Neon Glow</h3>
        <button onClick={closeModal} className="text-purple-400 hover:text-purple-300">
          <FiX size={24} />
        </button>
      </div>
      <p className="mb-6 text-gray-300">This modal has a futuristic neon glow effect.</p>
      <div className="flex justify-end space-x-3">
        <button className="px-4 py-2 rounded border border-purple-500/50 hover:bg-purple-500/10 text-purple-400">
          Cancel
        </button>
        <button className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white">
          Confirm
        </button>
      </div>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-gray-900 rounded-xl shadow-xl max-w-md w-full p-6 border border-purple-500/30 relative"
              >
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20"></div>
                </div>
                <div className="relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-purple-400">
                      Neon Glow
                    </h3>
                    <button
                      onClick={closeModal}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      <FiX size={24} />
                    </button>
                  </div>
                  <p className="mb-6 text-gray-300">
                    This modal has a futuristic neon glow effect.
                  </p>
                  <div className="flex justify-end space-x-3">
                    <button className="px-4 py-2 rounded border border-purple-500/50 hover:bg-purple-500/10 text-purple-400">
                      Cancel
                    </button>
                    <button className="px-4 py-2 rounded bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white">
                      Confirm
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Floating Action Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ 
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }}
    exit={{ y: 50, opacity: 0 }}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-xs w-full p-6"
  >
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 -mt-12 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
        <FiPlus className="text-white" size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">New Action</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">What would you like to create?</p>
      <div className="w-full space-y-3">
        {['Project', 'Document', 'Team', 'Task'].map((item) => (
          <button 
            key={item}
            className="w-full py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center"
          >
            <span className="mr-2">+</span> {item}
          </button>
        ))}
      </div>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                  },
                }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-xs w-full p-6"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 -mt-12 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <FiPlus className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">New Action</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    What would you like to create?
                  </p>
                  <div className="w-full space-y-3">
                    {["Project", "Document", "Team", "Task"].map((item) => (
                      <button
                        key={item}
                        className="w-full py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center"
                      >
                        <span className="mr-2">+</span> {item}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Form & Input Modals",
      modals: [
        {
          name: "Login Form Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={modalVariants}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
  >
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-bold">Welcome back</h3>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <FiX size={24} />
      </button>
    </div>
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="••••••••"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm">
            Remember me
          </label>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Sign in
      </button>
    </form>
    <div className="mt-6 text-center">
      <p className="text-sm">
        Don't have an account?{' '}
        <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
          Sign up
        </a>
      </p>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Welcome back</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium mb-1"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-600 hover:text-blue-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  >
                    Sign in
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm">
                    Don't have an account?{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-500 font-medium"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Signup Form Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={modalVariants}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
  >
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-bold">Create account</h3>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <FiX size={24} />
      </button>
    </div>
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="first-name" className="block text-sm font-medium mb-1">First name</label>
          <input
            type="text"
            id="first-name"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium mb-1">Last name</label>
          <input
            type="text"
            id="last-name"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
            placeholder="Doe"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="••••••••"
        />
        <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
      </div>
      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">Confirm password</label>
        <input
          type="password"
          id="confirm-password"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Create account
      </button>
    </form>
    <div className="mt-6 text-center">
      <p className="text-sm">
        Already have an account?{' '}
        <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
          Sign in
        </a>
      </p>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Create account</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium mb-1"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium mb-1"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium mb-1"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="••••••••"
                    />
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Must be at least 8 characters
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="confirm-password"
                      className="block text-sm font-medium mb-1"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      id="confirm-password"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="••••••••"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  >
                    Create account
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-500 font-medium"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Contact Form Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={modalVariants}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
  >
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-bold">Contact us</h3>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <FiX size={24} />
      </button>
    </div>
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Your name</label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email address</label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
        <input
          type="text"
          id="subject"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="How can we help?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="Your message here..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Send message
      </button>
    </form>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Contact us</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  >
                    Send message
                  </button>
                </form>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Payment Form Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={modalVariants}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
  >
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-bold">Payment</h3>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <FiX size={24} />
      </button>
    </div>
    <form className="space-y-4">
      <div>
        <label htmlFor="card-number" className="block text-sm font-medium mb-1">Card number</label>
        <div className="relative">
          <input
            type="text"
            id="card-number"
            className="w-full px-3 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
            placeholder="1234 5678 9012 3456"
          />
          <div className="absolute left-3 top-2.5">
            <FiCreditCard className="text-gray-400" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="expiry" className="block text-sm font-medium mb-1">Expiry date</label>
          <input
            type="text"
            id="expiry"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label htmlFor="cvc" className="block text-sm font-medium mb-1">CVC</label>
          <input
            type="text"
            id="cvc"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
            placeholder="CVC"
          />
        </div>
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name on card</label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="John Doe"
        />
      </div>
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Pay $99.00
        </button>
      </div>
    </form>
    <div className="mt-4 flex items-center justify-center space-x-2">
      <FiLock className="text-gray-400" />
      <span className="text-xs text-gray-500">Payments are secure and encrypted</span>
    </div>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Payment</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="card-number"
                      className="block text-sm font-medium mb-1"
                    >
                      Card number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="card-number"
                        className="w-full px-3 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                        placeholder="1234 5678 9012 3456"
                      />
                      <div className="absolute left-3 top-2.5">
                        <FiCreditCard className="text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="expiry"
                        className="block text-sm font-medium mb-1"
                      >
                        Expiry date
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvc"
                        className="block text-sm font-medium mb-1"
                      >
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name on card
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                    >
                      Pay $99.00
                    </button>
                  </div>
                </form>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <FiLock className="text-gray-400" />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Payments are secure and encrypted
                  </span>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Feedback Form Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={modalVariants}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
  >
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-2xl font-bold">Feedback</h3>
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <FiX size={24} />
      </button>
    </div>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-3">How would you rate your experience?</label>
        <div className="flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-yellow-100 dark:hover:bg-yellow-900 flex items-center justify-center"
            >
              <FiStar className="text-yellow-400" size={20} />
            </button>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="feedback" className="block text-sm font-medium mb-1">Your feedback</label>
        <textarea
          id="feedback"
          rows={4}
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="What did you like or dislike?"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Would you recommend us?</label>
        <div className="flex space-x-4">
          <label className="inline-flex items-center">
            <input type="radio" name="recommend" className="h-4 w-4 text-blue-600" />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="recommend" className="h-4 w-4 text-blue-600" />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Submit feedback
      </button>
    </form>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Feedback</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      How would you rate your experience?
                    </label>
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-yellow-100 dark:hover:bg-yellow-900 flex items-center justify-center"
                        >
                          <FiStar className="text-yellow-400" size={20} />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="feedback"
                      className="block text-sm font-medium mb-1"
                    >
                      Your feedback
                    </label>
                    <textarea
                      id="feedback"
                      rows={4}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                      placeholder="What did you like or dislike?"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Would you recommend us?
                    </label>
                    <div className="flex space-x-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="recommend"
                          className="h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="recommend"
                          className="h-4 w-4 text-blue-600"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  >
                    Submit feedback
                  </button>
                </form>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Newsletter Signup",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
  <motion.div
    initial="hidden"
    animate="visible"
    exit="exit"
    variants={modalVariants}
    className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6 text-center"
  >
    <div className="flex justify-end">
      <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
        <FiX size={24} />
      </button>
    </div>
    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
      <FiMail className="h-8 w-8 text-blue-500 dark:text-blue-400" />
    </div>
    <h3 className="text-2xl font-bold mb-2">Stay updated</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-6">
      Subscribe to our newsletter and never miss our latest news and updates.
    </p>
    <form className="space-y-4">
      <input
        type="email"
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
        placeholder="Your email address"
        required
      />
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
      >
        Subscribe
      </button>
    </form>
    <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
      We care about your data. Read our{' '}
      <a href="#" className="text-blue-600 hover:text-blue-500">
        Privacy Policy
      </a>.
    </p>
  </motion.div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6 text-center"
              >
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <FiMail className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Stay updated</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Subscribe to our newsletter and never miss our latest news and
                  updates.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                    placeholder="Your email address"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  We care about your data. Read our{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-500">
                    Privacy Policy
                  </a>
                  .
                </p>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Content & Media Modals",
      modals: [
        {
          name: "Image Gallery Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
  <div className="relative max-w-6xl w-full">
    <button 
      onClick={closeModal}
      className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
    >
      <FiX size={28} />
    </button>
    <div className="flex items-center justify-center">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        src="https://picsum.photos/200/300?random=1"
        alt="Gallery"
        className="max-h-[90vh] object-contain"
      />
    </div>
    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
      <div className="bg-black/50 rounded-full px-4 py-2 flex space-x-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <button
            key={item}
            className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/80 transition-colors"
          />
        ))}
      </div>
    </div>
    <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
      <FiChevronLeft size={24} />
    </button>
    <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
      <FiChevronRight size={24} />
    </button>
  </div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
              <div className="relative max-w-6xl w-full">
                <button
                  onClick={closeModal}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
                >
                  <FiX size={28} />
                </button>
                <div className="flex items-center justify-center">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src="https://picsum.photos/200/300?random=1"
                    alt="Gallery"
                    className="max-h-[90vh] object-contain"
                  />
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="bg-black/50 rounded-full px-4 py-2 flex space-x-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <button
                        key={item}
                        className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/80 transition-colors"
                      />
                    ))}
                  </div>
                </div>
                <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                  <FiChevronLeft size={24} />
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70">
                  <FiChevronRight size={24} />
                </button>
              </div>
            </div>
          ),
        },
        {
          name: "Video Player Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
  <div className="relative max-w-4xl w-full">
    <button 
      onClick={closeModal}
      className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
    >
      <FiX size={28} />
    </button>
    <div className="aspect-w-16 aspect-h-9 bg-black">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <h3 className="text-white text-lg font-medium">Video Title</h3>
      <div className="flex space-x-2">
        <button className="text-white hover:text-gray-300">
          <FiThumbsUp size={20} />
        </button>
        <button className="text-white hover:text-gray-300">
          <FiThumbsDown size={20} />
        </button>
        <button className="text-white hover:text-gray-300">
          <FiShare2 size={20} />
        </button>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
              <div className="relative max-w-4xl w-full">
                <button
                  onClick={closeModal}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
                >
                  <FiX size={28} />
                </button>
                <div className="aspect-w-16 aspect-h-9 bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <h3 className="text-white text-lg font-medium">
                    Video Title
                  </h3>
                  <div className="flex space-x-2">
                    <button className="text-white hover:text-gray-300">
                      <FiThumbsUp size={20} />
                    </button>
                    <button className="text-white hover:text-gray-300">
                      <FiThumbsDown size={20} />
                    </button>
                    <button className="text-white hover:text-gray-300">
                      <FiShare2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Product Quick View",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full overflow-hidden"
          >
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 z-10"
            >
              [Close Icon]
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                <img
                  src="https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Product"
                  className="max-h-96 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Premium Product</h3>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    <!-- Five stars shown here -->
                    <span className="text-yellow-400">★★★★★</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">(24 reviews)</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  This premium product will enhance your life in ways you never imagined. 
                  Made with high-quality materials and designed for maximum comfort.
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">$99.99</span>
                  <span className="ml-2 text-sm line-through text-gray-500">$129.99</span>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Color</label>
                  <div className="flex space-x-2">
                    <!-- Color buttons -->
                    <span className="w-8 h-8 rounded-full bg-red-500 border-2 border-transparent"></span>
                    <span className="w-8 h-8 rounded-full bg-blue-500 border-2 border-transparent"></span>
                    <span className="w-8 h-8 rounded-full bg-green-500 border-2 border-transparent"></span>
                    <span className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-transparent"></span>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <div className="flex flex-wrap gap-2">
                    <!-- Size buttons -->
                    <span className="px-4 py-2 border rounded">XS</span>
                    <span className="px-4 py-2 border rounded">S</span>
                    <span className="px-4 py-2 border rounded">M</span>
                    <span className="px-4 py-2 border rounded">L</span>
                    <span className="px-4 py-2 border rounded">XL</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>`,

          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full overflow-hidden"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 z-10"
                >
                  <FiX size={24} />
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6 flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Product"
                      className="max-h-96 object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">Premium Product</h3>
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FiStar key={star} className="text-yellow-400" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                        (24 reviews)
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      This premium product will enhance your life in ways you
                      never imagined. Made with high-quality materials and
                      designed for maximum comfort.
                    </p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold">$99.99</span>
                      {true && (
                        <span className="ml-2 text-sm line-through text-gray-500 dark:text-gray-400">
                          $129.99
                        </span>
                      )}
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">
                        Color
                      </label>
                      <div className="flex space-x-2">
                        {[
                          "bg-red-500",
                          "bg-blue-500",
                          "bg-green-500",
                          "bg-yellow-500",
                        ].map((color) => (
                          <button
                            key={color}
                            className={`w-8 h-8 rounded-full ${color} border-2 border-transparent hover:border-gray-300`}
                          ></button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">
                        Size
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["XS", "S", "M", "L", "XL"].map((size) => (
                          <button
                            key={size}
                            className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">
                      Add to cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ),

          // Add more creative modals here...
        },
        {
          name: "Article Preview Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-3xl w-full my-8"
    >
      <button 
        onClick={closeModal}
        className="fixed top-4 right-4 md:absolute md:top-6 md:right-6 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 z-10"
      >
        <FiX size={24} />
      </button>
      <img
        src="https://source.unsplash.com/random/1200x600?article"
        alt="Article"
        className="w-full h-64 object-cover rounded-t-xl"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>Published on June 15, 2023</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">The Future of Web Development</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
            Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
            rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna 
            non est bibendum non venenatis nisl tempor.
          </p>
          <p className="mb-4">
            Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper 
            est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, 
            commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
          </p>
          <h3 className="text-xl font-semibold mb-3">Key Trends to Watch</h3>
          <ul className="mb-4 pl-6 list-disc">
            <li className="mb-2">Artificial Intelligence integration</li>
            <li className="mb-2">Progressive Web Apps</li>
            <li className="mb-2">WebAssembly performance</li>
            <li className="mb-2">Serverless architectures</li>
          </ul>
          <p>
            In conclusion, the future of web development is bright and full of exciting 
            possibilities. As developers, we must stay adaptable and continue learning 
            to keep up with these rapid changes.
          </p>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://source.unsplash.com/random/100x100?person"
                alt="Author"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-medium">John Doe</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Senior Developer</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <FiShare2 />
              </button>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <FiBookmark />
              </button>
              <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                <FiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-3xl w-full my-8"
              >
                <button
                  onClick={closeModal}
                  className="fixed top-4 right-4 md:absolute md:top-6 md:right-6 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 z-10"
                >
                  <FiX size={24} />
                </button>
                <img
                  src="https://source.unsplash.com/random/1200x600?article"
                  alt="Article"
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>Published on June 15, 2023</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    The Future of Web Development
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam in dui mauris. Vivamus hendrerit arcu sed erat
                      molestie vehicula. Sed auctor neque eu tellus rhoncus ut
                      eleifend nibh porttitor. Ut in nulla enim. Phasellus
                      molestie magna non est bibendum non venenatis nisl tempor.
                    </p>
                    <p className="mb-4">
                      Suspendisse potenti. Sed egestas, ante et vulputate
                      volutpat, eros pede semper est, vitae luctus metus libero
                      eu augue. Morbi purus libero, faucibus adipiscing, commodo
                      quis, gravida id, est. Sed lectus. Praesent elementum
                      hendrerit tortor.
                    </p>
                    <h3 className="text-xl font-semibold mb-3">
                      Key Trends to Watch
                    </h3>
                    <ul className="mb-4 pl-6 list-disc">
                      <li className="mb-2">
                        Artificial Intelligence integration
                      </li>
                      <li className="mb-2">Progressive Web Apps</li>
                      <li className="mb-2">WebAssembly performance</li>
                      <li className="mb-2">Serverless architectures</li>
                    </ul>
                    <p>
                      In conclusion, the future of web development is bright and
                      full of exciting possibilities. As developers, we must
                      stay adaptable and continue learning to keep up with these
                      rapid changes.
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img
                          src="https://source.unsplash.com/random/100x100?person"
                          alt="Author"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium">John Doe</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Senior Developer
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                          <FiShare2 />
                        </button>
                        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                          <FiBookmark />
                        </button>
                        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                          <FiHeart />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Music Player Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full overflow-hidden"
    >
      <button 
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 z-10"
      >
        <FiX size={24} />
      </button>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 rounded-lg overflow-hidden mr-4">
            <img
              src="https://source.unsplash.com/random/300x300?album"
              alt="Album"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Favorite Song</h3>
            <p className="text-gray-600 dark:text-gray-300">Popular Artist</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">From: Best Album</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-2">
            <div className="h-1 bg-blue-500 rounded-full" style={{ width: '30%' }}></div>
          </div>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>1:23</span>
            <span>4:56</span>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-8 mb-6">
          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <FiSkipBack size={24} />
          </button>
          <button className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600">
            <FiPlay size={24} />
          </button>
          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <FiSkipForward size={24} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <FiHeart size={20} />
          </button>
          <div className="flex space-x-4">
            <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <FiRepeat size={20} />
            </button>
            <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <FiShuffle size={20} />
            </button>
          </div>
          <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <FiVolume2 size={20} />
          </button>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4">
        <h4 className="font-medium mb-2">Up Next</h4>
        <div className="space-y-3">
          {['Song One', 'Song Two', 'Song Three'].map((song) => (
            <div key={song} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded bg-gray-300 dark:bg-gray-600 mr-3"></div>
                <div>
                  <p className="text-sm font-medium">{song}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Artist</p>
                </div>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">3:45</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full overflow-hidden"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 z-10"
                >
                  <FiX size={24} />
                </button>
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-24 h-24 rounded-lg overflow-hidden mr-4">
                      <img
                        src="https://source.unsplash.com/random/300x300?album"
                        alt="Album"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Favorite Song</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Popular Artist
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        From: Best Album
                      </p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-2">
                      <div
                        className="h-1 bg-blue-500 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>1:23</span>
                      <span>4:56</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center space-x-8 mb-6">
                    <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                      <FiSkipBack size={24} />
                    </button>
                    <button className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600">
                      <FiPlay size={24} />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                      <FiSkipForward size={24} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                      <FiHeart size={20} />
                    </button>
                    <div className="flex space-x-4">
                      <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                        <FiRepeat size={20} />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                        <FiShuffle size={20} />
                      </button>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                      <FiVolume2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4">
                  <h4 className="font-medium mb-2">Up Next</h4>
                  <div className="space-y-3">
                    {["Song One", "Song Two", "Song Three"].map((song) => (
                      <div
                        key={song}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded bg-gray-300 dark:bg-gray-600 mr-3"></div>
                          <div>
                            <p className="text-sm font-medium">{song}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Artist
                            </p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          3:45
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Map Location Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full overflow-hidden"
    >
      <button 
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 z-10"
      >
        <FiX size={24} />
      </button>
      <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <FiMapPin className="mx-auto text-red-500" size={48} />
            <p className="mt-2 font-medium">Map would display here</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">Our Location</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          123 Main Street, Suite 100<br />
          New York, NY 10001
        </p>
        <div className="space-y-3">
          <div className="flex items-center">
            <FiClock className="text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-300">Mon-Fri: 9am - 6pm</span>
          </div>
          <div className="flex items-center">
            <FiPhone className="text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-300">(123) 456-7890</span>
          </div>
          <div className="flex items-center">
            <FiMail className="text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-300">info@example.com</span>
          </div>
        </div>
        <div className="mt-6 flex space-x-3">
          <button className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            Get Directions
          </button>
          <button className="flex-1 py-2 px-4 border hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            Share Location
          </button>
        </div>
      </div>
    </motion.div>
  </div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full overflow-hidden"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 z-10"
                >
                  <FiX size={24} />
                </button>
                <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <FiMapPin className="mx-auto text-red-500" size={48} />
                      <p className="mt-2 font-medium">Map would display here</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Our Location</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    123 Main Street, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FiClock className="text-gray-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">
                        Mon-Fri: 9am - 6pm
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiPhone className="text-gray-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">
                        (123) 456-7890
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FiMail className="text-gray-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">
                        info@example.com
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-3">
                    <button className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                      Get Directions
                    </button>
                    <button className="flex-1 py-2 px-4 border hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                      Share Location
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Special Purpose Modals",
      modals: [
        {
          name: "Cookie Consent",
          code: `<div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 25 }}
      className="max-w-7xl mx-auto p-6"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h3 className="text-lg font-medium mb-2">We value your privacy</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            We use cookies to enhance your browsing experience, serve personalized ads or content, 
            and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Customize
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            Accept All
          </button>
        </div>
      </div>
    </motion.div>
  </div>`,
          component: (
            <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-50">
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="max-w-7xl mx-auto p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0 md:mr-6">
                    <h3 className="text-lg font-medium mb-2">
                      We value your privacy
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      We use cookies to enhance your browsing experience, serve
                      personalized ads or content, and analyze our traffic. By
                      clicking "Accept All", you consent to our use of cookies.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Customize
                    </button>
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Age Verification",
          code: `<div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6 text-center"
    >
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
        <FiUser className="h-8 w-8 text-blue-500 dark:text-blue-400" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Age Verification</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        You must be at least 18 years old to access this content. Please verify your age.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="Day"
        />
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="Month"
        />
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
          placeholder="Year"
        />
        <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700">
          <option>Country</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
        </select>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={closeModal}
          className="flex-1 py-2 px-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          I'm under 18
        </button>
        <button
          onClick={closeModal}
          className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        >
          I'm 18 or older
        </button>
      </div>
    </motion.div>
  </div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6 text-center"
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                  <FiUser className="h-8 w-8 text-blue-500 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Age Verification</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  You must be at least 18 years old to access this content.
                  Please verify your age.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                    placeholder="Day"
                  />
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                    placeholder="Month"
                  />
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700"
                    placeholder="Year"
                  />
                  <select className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700">
                    <option>Country</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                  </select>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={closeModal}
                    className="flex-1 py-2 px-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    I'm under 18
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                  >
                    I'm 18 or older
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Maintenance Mode",
          code: `<div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full p-8 text-center"
    >
      <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-yellow-100 dark:bg-yellow-900 mb-6">
        <FiSettings className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />
      </div>
      <h3 className="text-3xl font-bold mb-4">Under Maintenance</h3>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        We're currently performing scheduled maintenance. We'll be back shortly.
      </p>
      <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium">Estimated time remaining:</span>
          <span className="font-bold">2 hours 15 minutes</span>
        </div>
        <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2.5">
          <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        For urgent inquiries, please contact us at{' '}
        <a href="mailto:support@example.com" className="text-blue-500 hover:text-blue-400">
          support@example.com
        </a>
      </p>
      <button
        onClick={closeModal}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
      >
        Refresh Page
      </button>
    </motion.div>
  </div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full p-8 text-center"
              >
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-yellow-100 dark:bg-yellow-900 mb-6">
                  <FiSettings className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Under Maintenance</h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  We're currently performing scheduled maintenance. We'll be
                  back shortly.
                </p>
                <div className="max-w-md mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">
                      Estimated time remaining:
                    </span>
                    <span className="font-bold">2 hours 15 minutes</span>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2.5">
                    <div
                      className="bg-yellow-500 h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  For urgent inquiries, please contact us at{" "}
                  <a
                    href="mailto:support@example.com"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    support@example.com
                  </a>
                </p>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium"
                >
                  Refresh Page
                </button>
              </motion.div>
            </div>
          ),
        },
        {
          name: "Download Progress",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Downloading File</h3>
        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <FiX size={24} />
        </button>
      </div>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>setup_file.exe</span>
          <span>65%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
        <div>
          <div>Speed</div>
          <div className="font-medium">2.4 MB/s</div>
        </div>
        <div>
          <div>Downloaded</div>
          <div className="font-medium">156 MB</div>
        </div>
        <div>
          <div>Time left</div>
          <div className="font-medium">1 min 12 sec</div>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="flex-1 py-2 px-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center">
          <FiPause className="mr-2" /> Pause
        </button>
        <button className="flex-1 py-2 px-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center">
          <FiX className="mr-2" /> Cancel
        </button>
      </div>
    </motion.div>
  </div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Downloading File</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>setup_file.exe</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <div>
                    <div>Speed</div>
                    <div className="font-medium">2.4 MB/s</div>
                  </div>
                  <div>
                    <div>Downloaded</div>
                    <div className="font-medium">156 MB</div>
                  </div>
                  <div>
                    <div>Time left</div>
                    <div className="font-medium">1 min 12 sec</div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 py-2 px-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center">
                    <FiPause className="mr-2" /> Pause
                  </button>
                  <button className="flex-1 py-2 px-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center">
                    <FiX className="mr-2" /> Cancel
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },
        {
          name: "File Upload Modal",
          code: `<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Upload Files</h3>
        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <FiX size={24} />
        </button>
      </div>
      <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-6">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
          <FiUpload className="h-6 w-6 text-blue-500 dark:text-blue-400" />
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Drag and drop files here, or click to browse
        </p>
        <button className="text-sm text-blue-500 hover:text-blue-400 font-medium">
          Select files
        </button>
        <input type="file" className="hidden" multiple />
      </div>
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiFile className="text-gray-500 mr-3" />
            <div>
              <p className="text-sm font-medium">document.pdf</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">2.4 MB • 45% uploaded</p>
            </div>
          </div>
          <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiImage className="text-gray-500 mr-3" />
            <div>
              <p className="text-sm font-medium">image.jpg</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">1.8 MB • 12% uploaded</p>
            </div>
          </div>
          <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '12%' }}></div>
          </div>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="flex-1 py-2 px-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          Add more files
        </button>
        <button className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          Start upload
        </button>
      </div>
    </motion.div>
  </div>`,
          component: (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold">Upload Files</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiX size={24} />
                  </button>
                </div>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center mb-6">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                    <FiUpload className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Drag and drop files here, or click to browse
                  </p>
                  <button className="text-sm text-blue-500 hover:text-blue-400 font-medium">
                    Select files
                  </button>
                  <input type="file" className="hidden" multiple />
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FiFile className="text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium">document.pdf</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          2.4 MB • 45% uploaded
                        </p>
                      </div>
                    </div>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FiImage className="text-gray-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium">image.jpg</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          1.8 MB • 12% uploaded
                        </p>
                      </div>
                    </div>
                    <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "12%" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 py-2 px-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    Add more files
                  </button>
                  <button className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                    Start upload
                  </button>
                </div>
              </motion.div>
            </div>
          ),
        },

        // Add more categories here...
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
            Modal Galaxy
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
            Explore our collection of 50+ beautifully crafted modals with
            various styles, animations, and use cases. Click the{" "}
            <FiCopy className="inline" /> icon to copy the code for any modal!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Modal Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.modals.map((modal, modalIndex) => {
                  const globalIndex =
                    catIndex * category.modals.length + modalIndex;
                  return (
                    <div key={modalIndex} className="group relative">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openModal(globalIndex)}
                        className="w-full p-4 text-left bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {modal.name}
                      </motion.button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(modal.code, globalIndex);
                        }}
                        className="absolute top-2 right-2 p-1 bg-white dark:bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
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

        {/* Active Modal */}
        {activeModal !== null && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeModal}
          />
        )}

        {activeModal !== null && (
          <>
            {modalCategories.map((category, catIndex) => {
              const startIndex = catIndex * category.modals.length;
              const endIndex = startIndex + category.modals.length;

              if (activeModal >= startIndex && activeModal < endIndex) {
                const modalIndex = activeModal - startIndex;
                return (
                  <div key={`modal-${catIndex}-${modalIndex}`}>
                    {category.modals[modalIndex].component}
                  </div>
                );
              }
              return null;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ModalShowcase;
