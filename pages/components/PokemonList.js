import React from 'react'

export default function PokemonList({pokemons}) {
  return (
    <div>
      {pokemons.map(launch => {
        return (
          <div key={launch.id}>
            <h1>{launch.name}</h1>
          </div>
        );                                      
      })}
  </div>
  )
}
