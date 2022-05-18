import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState([]);

  const fetchApi = (value) => {
    const city = value ? value : "tehran";
    const key = "4ea3e3d50f69454b968131056221805";
    axios
      .get(`http://api.weatherapi.com/v1/forecast.json`, {
        params: { key, q: city, days: 3, aqi: "yes" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    fetchApi(e.target.value);
  };

  return (
    <section>
      <input type="text" value={search} onChange={searchHandler} />
    </section>
  );
};

export default App;
