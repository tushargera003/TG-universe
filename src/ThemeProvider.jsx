// ThemeProvider.js
import React, { createContext, useState, useContext } from "react";

// Create a Context for the theme
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  // You can initialize the theme to "light" or "dark"
  const [theme, setTheme] = useState("light");

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Value provided to any descendants of ThemeContext
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {/* Optionally add a class for theming */}
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useTheme = () => useContext(ThemeContext);
