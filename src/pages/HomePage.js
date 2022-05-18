import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const HomePage = () => {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState([]);
  
    const fetchApi = (value) => {};
    const debounced = useDebouncedCallback(
      (value) => {
        fetchApi(value);
      },
      500,
      { maxWait: 2000 }
    );
  
    useEffect(() => {
      fetchApi();
      setData(JSON.parse(localStorage.getItem("test")));
    }, []);
  
    const searchHandler = (e) => {
      setSearch(e.target.value);
      debounced(e.target.value);
    };
    if (data) console.log(data.forecast.forecastday[0]);
  return (
    <section>
      <input
        type="text"
        className="border border-gray-400"
        value={search}
        onChange={searchHandler}
      />
      <ul>
        {data &&
          data.forecast.forecastday[0].hour.map((item) => {
            return (
              <li key={item.time_epoch}>
                <h2>{item.condition.text}</h2>
                <img
                  className="w-20"
                  src={item.condition.icon}
                  alt={item.condition.text}
                />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default HomePage;
