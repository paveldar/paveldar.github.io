import { useFetch } from '../hooks/useFetch'
import PokemonList from '../components/PokemonList'
import SearchBar from '../components/SearchBar'


function Home() {
  const { data, isPending, error } = useFetch('https://pokeapi.co/api/v2/pokemon/')

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <PokemonList pokemons={data.results} />}
    </div>
  );
}

export default Home;
