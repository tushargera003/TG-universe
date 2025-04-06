import { useState, useEffect } from "react";
import { FiCopy, FiCheck, FiSun, FiMoon } from "react-icons/fi";

const SkeletonShowcase = () => {
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

  // Skeleton data
  const skeletonCategories = [
    {
      title: "Basic Skeletons",
      skeletons: [
        {
          name: "Simple Line",
          code: `<div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>`,
          component: (
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
          ),
        },
        {
          name: "Paragraph",
          code: `<div className="space-y-2">
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
</div>`,
          component: (
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
            </div>
          ),
        },
        {
          name: "Circle Avatar",
          code: `<div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>`,
          component: (
            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          ),
        },
        {
          name: "Rectangle Avatar",
          code: `<div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>`,
          component: (
            <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          ),
        },
        {
          name: "Card",
          code: `<div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
  <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-2"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
</div>`,
          component: (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Content Loaders",
      skeletons: [
        {
          name: "Article",
          code: `<div className="space-y-4">
  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
  <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded mt-4 animate-pulse"></div>
</div>`,
          component: (
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6 animate-pulse"></div>
              <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded mt-4 animate-pulse"></div>
            </div>
          ),
        },
        {
          name: "Profile Header",
          code: `<div className="flex items-center space-x-4">
  <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
  <div className="flex-1 space-y-2">
    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
  </div>
</div>`,
          component: (
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>
          ),
        },
        {
          name: "List Items",
          code: `<div className="space-y-3">
  {[1, 2, 3, 4].map((item) => (
    <div key={item} className="flex items-center space-x-3">
      <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-2"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
  ))}
</div>`,
          component: (
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-2"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          name: "Table Rows",
          code: `<div className="space-y-2">
  {[1, 2, 3, 4].map((row) => (
    <div key={row} className="flex space-x-4">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
    </div>
  ))}
</div>`,
          component: (
            <div className="space-y-2">
              {[1, 2, 3, 4].map((row) => (
                <div key={row} className="flex space-x-4">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                </div>
              ))}
            </div>
          ),
        },
        {
          name: "Dashboard Card",
          code: `<div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
  <div className="flex justify-between items-center mb-4">
    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
  </div>
  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse mb-2"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
</div>`,
          component: (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
                <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              </div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Complex Skeletons",
      skeletons: [
        {
          name: "E-commerce Product",
          code: `<div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
  <div className="p-4">
    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-3"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse mb-4"></div>
    <div className="flex justify-between items-center">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8 animate-pulse"></div>
    </div>
  </div>
</div>`,
          component: (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              <div className="p-4">
                <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-3"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse mb-4"></div>
                <div className="flex justify-between items-center">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-8 animate-pulse"></div>
                </div>
              </div>
            </div>
          ),
        },
        {
          name: "Social Media Post",
          code: `<div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
  <div className="flex items-center space-x-3 mb-4">
    <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
    <div className="space-y-1">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
    </div>
  </div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse mb-2"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse mb-4"></div>
  <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
  <div className="flex space-x-4">
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
  </div>
</div>`,
          component: (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="space-y-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse mb-4"></div>
              <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
              <div className="flex space-x-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
              </div>
            </div>
          ),
        },
        {
          name: "Weather Widget",
          code: `<div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
  <div className="flex justify-between items-center mb-6">
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
    <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
  </div>
  <div className="flex items-center justify-center mb-6">
    <div className="h-24 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
  </div>
  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto animate-pulse mb-2"></div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto animate-pulse mb-6"></div>
  <div className="grid grid-cols-3 gap-4">
    {[1, 2, 3].map((day) => (
      <div key={day} className="text-center">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto animate-pulse mb-2"></div>
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto animate-pulse"></div>
      </div>
    ))}
  </div>
</div>`,
          component: (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
                <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              </div>
              <div className="flex items-center justify-center mb-6">
                <div className="h-24 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              </div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto animate-pulse mb-6"></div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((day) => (
                  <div key={day} className="text-center">
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto animate-pulse mb-2"></div>
                    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          name: "Music Player",
          code: `<div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
  <div className="flex items-center space-x-4 mb-6">
    <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    <div className="flex-1 space-y-2">
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
    </div>
  </div>
  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse mb-4"></div>
  <div className="flex justify-between text-xs text-gray-400 mb-6">
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-8 animate-pulse"></div>
    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-8 animate-pulse"></div>
  </div>
  <div className="flex justify-center space-x-8">
    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
    <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
  </div>
</div>`,
          component: (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-full animate-pulse mb-4"></div>
              <div className="flex justify-between text-xs text-gray-400 mb-6">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-8 animate-pulse"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-8 animate-pulse"></div>
              </div>
              <div className="flex justify-center space-x-8">
                <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              </div>
            </div>
          ),
        },
        {
          name: "Video Card",
          code: `<div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <div className="relative pt-[56.25%] bg-gray-200 dark:bg-gray-700 animate-pulse">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-12 w-12 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
    </div>
  </div>
  <div className="p-4">
    <div className="flex items-start space-x-3">
      <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      <div className="flex-1 space-y-2">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
      </div>
    </div>
  </div>
</div>`,
          component: (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="relative pt-[56.25%] bg-gray-200 dark:bg-gray-700 animate-pulse">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Animated Skeletons",
      skeletons: [
        {
          name: "Wave Animation",
          code: `<div className="space-y-3">
  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-full animate-wave bg-[length:200%_100%]"></div>
  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-5/6 animate-wave bg-[length:200%_100%] delay-100"></div>
  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-4/6 animate-wave bg-[length:200%_100%] delay-200"></div>
</div>`,
          component: (
            <div className="space-y-3">
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-full animate-wave bg-[length:200%_100%]"></div>
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-5/6 animate-wave bg-[length:200%_100%] delay-100"></div>
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded w-4/6 animate-wave bg-[length:200%_100%] delay-200"></div>
            </div>
          ),
        },
        {
          name: "Pulse Gradient",
          code: `<div className="h-32 w-full rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse-gradient bg-[length:400%_100%]"></div>`,
          component: (
            <div className="h-32 w-full rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse-gradient bg-[length:400%_100%]"></div>
          ),
        },
        {
          name: "Shimmer Effect",
          code: `<div className="relative overflow-hidden h-12 w-full bg-gray-200 dark:bg-gray-700 rounded">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-500/50 to-transparent animate-shimmer"></div>
</div>`,
          component: (
            <div className="relative overflow-hidden h-12 w-full bg-gray-200 dark:bg-gray-700 rounded">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 dark:via-gray-500/50 to-transparent animate-shimmer"></div>
            </div>
          ),
        },
        {
          name: "Fade In/Out",
          code: `<div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-fadeInOut"></div>`,
          component: (
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-fadeInOut"></div>
          ),
        },
        {
          name: "Bounce Animation",
          code: `<div className="flex space-x-2">
  <div className="h-3 w-3 bg-gray-200 dark:bg-gray-700 rounded-full animate-bounce"></div>
  <div className="h-3 w-3 bg-gray-200 dark:bg-gray-700 rounded-full animate-bounce delay-100"></div>
  <div className="h-3 w-3 bg-gray-200 dark:bg-gray-700 rounded-full animate-bounce delay-200"></div>
</div>`,
          component: (
            <div className="flex space-x-2">
              <div className="h-3 w-3 bg-gray-200 dark:bg-gray-700 rounded-full animate-bounce"></div>
              <div className="h-3 w-3 bg-gray-200 dark:bg-gray-700 rounded-full animate-bounce delay-100"></div>
              <div className="h-3 w-3 bg-gray-200 dark:bg-gray-700 rounded-full animate-bounce delay-200"></div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Component Skeletons",
      skeletons: [
        {
          name: "Navbar",
          code: `<div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
  <div className="hidden md:flex space-x-6">
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
  </div>
  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
</div>`,
          component: (
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
              <div className="hidden md:flex space-x-6">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
              </div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
            </div>
          ),
        },
        {
          name: "Sidebar",
          code: `<div className="w-64 p-4 border-r border-gray-200 dark:border-gray-700 h-screen">
  <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-8"></div>
  <div className="space-y-4">
    {[1, 2, 3, 4, 5].map((item) => (
      <div key={item} className="flex items-center space-x-3">
        <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
      </div>
    ))}
  </div>
</div>`,
          component: (
            <div className="w-64 p-4 border-r border-gray-200 dark:border-gray-700 h-screen">
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-8"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center space-x-3">
                    <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          name: "Pagination",
          code: `<div className="flex items-center justify-center space-x-2">
  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
  <div className="h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
</div>`,
          component: (
            <div className="flex items-center justify-center space-x-2">
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-10 w-10 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          ),
        },
        {
          name: "Breadcrumbs",
          code: `<div className="flex items-center space-x-2">
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
  <div className="text-gray-400">/</div>
  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
  <div className="text-gray-400">/</div>
  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20 animate-pulse"></div>
</div>`,
          component: (
            <div className="flex items-center space-x-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
              <div className="text-gray-400">/</div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
              <div className="text-gray-400">/</div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-20 animate-pulse"></div>
            </div>
          ),
        },
        {
          name: "Tabs",
          code: `<div className="border-b border-gray-200 dark:border-gray-700">
  <div className="flex space-x-8">
    <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded-t w-16 animate-pulse"></div>
    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-t w-16 animate-pulse"></div>
    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-t w-16 animate-pulse"></div>
  </div>
</div>`,
          component: (
            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex space-x-8">
                <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded-t w-16 animate-pulse"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-t w-16 animate-pulse"></div>
                <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-t w-16 animate-pulse"></div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      title: "Specialized Skeletons",
      skeletons: [
        {
          name: "Code Block",
          code: `<div className="bg-gray-800 rounded-lg p-4">
  <div className="flex space-x-2 mb-4">
    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
  </div>
  <div className="space-y-2">
    <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
    <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse"></div>
    <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse"></div>
    <div className="h-4 bg-gray-700 rounded w-4/6 animate-pulse"></div>
    <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
  </div>
</div>`,
          component: (
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex space-x-2 mb-4">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-4/6 animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>
          ),
        },
        {
          name: "Data Table",
          code: `<div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
  <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 dark:bg-gray-800">
    {['Header', 'Header', 'Header', 'Header'].map((item, i) => (
      <div key={i} className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    ))}
  </div>
  <div className="divide-y divide-gray-200 dark:divide-gray-700">
    {[1, 2, 3, 4].map((row) => (
      <div key={row} className="grid grid-cols-4 gap-4 p-4">
        {[1, 2, 3, 4].map((cell) => (
          <div key={cell} className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        ))}
      </div>
    ))}
  </div>
</div>`,
          component: (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-100 dark:bg-gray-800">
                {["Header", "Header", "Header", "Header"].map((item, i) => (
                  <div
                    key={i}
                    className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[1, 2, 3, 4].map((row) => (
                  <div key={row} className="grid grid-cols-4 gap-4 p-4">
                    {[1, 2, 3, 4].map((cell) => (
                      <div
                        key={cell}
                        className="h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          name: "Calendar",
          code: `<div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
  <div className="flex justify-between items-center mb-4">
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
    <div className="flex space-x-2">
      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    </div>
  </div>
  <div className="grid grid-cols-7 gap-2">
    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
      <div key={i} className="text-center h-6 text-sm font-medium text-gray-500">{day}</div>
    ))}
    {Array.from({ length: 35 }).map((_, i) => (
      <div key={i} className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    ))}
  </div>
</div>`,
          component: (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
                <div className="flex space-x-2">
                  <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                  <div
                    key={i}
                    className="text-center h-6 text-sm font-medium text-gray-500"
                  >
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                  ></div>
                ))}
              </div>
            </div>
          ),
        },
        {
          name: "Kanban Board",
          code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {['To Do', 'In Progress', 'Done'].map((column, i) => (
    <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse mb-4"></div>
      <div className="space-y-3">
        {[1, 2].map((card) => (
          <div key={card} className="border border-gray-200 dark:border-gray-700 rounded p-3">
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-2"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse mb-3"></div>
            <div className="flex justify-between">
              <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>`,
          component: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["To Do", "In Progress", "Done"].map((column, i) => (
                <div
                  key={i}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse mb-4"></div>
                  <div className="space-y-3">
                    {[1, 2].map((card) => (
                      <div
                        key={card}
                        className="border border-gray-200 dark:border-gray-700 rounded p-3"
                      >
                        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-2"></div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse mb-3"></div>
                        <div className="flex justify-between">
                          <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          name: "Chat Interface",
          code: `<div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-96 flex flex-col">
  <div className="p-4 border-b border-gray-200 dark:border-gray-700">
    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
  </div>
  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
    <div className="flex items-start space-x-3">
      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      <div className="space-y-1">
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
        <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 animate-pulse"></div>
      </div>
    </div>
    <div className="flex items-start space-x-3 justify-end">
      <div className="space-y-1">
        <div className="h-16 bg-blue-500 dark:bg-blue-700 rounded-lg w-64 animate-pulse ml-auto"></div>
      </div>
      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
    </div>
  </div>
  <div className="p-4 border-t border-gray-200 dark:border-gray-700">
    <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
  </div>
</div>`,
          component: (
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-96 flex flex-col">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
              </div>
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  <div className="space-y-1">
                    <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
                    <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg w-64 animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-start space-x-3 justify-end">
                  <div className="space-y-1">
                    <div className="h-16 bg-blue-500 dark:bg-blue-700 rounded-lg w-64 animate-pulse ml-auto"></div>
                  </div>
                  <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              </div>
            </div>
          ),
        },
      ],
    },
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
          <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Skeleton Universe
          </h1>
        </header>

        {/* Introduction */}
        <section className="mb-8 md:mb-16">
          <p className="text-base md:text-xl mb-4 md:mb-6 max-w-3xl">
            Explore our collection of skeleton loading components for your React
            applications. Click the <FiCopy className="inline" /> icon to copy
            the Tailwind CSS code for any skeleton!
          </p>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 md:mb-8"></div>
        </section>

        {/* Skeleton Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skeletonCategories.map((category, catIndex) => (
            <section
              key={catIndex}
              className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg md:rounded-xl shadow-md"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                {category.title}
              </h2>
              <div className="space-y-3 md:space-y-4">
                {category.skeletons.map((skeleton, skelIndex) => {
                  const globalIndex = catIndex * 5 + skelIndex;
                  return (
                    <div key={skelIndex} className="group relative">
                      <div className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                        {skeleton.component}
                      </div>
                      <button
                        onClick={() =>
                          copyToClipboard(skeleton.code, globalIndex)
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
                        <div className="absolute -top-8 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                          Copied!
                        </div>
                      )}
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {skeleton.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Add these to your global CSS */}
      <style jsx global>{`
        @keyframes wave {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .animate-wave {
          animation: wave 1.5s linear infinite;
        }

        @keyframes pulse-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-pulse-gradient {
          animation: pulse-gradient 2s ease infinite;
          background-size: 400% 400%;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }

        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-fadeInOut {
          animation: fadeInOut 1.5s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce {
          animation: bounce 0.6s infinite;
        }
      `}</style>
    </div>
  );
};

export default SkeletonShowcase;
