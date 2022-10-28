import Api from "..";

export const getWeatherApi = (params) => {
  return Api({
    method: "GET",
    url: "/forecast.json`",
    params,
  });
};

export const WeatherSearchApi = (params) => {
  return Api({
    method: "GET",
    url: "/search.json",
    params,
  });
};
