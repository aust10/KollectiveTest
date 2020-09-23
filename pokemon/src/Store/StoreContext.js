import React from 'react'
import { createPokemonStore } from './Store'
import { useLocalStore } from 'mobx-react'

const PokemonContext = React.createContext(null)
export const PokeProvider = ({ children }) => {
  const pokemonStore = useLocalStore(createPokemonStore)
  return (
    <PokemonContext.Provider value={pokemonStore}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemonStore = () => React.useContext(PokemonContext)
