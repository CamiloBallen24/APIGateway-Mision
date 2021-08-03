const { gql } = require('apollo-server');

const accountTypeDefs = gql`
    type Account {
        userId: String!
        balance: Integer
        lastChange: String
    }
    
    type Query {
        accountByUserId(userId: String!): Account!
    }
`;

module.exports = equipoTypeDefs; 