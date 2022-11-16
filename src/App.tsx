import { useEffect, useState } from "react";
import { api } from "./Api";
import { Pokemon } from "./components/Pokemon";
import { PokemonType } from "./types/pokemonType";


const App = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    try {
      setLoading(true);
      let json = await api.getAllPokemon();
      setLoading(false);
      setPokemons(json);
      

    } catch (e) {
      alert("Erro! tente mais tarde")
      setLoading(false);
    }
  }



  return (
    <div className="container">
      {loading &&
        <div>Carregando...</div>
      }


      {!loading && pokemons.length > 0 &&
        <div>
          <div>Total de Pokemons: {pokemons.length}</div>
          <div>
            {pokemons.map((item, index) => (
              
              <div key={index}>

                <Pokemon data={item} />
              </div>
            ))}
          </div>
        </div>
      }

      {!loading && pokemons.length === 0 &&
        <div>
          Não carregou nenhum pokemom!
        </div>
      }

    </div>
  )
}

export default App;