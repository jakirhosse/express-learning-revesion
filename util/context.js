// send response message

//api endpoint
export const API = {
  API_CONTEXT: "/content-portal/api/v1/",
  //category
  CREATE_CATEGORY: "create-category",
  GET_ALL_CATEGORY: "get-all-category",
  DELETE_CATEGORY: "delete-category/:id",
  UPDATE_CATEGORY: "update-category/:id",
  GET_SINGLE_CATEGORY: "get-single-category/:identify",
  TABLE: {
    USERS: "Users",
  },
};

export const RESPONSE_MESSAGE = {
  SERVER_ERROR: {
    CONTENT: "Internal server error",
    STATUS_CODE: 500,
  },
  UNAUTHORIZED: {
    CONTENT: "Unauthorized",
    STATUS_CODE: 401,
  },
  SUCCESS_GET: {
    CONTENT: "Successfully getting data from server",
    STATUS_CODE: 200,
  },
  SUCCESS_CREATED: {
    CONTENT: "Successfully resource created",
    STATUS_CODE: 201,
  },
  BAD_REQUEST: {
    CONTENT: "Bad request",
    STATUS_CODE: 400,
  },
};
