const { gql } = require('apollo-server');

const usersTypeDefs = gql `
    type Response {
        refresh: String
        access: String
        detail: String
        code: String
    }

    input CredentialsInput {
        username: String!
        password: String!
    }
    
    extend type Mutation {
        authenticate(credentials: CredentialsInput!): Response!
        refreshToken(refresh: String!): Response!
    }
`;

module.exports = usersTypeDefs;