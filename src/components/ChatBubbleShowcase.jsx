import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const ChatBubbleShowcase = () => {
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

  const chatBubbleCategories = [
    {
      title: "Basic Bubbles",
      bubbles: [
        {
          name: "Simple Right Bubble",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    Hello there! How are you doing today?
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                Hello there! How are you doing today?
              </div>
            </div>
          ),
        },
        {
          name: "Simple Left Bubble",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    I'm doing great! Thanks for asking.
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                I'm doing great! Thanks for asking.
              </div>
            </div>
          ),
        },
        {
          name: "Rounded Bubble",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-purple-500 text-white rounded-full py-2 px-6 max-w-xs lg:max-w-md">
    This is a rounded chat bubble!
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-purple-500 text-white rounded-full py-2 px-6 max-w-xs lg:max-w-md">
                This is a rounded chat bubble!
              </div>
            </div>
          ),
        },
        {
          name: "Bubble with Tail",
          code: `<div className="flex justify-end mb-4">
  <div className="relative bg-green-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    Bubble with a tail!
    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-3 h-3 bg-green-500 rotate-45"></div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="relative bg-green-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                Bubble with a tail!
                <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-3 h-3 bg-green-500 rotate-45"></div>
              </div>
            </div>
          ),
        },
        {
          name: "Bubble with Shadow",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-white dark:bg-gray-800 rounded-lg py-2 px-4 max-w-xs lg:max-w-md shadow-md">
    Bubble with shadow effect
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg py-2 px-4 max-w-xs lg:max-w-md shadow-md">
                Bubble with shadow effect
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Bubbles with Metadata",
      bubbles: [
        {
          name: "With Time",
          code: `<div className="flex justify-end mb-4">
  <div className="flex flex-col items-end">
    <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with timestamp
    </div>
    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:30 AM</span>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="flex flex-col items-end">
                <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with timestamp
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  10:30 AM
                </span>
              </div>
            </div>
          ),
        },
        {
          name: "With Author",
          code: `<div className="flex justify-start mb-4">
  <div className="flex flex-col">
    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">John Doe</span>
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with author name
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  John Doe
                </span>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with author name
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "With Avatar",
          code: `<div className="flex justify-start mb-4">
  <div className="flex items-start space-x-2">
    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">JD</div>
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with avatar
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
                  JD
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with avatar
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "With Avatar & Time",
          code: `<div className="flex justify-start mb-4">
  <div className="flex items-start space-x-2">
    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">JD</div>
    <div className="flex flex-col">
      <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
        Message with avatar and time
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">10:30 AM</span>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
                  JD
                </div>
                <div className="flex flex-col">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                    Message with avatar and time
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    10:30 AM
                  </span>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "With Status",
          code: `<div className="flex justify-end mb-4">
  <div className="flex flex-col items-end">
    <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with read status
    </div>
    <div className="flex items-center mt-1 space-x-1">
      <span className="text-xs text-gray-500 dark:text-gray-400">10:30 AM</span>
      <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="flex flex-col items-end">
                <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with read status
                </div>
                <div className="flex items-center mt-1 space-x-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    10:30 AM
                  </span>
                  <svg
                    className="w-3 h-3 text-blue-400"
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
            </div>
          ),
        },
      ],
    },
    {
      title: "Styled Bubbles",
      bubbles: [
        {
          name: "Gradient Bubble",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    Gradient chat bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                Gradient chat bubble
              </div>
            </div>
          ),
        },
        {
          name: "Glass Bubble",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-white/30 dark:bg-gray-700/50 backdrop-blur-md rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-white/20 shadow-sm">
    Glass morphism bubble
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-white/30 dark:bg-gray-700/50 backdrop-blur-md rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-white/20 shadow-sm">
                Glass morphism bubble
              </div>
            </div>
          ),
        },
        {
          name: "Neon Bubble",
          code: `<div className="flex justify-end mb-4">
            <div className="bg-black text-[#0ff] rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-[#0ff] shadow-[0_0_10px_#0ff,0_0_20px_#0ff]">
              Neon style bubble
            </div>
          </div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-black text-[#0ff] rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-[#0ff] shadow-[0_0_10px_#0ff,0_0_20px_#0ff]">
                Neon style bubble
              </div>
            </div>
          ),
        },

        {
          name: "Animated Bubble",
          code: `<div className="flex justify-start mb-4">
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md"
  >
    Animated chat bubble
  </motion.div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md"
              >
                Animated chat bubble
              </motion.div>
            </div>
          ),
        },
        {
          name: "Bubble with Emoji",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-yellow-100 dark:bg-yellow-800 text-gray-800 dark:text-yellow-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md flex items-center">
    <span className="mr-2">😊</span>
    Bubble with emoji!
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-yellow-100 dark:bg-yellow-800 text-gray-800 dark:text-yellow-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md flex items-center">
                <span className="mr-2">😊</span>
                Bubble with emoji!
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Content Bubbles",
      bubbles: [
        {
          name: "Long Message",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    This is a longer message that will wrap to multiple lines if needed. Chat bubbles should handle text overflow gracefully and maintain proper spacing between messages.
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                This is a longer message that will wrap to multiple lines if
                needed. Chat bubbles should handle text overflow gracefully and
                maintain proper spacing between messages.
              </div>
            </div>
          ),
        },
        {
          name: "Multiline Message",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <p>First line of message</p>
    <p className="mt-1">Second line of message</p>
    <p className="mt-1">Third line of message</p>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <p>First line of message</p>
                <p className="mt-1">Second line of message</p>
                <p className="mt-1">Third line of message</p>
              </div>
            </div>
          ),
        },
        {
          name: "Message with Link",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    Check out this <a href="#" className="text-blue-600 dark:text-blue-400 underline">link</a> in a chat bubble!
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                Check out this{" "}
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  link
                </a>{" "}
                in a chat bubble!
              </div>
            </div>
          ),
        },
        {
          name: "Message with Code",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-gray-800 text-green-400 rounded-lg py-2 px-4 max-w-xs lg:max-w-md font-mono text-sm">
    <span className="block">const message = "Hello World";</span>
    <span className="block">console.log(message);</span>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gray-800 text-green-400 rounded-lg py-2 px-4 max-w-xs lg:max-w-md font-mono text-sm">
                <span className="block">const message = "Hello World";</span>
                <span className="block">console.log(message);</span>
              </div>
            </div>
          ),
        },
        {
          name: "Message with List",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <ul className="list-disc pl-5">
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <ul className="list-disc pl-5">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ul>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Special Bubbles",
      bubbles: [
        {
          name: "System Message",
          code: `<div className="flex justify-center mb-4">
  <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg py-1 px-3 text-sm">
    User joined the chat
  </div>
</div>`,
          component: (
            <div className="flex justify-center mb-4">
              <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg py-1 px-3 text-sm">
                User joined the chat
              </div>
            </div>
          ),
        },
        {
          name: "Error Message",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-red-200 dark:border-red-700">
    Error: Message could not be sent
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-red-200 dark:border-red-700">
                Error: Message could not be sent
              </div>
            </div>
          ),
        },
        {
          name: "Success Message",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-green-200 dark:border-green-700">
    Success: Message sent!
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-green-200 dark:border-green-700">
                Success: Message sent!
              </div>
            </div>
          ),
        },
        {
          name: "Warning Message",
          code: `<div className="flex justify-center mb-4">
  <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-yellow-200 dark:border-yellow-700">
    Warning: Connection unstable
  </div>
</div>`,
          component: (
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-yellow-200 dark:border-yellow-700">
                Warning: Connection unstable
              </div>
            </div>
          ),
        },
        {
          name: "Typing Indicator",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <div className="flex space-x-1">
      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Media Bubbles",
      bubbles: [
        {
          name: "Image Message",
          code: `<div className="flex justify-end mb-4">
  <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
    <img src="https://via.placeholder.com/300x200" alt="Chat image" className="w-full" />
    <div className="bg-blue-500 text-white py-2 px-4">
      Check out this image!
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
                <img
                  src="https://via.placeholder.com/300x200"
                  alt="Chat image"
                  className="w-full"
                />
                <div className="bg-blue-500 text-white py-2 px-4">
                  Check out this image!
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Video Message",
          code: `<div className="flex justify-start mb-4">
  <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
    <div className="bg-gray-800 aspect-video flex items-center justify-center">
      <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6z" />
      </svg>
    </div>
    <div className="bg-gray-200 dark:bg-gray-700 py-2 px-4">
      Video attachment
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
                <div className="bg-gray-800 aspect-video flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6z" />
                  </svg>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 py-2 px-4">
                  Video attachment
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "File Attachment",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <div className="flex items-center">
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
      <span>document.pdf</span>
      <span className="ml-auto text-xs">2.4 MB</span>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>document.pdf</span>
                  <span className="ml-auto text-xs">2.4 MB</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Audio Message",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <div className="flex items-center">
      <button className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center mr-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
      </button>
      <div className="flex-1 bg-gray-300 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
        <div className="bg-blue-500 h-full w-1/3"></div>
      </div>
      <span className="ml-2 text-xs">1:24 / 3:45</span>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <div className="flex items-center">
                  <button className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center mr-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="flex-1 bg-gray-300 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-1/3"></div>
                  </div>
                  <span className="ml-2 text-xs">1:24 / 3:45</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Location Message",
          code: `<div className="flex justify-end mb-4">
  <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
    <div className="bg-gray-800 aspect-video flex items-center justify-center relative">
      <svg className="w-12 h-12 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs py-1 px-2 rounded">
        Our meeting point
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="rounded-lg overflow-hidden max-w-xs lg:max-w-md">
                <div className="bg-gray-800 aspect-video flex items-center justify-center relative">
                  <svg
                    className="w-12 h-12 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs py-1 px-2 rounded">
                    Our meeting point
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Interactive Bubbles",
      bubbles: [
        {
          name: "Message with Reactions",
          code: `<div className="flex justify-start mb-4">
  <div className="relative">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with reactions
    </div>
    <div className="absolute -bottom-3 left-2 flex space-x-1 bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-sm">
      <span className="text-xs">👍</span>
      <span className="text-xs">😍</span>
      <span className="text-xs">😂</span>
      <span className="text-xs">+3</span>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="relative">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with reactions
                </div>
                <div className="absolute -bottom-3 left-2 flex space-x-1 bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-sm">
                  <span className="text-xs">👍</span>
                  <span className="text-xs">😍</span>
                  <span className="text-xs">😂</span>
                  <span className="text-xs">+3</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Message with Reply",
          code: `<div className="flex justify-end mb-4">
  <div className="flex flex-col items-end">
    <div className="bg-gray-100 dark:bg-gray-800 rounded-t-lg border-l-4 border-blue-500 py-1 px-3 text-sm max-w-xs lg:max-w-md">
      Replying to: "How are you?"
    </div>
    <div className="bg-blue-500 text-white rounded-b-lg py-2 px-4 max-w-xs lg:max-w-md">
      I'm doing great, thanks!
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="flex flex-col items-end">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-t-lg border-l-4 border-blue-500 py-1 px-3 text-sm max-w-xs lg:max-w-md">
                  Replying to: "How are you?"
                </div>
                <div className="bg-blue-500 text-white rounded-b-lg py-2 px-4 max-w-xs lg:max-w-md">
                  I'm doing great, thanks!
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Message with Menu",
          code: `<div className="flex justify-start mb-4">
  <div className="relative group">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Message with options
    </div>
    <button className="absolute -top-2 -right-2 p-1 bg-gray-100 dark:bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
    </button>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="relative group">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Message with options
                </div>
                <button className="absolute -top-2 -right-2 p-1 bg-gray-100 dark:bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          ),
        },
        {
          name: "Selectable Message",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md relative">
    <input type="checkbox" className="absolute left-2 top-1/2 transform -translate-y-1/2" />
    <div className="ml-4">
      Selectable message
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md relative">
                <input
                  type="checkbox"
                  className="absolute left-2 top-1/2 transform -translate-y-1/2"
                />
                <div className="ml-4">Selectable message</div>
              </div>
            </div>
          ),
        },
        {
          name: "Editable Message",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-blue-500">
    <div contentEditable className="outline-none">
      Click to edit this message
    </div>
    <div className="flex justify-end mt-1 space-x-2">
      <button className="text-xs text-blue-500">Save</button>
      <button className="text-xs text-gray-500">Cancel</button>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-blue-500">
                <div contentEditable className="outline-none">
                  Click to edit this message
                </div>
                <div className="flex justify-end mt-1 space-x-2">
                  <button className="text-xs text-blue-500">Save</button>
                  <button className="text-xs text-gray-500">Cancel</button>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Group Chat Bubbles",
      bubbles: [
        {
          name: "Consecutive Messages",
          code: `<div className="space-y-1 mb-4">
  <div className="flex justify-start">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      First message
    </div>
  </div>
  <div className="flex justify-start">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Second message
    </div>
  </div>
  <div className="flex justify-start">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Third message
    </div>
  </div>
</div>`,
          component: (
            <div className="space-y-1 mb-4">
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  First message
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Second message
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Third message
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Grouped with Avatar",
          code: `<div className="space-y-1 mb-4">
  <div className="flex justify-start">
    <div className="flex items-end space-x-2">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">JD</div>
      <div className="flex flex-col space-y-1">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
          First message
        </div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
          Second message
        </div>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="space-y-1 mb-4">
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold">
                    JD
                  </div>
                  <div className="flex flex-col space-y-1">
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                      First message
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                      Second message
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Different Authors",
          code: `<div className="space-y-3 mb-4">
  <div className="flex justify-start">
    <div className="flex items-start space-x-2">
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-semibold text-white">JD</div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">John Doe</span>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
          Hey team, how's the project going?
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-start">
    <div className="flex items-start space-x-2">
      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-semibold text-white">AS</div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Alice Smith</span>
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
          Going well! Just finishing up the designs.
        </div>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="space-y-3 mb-4">
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-semibold text-white">
                    JD
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      John Doe
                    </span>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                      Hey team, how's the project going?
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm font-semibold text-white">
                    AS
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Alice Smith
                    </span>
                    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                      Going well! Just finishing up the designs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Date Separator",
          code: `<div className="space-y-4 mb-4">
  <div className="relative flex justify-center mb-2">
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full py-1 px-3 text-xs z-10">
      Today
    </div>
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700 z-0"></div>
  </div>
  <div className="flex justify-end mb-4">
    <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      New message
    </div>
  </div>
</div>`,
          component: (
            <div className="space-y-4 mb-4">
              <div className="relative flex justify-center mb-2">
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full py-1 px-3 text-xs z-10">
                  Today
                </div>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700 z-0"></div>
              </div>
              <div className="flex justify-end mb-4">
                <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  New message
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "New Messages Indicator",
          code: `<div className="space-y-4 mb-4">
  <div className="relative flex justify-center mb-2">
    <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full py-1 px-3 text-xs z-10">
      New messages
    </div>
    <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-200 dark:bg-blue-700 z-0"></div>
  </div>
  <div className="flex justify-start mb-4">
    <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
      Just joined the chat!
    </div>
  </div>
</div>`,
          component: (
            <div className="space-y-4 mb-4">
              <div className="relative flex justify-center mb-2">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full py-1 px-3 text-xs z-10">
                  New messages
                </div>
                <div className="absolute top-1/2 left-0 right-0 h-px bg-blue-200 dark:bg-blue-700 z-0"></div>
              </div>
              <div className="flex justify-start mb-4">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                  Just joined the chat!
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Specialty Bubbles",
      bubbles: [
        {
          name: "Quote Bubble",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border-l-4 border-blue-500">
    <blockquote className="text-sm italic">
      "This is a quoted message within a chat bubble."
    </blockquote>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border-l-4 border-blue-500">
                <blockquote className="text-sm italic">
                  "This is a quoted message within a chat bubble."
                </blockquote>
              </div>
            </div>
          ),
        },
        {
          name: "Code Block Bubble",
          code: `<div className="flex justify-end mb-4">
            <div className="bg-gray-800 rounded-lg py-2 px-4 max-w-xs lg:max-w-md overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono">
                <code>
                  function greet() {
            console.log("Hello World!");
          }
                </code>
              </pre>
            </div>
          </div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-gray-800 rounded-lg py-2 px-4 max-w-xs lg:max-w-md overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
                  <code>
                    {`function greet() {
            console.log("Hello World!");
          }`}
                  </code>
                </pre>
              </div>
            </div>
          ),
        },
        {
          name: "Poll Bubble",
          code: `<div className="flex justify-start mb-4">
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
    <div className="font-semibold mb-2">Poll: Favorite Color?</div>
    <div className="space-y-2">
      <div className="flex items-center">
        <input type="radio" id="blue" name="color" className="mr-2" />
        <label htmlFor="blue" className="flex-1">Blue</label>
        <span className="text-xs text-gray-500">42%</span>
      </div>
      <div className="flex items-center">
        <input type="radio" id="red" name="color" className="mr-2" />
        <label htmlFor="red" className="flex-1">Red</label>
        <span className="text-xs text-gray-500">33%</span>
      </div>
      <div className="flex items-center">
        <input type="radio" id="green" name="color" className="mr-2" />
        <label htmlFor="green" className="flex-1">Green</label>
        <span className="text-xs text-gray-500">25%</span>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-start mb-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg py-2 px-4 max-w-xs lg:max-w-md">
                <div className="font-semibold mb-2">Poll: Favorite Color?</div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="blue"
                      name="color"
                      className="mr-2"
                    />
                    <label htmlFor="blue" className="flex-1">
                      Blue
                    </label>
                    <span className="text-xs text-gray-500">42%</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="red"
                      name="color"
                      className="mr-2"
                    />
                    <label htmlFor="red" className="flex-1">
                      Red
                    </label>
                    <span className="text-xs text-gray-500">33%</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="green"
                      name="color"
                      className="mr-2"
                    />
                    <label htmlFor="green" className="flex-1">
                      Green
                    </label>
                    <span className="text-xs text-gray-500">25%</span>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Event Bubble",
          code: `<div className="flex justify-center mb-4">
  <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-purple-200 dark:border-purple-700">
    <div className="font-semibold">Team Meeting</div>
    <div className="text-sm">Tomorrow at 2:00 PM</div>
    <div className="flex justify-between mt-2 text-xs">
      <button className="text-purple-600 dark:text-purple-300">Accept</button>
      <button className="text-gray-500">Decline</button>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-purple-200 dark:border-purple-700">
                <div className="font-semibold">Team Meeting</div>
                <div className="text-sm">Tomorrow at 2:00 PM</div>
                <div className="flex justify-between mt-2 text-xs">
                  <button className="text-purple-600 dark:text-purple-300">
                    Accept
                  </button>
                  <button className="text-gray-500">Decline</button>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Payment Request",
          code: `<div className="flex justify-end mb-4">
  <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-green-200 dark:border-green-700">
    <div className="font-semibold">Payment Request</div>
    <div className="text-2xl my-2">$25.00</div>
    <div className="text-sm mb-2">For project materials</div>
    <div className="flex justify-between">
      <button className="text-xs bg-green-500 text-white py-1 px-3 rounded">Pay Now</button>
      <button className="text-xs text-gray-500">Decline</button>
    </div>
  </div>
</div>`,
          component: (
            <div className="flex justify-end mb-4">
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg py-2 px-4 max-w-xs lg:max-w-md border border-green-200 dark:border-green-700">
                <div className="font-semibold">Payment Request</div>
                <div className="text-2xl my-2">$25.00</div>
                <div className="text-sm mb-2">For project materials</div>
                <div className="flex justify-between">
                  <button className="text-xs bg-green-500 text-white py-1 px-3 rounded">
                    Pay Now
                  </button>
                  <button className="text-xs text-gray-500">Decline</button>
                </div>
              </div>
            </div>
          ),
        },
      ],
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
            Chat Bubble Universe
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
            Explore our collection of 50+ meticulously crafted chat bubbles with
            various styles, metadata options, and interactive elements. Click
            the <FiCopy className="inline" /> icon to copy the Tailwind CSS code
            for any bubble!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Chat Bubble Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chatBubbleCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-4">
                {category.bubbles.map((bubble, btnIndex) => {
                  const globalIndex = catIndex * 5 + btnIndex;
                  return (
                    <div key={btnIndex} className="group relative">
                      {bubble.component}
                      <button
                        onClick={() =>
                          copyToClipboard(bubble.code, globalIndex)
                        }
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

export default ChatBubbleShowcase;
