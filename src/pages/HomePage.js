import { useEffect, useState } from "react";
import { asyncGet } from "../features/asyncSlice";
import { useDispatch, useSelector } from "react-redux";
import icon from "../utils/icon";

const HomePage = () => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  // const {data} = useSelector((store) => store.data);
  console.log(data);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("test")));
    // dispatch(asyncGet("pn"));
  }, []);
  if (data) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(data.current.last_updated).toLocaleString(
      "en-US",
      options
    );

    return (
      <section className="bg-gray-50 flex flex-col items-center p-4 ">
        <h2 className="text-xl font-medium mb-1">
          {data.location.name}/{data.location.country}
        </h2>
        <h2 className="font-medium text-gray-700 text-sm">{date}</h2>
        <img className="w-52 my-8 mx-auto" src={icon(data.current.condition.icon)} alt={data.current.condition.text} />
        <ul className="flex items-center justify-between w-full">
          <li className="flex-1 text-center">
            <p className="text-xs text-gray-700">Wind</p>
            <p className="font-medium text-sm">
              {Math.round(data.current.wind_kph)} Km/h
            </p>
          </li>
          <li className="flex-1 text-center">
            <p className="text-xs text-gray-700">Temp</p>
            <p className="font-medium text-sm">{data.current.temp_c} &#8451;</p>
          </li>
          <li className="flex-1 text-center">
            <p className="text-xs text-gray-700">Humidity</p>
            <p className="font-medium text-sm">{data.current.humidity} %</p>
          </li>
        </ul>
        {/* <ul className="flex items-center justify-start gap-x-4 overflow-auto w-full">
          {data.forecast.forecastday[0].hour.map((item) => {
            console.log(item);
            return (
              <li key={item.time_epoch}>
                <h2>{item.condition.text}</h2>
                <img
                  className="w-20"
                  src={icon(item.condition.icon)}
                  alt={item.condition.text}
                />
               
              </li>
            );
          })}
        </ul> */}
      </section>
    );
  }
};

export default HomePage;
