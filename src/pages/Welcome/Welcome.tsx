import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchAllPokemons = async () => {
  const response = await axios.get('http://localhost:3000/pokemon');
  return (response.data as { name: string }[]).map((pokemon) => pokemon.name);
};

const PokemonList = () => {
  const { data: pokemons, error, isLoading } = useQuery(['pokemons'], fetchAllPokemons);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al obtener los Pokémon</div>;
  }

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <ul>
        {pokemons.map((pokemon: string) => (
          <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
