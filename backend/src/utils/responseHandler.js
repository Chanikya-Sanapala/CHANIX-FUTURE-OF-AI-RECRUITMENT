<<<<<<< HEAD
export const sendResponse = (res, statusCode, success, message, data = null, error = null, extra = {}) => {
=======
export const sendResponse = (res, statusCode, success, message, data = null, error = null) => {
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
  const response = {
    success,
    message,
    timestamp: new Date().toISOString(),
<<<<<<< HEAD
    ...(data !== null && { data }),
    ...(error && { error }),
    ...extra,
  };

  return res.status(statusCode).json(response);
};

export const sendSuccess = (res, message, data = null, statusCode = 200, extra = {}) => {
  return sendResponse(res, statusCode, true, message, data, null, extra);
};

export const sendError = (res, message, error = null, statusCode = 400, extra = {}) => {
  return sendResponse(res, statusCode, false, message, null, error, extra);
=======
    ...(data && { data }),
    ...(error && { error })
  };
  
  return res.status(statusCode).json(response);
};

export const sendSuccess = (res, message, data = null, statusCode = 200) => {
  return sendResponse(res, statusCode, true, message, data);
};

export const sendError = (res, message, error = null, statusCode = 400) => {
  return sendResponse(res, statusCode, false, message, null, error);
>>>>>>> 1d515772df2bf46dad576739463e10ba458e3cae
};
