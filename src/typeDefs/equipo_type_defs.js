const { gql } = require('apollo-server');

const equipoTypeDefs = gql`
    type Equipo {
        id: String!
        nombre: String
        pais: String
    }
    
    input EquipoInput {
        nombre: String!
        pais: String!
    }

    type Query {
        allEquipos: [Equipo]!
        equipoById(id: String!): Equipo!
    }

    type Mutation {
        createEquipo(equipo: EquipoInput!): Equipo!
        updateEquipo(id: String!, equipo: EquipoInput!): Equipo!
        deleteEquipo(id: String!): String!
       
    }

`;

module.exports = equipoTypeDefs; 

