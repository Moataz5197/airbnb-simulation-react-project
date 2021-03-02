import * as TYPES from "../types/places";
import { PlacesAxiosInstance } from "../../axiosInstance";

export const getPlaces =  (page) => async (dispatch) => {
  try{
    const places = await PlacesAxiosInstance.get(`/?limit=${page.limit}?skip=${page.skip}`);
    console.log(places);
    dispatch({
            type : TYPES.GET_PLACES,
            payload : places.data
          });
  }
  catch(e){
    console.log(e);
  }
};