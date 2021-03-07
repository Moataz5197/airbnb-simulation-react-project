import {
    axiosInstance
} from '../../axiosInstance';
import { useSelector } from "react-redux";
import { SET_PLACE } from '../types/hostPlacesType';

export const getPlace = () => async (dispatch) => {
    try {
        const token = useSelector((state) => state.user.token);

        const res = await axiosInstance.get("hosting/", {
          headers: {
            token: token,
          },
        });
        const response = res.data.place_ids
        let placeRes,placesData = []
        for (let index = 0; index < response.length; index++) {
            placeRes = await axiosInstance.get(`places/${response[index]["place_id"]}`)
            placesData.push(placeRes.data)
        }

        dispatch({
            type: SET_PLACE,
            payload: placesData,
        });
    } catch (err) {
        console.log(err);
    }
};