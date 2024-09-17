import { errorResponse } from "../util/response.js";

const handleError = async (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  return errorResponse(res, statusCode, false, err.message);
};

export default handleError;
