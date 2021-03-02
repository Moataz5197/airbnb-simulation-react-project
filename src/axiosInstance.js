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
export const addPlaceAxiosInstance = axios.create({
  baseURL:"http://localhost:4000/hosting/hostPlace",
  headers:{
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAzMTgzOGU3ZTk3ZWQwMTM4MjU5ZjNmIn0sImlhdCI6MTYxNDM5MzUwNCwiZXhwIjoxNjE0Mzk3MTA0fQ.tbnLQ5NsiDlRJZC4tkqSg9dIXv1tXftr-YU4CBXBndg"
  }
})
// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {"token"
    // Do something before request is sent
    // show loader
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // hide loader
    console.log(response)
    // response.data.push("test")
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

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
