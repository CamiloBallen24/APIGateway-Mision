//Se llama al typedef (esquema) de cada submodulo
const equipoTypeDefs = require('./equipo_type_defs');
const jugadorTypeDefs = require('./jugador_type_defs');

//Se unen
const schemasArrays = [equipoTypeDefs, jugadorTypeDefs];

//Se exportan
module.exports = schemasArrays; 