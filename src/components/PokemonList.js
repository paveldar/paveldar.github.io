
import SinglePokemon from './SinglePokemon'

// styles


export default function PokemonList({ pokemons }) {

  if (pokemons.length === 0) {
    return <div className="error">No pokemons to load...</div>
  }

  return (
    <div className="pokemon-list">
      {pokemons.map(singlePokemon => (
        <div key={singlePokemon.name} className="pokemon-card">
          { singlePokemon && <SinglePokemon url={singlePokemon.url}/>}
        </div>
      ))}
    </div>
  )
}