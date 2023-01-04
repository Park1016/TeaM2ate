import axios from "axios";
import { makeFormData } from "hooks/makeFormData";

export default class UserApi {
  constructor(http) {
    this.user = axios.create({
      ...http,
      baseURL: "http://localhost:8080/user",
    });
  }

  async me(params) {
    try {
      const res = await this.user.get("me", params);
      return res.data;
    } catch (error) {
      // alert(error.response.data.message);
      alert(error.response.data.message);
    }
  }

  async login(params) {
    try {
      const res = await this.user.post("login", params);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      // console.log(error.response);
    }
  }

  async signup(params) {
    try {
      const res = await this.user.post("signup", params);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      // console.log(error.response);
    }
  }

  async logout() {
    try {
      const res = await this.user.post("logout");
      localStorage.removeItem("recoil-persist");
      return res.data.message;
    } catch (error) {
      alert(error.response.data.message);
      // console.log(error.response);
    }
  }

  async checkPw(params) {
    try {
      const res = await this.user.put("checkPw", params);
      return res;
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  async updatePw(params) {
    try {
      const res = await this.user.put("updatePw", params);
      return res;
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  async photo(params) {
    try {
      const res = await this.user.post("photo", params);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      // console.log(error.response);
    }
  }

  async update(id, params) {
    try {
      const res = await this.user.put(`update/${id}`, params);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      // console.log(error.response);
    }
  }

  async addList(params) {
    try {
      const res = await this.user.put("addList", params);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      // console.log(error.response);
    }
  }

  async removeList(params) {
    try {
      const res = await this.user.put("removeList", params);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      // console.log(error.response);
    }
  }

  async getPostByBookmark(params) {
    const bookmark = params;
    const formData = makeFormData({ bookmark });
    try {
      const res = await this.user.put("getPostByBookmark", formData);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      // console.log(error.response);
    }
  }

  async delete(id, params) {
    try {
      const res = await this.user.delete(`delete/${id}`, params);
      console.log(res);
    } catch (error) {
      alert(error.response.data.message);
      // console.log(error.response);
    }
  }

  async csrfToken() {
    try {
      const res = await this.user.get("csrf-token");
      return res.data.csrfToken;
    } catch (error) {
      alert(error.response.data.message);
    }
  }
}
