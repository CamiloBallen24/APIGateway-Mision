const accountResolver = {
    Query: {
        accountByUserId: (_, {userId}, { dataSources}) => dataSources.accountAPI.getAccount(userId),
    },
    Mutation: {}
};

module.exports = accountResolver;