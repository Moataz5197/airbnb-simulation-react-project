import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA0MjgwNTliMTBlOTcyYTYwYzQ5MmM4In0sImlhdCI6MTYxNDk4NTg0NywiZXhwIjoxNjE0OTg5NDQ3fQ.QkCBf5UY1Z8t5juIbSRohv8gUBVRc2ok8uSxe86L6hY"
  },
});

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
    // console.log(response)
    // response.data.push("test")
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
