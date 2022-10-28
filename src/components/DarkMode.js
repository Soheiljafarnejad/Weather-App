import { useEffect, useState } from "react";
import MonthIcon from "../assets/icons/MonthIcon";
import SunIcon from "../assets/icons/SunIcon";
import SystemIcon from "../assets/icons/SystemIcon";

const DarkMode = () => {
  const [theme, setTheme] = useState("");
  const [systemTheme, setSystemTheme] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = localStorage.getItem("them");
    setSystemTheme(system);
    setTheme(theme);
    if (theme === "dark" || (!theme && systemTheme)) themeHandler("dark");
    else themeHandler("light");
  }, [systemTheme]);

  // themeHandler
  const themeHandler = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  // selected user
  const switchTheme = (e) => {
    switch (e.currentTarget.dataset.theme) {
      case "dark":
        themeHandler("dark");
        localStorage.setItem("them", "dark");
        setToggle(false);
        break;

      case "light":
        themeHandler("light");
        localStorage.setItem("them", "light");
        setToggle(false);
        break;

      case "system":
        localStorage.removeItem("them");
        if (systemTheme) themeHandler("dark");
        else themeHandler("light");
        setToggle(false);
        break;
      default:
        setToggle(false);
        return;
    }
  };

  return (
    <section
      className={`${
        toggle ? "md:bg-secondary-color md:rounded-lg md:shadow-md" : ""
      } relative md:static md:flex flex-col md:hover:bg-gray-200 dark:md:hover:bg-slate-800 hover:rounded-lg py-4 md:py-0`}
      onClick={() => setToggle(!toggle)}
    >
      <div className="md:flex items-center justify-start w-full md:gap-2 md:p-4">
        <span className={`${theme === "dark" ? "block" : "hidden"}`}>
          <MonthIcon className="mx-auto md:mx-0" />
        </span>
        <span className={`${theme === "light" ? "block" : "hidden"}`}>
          <SunIcon className="mx-auto md:mx-0" />
        </span>
        <span className="font-medium hidden md:block">Theme</span>
      </div>
      <div className={`${toggle ? "block md:hidden" : "hidden"} backdrop-blur-sm fixed inset-0`}></div>
      <div
        className={`${
          toggle ? "block order-first" : "hidden"
        } w-full md:bg-secondary-color text-color flex flex-col items-start justify-start rounded-md overflow-hidden absolute md:static bottom-16 md:bottom-14`}
      >
        <button
          onClick={switchTheme}
          data-theme="light"
          className="flex items-center md:justify-start justify-center w-full py-1 md:py-3 px-4 md:hover:bg-gray-300 md:dark:hover:bg-slate-500 md:border-b border-b-gray-300 dark:border-b-gray-600"
        >
          <SunIcon className="h-11 w-11 md:w-6 md:h-6 bg-white dark:bg-slate-800 md:bg-opacity-0 md:dark:bg-opacity-0 p-2 md:p-0 rounded-full" />
          <span className="ml-2 md:block hidden">Light</span>
        </button>
        <button
          data-theme="dark"
          onClick={switchTheme}
          className="flex items-center md:justify-start justify-center w-full py-1 md:py-3 px-4 md:hover:bg-gray-300 md:dark:hover:bg-slate-500 md:border-b border-b-gray-300 dark:border-b-gray-600"
        >
          <MonthIcon className="h-11 w-11 md:w-6 md:h-6 bg-white dark:bg-slate-800 md:bg-opacity-0 md:dark:bg-opacity-0 p-2 md:p-0 rounded-full" />
          <span className="ml-2 md:block hidden">Dark</span>
        </button>
        <button
          data-theme="system"
          onClick={switchTheme}
          className="flex items-center md:justify-start justify-center w-full py-1 md:py-3 px-4 md:hover:bg-gray-300 md:dark:hover:bg-slate-500  md:border-b border-b-gray-300 dark:border-b-gray-600"
        >
          <SystemIcon className="w-11 h-11 md:w-6 md:h-7 bg-white dark:bg-slate-800 md:bg-opacity-0 md:dark:bg-opacity-0 px-2 py-1 md:p-0 rounded-full" />
          <span className="ml-2 md:block hidden">System</span>
        </button>
      </div>
    </section>
  );
};

export default DarkMode;
