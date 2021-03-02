import * as TYPES from '../types/places';
const initialState = {

pageNumber : 0 ,
places : []

}
export default (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TYPES.GET_PLACES:
      return {
        ...state,
        places:[...action.payload]
        
      };
    default:
      return state;
  }
};
