import { useSelector } from "react-redux";
import icons from "../utils/icons";
import dateFormat from "../utils/date";
import ViewReport from "../components/ViewReport";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data } = useSelector((store) => store.data);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <section className="bg-color flex flex-col items-center justify-start">
      <h2 className="font-medium text-2xl mb-1 text-center">
        {data.location.name}/{data.location.country}
      </h2>
      <h3 className="font-medium text-secondary-color text-sm mb-4 text-center">
        {dateFormat(data.current.last_updated, options)}
      </h3>
      <h2 className="py-2 px-8 bg-secondary-color font-medium rounded-md shadow-lg mb-4 text-center">
        {data.current.condition.text}
      </h2>
      <img
        className="w-52 my-8 mx-auto"
        src={icons(data.current.condition.icon)}
        alt={data.current.condition.text}
      />
      <ul className="flex items-center justify-between w-full mb-8">
        <li className="flex-1 text-center">
          <p className="text-xs text-secondary-color">Wind</p>
          <p className="font-medium text-sm">
            {Math.round(data.current.wind_kph)} Km/h
          </p>
        </li>
        <li className="flex-1 text-center">
          <p className="text-xs text-secondary-color">Temp</p>
          <p className="font-medium text-sm">
            {Math.round(data.current.temp_c)}&#8451;
          </p>
        </li>
        <li className="flex-1 text-center">
          <p className="text-xs text-secondary-color">Humidity</p>
          <p className="font-medium text-sm">
            {Math.round(data.current.humidity)}%
          </p>
        </li>
      </ul>
      <div className="flex items-center justify-between w-full font-medium mb-4">
        <h4>Today</h4>
        <Link className="text-color" to="/report">
          View full report
        </Link>
      </div>
      <ViewReport data={data.forecast.forecastday[0].hour} />
    </section>
  );
};

export default HomePage;
