import { useEffect, useState } from "react";
import { asyncGet } from "../features/asyncSlice";
import { useDispatch, useSelector } from "react-redux";
import icon from "../utils/icon";
import dateFormat from "../utils/date";
import ViewReport from "../components/ViewReport";

const HomePage = () => {
  // const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const {data} = useSelector((store) => store.data);
  // console.log(data);
  useEffect(() => {
    // setData(JSON.parse(localStorage.getItem("test")));
    dispatch(asyncGet("london"));
  }, []);
  if (data) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = dateFormat(data.current.last_updated, options);

    // let options1 = { weekday: 'long', month: 'long', day: 'numeric' };
    //  const today = new Date();
    // let tomorrow = new Date();
    // tomorrow.setDate(today.getDate() + 1);
    // const data1 = new Date(tomorrow).toLocaleString("en-US", options1);
    // console.log(data1);
    return (
      <section className="bg-gray-100 flex flex-col items-center justify-start px-4 py-8 min-h-screen">
        <h2 className="text-xl font-medium mb-1">
          {data.location.name}/{data.location.country}
        </h2>
        <h3 className="font-medium text-gray-700 text-sm mb-4">{date}</h3>
        <h2 className="py-2 px-8 bg-gray-200 font-medium rounded-md shadow-lg mb-4">
          Forecast
        </h2>
        <img
          className="w-52 my-8 mx-auto"
          src={icon(data.current.condition.icon)}
          alt={data.current.condition.text}
        />
        <ul className="flex items-center justify-between w-full mb-8">
          <li className="flex-1 text-center">
            <p className="text-xs text-gray-700">Wind</p>
            <p className="font-medium text-sm">
              {Math.round(data.current.wind_kph)} Km/h
            </p>
          </li>
          <li className="flex-1 text-center">
            <p className="text-xs text-gray-700">Temp</p>
            <p className="font-medium text-sm">
              {Math.round(data.current.temp_c)}&#8451;
            </p>
          </li>
          <li className="flex-1 text-center">
            <p className="text-xs text-gray-700">Humidity</p>
            <p className="font-medium text-sm">
              {Math.round(data.current.humidity)}%
            </p>
          </li>
        </ul>
        <div className="flex items-center justify-between w-full font-medium mb-4">
          <h4>Today</h4>
          <p className="text-gray-600">View full report</p>
        </div>
        <ViewReport data={data.forecast.forecastday[0].hour} />
      </section>
    );
  }
};

export default HomePage;
