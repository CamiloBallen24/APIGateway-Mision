const accountResolver = {
    Query: {
        accountByUserId: (_, {userId}, { dataSources}) => dataSources.accountAPI.accountByUserId(userId),
    },
    Mutation: {}
};

module.exports = accountResolver;