import { useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const THEME_KEY = "portfolio-theme";

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "dark";
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme: Theme =
        currentTheme === "dark" ? "light" : "dark";

      const root = document.documentElement;

      if (newTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      localStorage.setItem(THEME_KEY, newTheme);

      return newTheme;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      className="
        group
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-gray-200
        bg-white
        text-gray-800
        shadow-sm
        transition-all
        duration-300
        hover:scale-105
        hover:border-orange-500
        hover:text-orange-500

        dark:border-gray-700
        dark:bg-[#111827]
        dark:text-white
        dark:hover:border-orange-500
        dark:hover:text-orange-500
      "
    >
      {theme === "dark" ? (
        <Sun
          size={18}
          className="transition-transform duration-300 group-hover:rotate-45"
        />
      ) : (
        <Moon
          size={18}
          className="transition-transform duration-300 group-hover:-rotate-12"
        />
      )}
    </button>
  );
}

export default ThemeToggle;