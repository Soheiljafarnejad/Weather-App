import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full">
      <ul className="flex items-center justify-between w-full bg-gray-100 shadow-[0_-2px_8px_0_rgba(0,0,0,0.1)] rounded-tr-md rounded-tl-md">
        <li className="flex-1 bg-gray-100 text-gray-500">
          <NavLink
            className={(e) =>
              `${e.isActive ? "text-black py-6 block" : "py-6 block"}`
            }
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-auto"
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
          </NavLink>
        </li>
        <li className="flex-1 bg-gray-100 text-gray-500">
          <NavLink
            className={(e) =>
              `${e.isActive ? "text-black py-6 block" : "py-6 block"}`
            }
            to="/search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-auto"
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
          </NavLink>
        </li>
        <li className="flex-1 bg-gray-100 text-gray-500">
          <NavLink
            className={(e) =>
              `${e.isActive ? "text-black py-6 block" : "py-6 block"}`
            }
            to="/report"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-auto"
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
          </NavLink>
        </li>
        <li className="flex-1 bg-gray-100 text-gray-500">
          <NavLink
            className={(e) =>
              `${e.isActive ? "text-black py-6 block" : "py-6 block"}`
            }
            to="/setting"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
