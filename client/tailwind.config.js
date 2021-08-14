module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED",
        secondary: "#2C7AA1",
        success: "#34D399",
        warning: "#FBBF24",
        danger: "#F04444",
        info: "#3B82F6",
        dark: "#232323", // or #404040
        light: "#F9F9F9",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },
  plugins: [],
};
