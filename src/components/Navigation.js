import { NavLink } from "react-router-dom";
import DarkMode from "./DarkMode";

const Navigation = () => {
  return (
    <ul className="bg-color flex items-center justify-between w-full shadow-[0_-2px_8px_0_rgba(0,0,0,0.1)] rounded-tr-md rounded-tl-md md:shadow-none md:gap-4 md:flex-col md:items-start md:justify-start md:p-4 md:min-h-screen">
      <li className="text-secondary-color w-full">
        <NavLink
          className={(e) =>
            `${
              e.isActive
                ? "text-color md:bg-gray-200 dark:md:bg-slate-800 md:rounded-lg md:shadow-md"
                : ""
            } transition-all duration-300 max-w-sm py-4 md:px-4 flex items-center justify-start w-full md:gap-2 md:hover:bg-gray-200 dark:md:hover:bg-slate-800 hover:rounded-lg`
          }
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto md:m-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="font-medium hidden md:block">Home</span>
        </NavLink>
      </li>
      <li className="text-secondary-color w-full">
        <NavLink
          className={(e) =>
            `${
              e.isActive
                ? "text-color md:bg-gray-200 dark:md:bg-slate-800 md:rounded-lg md:shadow-md"
                : ""
            } transition-all duration-300 max-w-sm py-4 md:px-4 flex items-center justify-start w-full md:gap-2 md:hover:bg-gray-200 dark:md:hover:bg-slate-800 hover:rounded-lg `
          }
          to="/search"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto md:m-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="font-medium hidden md:block">Search</span>
        </NavLink>
      </li>
      <li className="text-secondary-color w-full">
        <NavLink
          className={(e) =>
            `${
              e.isActive
                ? "text-color md:bg-gray-200 dark:md:bg-slate-800 md:rounded-lg md:shadow-md"
                : ""
            } transition-all duration-300 max-w-sm py-4 md:px-4 flex items-center justify-start w-full md:gap-2 md:hover:bg-gray-200 dark:md:hover:bg-slate-800 hover:rounded-lg`
          }
          to="/report"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto md:m-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <span className="font-medium hidden md:block">Forecast</span>
        </NavLink>
      </li>
      <li className="text-secondary-color w-full cursor-pointer max-w-sm md:mt-auto">
        <DarkMode />
      </li>
    </ul>
  );
};

export default Navigation;
