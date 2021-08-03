const { RESTDataSource } = require('apollo-datasource-rest');

class AccountAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://cuentasms.herokuapp.com`;    
  }

  async accountByUserId(userId){
    return await this.get(`/accounts/${userId}`);    
  }

  async createTransacction(transacction){
    transacction = new Object(JSON.parse(JSON.stringify(transacction)));
    return await this.post('/transactions', transacction);    
  }

  async transacctionByIdUser(userId){
    return await this.get(`/transactions/${userId}`);
    
  }
}

module.exports = AccountAPI;