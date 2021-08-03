const { RESTDataSource } = require('apollo-datasource-rest');



class JugadorAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://127.0.0.1:8080/jugadores`;
    
  }

  //Realiza una peticion get para obtener todos los usuarios
  async getAllJugadores() {
    const response = await this.get('/');
    return Array.isArray(response)? response.map(jugador => this.jugadorReducer(jugador)): [];
  }

  //Peticion get para obtener un usu
  async getJugadorbyId(id){
    const response = await this.get(`/${id}`);
    return this.jugadorReducer(response);
  }

  async createJugador(jugador){
    jugador = new Object(JSON.parse(JSON.stringify(jugador)));
    const response = await this.post('/', jugador);
    return this.jugadorReducer(response);
  }


  async updateJugador(id, jugador){
    jugador = new Object(JSON.parse(JSON.stringify(jugador)));
    const response = await this.put(`/${id}`, jugador);
    return this.jugadorReducer(response);
  }

  async deleteJugador(id){
    const response = await this.delete(`/${id}`);
    return this.jugadorReducer(response);
  }

  //Le da el formato necesario a la salida
  jugadorReducer(jugador) {
    return {
      id: jugador.id || '0',
      nombre: jugador.nombre,  
      nacionalidad: jugador.nacionalidad,
      edad: jugador.edad,
      equipo_actual: this.equipoReducer(jugador.equipo_actual)
    };
  }

  equipoReducer(equipo) {
    return {
      id: equipo.id || '0',
      nombre: equipo.nombre,  
      pais: equipo.pais,
    };
  }

  
}

module.exports = JugadorAPI;