import { useFetch } from '../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import SinglePokemon from '../components/SinglePokemon'


export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  

  const url = 'https://pokeapi.co/api/v2/pokemon/' + query
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      <h2 className="page-title">Pokemons including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <SinglePokemon url={url} />}
    </div>
  )
}