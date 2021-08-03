const { gql } = require('apollo-server');

const jugadorTypeDefs = gql`
    type Jugador {
        id: String!
        nombre: String!
        nacionalidad: String!
        edad: Int!
        equipo_actual: Equipo!
    }
    
    input JugadorInput {
        nombre: String!
        nacionalidad: String!
        edad: Int!
        equipo_actual: EquipoActualInput!
    }

    input EquipoActualInput {
        id: String!
    }
    
    extend type Query {
        allJugadores: [Jugador]!
        jugadorById(id: String!): Jugador!
    }
    
    extend type Mutation {
        createJugador(jugador: JugadorInput!): Jugador!
        updateJugador(id: String!, jugador: JugadorInput!): Jugador!
        deleteJugador(id: String!): String
    }


`;

module.exports = jugadorTypeDefs; 

