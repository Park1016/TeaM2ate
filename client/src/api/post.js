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
}