import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/icons/HomeIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import ThunderIcon from "../assets/icons/ThunderIcon";
import DarkMode from "./DarkMode";

const Navigation = () => {
  return (
    <ul className="bg-color flex items-center justify-between w-full shadow-[0_-2px_8px_0_rgba(0,0,0,0.1)] rounded-tr-md rounded-tl-md md:shadow-none md:gap-4 md:flex-col md:items-start md:justify-start md:p-4 md:min-h-screen">
      <li className="text-secondary-color w-full">
        <NavLink
          className={(e) =>
            `${
              e.isActive ? "text-color md:bg-gray-200 dark:md:bg-slate-800 md:rounded-lg md:shadow-md" : ""
            } transition-all duration-300 max-w-sm py-5 md:px-4 flex items-center justify-start w-full md:gap-2 md:hover:bg-gray-200 dark:md:hover:bg-slate-800 hover:rounded-lg`
          }
          to="/"
        >
          <HomeIcon className="mx-auto md:m-0" />
          <span className="font-medium hidden md:block">Home</span>
        </NavLink>
      </li>
      <li className="text-secondary-color w-full">
        <NavLink
          className={(e) =>
            `${
              e.isActive ? "text-color md:bg-gray-200 dark:md:bg-slate-800 md:rounded-lg md:shadow-md" : ""
            } transition-all duration-300 max-w-sm py-5 md:px-4 flex items-center justify-start w-full md:gap-2 md:hover:bg-gray-200 dark:md:hover:bg-slate-800 hover:rounded-lg `
          }
          to="/search"
        >
          <SearchIcon className="mx-auto md:m-0" />
          <span className="font-medium hidden md:block">Search</span>
        </NavLink>
      </li>
      <li className="text-secondary-color w-full">
        <NavLink
          className={(e) =>
            `${
              e.isActive ? "text-color md:bg-gray-200 dark:md:bg-slate-800 md:rounded-lg md:shadow-md" : ""
            } transition-all duration-300 max-w-sm py-5 md:px-4 flex items-center justify-start w-full md:gap-2 md:hover:bg-gray-200 dark:md:hover:bg-slate-800 hover:rounded-lg`
          }
          to="/report"
        >
          <ThunderIcon className="mx-auto md:m-0" />
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
