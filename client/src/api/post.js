import axios from 'axios';

export default class PostApi {
    constructor() {
        this.post = axios.create({
            baseURL: 'http://localhost:8080/post/',
            headers: { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' }
        });
    }

    async getPostById(id) {
        try {
            const res = await this.post.get(`${id}`);
            return res.data;
        } catch(error) {
            console.log(error.response);
        }
    }

    async getPostByUsername(username) {
        try {
            const res = await this.post.get(`?username=${username}`);
            return res.data;
        } catch(error) {
            console.log(error.response);
        }
    }

    async writePost(formData) {
        try {
            const res = await this.post.post('write', formData);
            return res.data;
        } catch(error) {
            console.log(error.response);
        }
    }

    async updatePost(id) {
        try {
            const res = await this.post.put(`update/${id}`);
            return res.data;
        } catch(error) {
            console.log(error.response);
        }
    }

    async deletePost(id) {
        try {
            const res = await this.post.delete(`delete/${id}`);
            return res.data;
        } catch(error) {
            console.log(error.response);
        }
    }
}