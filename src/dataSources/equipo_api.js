const { RESTDataSource } = require('apollo-datasource-rest');



class EquipoAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `http://127.0.0.1:8080/equipos`;
    
  }

  //Realiza una peticion get para obtener todos los usuarios
  async getAllEquipos() {
    const response = await this.get('/');
    return Array.isArray(response)? response.map(equipo => this.equipoReducer(equipo)): [];
  }

  //Peticion get para obtener un usu
  async getEquipobyId(id){
    const response = await this.get(`/${id}`);
    return this.equipoReducer(response);
  }

  async createEquipo(equipo){
    equipo = new Object(JSON.parse(JSON.stringify(equipo)));
    const response = await this.post('/', equipo);
    return this.equipoReducer(response);
  }


  async updateEquipo(id, equipo){
    equipo = new Object(JSON.parse(JSON.stringify(equipo)));
    const response = await this.put(`/${id}`, equipo);
    return this.equipoReducer(response);
  }

  async deleteEquipo(id){
    const response = await this.delete(`/${id}`);
    return this.equipoReducer(response);
  }

  //Le da el formato necesario a la salida
  equipoReducer(equipo) {
    return {
      id: equipo.id || '0',
      nombre: equipo.nombre,  
      pais: equipo.pais,
    };
  }

  
}

module.exports = EquipoAPI;