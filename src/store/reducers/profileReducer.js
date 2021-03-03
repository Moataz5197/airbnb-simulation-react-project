import * as TYPES from "../types/profile";

const initialState = {
  profile: {
    firstName: '',
    lastName: '',
    telephone: '',
    age: 28,
    email: '',
    state: '',
    country: '',
    address: 'Home',
    address1: '',
    address2: '',
    interests: [],
    profileImage: '',
    subscribenewsletter: false
  },
  formSubmitted: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
    console.log('login', action.payload.user)
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false // after update user formsubmition reset
      }
    case TYPES.ADD_USER:
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
    case TYPES.UPDATE_PROFILE_PICTURE:
      return {
        ...state,
        profile: {
          ...state.profile,
          profileImage: action.payload.image
        }
      }
    case TYPES.FORM_SUBMITION_STATUS:
      return {
        ...state,
        formSubmitted: action.payload.status
      }
    default:
      return state;
  }
}

export default reducer;