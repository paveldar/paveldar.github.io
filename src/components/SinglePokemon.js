import { useFetch } from '../hooks/useFetch'

// styles


export default function SinglePokemon({ url }) {
  const { data, isPending, error } = useFetch(url)

  console.log(data)

  return (
    <div>
      {data && (
        <>
          <p>Name: {data.name}</p>
          <p>Type: {data.types[0].type.name}</p>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>
          <img alt="" src={data.sprites.front_default}></img>
        </>
      )}
      
     
      
     
    </div>
  )
}