import * as TYPES from "../types/profile";
import { userAxiosInstance } from "../../axiosInstance";

export const getAuthUser =  (token) => async (dispatch) => {
  try{
    const userData = await userAxiosInstance.get(`/me`,{headers:{token}}) ;
    console.log(places);
    dispatch({
            type : TYPES.LOGIN,
            payload : userData.data
          });
  }
  catch(e){
    console.log(e);
  }
};

export const setUser =  (page) => async (dispatch) => {
  try{
    const userToken = await userAxiosInstance.post(`/signup`) ;
    console.log(places);
    dispatch({
            type : TYPES.SIGNUP,
            payload : userToken.data
          });
  }
  catch(e){
    console.log(e);
  }
};

export const updateAuthuser =  () => async (dispatch) => {
  try{
    const places = await userAxiosInstance.get(`/me`) ;
    console.log(places);
    dispatch({
            type : TYPES.UPDATE_USER,
            payload : places.data
          });
  }
  catch(e){
    console.log(e);
  }
};
