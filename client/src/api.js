import axios from "axios";
import store from "./state/store";
import { LOGOUT } from "./state/actions/types";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : `http://${window.location.hostname}:5000/api`,

  withCredentials: true,
});

const api = {
  service: service,

  async fetchAccount() {
    try {
      const response = await service.get("/auth");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async signup(email, password) {
    try {
      const response = await service.post("/auth/signup", { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async login(email, password) {
    try {
      const response = await service.post("/auth/login", { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout() {
    return service.get("/auth/logout");
  },

  async getCountries() {
    try {
      const response = await service.get("/countries");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getCountry(countryName) {
    try {
      const response = await service.get(`/countries/${countryName}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async addCountry(body) {
    try {
      const response = await service.post("/countries", body);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

/* Not needed probably */
service.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
