import axios from 'axios';

export default class UserApi {

    constructor(http) {
        this.user = axios.create({...http, baseURL: 'http://localhost:8080/user'});
    }

    async me(params) {
        try {
            const res = await this.user.get('me', params);
            console.log(res);
        } catch(error) {
            alert(error.response.data.message);
            console.log(error.response);
        }
    }

    async login(params) {
        try {
            const res = await this.user.post('login', params);
            return res.data;
        } catch(error) {
            alert(error.response.data.message);
            console.log(error.response);
        }
    }

    async signup(params) {
        try {
            const res = await this.user.post('signup', params);
            return res.data;
        } catch(error) {
            alert(error.response.data.message);
            console.log(error.response);
        }
    }

    async logout() {
        try {
            const res = await this.user.post('logout');
            return res.data;
        } catch(error) {
            alert(error.response.data.message);
            console.log(error.response);
        }
    }

    async photo(params) {
        try {
            const res = await this.user.post('photo', params);
            return res.data;
        } catch(error) {
            alert(error.response.data.message);
            console.log(error.response);
        }
    }

    async update(id, params) {
        try {
            const res = await this.user.put(`update/${id}`, params);
            console.log(res);
        } catch(error) {
            alert(error.response.data.message);
            console.log(error.response);
        }
    }

    async delete(id, params) {
        try {
            const res = await this.user.put(`delete/${id}`, params);
            console.log(res);
        } catch(error) {
            alert(error.response.data.message);
            console.log(error.response);
        }
    }

    async csrfToken() {
        try {
            const res = await this.user.get('csrf-token');
            return res.data.csrfToken;
        } catch(error) {
            alert(error.response.data.message);
        }
    }
}