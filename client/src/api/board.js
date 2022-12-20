import axios from 'axios';

export default class BoardApi {
    constructor() {
        this.board = axios.create({
            baseURL: 'http://localhost:8080/board',
            headers: { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' }
        });
    }

    async getBoard() {
        try {
            const res = await this.board.get('/');
            return res.data;
        } catch(error) {
            console.log(error.response);
        }
    }
}