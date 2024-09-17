export const createResponse = (isSuccess, data, message, rest) => {
  return {
    isSuccess,
    data,
    message,
    ...rest,
  };
};

export const sendResponse = (
  res,
  code,
  isSuccess,
  data,
  message,
  additionalFields = {}
) => {
  res.status(code).json({
    data,
    isSuccess: isSuccess,
    message: message,
    ...additionalFields,
  });
};
export const errorResponse = (res, code, isSuccess, message) => {
  res.status(code).json({
    isSuccess: isSuccess,
    message: message,
  });
};
