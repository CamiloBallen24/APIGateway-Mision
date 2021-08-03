const jugadorResolver = {
    Query: {
        allJugadores: (_, __, { dataSources }) => dataSources.jugadorAPI.getAllJugadores(),
        jugadorById: (_, { id }, {dataSources}) => dataSources.jugadorAPI.getJugadorbyId(id)
    },
    Mutation: {
        createJugador: (_, {jugador}, {dataSources}) => dataSources.jugadorAPI.createJugador(jugador),
        updateJugador: (_, {id, jugador}, {dataSources}) => dataSources.jugadorAPI.updateJugador(id, jugador),
        deleteJugador: (_, {id}, {dataSources}) => dataSources.jugadorAPI.deleteJugador(id)
    }
};



module.exports = jugadorResolver;