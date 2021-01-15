import axios from "axios";

const API_URL = "http://localhost:4000/";

class AuthService {

  login(email, password) {
    return axios.post(API_URL + "login", {
      email,
      password,
    });
  }

  register(username, email, password) {
    return axios.post(API_URL + "users", {
      username,
      email,
      password,
    });
  }
  
}

export default new AuthService();
