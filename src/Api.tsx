import axios from 'axios';

const BASE = 'https://pokeapi.co/api/v2/'


export const api = {
  getAllPokemon: async () => {
    try {
      let endpoints = [];
      for (let i = 1; i <= 50; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      
      let response = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      let json = await response;
      
      return json;
      
      
    } catch (e) {
      console.log("erro é: " + e);
    }

  }


}