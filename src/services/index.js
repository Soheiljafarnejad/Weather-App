import axios from "axios";

let http = axios.create({
  baseURL: process.env.REACT_APP_API,
  // headers: {
  //   "Content-type": "application/json",
  // },
  params: { key: process.env.REACT_APP_KEY },
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // if (error.response.status === 401)
    return Promise.reject(error);
  }
);

const Api = async (options, notAuthorize, headers) => {
  let op = { ...options, headers };
  if (!notAuthorize) op = { ...op};

  try {
    const response = await http({ ...op });
    return response.data;
  } catch (error) {
    return await Promise.reject(error);
  }
};

export default Api;
