﻿import axios from "axios";

export default class PostApi {
  constructor(http) {
    this.post = axios.create({
      ...http,
      baseURL: "http://localhost:8080/post",
    });
  }

  async getPostById(id) {
    try {
      const res = await this.post.get(`${id}`);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }

  async getPostByUsername(username) {
    try {
      const res = await this.post.get(`?username=${username}`);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }

  async writePost(formData) {
    try {
      const res = await this.post.post("write", formData);
      return res.data;
    } catch (error) {
      // alert(error.response.data.message);
      console.log(error.response.data.message);
      // if(error.response.data.message === 'Invalid Token Error') {
      // }
    }
  }

  async updatePost(formData, id) {
    try {
      const res = await this.post.put(`update/${id}`, formData);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }

  async deletePost(id) {
    try {
      const res = await this.post.delete(`delete/${id}`);
      return res.data;
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response);
    }
  }
}
