import axios from 'axios';

export default class UserApi {
    constructor() {
        this.user = axios.create({
            baseURL: 'http://localhost:8080/user',
            headers: { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' }
        });
    }

    async me(params) {
        try {
            const res = await this.user.get('me', params);
            console.log(res);
        } catch(error) {
            console.log(error.response);
        }
    }

    async login(params) {
        try {
            const res = await this.user.post('login', params);
            return res.data;
        } catch(error) {
            console.log(error.response);
        }
    }

    async signup(params) {
        try {
            const res = await this.user.post('signup', params);
            return res.data;
        } catch(error) {
            console.log(error.response);
        }
    }

    async photo(params) {
        try {
            const res = await this.user.post('photo', params);
            return res.data;
        } catch(error) {
            console.log(error.response);
        }
    }

    async update(id, params) {
        try {
            const res = await this.user.put(`update/${id}`, params);
            console.log(res);
        } catch(error) {
            console.log(error.response);
        }
    }

    async delete(id, params) {
        try {
            const res = await this.user.put(`delete/${id}`, params);
            console.log(res);
        } catch(error) {
            console.log(error.response);
        }
    }
}
