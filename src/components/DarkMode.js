import { useEffect, useState } from "react";

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto md:mx-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </span>
        <span className={`${theme === "light" ? "block" : "hidden"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto md:mx-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
        <span className="font-medium hidden md:block">Theme</span>
      </div>
      <div
        className={`${
          toggle ? "block md:hidden" : "hidden"
        } backdrop-blur-sm fixed inset-0`}
      ></div>
      <div
        className={`${
          toggle ? "block order-first" : "hidden"
        } w-full md:bg-secondary-color text-color flex flex-col items-start justify-start rounded-md overflow-hidden absolute md:static bottom-16 md:bottom-14`}
      >
        <button
          onClick={switchTheme}
          data-theme="light"
          className="flex items-center md:justify-start justify-center w-full py-2 md:py-3 px-4 md:hover:bg-gray-300 md:dark:hover:bg-slate-500 md:border-b border-b-gray-300 dark:border-b-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11 md:w-6 md:h-6 bg-secondary-color md:bg-opacity-0 md:dark:bg-opacity-0 p-2 md:p-0 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span className="ml-2 md:block hidden">Light</span>
        </button>
        <button
          data-theme="dark"
          onClick={switchTheme}
          className="flex items-center md:justify-start justify-center w-full py-2 md:py-3 px-4 md:hover:bg-gray-300 md:dark:hover:bg-slate-500 md:border-b border-b-gray-300 dark:border-b-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-11 w-11 md:w-6 md:h-6 bg-secondary-color md:bg-opacity-0 md:dark:bg-opacity-0 p-2 md:p-0 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <span className="ml-2 md:block hidden">Dark</span>
        </button>
        <button
          data-theme="system"
          onClick={switchTheme}
          className="flex items-center md:justify-start justify-center w-full py-2 md:py-3 px-4 md:hover:bg-gray-300 md:dark:hover:bg-slate-500  md:border-b border-b-gray-300 dark:border-b-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-11 h-11 md:w-6 md:h-7 bg-secondary-color md:bg-opacity-0 md:dark:bg-opacity-0 px-2 py-1 md:p-0 rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="ml-2 md:block hidden">System</span>
        </button>
      </div>
    </section>
  );
};

export default DarkMode;
