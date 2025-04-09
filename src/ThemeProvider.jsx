// ThemeProvider.js
import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context for the theme
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // Check for user's preferred color scheme
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme;
      }

      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) {
        return "dark";
      }
    }

    return "light"; // Default theme
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Apply theme changes to document
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes and add the current one
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Value provided to any descendants of ThemeContext
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useTheme = () => useContext(ThemeContext);
