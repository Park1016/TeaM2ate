import axios from 'axios';

export default class Http {
    constructor() {
        this.http = axios.create({
            baseURL: 'http://localhost:8080',
            credentials: 'include',
            withCredentials: true,
            headers: { 
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                '_csrf-token': ''
            }
        });
    }
}