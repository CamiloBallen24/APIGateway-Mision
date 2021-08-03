//Permite crear el servidor -> Similar a lo que hace express pero mas limitado
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');

const resolvers = require('./resolvers');

const AccountAPI = require('./dataSources/account_api');
const UsersAPI = require('./dataSources/users_api');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      accountAPI: new AccountAPI(),
      usersAPI: new UsersAPI(),
    }),
    introspection: true,
    playground: true,
    
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});