export const LOGIN_IMAGE_URL =
  "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

//API_NOTIFICATIONS

export const API_NOTIFICATIONS_MESSAGES = {
  loading: {
    title: "loading...",
    message: "Data is being loaded, Please wait",
  },
  success: {
    title: "Success",
    message: "Data successfully loaded",
  },
  responseFailure: {
    title: "Error",
    message:
      "Error occured while fetching response from server. Please try again",
  },
  requestFailure: {
    title: "Error",
    message: "An error occured while parsing request data.",
  },
  networkError: {
    title: "Error",
    message:
      "Unable to connect with server. Please check internet connctivity and try again later.",
  },
};

export const SERVICE_URLS = {
  userSignup: { url: "/signup", method: "POST" },
};