import { useDebouncedCallback } from "use-debounce";
import {
  asyncGetData,
  asyncSearch,
  searchLoading,
} from "../features/asyncSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import icons from "../utils/icons";
import toast from "react-hot-toast";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { recently, search } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const debounced = useDebouncedCallback((value) => {
    dispatch(asyncSearch(value));
  }, 500);

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    if (!search.loading) dispatch(searchLoading());
    if (e.target.value !== "") debounced(e.target.value);
  };

  const recentlyClickHandler = (value) => {
    dispatch(asyncGetData(value));
    navigate("/");
  };

  const searchListClickHandler = (value) => {
    setSearchValue("");
    dispatch(asyncGetData(value));
  };

  const getLocationUser = () => {
    if (!navigator.geolocation) {
      toast.error("Location is not supported by this browser");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const location = lat + "," + lon;
      setSearchValue("");
      dispatch(asyncGetData(location));
    }

    function error() {
      toast.error("Your location could not be accessed");
    }
  };
  return (
    <section className="min-h-screen text-center">
      <h2 className="font-medium text-2xl mb-2">Pick location</h2>
      <p className="text-sm mb-6 px-4">
        Find the area or city that you want to know the detailed weather info at
        this time
      </p>
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center justify-between bg-gray-200 text-gray-600 rounded-md shadow-md px-3 flex-1 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
          <input
            className="bg-gray-200 focus:border-0 focus:outline-0 py-3 px-2 font-medium flex-1"
            type="text"
            value={searchValue}
            onChange={searchHandler}
          />

          <div
            className={`absolute bg-white top-14 inset-x-0 rounded-md shadow-md overflow-hidden ${
              searchValue && search.data.length > 0 ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-start overflow-auto max-h-48">
              {search.data.length > 0 &&
                search.data.map((item) => {
                  return (
                    <li
                      onClick={() => searchListClickHandler(item.name)}
                      key={item.id}
                      className="flex items-center justify-start py-1.5 px-4 bg-gray-200 text-gray-600 w-full border border-b-gray-300 cursor-pointer"
                    >
                      <span>
                        {item.name} / {item.country}
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>

          <div
            className={`h-5 w-5 text-gray-400 border-4 rounded-full border-gray-400 animate-loading border-t-gray-600 border-l-gray-600 ${
              searchValue && search.loading ? "block" : "hidden"
            }`}
          ></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 stroke-red-600 ${
              searchValue && search.data.length === 0 && !search.loading
                ? "block"
                : "hidden"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 stroke-green-600 ${
              searchValue && search.data.length > 0 && !search.loading
                ? "block"
                : "hidden"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <button
          onClick={getLocationUser}
          className="bg-gray-200 text-gray-600 rounded-md shadow-md p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recently &&
          recently.map((item) => {
            return (
              <li
                onClick={() => recentlyClickHandler(item.location.name)}
                key={item.location.name}
                className="bg-gray-200 rounded-md shadow-md p-3 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start justify-start mb-2 overflow-hidden">
                    <p className="font-medium text-xl">
                      {Math.round(item.current.temp_c)}&#8451;
                    </p>
                    <p className="text-gray-700 overflow-hidden whitespace-nowrap text-ellipsis w-full">
                      {item.current.condition.text}
                    </p>
                  </div>
                  <img
                    className="w-16"
                    src={icons(item.current.condition.icon)}
                    alt={item.current.condition.text}
                  />
                </div>
                <p className="text-left w-full overflow-hidden whitespace-nowrap text-ellipsis">
                  <span className="font-medium ">{item.location.name} / </span>
                  <span>{item.location.country}</span>
                </p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default SearchPage;
