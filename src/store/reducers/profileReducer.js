import * as TYPES from "../types/profile";

const initialState = {
  profile: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    email: '',
    state: '',
    country: '',
  }

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
    console.log('login', action.payload.user)
      return {
        ...state,
        profile: action.payload.user,
      }
    case TYPES.SIGNUP:
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false // after update user formsubmition reset
      }
    case TYPES.UPDATE_USER:
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false // after update user formsubmition reset
      }
    default:
      return state;
  }
}

export default reducer;