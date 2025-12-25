export const sendResponse = (res, statusCode, success, message, data = null, error = null, extra = {}) => {
  const response = {
    success,
    message,
    timestamp: new Date().toISOString(),
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
};
