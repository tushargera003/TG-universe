import React from "react";

// Component 1: Gradient Wave
export const Component1 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 rounded-xl" />
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Gradient Wave</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 2: Glassmorphism
export const Component2 = () => (
  <div className="relative p-8 bg-white/80 backdrop-blur-lg rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-5 rounded-xl pointer-events-none" />
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-white mb-2">Glassmorphism</h3>
      <div className="text-4xl font-bold text-white mb-4">
        $29<span className="text-gray-300 text-base">/mo</span>
      </div>
      <ul className="text-gray-200 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 3: 3D Flip
export const Component3 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:rotate-3 hover:shadow-2xl">
    <h3 className="text-2xl font-bold text-gray-900 mb-2">3D Flip</h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $34<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>20GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md font-medium hover:from-blue-600 hover:to-purple-600 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 4: Dot Pattern
export const Component4 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-dashed border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gray-100 opacity-5 rounded-xl" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="w-full h-full bg-gradient-to-r from-gray-100 to-transparent opacity-20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full bg-gray-300 ${
              i % 3 === 0
                ? "opacity-70"
                : i % 2 === 0
                ? "opacity-50"
                : "opacity-30"
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Dot Pattern</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $19<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 5: Neon Glow
export const Component5 = () => (
  <div className="relative p-8 bg-black rounded-xl shadow-xl border border-transparent transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-5 rounded-xl" />
    <div className="absolute inset-0 border-2 border-dashed border-cyan-500 opacity-30 rounded-xl" />
    <div className="absolute inset-0 shadow-neon rounded-xl" />
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-white mb-2">Neon Glow</h3>
      <div className="text-4xl font-bold text-white mb-4">
        $27<span className="text-gray-400 text-base">/mo</span>
      </div>
      <ul className="text-gray-300 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-cyan-500 text-white rounded-md font-medium hover:bg-cyan-600 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 6: Split Design
export const Component6 = () => (
  <div className="relative flex flex-col md:flex-row overflow-hidden rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="w-full md:w-1/2 bg-gradient-to-b from-blue-600 to-blue-800 p-8 text-white">
      <h3 className="text-2xl font-bold mb-4">Split Design</h3>
      <div className="text-4xl font-bold mb-4">
        $24<span className="text-gray-300 text-base">/mo</span>
      </div>
    </div>
    <div className="w-full md:w-1/2 bg-white p-8">
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 7: Card with Badge
export const Component7 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
      HOT
    </span>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Card with Badge</h3>
    <div className="text-4xl font-bold text-red-600 mb-4">
      $29<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>15GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 8: Ribbon Banner
export const Component8 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute top-0 right-0 -mt-4 -mr-4 border-b-8 border-r-8 border-transparent border-blue-600" />
    <div className="absolute top-0 right-0 -mt-10 -mr-10 text-center text-white text-xs font-bold leading-none">
      POPULAR
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Ribbon Banner</h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $34<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>20GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 9: Card with Icons
export const Component9 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
      <svg
        className="w-6 h-6 text-blue-600 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h12m-2 18H7v-2H3m18 0v-2h-2m2-16.364l.266 12A2 2 0 0022 18.364h-6.908a2 2 0 00-1.946.664l-7.091 3.546A2 2 0 006.091 21H3a2 2 0 00-2 2v-1a1 1 0 011-1h2.091a2 2 0 001.946-.664l7.09-3.546a2 2 0 012-1.234zm8 0V6a2 2 0 114 0v7.364z"
        />
      </svg>
      Icon Card
    </h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $24<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3 flex flex-col">
      <li className="flex items-center">
        <svg
          className="w-5 h-5 text-green-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>{" "}
        Unlimited users
      </li>
      <li className="flex items-center">
        <svg
          className="w-5 h-5 text-green-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>{" "}
        10GB Storage
      </li>
      <li className="flex items-center">
        <svg
          className="w-5 h-5 text-green-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>{" "}
        Advanced analytics
      </li>
      <li className="flex items-center">
        <svg
          className="w-5 h-5 text-green-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>{" "}
        24/7 Support
      </li>
    </ul>
    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 10: Minimal Design
export const Component10 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">Minimal Design</h3>
    <div className="text-3xl font-bold text-gray-800 mb-4">
      $19<span className="text-gray-400 text-sm">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-2">
      <li>Unlimited users</li>
      <li>5GB Storage</li>
      <li>Basic analytics</li>
      <li>Email Support</li>
    </ul>
    <button className="w-full py-2 px-3 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-900 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 11: Card with Stats
export const Component11 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
      <div className="w-75 h-2 bg-blue-600 rounded-full" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Card with Stats</h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $29<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>15GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 12: Card with Image
export const Component12 = () => (
  <div className="relative flex flex-col md:flex-row overflow-hidden rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="w-full md:w-1/2 bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
      <svg
        className="w-16 h-16 mx-auto mb-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="text-4xl font-bold mb-4">
        $24<span className="text-gray-300 text-base">/mo</span>
      </div>
    </div>
    <div className="w-full md:w-1/2 bg-white p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Card with Image</h3>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 13: Outline Card
export const Component13 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-inner border border-blue-600 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
    <h3 className="text-2xl font-bold text-blue-600 mb-2">Outline Card</h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $24<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>10GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 14: Card with Shadow
export const Component14 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600 via-transparent to-transparent opacity-10 rounded-b-xl" />
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Card with Shadow
      </h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $29<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 15: Card with Stats Bars
export const Component15 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="w-full h-4 bg-gray-200 rounded-full mb-6">
      <div className="w-80 h-4 bg-blue-600 rounded-full" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">
      Card with Stats Bars
    </h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $34<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>20GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 16: Card with Floating Elements
export const Component16 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 flex flex-wrap items-center justify-center">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`w-10 h-10 rounded-full ${
            i % 3 === 0
              ? "bg-blue-100"
              : i % 2 === 0
              ? "bg-purple-100"
              : "bg-pink-100"
          }`}
          style={{
            top: `${20 + i * 10}%`,
            left: `${20 + i * 10}%`,
          }}
        />
      ))}
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Floating Elements
      </h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 17: Card with Diagonal Split
export const Component17 = () => (
  <div className="relative flex flex-col overflow-hidden rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="w-full h-64 bg-gradient-to-r from-blue-600 to-purple-600" />
    <div className="absolute inset-x-0 bottom-0 w-full h-64 bg-white transform skew-y-[-5deg] -mb-12" />
    <div className="relative z-10 p-8 bg-white">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Diagonal Split</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $29<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 18: Card with Speech Bubble
export const Component18 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-600 via-transparent to-transparent opacity-10 rounded-b-xl" />
    <div className="relative z-10">
      <div className="relative p-4 bg-blue-600 text-white rounded-xl mb-6">
        <div className="absolute -top-3 -left-3 bg-white w-6 h-6 rounded-full" />
        <div className="absolute -top-3 -right-3 bg-white w-6 h-6 rounded-full" />
        <div className="absolute -bottom-3 -left-3 bg-white w-6 h-6 rounded-full" />
        <h3 className="text-xl font-bold">Speech Bubble</h3>
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 19: Card with Wave Border
export const Component19 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-xl" />
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <svg
        className="w-64 h-64 opacity-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
        />
      </svg>
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Wave Border</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $29<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 20: Card with Circular Elements
export const Component20 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 flex flex-wrap items-center justify-center">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className={`w-12 h-12 rounded-full ${
            i % 2 === 0 ? "bg-blue-50" : "bg-purple-50"
          }`}
          style={{
            top: `${10 + i * 10}%`,
            left: `${10 + i * 10}%`,
          }}
        />
      ))}
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Circular Elements
      </h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $34<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>20GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 21: Card with Floating Dots
export const Component21 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 flex flex-wrap items-center justify-center">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-full ${
            i % 3 === 0
              ? "bg-blue-500"
              : i % 2 === 0
              ? "bg-purple-500"
              : "bg-pink-500"
          } opacity-20`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Floating Dots</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 22: Card with Glowing Border
export const Component22 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-transparent transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 border-2 border-dashed border-blue-500 rounded-xl" />
    <div className="absolute inset-0 shadow-blue-500 shadow-[0_0_15px_2px] opacity-20 rounded-xl" />
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Glowing Border</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $29<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 23: Card with Triangle Pattern
export const Component23 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gray-50 rounded-xl" />
    <div className="absolute inset-0 flex flex-wrap items-center justify-center">
      {[...Array(20)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 opacity-10 ${i % 2 === 0 ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ))}
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Triangle Pattern
      </h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $34<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>20GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 24: Card with Speech Bubbles
export const Component24 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 flex flex-wrap items-center justify-center">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute p-4 bg-blue-50 rounded-xl ${
            i % 2 === 0 ? "text-blue-500" : "text-blue-300"
          }`}
          style={{
            top: `${20 + i * 10}%`,
            left: `${20 + i * 10}%`,
          }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
        </div>
      ))}
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Speech Bubbles</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 25: Card with Floating Icons
export const Component25 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 flex flex-wrap items-center justify-center">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute p-4 ${
            i % 2 === 0 ? "text-blue-500" : "text-purple-500"
          }`}
          style={{
            top: `${20 + i * 10}%`,
            left: `${20 + i * 10}%`,
          }}
        >
          <svg
            className="w-6 h-6 opacity-20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
      ))}
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Floating Icons</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $29<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 26: Card with Dashed Border
export const Component26 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-dashed border-blue-300 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dashed Border</h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $34<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>20GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 27: Card with Diagonal Stripe
export const Component27 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-transparent opacity-10 rounded-xl" />
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          opacity=".1"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Diagonal Stripe</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 28: Card with Dot Pattern
export const Component28 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gray-50 rounded-xl" />
    <div className="absolute inset-0 flex flex-wrap items-center justify-center">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full bg-blue-500 ${
            i % 2 === 0 ? "opacity-10" : "opacity-5"
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Dot Pattern</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $29<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 29: Card with Striped Background
export const Component29 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 opacity-90 rounded-xl" />
    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-500 to-transparent opacity-10 rounded-xl" />
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Striped Background
      </h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $34<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>20GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 30: Card with Floating Wave
export const Component30 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-500 to-transparent opacity-20 rounded-b-xl" />
    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-transparent to-blue-500 opacity-10 rounded-b-xl" />
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Floating Wave</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 31: Card with Shadow Overlay
export const Component31 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500 opacity-5 rounded-xl" />
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Shadow Overlay</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $29<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 32: Card with Glowing Effect
export const Component32 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 rounded-xl" />
    <div className="absolute inset-0 shadow-blue-500 shadow-[0_0_15px_2px] opacity-10 rounded-xl" />
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Glowing Effect</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $34<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>20GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 33: Card with Circular Gradient
export const Component33 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 rounded-xl overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="grad1"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#4361ee" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3f37c9" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)" />
      </svg>
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Circular Gradient
      </h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 34: Card with Hexagon Pattern
export const Component34 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gray-50 rounded-xl" />
    <div className="absolute inset-0 flex flex-wrap items-center justify-center">
      {[...Array(12)].map((_, i) => (
        <svg
          key={i}
          className={`w-8 h-8 opacity-10 ${
            i % 2 === 0 ? "text-blue-500" : "text-purple-500"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      ))}
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Hexagon Pattern</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $29<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 35: Card with Diamond Pattern
export const Component35 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-0 bg-gray-50 rounded-xl" />
    <div className="absolute inset-0 flex flex-wrap items-center justify-center">
      {[...Array(12)].map((_, i) => (
        <svg
          key={i}
          className={`w-6 h-6 opacity-10 ${
            i % 2 === 0 ? "text-blue-500" : "text-purple-500"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 16 6 20 10 16 14 12 18 8 14 4 10 8 6 12 2" />
        </svg>
      ))}
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Diamond Pattern</h3>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $34<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>20GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 36: Card with Speech Bubble Corner
export const Component36 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-x-0 bottom-0 w-full h-24 bg-blue-50 rounded-b-xl" />
    <div className="relative z-10">
      <div className="relative p-4 bg-blue-500 text-white rounded-xl mb-6">
        <div className="absolute -top-3 -left-3 bg-white w-6 h-6 rounded-full" />
        <div className="absolute -top-3 -right-3 bg-white w-6 h-6 rounded-full" />
        <h3 className="text-xl font-bold">Speech Corner</h3>
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 37: Card with Corner Ribbon
export const Component37 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute top-0 right-0 -mt-4 -mr-4 border-b-8 border-r-8 border-transparent border-red-500" />
    <div className="absolute top-0 right-0 -mt-10 -mr-10 text-center text-white text-xs font-bold leading-none">
      NEW
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Corner Ribbon</h3>
    <div className="text-4xl font-bold text-red-600 mb-4">
      $29<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>15GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 38: Card with Speech Bubble Corner 2
export const Component38 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-x-0 top-0 w-full h-24 bg-blue-50 rounded-t-xl" />
    <div className="relative z-10">
      <div className="relative p-4 bg-blue-500 text-white rounded-xl mb-6">
        <div className="absolute -bottom-3 -left-3 bg-white w-6 h-6 rounded-full" />
        <div className="absolute -bottom-3 -right-3 bg-white w-6 h-6 rounded-full" />
        <h3 className="text-xl font-bold">Speech Top</h3>
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $34<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>20GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 39: Card with Speech Bubble Side
export const Component39 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-y-0 left-0 w-24 bg-blue-50 rounded-r-xl" />
    <div className="relative z-10">
      <div className="relative p-4 bg-blue-500 text-white rounded-xl mb-6">
        <div className="absolute -top-3 -right-3 bg-white w-6 h-6 rounded-full" />
        <div className="absolute -bottom-3 -right-3 bg-white w-6 h-6 rounded-full" />
        <h3 className="text-xl font-bold">Speech Side</h3>
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 40: Card with Speech Bubble Bottom
export const Component40 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-x-0 top-0 w-full h-24 bg-blue-50 rounded-b-xl" />
    <div className="relative z-10">
      <div className="relative p-4 bg-blue-500 text-white rounded-xl mb-6">
        <div className="absolute -top-3 -left-3 bg-white w-6 h-6 rounded-full" />
        <div className="absolute -top-3 -right-3 bg-white w-6 h-6 rounded-full" />
        <h3 className="text-xl font-bold">Speech Bottom</h3>
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $29<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 41: Card with Speech Bubble Left
export const Component41 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-y-0 right-0 w-24 bg-blue-50 rounded-l-xl" />
    <div className="relative z-10">
      <div className="relative p-4 bg-blue-500 text-white rounded-xl mb-6">
        <div className="absolute -top-3 -left-3 bg-white w-6 h-6 rounded-full" />
        <div className="absolute -bottom-3 -left-3 bg-white w-6 h-6 rounded-full" />
        <h3 className="text-xl font-bold">Speech Left</h3>
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $34<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>20GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 42: Card with Speech Bubble Right
export const Component42 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-y-0 left-0 w-24 bg-blue-50 rounded-r-xl" />
    <div className="relative z-10">
      <div className="relative p-4 bg-blue-500 text-white rounded-xl mb-6">
        <div className="absolute -top-3 -right-3 bg-white w-6 h-6 rounded-full" />
        <div className="absolute -bottom-3 -right-3 bg-white w-6 h-6 rounded-full" />
        <h3 className="text-xl font-bold">Speech Right</h3>
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $24<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>10GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 43: Card with Speech Bubble Top
export const Component43 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-x-0 bottom-0 w-full h-24 bg-blue-50 rounded-t-xl" />
    <div className="relative z-10">
      <div className="relative p-4 bg-blue-500 text-white rounded-xl mb-6">
        <div className="absolute -bottom-3 -left-3 bg-white w-6 h-6 rounded-full" />
        <div className="absolute -bottom-3 -right-3 bg-white w-6 h-6 rounded-full" />
        <h3 className="text-xl font-bold">Speech Top</h3>
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $29<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>15GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 44: Card with Speech Bubble Bottom
export const Component44 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute inset-x-0 top-0 w-full h-24 bg-blue-50 rounded-b-xl" />
    <div className="relative z-10">
      <div className="relative p-4 bg-blue-500 text-white rounded-xl mb-6">
        <div className="absolute -top-3 -left-3 bg-white w-6 h-6 rounded-full" />
        <div className="absolute -top-3 -right-3 bg-white w-6 h-6 rounded-full" />
        <h3 className="text-xl font-bold">Speech Bottom</h3>
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        $34<span className="text-gray-500 text-base">/mo</span>
      </div>
      <ul className="text-gray-600 mb-6 space-y-3">
        <li>Unlimited users</li>
        <li>20GB Storage</li>
        <li>Advanced analytics</li>
        <li>24/7 Support</li>
      </ul>
      <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

// Component 45: Card with Speech Bubble Corner
export const Component45 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute top-0 right-0 -mt-4 -mr-4 border-b-8 border-r-8 border-transparent border-blue-500" />
    <div className="absolute top-0 right-0 -mt-10 -mr-10 text-center text-white text-xs font-bold leading-none">
      NEW
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Corner Ribbon</h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $24<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>10GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 46: Card with Speech Bubble Corner 2
export const Component46 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute bottom-0 right-0 -mb-4 -mr-4 border-t-8 border-l-8 border-transparent border-blue-500" />
    <div className="absolute bottom-0 right-0 -mb-10 -mr-10 text-center text-white text-xs font-bold leading-none">
      NEW
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Corner Ribbon</h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $29<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>15GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 47: Card with Speech Bubble Corner 3
export const Component47 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute top-0 left-0 -mt-4 -ml-4 border-b-8 border-r-8 border-transparent border-blue-500" />
    <div className="absolute top-0 left-0 -mt-10 -ml-10 text-center text-white text-xs font-bold leading-none">
      NEW
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Corner Ribbon</h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $34<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>20GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 48: Card with Speech Bubble Corner 4
export const Component48 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute bottom-0 left-0 -mb-4 -ml-4 border-t-8 border-r-8 border-transparent border-blue-500" />
    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 text-center text-white text-xs font-bold leading-none">
      NEW
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Corner Ribbon</h3>
    <div className="text-4xl font-bold text-blue-600 mb-4">
      $24<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>10GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 49: Card with Speech Bubble Corner 5
export const Component49 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute top-0 left-0 -mt-4 -ml-4 border-b-8 border-r-8 border-transparent border-red-500" />
    <div className="absolute top-0 left-0 -mt-10 -ml-10 text-center text-white text-xs font-bold leading-none">
      HOT
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Corner Ribbon</h3>
    <div className="text-4xl font-bold text-red-600 mb-4">
      $29<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>15GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors">
      Get Started
    </button>
  </div>
);

// Component 50: Card with Speech Bubble Corner 6
export const Component50 = () => (
  <div className="relative p-8 bg-white rounded-xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="absolute bottom-0 right-0 -mb-4 -mr-4 border-t-8 border-l-8 border-transparent border-red-500" />
    <div className="absolute bottom-0 right-0 -mb-10 -mr-10 text-center text-white text-xs font-bold leading-none">
      HOT
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Corner Ribbon</h3>
    <div className="text-4xl font-bold text-red-600 mb-4">
      $34<span className="text-gray-500 text-base">/mo</span>
    </div>
    <ul className="text-gray-600 mb-6 space-y-3">
      <li>Unlimited users</li>
      <li>20GB Storage</li>
      <li>Advanced analytics</li>
      <li>24/7 Support</li>
    </ul>
    <button className="w-full py-3 px-4 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors">
      Get Started
    </button>
  </div>
);
