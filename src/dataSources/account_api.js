const { RESTDataSource } = require('apollo-datasource-rest');



class AccountAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://cuentasms.herokuapp.com`;    
  }

  async accountByUserId(userId){
    const response = await this.get(`/accounts/${userId}`);
    return this.accountReducer(response);
  }


  async createTransacction(transacction){
    transacction = new Object(JSON.parse(JSON.stringify(transacction)));
    const response = await this.post('/transactions', transacction);
    return this.transacctionReducer(response);
  }

  async transacctionByIdUser(userId){
    const response = await this.get(`/transactions/${userId}`);
    return response.map(transacction => this.transacctionReducer(transacction));
  }
  

  transacctionReducer(transacction) {
    return {
      id: transacction.id || '0',
      userIdOrigin: transacction.userIdOrigin || '0',
      userIdDestiny: transacction.userIdDestiny || '0',
      value: transacction.value || 0,
      date: transacction.date || '0',      
    };
  }


  accountReducer(account) {
    return {
        userId: account.userId || '0',
        balance: account.balance || 0,  
        lastChange: account.lastChange || "null",
    };
  }

  
}

module.exports = AccountAPI;