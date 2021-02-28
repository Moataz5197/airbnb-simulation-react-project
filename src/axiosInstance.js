import axios from "axios";

export const citiesAxiosInstance = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo/locations",
  // headers: {
    
  // },
});

// Add a request interceptor
citiesAxiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // show loader
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
citiesAxiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // hide loader
    // console.log(response)
    // response.data.push("test")
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


  export const userAxiosInstance = axios.create({
  baseURL: "http://localhost:4000/users",
  headers: {
    
  },
  
  params: {
  },
});

// Add a request interceptor
userAxiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // show loader
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
userAxiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // hide loader
    // console.log(response)
    // response.data.push("test")
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
