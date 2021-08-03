const { RESTDataSource } = require('apollo-datasource-rest');


class UsersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `https://mision-tic-users.herokuapp.com`;
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/token/`, credentials);
    }

    async verifyToken(token) {
        token = new Object(JSON.parse(JSON.stringify(token)));
        return await this.post(`/token/verify/`, token);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({refresh: token})));
        return await this.post(`/token/refresh/`, token);
    }
}

module.exports = UsersAPI;