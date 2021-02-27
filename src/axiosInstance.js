import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    
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

// Add a response interceptor
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
