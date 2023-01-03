import axios from "axios";

export default class BoardApi {
  constructor(http) {
    this.board = axios.create({
      ...http,
      baseURL: "http://localhost:8080/board",
    });
  }

  async getBoard() {
    try {
      const res = await this.board.get("/");
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }
}
