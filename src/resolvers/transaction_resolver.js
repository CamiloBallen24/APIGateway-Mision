const transactionResolver = {
    Query: {
        transacctionByIdUser: (_, { idUser }, {dataSources}) => dataSources.accountAPI.transacctionByIdUser(idUser),
    },
    Mutation: {
        createTransacction: (_, {transaction}, {dataSources}) => dataSources.accountAPI.createTransacction(transaction)
    }
};


module.exports = transactionResolver;