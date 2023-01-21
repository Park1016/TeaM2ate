import axios from "axios";

export default class ReplycommApi {
  constructor(http) {
    this.replycomm = axios.create({
      ...http,
      baseURL: `${process.env.REACT_APP_BASE_URL}/replycomm`,
    });
  }

  async getReplyCommByPostId(postId) {
    try {
      const res = await this.replycomm.get(`${postId}`);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }

  async getReplyCommByCommentId(commentId) {
    try {
      const res = await this.replycomm.get(`comment/${commentId}`);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }

  async getReplyCommByUsername(username) {
    try {
      const res = await this.replycomm.get(`?username=${username}`);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }

  async getPostByReplycomm(username) {
    try {
      const res = await this.replycomm.get(`post/${username}`);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }

  async writeReplycomm(formData) {
    try {
      const res = await this.replycomm.post("write", formData);
      return res.data;
    } catch (error) {
      // alert(error.response.data.message);
      console.log(error.response.data.message);
      // if(error.response.data.message === 'Invalid Token Error') {
      // }
    }
  }

  async updateReplycomm(formdata, id) {
    try {
      const res = await this.replycomm.put(`update/${id}`, formdata);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }

  async deleteReplycomm(id) {
    try {
      const res = await this.replycomm.delete(`delete/${id}`);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }
}
