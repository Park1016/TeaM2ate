import axios from "axios";

export default class CsrfApi {
  constructor() {
    this.csrf = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}/user`,
      credentials: "include",
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    });
  }

  async csrfToken() {
    try {
      const res = await this.csrf.get("csrf-token");
      return res.data.csrfToken;
    } catch (error) {
      alert(error.response.data.message);
    }
  }
}
