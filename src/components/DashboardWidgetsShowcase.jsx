import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCopy,
  FiCheck,
  FiX,
  FiArrowUp,
  FiMessageSquare,
  FiTruck,
  FiDownload,
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
  FiArrowDown,
  FiChevronDown,
  FiTrendingUp,
  FiUsers,
  FiDollarSign,
  FiShoppingCart,
  FiPlus,
  FiUpload,
  FiUser,
  FiActivity,
  FiPieChart,
  FiBarChart2,
  FiCalendar,
  FiBell,
  FiSettings,
  FiStar,
  FiAward,
  FiDatabase,
  FiLayers,
} from "react-icons/fi";

const DashboardWidgetsShowcase = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Widget data
  const widgetCategories = [
    {
      title: "Statistic Widgets",
      widgets: [
        {
          name: "Basic Stat Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <div className="flex justify-between items-start">
    <div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Revenue</p>
      <h3 className="text-2xl font-bold mt-1">$45,231</h3>
      <p className="text-green-500 text-sm mt-2 flex items-center">
        <FiArrowUp className="mr-1" /> 12% from last month
      </p>
    </div>
    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
      <FiDollarSign size={20} />
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    Total Revenue
                  </p>
                  <h3 className="text-2xl font-bold mt-1">$45,231</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <FiArrowUp className="mr-1" /> 12% from last month
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                  <FiDollarSign size={20} />
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Stat Card with Progress",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <div className="flex justify-between items-start">
    <div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">New Users</p>
      <h3 className="text-2xl font-bold mt-1">2,345</h3>
      <p className="text-green-500 text-sm mt-2 flex items-center">
        <FiArrowUp className="mr-1" /> 18.7% from last month
      </p>
    </div>
    <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
      <FiUsers size={20} />
    </div>
  </div>
  <div className="mt-4">
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '65%' }}></div>
    </div>
    <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">65% of target</p>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    New Users
                  </p>
                  <h3 className="text-2xl font-bold mt-1">2,345</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <FiArrowUp className="mr-1" /> 18.7% from last month
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                  <FiUsers size={20} />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                  65% of target
                </p>
              </div>
            </div>
          ),
        },
        {
          name: "Comparison Stat Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <div className="flex justify-between items-start">
    <div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Avg. Order Value</p>
      <h3 className="text-2xl font-bold mt-1">$156.78</h3>
      <div className="flex items-center mt-2 space-x-4">
        <p className="text-green-500 text-sm flex items-center">
          <FiArrowUp className="mr-1" /> 8.2%
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">vs last month</p>
      </div>
    </div>
    <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
      <FiShoppingCart size={20} />
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    Avg. Order Value
                  </p>
                  <h3 className="text-2xl font-bold mt-1">$156.78</h3>
                  <div className="flex items-center mt-2 space-x-4">
                    <p className="text-green-500 text-sm flex items-center">
                      <FiArrowUp className="mr-1" /> 8.2%
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      vs last month
                    </p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                  <FiShoppingCart size={20} />
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Negative Trend Stat Card",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <div className="flex justify-between items-start">
    <div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Bounce Rate</p>
      <h3 className="text-2xl font-bold mt-1">32.5%</h3>
      <p className="text-red-500 text-sm mt-2 flex items-center">
        <FiArrowDown className="mr-1" /> 2.5% from last month
      </p>
    </div>
    <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300">
      <FiActivity size={20} />
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    Bounce Rate
                  </p>
                  <h3 className="text-2xl font-bold mt-1">32.5%</h3>
                  <p className="text-red-500 text-sm mt-2 flex items-center">
                    <FiArrowDown className="mr-1" /> 2.5% from last month
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300">
                  <FiActivity size={20} />
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Stat Card with Chart",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Active Sessions</p>
                <h3 className="text-2xl font-bold mt-1">1,243</h3>
                <p className="text-green-500 text-sm mt-2 flex items-center">
                  {/* FiArrowUp Icon */}
                  <FiArrowUp className="mr-1" /> 5.8% from yesterday
                </p>
              </div>
              <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                {/* FiTrendingUp Icon */}
                <FiTrendingUp size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-end space-x-1 h-12">
              {[4, 7, 5, 8, 6, 9, 7, 10, 8, 11, 9, 12].map((height, index) => (
                <div
                  key={index}
                  className="w-2 bg-indigo-200 dark:bg-indigo-700 rounded-t"
                  style={{ height: height * 4 + 'px' }}
                ></div>
              ))}
            </div>
          </div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                    Active Sessions
                  </p>
                  <h3 className="text-2xl font-bold mt-1">1,243</h3>
                  <p className="text-green-500 text-sm mt-2 flex items-center">
                    <FiArrowUp className="mr-1" /> 5.8% from yesterday
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                  <FiTrendingUp size={20} />
                </div>
              </div>
              <div className="mt-4 flex items-end space-x-1 h-12">
                {[4, 7, 5, 8, 6, 9, 7, 10, 8, 11, 9, 12].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="w-2 bg-indigo-200 dark:bg-indigo-700 rounded-t"
                      style={{ height: height * 4 + "px" }}
                    ></div>
                  )
                )}
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Chart Widgets",
      widgets: [
        {
          name: "Pie Chart Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Traffic Sources</h3>
              <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                {/* FiSettings icon should be rendered properly in actual component */}
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-40 h-40 rounded-full relative">
                <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }}></div>
                <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)' }}></div>
                <div className="absolute inset-0 rounded-full border-8 border-purple-500" style={{ clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)' }}></div>
                <div className="absolute inset-0 rounded-full border-8 border-yellow-500" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-lg font-bold">4.5k</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {/* Replace this with actual array mapping in component */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Direct</span>
                </div>
                <span className="text-sm font-medium">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Organic</span>
                </div>
                <span className="text-sm font-medium">25%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Social</span>
                </div>
                <span className="text-sm font-medium">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">Referral</span>
                </div>
                <span className="text-sm font-medium">20%</span>
              </div>
            </div>
          </div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Traffic Sources</h3>
                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  <FiSettings size={18} />
                </button>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-40 h-40 rounded-full relative">
                  <div
                    className="absolute inset-0 rounded-full border-8 border-blue-500"
                    style={{ clipPath: "polygon(0 0, 50% 0, 50% 50%, 0 50%)" }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-green-500"
                    style={{
                      clipPath: "polygon(50% 0, 100% 0, 100% 50%, 50% 50%)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-purple-500"
                    style={{
                      clipPath: "polygon(0 50%, 50% 50%, 50% 100%, 0 100%)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-full border-8 border-yellow-500"
                    style={{
                      clipPath:
                        "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center">
                      <span className="text-lg font-bold">4.5k</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  { color: "bg-blue-500", label: "Direct", value: "35%" },
                  { color: "bg-green-500", label: "Organic", value: "25%" },
                  { color: "bg-purple-500", label: "Social", value: "20%" },
                  { color: "bg-yellow-500", label: "Referral", value: "20%" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${item.color} mr-2`}
                      ></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-sm font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ),
        },

        {
          name: "Bar Chart Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">Monthly Sales</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                  Year
                </button>
                <button className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                  Month
                </button>
              </div>
            </div>
            <div className="h-64 flex items-end space-x-2">
              {[30, 45, 60, 75, 90, 65, 80, 55, 70, 85, 60, 40].map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t hover:from-blue-600 hover:to-blue-500 transition-all duration-300"
                    style={{ height: \`\${value}%\` }}
                  ></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Monthly Sales</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                    Year
                  </button>
                  <button className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                    Month
                  </button>
                </div>
              </div>
              <div className="h-64 flex items-end space-x-2">
                {[30, 45, 60, 75, 90, 65, 80, 55, 70, 85, 60, 40].map(
                  (value, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center"
                    >
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t hover:from-blue-600 hover:to-blue-500 transition-all duration-300"
                        style={{ height: `${value}%` }}
                      ></div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {
                          [
                            "J",
                            "F",
                            "M",
                            "A",
                            "M",
                            "J",
                            "J",
                            "A",
                            "S",
                            "O",
                            "N",
                            "D",
                          ][index]
                        }
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          ),
        },
        {
          name: "Line Chart Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <div className="flex justify-between items-center mb-6">
    <h3 className="font-semibold">Website Visits</h3>
    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
      <FiCalendar size={18} />
    </button>
  </div>
  <div className="h-64 relative">
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700"></div>
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>
    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute">
      <path
        d="M0,80 C8,60 16,70 24,50 C32,30 40,40 48,30 C56,20 64,30 72,40 C80,50 88,40 96,20 C104,0 100,0 100,0"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
    <div className="absolute top-0 right-0 flex items-center">
      <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
      <span className="text-xs text-gray-500 dark:text-gray-400">This Week</span>
    </div>
  </div>
  <div className="mt-4 flex justify-between text-xs text-gray-500 dark:text-gray-400">
    <span>Mon</span>
    <span>Tue</span>
    <span>Wed</span>
    <span>Thu</span>
    <span>Fri</span>
    <span>Sat</span>
    <span>Sun</span>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Website Visits</h3>
                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  <FiCalendar size={18} />
                </button>
              </div>
              <div className="h-64 relative">
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 dark:bg-gray-700"></div>
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute"
                >
                  <path
                    d="M0,80 C8,60 16,70 24,50 C32,30 40,40 48,30 C56,20 64,30 72,40 C80,50 88,40 96,20 C104,0 100,0 100,0"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-0 right-0 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    This Week
                  </span>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          ),
        },
        {
          name: "Radial Progress Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <div className="flex justify-between items-center mb-6">
    <h3 className="font-semibold">Project Completion</h3>
    <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
      <FiSettings size={18} />
    </button>
  </div>
  <div className="flex flex-col items-center">
    <div className="relative w-32 h-32 mb-4">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="283"
          strokeDashoffset="70"
          transform="rotate(-90 50 50)"
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">75%</span>
      </div>
    </div>
    <div className="text-center">
      <p className="text-gray-600 dark:text-gray-300 mb-2">12 tasks completed out of 16</p>
      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
        View Details
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Project Completion</h3>
                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  <FiSettings size={18} />
                </button>
              </div>
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e0e0e0"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#progressGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray="283"
                      strokeDashoffset="70"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient
                        id="progressGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#4F46E5" />
                        <stop offset="100%" stopColor="#EC4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">75%</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    12 tasks completed out of 16
                  </p>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Sparkline Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Daily Activity</h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Last 7 days</span>
                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  <FiChevronDown size={16} />
                </button>
              </div>
            </div>
            <div className="flex items-end justify-between h-32">
              {[30, 45, 25, 60, 35, 70, 50].map((value, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className="w-6 rounded-t bg-gradient-to-t from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 transition-all duration-300"
                    style={{ height: \`\${value}%\` }}
                  ></div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'][index]}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Total Activity</p>
                <h3 className="text-xl font-bold">1,245</h3>
              </div>
              <p className="text-green-500 text-sm flex items-center">
                <FiArrowUp className="mr-1" /> 12.5%
              </p>
            </div>
          </div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Daily Activity</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Last 7 days
                  </span>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <FiChevronDown size={16} />
                  </button>
                </div>
              </div>
              <div className="flex items-end justify-between h-32">
                {[30, 45, 25, 60, 35, 70, 50].map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1"
                  >
                    <div
                      className="w-6 rounded-t bg-gradient-to-t from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 transition-all duration-300"
                      style={{ height: `${value}%` }}
                    ></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {["S", "M", "T", "W", "T", "F", "S"][index]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Total Activity
                  </p>
                  <h3 className="text-xl font-bold">1,245</h3>
                </div>
                <p className="text-green-500 text-sm flex items-center">
                  <FiArrowUp className="mr-1" /> 12.5%
                </p>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "List & Table Widgets",
      widgets: [
        {
          name: "Task List Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">Tasks</h3>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[
                { id: 1, title: 'Complete project proposal', completed: true },
                { id: 2, title: 'Review design mockups', completed: true },
                { id: 3, title: 'Develop API endpoints', completed: false },
                { id: 4, title: 'Write documentation', completed: false },
                { id: 5, title: 'Prepare presentation', completed: false }
              ].map((task) => {
                return (
                  <div key={task.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => {}}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className={\`ml-3 \${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}\`}>
                      {task.title}
                    </span>
                    {!task.completed && (
                      <span className="ml-auto px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                        Pending
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
                + Add New Task
              </button>
            </div>
          </div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Tasks</h3>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    title: "Complete project proposal",
                    completed: true,
                  },
                  { id: 2, title: "Review design mockups", completed: true },
                  { id: 3, title: "Develop API endpoints", completed: false },
                  { id: 4, title: "Write documentation", completed: false },
                  { id: 5, title: "Prepare presentation", completed: false },
                ].map((task) => (
                  <div key={task.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => {}}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span
                      className={`ml-3 ${
                        task.completed
                          ? "line-through text-gray-400 dark:text-gray-500"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {task.title}
                    </span>
                    {!task.completed && (
                      <span className="ml-auto px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                        Pending
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
                  + Add New Task
                </button>
              </div>
            </div>
          ),
        },
        {
          name: "Recent Activity Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <div className="flex justify-between items-center mb-6">
    <h3 className="font-semibold">Recent Activity</h3>
    <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
      See All
    </button>
  </div>
  <div className="space-y-4">
    {[
      { id: 1, user: 'John Doe', action: 'created a new project', time: '2 mins ago', avatar: 'JD' },
      { id: 2, user: 'Sarah Smith', action: 'updated the dashboard', time: '1 hour ago', avatar: 'SS' },
      { id: 3, user: 'Mike Johnson', action: 'completed task #245', time: '3 hours ago', avatar: 'MJ' },
      { id: 4, user: 'Emily Wilson', action: 'commented on ticket #12', time: '5 hours ago', avatar: 'EW' },
      { id: 5, user: 'Alex Brown', action: 'uploaded new files', time: '1 day ago', avatar: 'AB' }
    ].map((activity) => (
      <div key={activity.id} className="flex items-start">
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium">
          {activity.avatar}
        </div>
        <div className="ml-3">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-medium">{activity.user}</span> {activity.action}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
        </div>
      </div>
    ))}
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Recent Activity</h3>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  See All
                </button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    user: "John Doe",
                    action: "created a new project",
                    time: "2 mins ago",
                    avatar: "JD",
                  },
                  {
                    id: 2,
                    user: "Sarah Smith",
                    action: "updated the dashboard",
                    time: "1 hour ago",
                    avatar: "SS",
                  },
                  {
                    id: 3,
                    user: "Mike Johnson",
                    action: "completed task #245",
                    time: "3 hours ago",
                    avatar: "MJ",
                  },
                  {
                    id: 4,
                    user: "Emily Wilson",
                    action: "commented on ticket #12",
                    time: "5 hours ago",
                    avatar: "EW",
                  },
                  {
                    id: 5,
                    user: "Alex Brown",
                    action: "uploaded new files",
                    time: "1 day ago",
                    avatar: "AB",
                  },
                ].map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium">
                      {activity.avatar}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-medium">{activity.user}</span>{" "}
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          name: "Top Products Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <div className="flex justify-between items-center mb-6">
    <h3 className="font-semibold">Top Products</h3>
    <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
      View Report
    </button>
  </div>
  <div className="space-y-6">
    {[
      { id: 1, name: 'Wireless Headphones', sales: 1245, revenue: '$12,345', image: 'https://via.placeholder.com/40' },
      { id: 2, name: 'Smart Watch', sales: 876, revenue: '$8,760', image: 'https://via.placeholder.com/40' },
      { id: 3, name: 'Bluetooth Speaker', sales: 654, revenue: '$6,540', image: 'https://via.placeholder.com/40' },
      { id: 4, name: 'Laptop Backpack', sales: 432, revenue: '$4,320', image: 'https://via.placeholder.com/40' },
      { id: 5, name: 'Phone Case', sales: 321, revenue: '$1,605', image: 'https://via.placeholder.com/40' }
    ].map((product) => (
      <div key={product.id} className="flex items-center">
        <img src={product.image} alt={product.name} className="h-10 w-10 rounded-md object-cover" />
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{product.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{product.sales} sold</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{product.revenue}</p>
          <p className="text-xs text-green-500">+12.5%</p>
        </div>
      </div>
    ))}
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Top Products</h3>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  View Report
                </button>
              </div>
              <div className="space-y-6">
                {[
                  {
                    id: 1,
                    name: "Wireless Headphones",
                    sales: 1245,
                    revenue: "$12,345",
                    image: "https://via.placeholder.com/40",
                  },
                  {
                    id: 2,
                    name: "Smart Watch",
                    sales: 876,
                    revenue: "$8,760",
                    image: "https://via.placeholder.com/40",
                  },
                  {
                    id: 3,
                    name: "Bluetooth Speaker",
                    sales: 654,
                    revenue: "$6,540",
                    image: "https://via.placeholder.com/40",
                  },
                  {
                    id: 4,
                    name: "Laptop Backpack",
                    sales: 432,
                    revenue: "$4,320",
                    image: "https://via.placeholder.com/40",
                  },
                  {
                    id: 5,
                    name: "Phone Case",
                    sales: 321,
                    revenue: "$1,605",
                    image: "https://via.placeholder.com/40",
                  },
                ].map((product) => (
                  <div key={product.id} className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-10 w-10 rounded-md object-cover"
                    />
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {product.sales} sold
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{product.revenue}</p>
                      <p className="text-xs text-green-500">+12.5%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          name: "Team Members Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <div className="flex justify-between items-center mb-6">
    <h3 className="font-semibold">Team Members</h3>
    <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
      Manage
    </button>
  </div>
  <div className="grid grid-cols-2 gap-4">
    {[
      { id: 1, name: 'John Doe', role: 'Developer', avatar: 'JD', online: true },
      { id: 2, name: 'Sarah Smith', role: 'Designer', avatar: 'SS', online: true },
      { id: 3, name: 'Mike Johnson', role: 'Manager', avatar: 'MJ', online: false },
      { id: 4, name: 'Emily Wilson', role: 'Marketing', avatar: 'EW', online: true },
      { id: 5, name: 'Alex Brown', role: 'Support', avatar: 'AB', online: false },
      { id: 6, name: 'Lisa Taylor', role: 'Developer', avatar: 'LT', online: true }
    ].map((member) => (
      <div key={member.id} className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
        <div className="relative">
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium">
            {member.avatar}
          </div>
          {member.online && (
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></div>
          )}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{member.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
    <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
      Invite Member
    </button>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Team Members</h3>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Manage
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    id: 1,
                    name: "John Doe",
                    role: "Developer",
                    avatar: "JD",
                    online: true,
                  },
                  {
                    id: 2,
                    name: "Sarah Smith",
                    role: "Designer",
                    avatar: "SS",
                    online: true,
                  },
                  {
                    id: 3,
                    name: "Mike Johnson",
                    role: "Manager",
                    avatar: "MJ",
                    online: false,
                  },
                  {
                    id: 4,
                    name: "Emily Wilson",
                    role: "Marketing",
                    avatar: "EW",
                    online: true,
                  },
                  {
                    id: 5,
                    name: "Alex Brown",
                    role: "Support",
                    avatar: "AB",
                    online: false,
                  },
                  {
                    id: 6,
                    name: "Lisa Taylor",
                    role: "Developer",
                    avatar: "LT",
                    online: true,
                  },
                ].map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-medium">
                        {member.avatar}
                      </div>
                      {member.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-800"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {member.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                  Invite Member
                </button>
              </div>
            </div>
          ),
        },
        {
          name: "Recent Notifications Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">Notifications</h3>
              <div className="flex items-center space-x-2">
                <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  {/* FiBell icon goes here */}
                </button>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Mark All Read
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { id: 1, title: 'New message received', time: 'Just now', read: false },
                { id: 2, title: 'Your order has been shipped', time: '2 hours ago', read: false },
                { id: 3, title: 'Payment received', time: '1 day ago', read: true },
                { id: 4, title: 'New update available', time: '2 days ago', read: true },
                { id: 5, title: 'Event reminder', time: '1 week ago', read: true }
              ].map((notification) => (
                <div key={notification.id} className={\`flex items-start p-3 rounded-lg \${!notification.read ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-gray-100 dark:hover:bg-gray-700'} transition-colors\`}>
                  <div className="flex-shrink-0 mt-1">
                    {/* icon here */}
                  </div>
                  <div className="ml-3 flex-1">
                    <p className={\`text-sm \${!notification.read ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}\`}>
                      {notification.title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                View All Notifications
              </button>
            </div>
          </div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Notifications</h3>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                    <FiBell size={18} />
                  </button>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    Mark All Read
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    title: "New message received",
                    time: "Just now",
                    read: false,
                    icon: <FiMessageSquare className="text-blue-500" />,
                  },
                  {
                    id: 2,
                    title: "Your order has been shipped",
                    time: "2 hours ago",
                    read: false,
                    icon: <FiTruck className="text-green-500" />,
                  },
                  {
                    id: 3,
                    title: "Payment received",
                    time: "1 day ago",
                    read: true,
                    icon: <FiDollarSign className="text-purple-500" />,
                  },
                  {
                    id: 4,
                    title: "New update available",
                    time: "2 days ago",
                    read: true,
                    icon: <FiDownload className="text-yellow-500" />,
                  },
                  {
                    id: 5,
                    title: "Event reminder",
                    time: "1 week ago",
                    read: true,
                    icon: <FiCalendar className="text-red-500" />,
                  },
                ].map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start p-3 rounded-lg ${
                      !notification.read
                        ? "bg-blue-50 dark:bg-blue-900/30"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    } transition-colors`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {notification.icon}
                    </div>
                    <div className="ml-3 flex-1">
                      <p
                        className={`text-sm ${
                          !notification.read
                            ? "font-semibold text-gray-900 dark:text-white"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {notification.title}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {notification.time}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  View All Notifications
                </button>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Special Widgets",
      widgets: [
        {
          name: "Weather Widget",
          code: `<div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow p-6 text-white">
  <div className="flex justify-between items-start mb-6">
    <div>
      <h3 className="text-xl font-semibold">New York, NY</h3>
      <p className="text-sm opacity-80">Tuesday, June 14</p>
    </div>
    <button className="text-white opacity-80 hover:opacity-100">
      <FiRefreshCw size={18} />
    </button>
  </div>
  <div className="flex items-center justify-between mb-6">
    <div className="text-5xl font-bold">72°</div>
    <div className="text-right">
      <div className="text-xl font-medium">Sunny</div>
      <div className="text-sm opacity-80">H: 76° L: 64°</div>
    </div>
  </div>
  <div className="grid grid-cols-5 gap-2 text-center text-sm">
    {[
      { day: 'Wed', icon: '☀️', temp: '74°' },
      { day: 'Thu', icon: '⛅', temp: '72°' },
      { day: 'Fri', icon: '🌧️', temp: '68°' },
      { day: 'Sat', icon: '☀️', temp: '75°' },
      { day: 'Sun', icon: '☀️', temp: '78°' }
    ].map((forecast, index) => (
      <div key={index} className="flex flex-col items-center">
        <span className="opacity-80">{forecast.day}</span>
        <span className="text-lg my-1">{forecast.icon}</span>
        <span>{forecast.temp}</span>
      </div>
    ))}
  </div>
</div>`,
          component: (
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow p-6 text-white">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold">New York, NY</h3>
                  <p className="text-sm opacity-80">Tuesday, June 14</p>
                </div>
                <button className="text-white opacity-80 hover:opacity-100">
                  <FiRefreshCw size={18} />
                </button>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="text-5xl font-bold">72°</div>
                <div className="text-right">
                  <div className="text-xl font-medium">Sunny</div>
                  <div className="text-sm opacity-80">H: 76° L: 64°</div>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-2 text-center text-sm">
                {[
                  { day: "Wed", icon: "☀️", temp: "74°" },
                  { day: "Thu", icon: "⛅", temp: "72°" },
                  { day: "Fri", icon: "🌧️", temp: "68°" },
                  { day: "Sat", icon: "☀️", temp: "75°" },
                  { day: "Sun", icon: "☀️", temp: "78°" },
                ].map((forecast, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <span className="opacity-80">{forecast.day}</span>
                    <span className="text-lg my-1">{forecast.icon}</span>
                    <span>{forecast.temp}</span>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          name: "Calendar Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <div className="flex justify-between items-center mb-6">
    <h3 className="font-semibold">June 2023</h3>
    <div className="flex space-x-2">
      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
        <FiChevronLeft size={18} />
      </button>
      <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
        <FiChevronRight size={18} />
      </button>
    </div>
  </div>
  <div className="grid grid-cols-7 gap-1 text-center text-sm">
    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
      <div key={day} className="text-gray-500 dark:text-gray-400 font-medium py-1">
        {day}
      </div>
    ))}
    {[
      ...Array(4).fill(null),
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ].map((date, index) => (
      <div
        key={index}
        className={\`py-1 rounded-full \${date === 14 ? 'bg-blue-600 text-white' : date ? 'hover:bg-gray-100 dark:hover:bg-gray-700' : ''}\`}
      >
        {date}
      </div>
    ))}
  </div>
  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
    <div className="space-y-3">
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
        <div className="text-sm">
          <span className="font-medium">Team Meeting</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">10:00 AM</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
        <div className="text-sm">
          <span className="font-medium">Lunch with Sarah</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">12:30 PM</span>
        </div>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">June 2023</h3>
                <div className="flex space-x-2">
                  <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <FiChevronLeft size={18} />
                  </button>
                  <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                    <FiChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                  <div
                    key={day}
                    className="text-gray-500 dark:text-gray-400 font-medium py-1"
                  >
                    {day}
                  </div>
                ))}
                {[
                  ...Array(4).fill(null),
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15,
                  16,
                  17,
                  18,
                  19,
                  20,
                  21,
                  22,
                  23,
                  24,
                  25,
                  26,
                  27,
                  28,
                  29,
                  30,
                ].map((date, index) => (
                  <div
                    key={index}
                    className={`py-1 rounded-full ${
                      date === 14
                        ? "bg-blue-600 text-white"
                        : date
                        ? "hover:bg-gray-100 dark:hover:bg-gray-700"
                        : ""
                    }`}
                  >
                    {date}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                    <div className="text-sm">
                      <span className="font-medium">Team Meeting</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        10:00 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <div className="text-sm">
                      <span className="font-medium">Lunch with Sarah</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        12:30 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Quick Actions Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <h3 className="font-semibold mb-6">Quick Actions</h3>
  <div className="grid grid-cols-2 gap-4">
    {[
      { icon: <FiPlus className="text-blue-500" size={20} />, label: 'New Project', color: 'bg-blue-100 dark:bg-blue-900' },
      { icon: <FiUpload className="text-green-500" size={20} />, label: 'Upload Files', color: 'bg-green-100 dark:bg-green-900' },
      { icon: <FiUser className="text-purple-500" size={20} />, label: 'Add User', color: 'bg-purple-100 dark:bg-purple-900' },
      { icon: <FiSettings className="text-yellow-500" size={20} />, label: 'Settings', color: 'bg-yellow-100 dark:bg-yellow-900' },
      { icon: <FiBarChart2 className="text-red-500" size={20} />, label: 'Reports', color: 'bg-red-100 dark:bg-red-900' },
      { icon: <FiMessageSquare className="text-indigo-500" size={20} />, label: 'Messages', color: 'bg-indigo-100 dark:bg-indigo-900' }
    ].map((action, index) => (
      <button
        key={index}
        className={\`flex flex-col items-center justify-center p-4 rounded-lg \${action.color} hover:opacity-90 transition-opacity\`}
      >
        <div className="mb-2">{action.icon}</div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{action.label}</span>
      </button>
    ))}
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="font-semibold mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <FiPlus className="text-blue-500" size={20} />,
                    label: "New Project",
                    color: "bg-blue-100 dark:bg-blue-900",
                  },
                  {
                    icon: <FiUpload className="text-green-500" size={20} />,
                    label: "Upload Files",
                    color: "bg-green-100 dark:bg-green-900",
                  },
                  {
                    icon: <FiUser className="text-purple-500" size={20} />,
                    label: "Add User",
                    color: "bg-purple-100 dark:bg-purple-900",
                  },
                  {
                    icon: <FiSettings className="text-yellow-500" size={20} />,
                    label: "Settings",
                    color: "bg-yellow-100 dark:bg-yellow-900",
                  },
                  {
                    icon: <FiBarChart2 className="text-red-500" size={20} />,
                    label: "Reports",
                    color: "bg-red-100 dark:bg-red-900",
                  },
                  {
                    icon: (
                      <FiMessageSquare className="text-indigo-500" size={20} />
                    ),
                    label: "Messages",
                    color: "bg-indigo-100 dark:bg-indigo-900",
                  },
                ].map((action, index) => (
                  <button
                    key={index}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg ${action.color} hover:opacity-90 transition-opacity`}
                  >
                    <div className="mb-2">{action.icon}</div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ),
        },
        {
          name: "Goal Tracking Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">Monthly Goals</h3>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {[
                { id: 1, title: 'Revenue Target', progress: 75, target: '$50,000', current: '$37,500', color: 'bg-blue-500' },
                { id: 2, title: 'New Customers', progress: 60, target: '200', current: '120', color: 'bg-green-500' },
                { id: 3, title: 'Projects Completed', progress: 45, target: '20', current: '9', color: 'bg-purple-500' },
                { id: 4, title: 'Support Tickets', progress: 90, target: '100%', current: '90%', color: 'bg-yellow-500' }
              ].map((goal) => (
                <div key={goal.id} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{goal.title}</span>
                    <span className="text-gray-500 dark:text-gray-400">{goal.current} / {goal.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={\`h-2 rounded-full \${goal.color}\`}
                      style={{ width: \`\${goal.progress}%\` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                Set New Goal
              </button>
            </div>
          </div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Monthly Goals</h3>
                <button className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    title: "Revenue Target",
                    progress: 75,
                    target: "$50,000",
                    current: "$37,500",
                    color: "bg-blue-500",
                  },
                  {
                    id: 2,
                    title: "New Customers",
                    progress: 60,
                    target: "200",
                    current: "120",
                    color: "bg-green-500",
                  },
                  {
                    id: 3,
                    title: "Projects Completed",
                    progress: 45,
                    target: "20",
                    current: "9",
                    color: "bg-purple-500",
                  },
                  {
                    id: 4,
                    title: "Support Tickets",
                    progress: 90,
                    target: "100%",
                    current: "90%",
                    color: "bg-yellow-500",
                  },
                ].map((goal) => (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {goal.title}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {goal.current} / {goal.target}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${goal.color}`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                  Set New Goal
                </button>
              </div>
            </div>
          ),
        },
        {
          name: "User Profile Widget",
          code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
  <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-20"></div>
  <div className="px-6 pb-6 relative">
    <div className="flex justify-center -mt-10 mb-4">
      <div className="h-20 w-20 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-700 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="User" className="h-full w-full object-cover" />
      </div>
    </div>
    <div className="text-center mb-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">John Doe</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Product Manager</p>
    </div>
    <div className="flex justify-center space-x-4 mb-6">
      <div className="text-center">
        <p className="font-semibold text-gray-800 dark:text-white">245</p>
        <p className="text-gray-600 dark:text-gray-400 text-xs">Projects</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-800 dark:text-white">12k</p>
        <p className="text-gray-600 dark:text-gray-400 text-xs">Followers</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-800 dark:text-white">1.2k</p>
        <p className="text-gray-600 dark:text-gray-400 text-xs">Following</p>
      </div>
    </div>
    <div className="space-y-3">
      <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
        Follow
      </button>
      <button className="w-full py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
        Message
      </button>
    </div>
  </div>
</div>`,
          component: (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 h-20"></div>
              <div className="px-6 pb-6 relative">
                <div className="flex justify-center -mt-10 mb-4">
                  <div className="h-20 w-20 rounded-full border-4 border-white dark:border-gray-800 bg-white dark:bg-gray-700 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                      alt="User"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    John Doe
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Product Manager
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mb-6">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 dark:text-white">
                      245
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Projects
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 dark:text-white">
                      12k
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Followers
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-800 dark:text-white">
                      1.2k
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Following
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                    Follow
                  </button>
                  <button className="w-full py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
                    Message
                  </button>
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
            Dashboard Widgets Showcase
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
            Explore our collection of meticulously crafted dashboard widgets for
            various use cases. Click the <FiCopy className="inline" /> icon to
            copy the Tailwind CSS code for any widget!
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
        </motion.section>

        {/* Widget Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {widgetCategories.map((category, catIndex) => (
            <motion.section
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">{category.title}</h2>
              <div className="space-y-6">
                {category.widgets.map((widget, widgetIndex) => {
                  const globalIndex = catIndex * 5 + widgetIndex;
                  return (
                    <div key={widgetIndex} className="group relative">
                      {widget.component}
                      <button
                        onClick={() =>
                          copyToClipboard(widget.code, globalIndex)
                        }
                        className="absolute -top-2 -right-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                        aria-label="Copy code"
                      >
                        {copiedIndex === globalIndex ? (
                          <FiCheck className="text-green-500" size={16} />
                        ) : (
                          <FiCopy
                            className="text-gray-600 dark:text-gray-300"
                            size={16}
                          />
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

export default DashboardWidgetsShowcase;
