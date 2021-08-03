const equipoResolver = {
    Query: {
        allEquipos: (_, __, { dataSources }) => dataSources.equipoAPI.getAllEquipos(),
        equipoById: (_, { id }, {dataSources}) => dataSources.equipoAPI.getEquipobyId(id),
    },
    Mutation: {
        createEquipo: (_, {equipo}, {dataSources}) => dataSources.equipoAPI.createEquipo(equipo),
        updateEquipo: (_, {id, equipo}, {dataSources}) => dataSources.equipoAPI.updateEquipo(id, equipo),
        deleteEquipo: (_, {id}, {dataSources}) => dataSources.equipoAPI.deleteEquipo(id),
    }
};



module.exports = equipoResolver;