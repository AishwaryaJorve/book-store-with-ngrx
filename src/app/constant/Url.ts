import constants from "./Constants";

const urls: any = {
  LOGIN_URL: `http://localhost:${constants.PORT}/login`,
  SIGNUP_URL: `http://localhost:${constants.PORT}/addUser`,
  UPDATE_BOOK_URL: `http://localhost:${constants.PORT}/updateBook`,
  FETCH_BOOK_URL: `http://localhost:${constants.PORT}/findAllBooks`,
};

export default urls;
