import {
  REQUEST,
  SUCCES,
  FAILURE,
  POSTREQUEST,
  POSTSUCCESS,
  DELETEREQUEST,
  DELETESUCCESS,
  GETONEUSERREQUEST,
  GETONEUSERSUCCESS,
  UPDATEREQUEST,
  UPDATESUCCESS,
} from "../Actionconstants";

const initialstate = {
  loading: false,
  data: [],
  error: "",
};
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case REQUEST:
    case POSTREQUEST:
    case DELETEREQUEST:
    case GETONEUSERREQUEST:
    case UPDATEREQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUCCES:
      return {
        ...state,
        loading: false,
        data: action.payLoad,
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        data: action.payLoad,
      };
    case UPDATESUCCESS:
    case POSTSUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case DELETESUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
export default reducer;
