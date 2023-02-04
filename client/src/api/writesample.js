import axios from "axios";

export default class WritesampleApi {
  constructor(http) {
    this.writesample = axios.create({
      ...http,
      baseURL: `${process.env.REACT_APP_BASE_URL}/writesample`,
    });
  }

  async getSample() {
    try {
      const res = await this.writesample.get("/");
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }

  async write(formData) {
    try {
      const res = await this.writesample.post("write", formData);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }

  async update(formData) {
    try {
      const res = await this.writesample.post("update", formData);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }
}
