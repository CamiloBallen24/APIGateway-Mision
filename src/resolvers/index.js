const equipoResolver = require('./equipo_resolver');
const jugadorResolver = require('./jugador_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(equipoResolver, jugadorResolver);

module.exports = resolvers;