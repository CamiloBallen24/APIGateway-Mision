//Permite crear el servidor -> Similar a lo que hace express pero mas limitado
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');

const resolvers = require('./resolvers');

const EquipoAPI = require('./dataSources/equipo_api');
const JugadorAPI = require('./dataSources/jugador_api');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      equipoAPI: new EquipoAPI(),
      jugadorAPI: new JugadorAPI(),
    }),
    introspection: true,
    playground: true,
    
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});