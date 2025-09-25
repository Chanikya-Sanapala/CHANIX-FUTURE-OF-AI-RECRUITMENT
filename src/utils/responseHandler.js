export const sendResponse = (res, statusCode, success, message, data = null, error = null) => {
  const response = {
    success,
    message,
    timestamp: new Date().toISOString(),
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
};
