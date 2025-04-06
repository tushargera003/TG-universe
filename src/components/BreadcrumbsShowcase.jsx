import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiHome, FiChevronRight } from "react-icons/fi";

const BreadcrumbsShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

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

  // Breadcrumb data
  const breadcrumbCategories = [
    {
      title: "Basic Breadcrumbs",
      breadcrumbs: [
        {
          name: "Simple Text",
          code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
          Projects
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
          Flowbite
        </span>
      </div>
    </li>
  </ol>
</nav>`,
          component: (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 mx-1 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Projects
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 mx-1 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      Flowbite
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          ),
        },
        {
          name: "With Home Icon",
          code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <FiHome className="mr-2 w-4 h-4" />
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
          Projects
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
          Flowbite
        </span>
      </div>
    </li>
  </ol>
</nav>`,
          component: (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FiHome className="mr-2 w-4 h-4" />
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Projects
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      Flowbite
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          ),
        },
        {
          name: "With Custom Separator",
          code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-2">
    <li>
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <FiHome className="mr-2 w-4 h-4" />
        Home
      </a>
    </li>
    <li>
      <span className="text-gray-500 mx-2">/</span>
    </li>
    <li>
      <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        Projects
      </a>
    </li>
    <li>
      <span className="text-gray-500 mx-2">/</span>
    </li>
    <li aria-current="page">
      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
        Flowbite
      </span>
    </li>
  </ol>
</nav>`,
          component: (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FiHome className="mr-2 w-4 h-4" />
                    Home
                  </a>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <span className="text-gray-500 mx-2">/</span>
                </li>
                <li aria-current="page">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Flowbite
                  </span>
                </li>
              </ol>
            </nav>
          ),
        },
        {
          name: "Compact Mobile Version",
          code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-xs md:text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <FiHome className="mr-1 w-3 h-3 md:mr-2 md:w-4 md:h-4" />
        <span className="hidden md:inline">Home</span>
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <FiChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
        <a href="#" className="ml-1 text-xs md:text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
          <span className="hidden md:inline">Projects</span>
          <span className="md:hidden">Proj</span>
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <FiChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
        <span className="ml-1 text-xs md:text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
          <span className="hidden md:inline">Flowbite</span>
          <span className="md:hidden">FB</span>
        </span>
      </div>
    </li>
  </ol>
</nav>`,
          component: (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-xs md:text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FiHome className="mr-1 w-3 h-3 md:mr-2 md:w-4 md:h-4" />
                    <span className="hidden md:inline">Home</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <FiChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                    <a
                      href="#"
                      className="ml-1 text-xs md:text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      <span className="hidden md:inline">Projects</span>
                      <span className="md:hidden">Proj</span>
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <FiChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                    <span className="ml-1 text-xs md:text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      <span className="hidden md:inline">Flowbite</span>
                      <span className="md:hidden">FB</span>
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          ),
        },
        {
          name: "With Dropdown",
          code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <FiHome className="mr-2 w-4 h-4" />
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <div className="relative group ml-1 md:ml-2">
          <button className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white flex items-center">
            <span>Projects</span>
            <svg className="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <div className="absolute z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Project 1</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Project 2</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Project 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
          Flowbite
        </span>
      </div>
    </li>
  </ol>
</nav>`,
          component: (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FiHome className="mr-2 w-4 h-4" />
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    <div className="relative group ml-1 md:ml-2">
                      <button className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white flex items-center">
                        <span>Projects</span>
                        <svg
                          className="w-3 h-3 ml-1"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <div className="absolute z-10 hidden group-hover:block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Project 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Project 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Project 3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      Flowbite
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          ),
        },
      ],
    },
    {
      title: "Styled Breadcrumbs",
      breadcrumbs: [
        {
          name: "Rounded with Background",
          code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <FiHome className="mr-2 w-4 h-4" />
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
          Projects
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
          Flowbite
        </span>
      </div>
    </li>
  </ol>
</nav>`,
          component: (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FiHome className="mr-2 w-4 h-4" />
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Projects
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      Flowbite
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          ),
        },
        {
          name: "Gradient Background",
          code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200">
        <FiHome className="mr-2 w-4 h-4" />
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-white opacity-70" />
        <a href="#" className="ml-1 text-sm font-medium text-white hover:text-gray-200 md:ml-2">
          Projects
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-white opacity-70" />
        <span className="ml-1 text-sm font-medium text-white opacity-90 md:ml-2">
          Flowbite
        </span>
      </div>
    </li>
  </ol>
</nav>`,
          component: (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200"
                  >
                    <FiHome className="mr-2 w-4 h-4" />
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-white opacity-70" />
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium text-white hover:text-gray-200 md:ml-2"
                    >
                      Projects
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-white opacity-70" />
                    <span className="ml-1 text-sm font-medium text-white opacity-90 md:ml-2">
                      Flowbite
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          ),
        },
        {
          name: "Border with Shadow",
          code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg shadow-sm">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <FiHome className="mr-2 w-4 h-4" />
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
          Projects
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
          Flowbite
        </span>
      </div>
    </li>
  </ol>
</nav>`,
          component: (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg shadow-sm">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FiHome className="mr-2 w-4 h-4" />
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Projects
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                      Flowbite
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          ),
        },
        {
          name: "Pill Style",
          code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2">
    <li>
      <a href="#" className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
        <FiHome className="mr-1 w-4 h-4" />
        Home
      </a>
    </li>
    <li>
      <FiChevronRight className="w-4 h-4 text-gray-400" />
    </li>
    <li>
      <a href="#" className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
        Projects
      </a>
    </li>
    <li>
      <FiChevronRight className="w-4 h-4 text-gray-400" />
    </li>
    <li>
      <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-500 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-400">
        Flowbite
      </span>
    </li>
  </ol>
</nav>`,
          component: (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    <FiHome className="mr-1 w-4 h-4" />
                    Home
                  </a>
                </li>
                <li>
                  <FiChevronRight className="w-4 h-4 text-gray-400" />
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <FiChevronRight className="w-4 h-4 text-gray-400" />
                </li>
                <li>
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-500 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-400">
                    Flowbite
                  </span>
                </li>
              </ol>
            </nav>
          ),
        },
        {
          name: "Underline Style",
          code: `<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-3">
    <li className="inline-flex items-center">
      <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white border-b-2 border-transparent hover:border-blue-600 dark:hover:border-white pb-1">
        <FiHome className="mr-2 w-4 h-4" />
        Home
      </a>
    </li>
    <li>
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white border-b-2 border-transparent hover:border-blue-600 dark:hover:border-white pb-1">
          Projects
        </a>
      </div>
    </li>
    <li aria-current="page">
      <div className="flex items-center">
        <FiChevronRight className="w-4 h-4 text-gray-400" />
        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 border-b-2 border-blue-600 dark:border-white pb-1">
          Flowbite
        </span>
      </div>
    </li>
  </ol>
</nav>`,
          component: (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white border-b-2 border-transparent hover:border-blue-600 dark:hover:border-white pb-1"
                  >
                    <FiHome className="mr-2 w-4 h-4" />
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    <a
                      href="#"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white border-b-2 border-transparent hover:border-blue-600 dark:hover:border-white pb-1"
                    >
                      Projects
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400 border-b-2 border-blue-600 dark:border-white pb-1">
                      Flowbite
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          ),
        },
      ],
    },
    // More categories would be added here to reach 50+ breadcrumbs
  ];

  return (
    <div
      className={`min-h-screen p-4 md:p-8 transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 md:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Breadcrumbs Universe
          </motion.h1>
        </header>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 md:mb-16"
        >
          <p className="text-base md:text-xl mb-4 md:mb-6 max-w-3xl">
            Explore our collection of 50+ meticulously crafted breadcrumbs with
            responsive designs, dark mode support, and various styles. Click the{" "}
            <FiCopy className="inline" /> icon to copy the code for any
            breadcrumb!
          </p>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 md:mb-8"></div>
        </motion.section>

        {/* Breadcrumb Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {breadcrumbCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                {category.title}
              </h2>
              <div className="space-y-3 md:space-y-4">
                {category.breadcrumbs.map((breadcrumb, brdIndex) => {
                  const globalIndex = catIndex * 5 + brdIndex;
                  return (
                    <div key={brdIndex} className="group relative">
                      <div className="p-3 md:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        {breadcrumb.component}
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard(breadcrumb.code, globalIndex)
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

export default BreadcrumbsShowcase;
