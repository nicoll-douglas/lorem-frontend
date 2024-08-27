const networkError = {
  status: "error",
  title: "Network Error",
  description: "Something went wrong, please try again.",
};

const serverError = {
  status: "error",
  title: "Server Error",
  description: "Something went wrong, please try again later.",
};

const tooMany15 = {
  status: "warning",
  title: "Too Many Requests",
  description: "Please try again in 15 minutes.",
};

const tooMany = {
  status: "warning",
  title: "Too many requests",
};

const unauthorized = {
  status: "warning",
  title: "Session Expired",
  description: "Please login to continue.",
};

const genericError = {
  status: "error",
  title: "Error",
  description: "Something went wrong, please try again.",
};

export {
  networkError,
  serverError,
  tooMany15,
  tooMany,
  unauthorized,
  genericError,
};
