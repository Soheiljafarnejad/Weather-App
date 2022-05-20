import { useSelector } from "react-redux";
import dateFormat from "../utils/date";
import icons from "../utils/icons";
const ReportPage = () => {
  const { data } = useSelector((store) => store.data);

  if (data) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const today = data.forecast.forecastday[0].hour;
    const days = data.forecast.forecastday.slice(1, 3);
    return (
      <section className="min-h-screen">
        <h2 className="font-medium text-2xl mb-2 text-center">
          Forecast report
        </h2>
        <h2 className="font-medium text-center text-lg mb-8">
          {data.location.name}/{data.location.country}
        </h2>
        <section>
          <div className="flex items-center justify-between w-full mb-4">
            <h2 className="font-medium text-lg">Today</h2>
            <p className="text-gray-700">
              {dateFormat(data.forecast.forecastday[0].date, options)}
            </p>
          </div>
          <ul className="flex items-center justify-start gap-4 w-full pb-4 overflow-auto mb-6">
            {today.map((item) => {
              const optionsTime = { timeStyle: "short", hour12: false };
              const time = dateFormat(item.time, optionsTime);
              return (
                <li
                  className="bg-gray-200 rounded-lg shadow-md p-4 flex items-center justify-between gap-x-2 min-w-[140px]"
                  key={item.time_epoch}
                >
                  <img
                    className="w-12"
                    src={icons(item.condition.icon)}
                    alt={item.condition.text}
                  />
                  <div className="flex flex-col">
                    <p className="font-medium">{time}</p>
                    <p className="font-medium text-xl whitespace-nowrap">
                      <span>{Math.round(item.temp_c)}</span>
                      <span className="text-base">&#8451;</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <div className="flex items-center justify-between w-full mb-4">
          <h2 className="font-medium text-lg">Next forecast</h2>
          <p className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </p>
        </div>
        <section>
          <ul className="flex flex-col items-center justify-start gap-4 w-full pb-8">
            {days.map((item) => {
              const optionsDay = { weekday: "long" };
              const optionsDate = { month: "long", day: "numeric" };
              const day = dateFormat(item.date, optionsDay);
              const date = dateFormat(item.date, optionsDate);
              return (
                <li
                  className="bg-gray-200 rounded-lg shadow-md p-4 flex items-center justify-between gap-x-2 w-full"
                  key={item.date_epoch}
                >
                  <div className="text-center whitespace-nowrap w-24">
                    <p className="font-medium">{day}</p>
                    <p className="text-xs">{date}</p>
                  </div>
                  <p className="font-medium md:mx-4 text-xl whitespace-nowrap">
                    <span>{Math.round(item.day.avgtemp_c)}</span>
                    <span className="text-base">&#8451;</span>
                  </p>
                  <p className="hidden md:block break-words flex-1 text-center">
                    {item.day.condition.text}
                  </p>
                  <img
                    className="w-16"
                    src={icons(item.day.condition.icon)}
                    alt={item.day.condition.text}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    );
  }
};

export default ReportPage;
