export const ErrorHandler = (statusCode, errorMsg) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = errorMsg;

  return error;
};
