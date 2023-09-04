import { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<string[]>([]);

  const fetchAllPokemons = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pokemon');
      const allPokemons: string[] = response.data.map((pokemon: { name: string }) => pokemon.name);
      setPokemons(allPokemons);
    } catch (error) {
      console.error('Error al obtener todos los Pokémon:', error);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
