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

const getRequest = () => {
  return {
    type: REQUEST,
  };
};

const success = (user) => {
  return {
    type: SUCCES,
    payLoad: user,
  };
};
const failure = (error) => {
  return {
    type: FAILURE,
    payLoad: error,
  };
};
const postRequest = (user) => {
  return {
    type: POSTREQUEST,
    payLoad: user,
  };
};
const postSuccess = () => {
  return {
    type: POSTSUCCESS,
  };
};
const deleteRequest = (id) => {
  return {
    type: DELETEREQUEST,
    payload: id,
  };
};
const deleteSuccess = () => {
  return {
    type: DELETESUCCESS,
  };
};
const getOneRequest = ({ id1 }) => {
  return {
    type: GETONEUSERREQUEST,
    PayLoad: { id1 },
  };
};
const getOneSuccess = (user) => {
  return {
    type: GETONEUSERSUCCESS,
    PayLoad: user,
  };
};
const updateRequest = ({ id1, userObj }) => {
  return {
    type: UPDATEREQUEST,

    payLoad: { id1, userObj },
  };
};
const updateSuccess = () => {
  return {
    type: UPDATESUCCESS,
  };
};

export {
  getRequest,
  success,
  failure,
  postRequest,
  postSuccess,
  deleteRequest,
  deleteSuccess,
  getOneRequest,
  getOneSuccess,
  updateRequest,
  updateSuccess,
};
