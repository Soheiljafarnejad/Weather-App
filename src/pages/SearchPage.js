import { useDebouncedCallback } from "use-debounce";
import { asyncGetData, asyncSearch, searchLoading } from "../redux/asyncSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import icons from "../utils/icons";
import toast, { ErrorIcon } from "react-hot-toast";
import SearchIcon from "../assets/icons/SearchIcon";
import SpinnerIcon from "../assets/icons/SpinnerIcon";
import TickIcon from "../assets/icons/TickIcon";
import LocationIcon from "../assets/icons/LocationIcon";

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
    <section className="text-center">
      <h2 className="font-medium text-2xl mb-2">Pick location</h2>
      <p className="text-sm mb-6 px-4">Find the area or city that you want to know the detailed weather info at this time</p>
      <div className="flex items-center justify-between gap-4 mb-8">
        <div className="flex items-center justify-between bg-secondary-color text-secondary-color rounded-md shadow-md px-3 flex-1 relative">
          <SearchIcon />
          <input className="bg-secondary-color py-3 px-2 font-medium flex-1 w-full" type="text" value={searchValue} onChange={searchHandler} />

          <div
            className={`absolute bg-color top-14 inset-x-0 rounded-md shadow-md overflow-hidden ${
              searchValue && search.data.length > 0 ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col items-start overflow-auto max-h-52">
              {search.data.length > 0 &&
                search.data.map((item) => {
                  return (
                    <li
                      onClick={() => searchListClickHandler(item.name)}
                      key={item.id}
                      className="flex items-center justify-start py-2 px-4 bg-secondary-color text-secondary-color w-full border-b border-b-gray-300 dark:border-b-gray-600 cursor-pointer"
                    >
                      <span>
                        {item.name} / {item.country}
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>

          <SpinnerIcon className={searchValue && search.loading ? "block" : "hidden"} />

          <ErrorIcon className={searchValue && search.data.length === 0 && !search.loading ? "block" : "hidden"} />

          <TickIcon className={searchValue && search.data.length > 0 && !search.loading ? "block" : "hidden"} />
        </div>

        <button onClick={getLocationUser} className="bg-secondary-color text-secondary-color rounded-md shadow-md p-3">
          <LocationIcon />
        </button>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recently &&
          recently.map((item) => {
            return (
              <li
                onClick={() => recentlyClickHandler(item.location.name)}
                key={item.location.name}
                className="bg-secondary-color rounded-md shadow-md p-3 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-start justify-start mb-2 overflow-hidden">
                    <p className="font-medium text-xl">{Math.round(item.current.temp_c)}&#8451;</p>
                    <p className="text-secondary-color overflow-hidden whitespace-nowrap text-ellipsis w-full">{item.current.condition.text}</p>
                  </div>
                  <img className="w-16" src={icons(item.current.condition.icon)} alt={item.current.condition.text} />
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
