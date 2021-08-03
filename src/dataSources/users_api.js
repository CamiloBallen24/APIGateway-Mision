const { RESTDataSource } = require('apollo-datasource-rest');


class usersAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `https://mision-tic-users.herokuapp.com`;
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        const response = await this.post(`/token/`, credentials);
        return (response.detail) ? this.detailReducer(response) : this.tokenReducer(response);
    }

    async verifyToken(token) {
        token = new Object(JSON.parse(JSON.stringify(token)));
        return await this.post(`/token/verify/`, token);
    }

    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify(token)));
        return await this.post(`/token/refresh/`, token);
    }

    tokenReducer(tokens) {
        return {
            refresh: tokens.refresh,
            access: tokens.access
        };
    }

    detailReducer(response) {
        return {
            detail: response.detail,
        };
    }
}

module.exports = usersAPI;