import dateFormat from "../utils/date";
import icons from "../utils/icons";

const ViewReport = ({ data }) => {
  const filtered = data.filter((item) => {
    return new Date().getTime() - new Date(item.time).getTime() < 3600000;
  });
  return (
    <ul className="flex flex-col items-center justify-start gap-4 w-full pb-8">
      {filtered &&
        filtered.map((item) => {
          const optionsTime = { timeStyle: "short", hour12: false };
          const optionsDate = { month: "long", day: "numeric" };
          const time = dateFormat(item.time, optionsTime);
          const date = dateFormat(item.time, optionsDate);
          return (
            <li
              className="bg-secondary-color rounded-lg shadow-md p-4 flex items-center justify-between gap-x-2 w-full"
              key={item.time_epoch}
            >
              <div className="text-center whitespace-nowrap">
                <p className="font-medium">{time}</p>
                <p className="text-xs">{date}</p>
              </div>
              <p className="font-medium text-xl mx-4 md:mx-8 whitespace-nowrap">
                <span>{Math.round(item.temp_c)}</span>
                <span className="text-base">&#8451;</span>
              </p>
              <p className="break-words flex-1 text-center">
                {item.condition.text}
              </p>
              <img
                className="w-16"
                src={icons(item.condition.icon)}
                alt={item.condition.text}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ViewReport;
