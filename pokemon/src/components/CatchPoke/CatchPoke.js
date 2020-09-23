import { useObserver } from 'mobx-react'
import React, { useEffect } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { usePokemonStore } from '../../Store/StoreContext'

function CatchPoke (props) {
  // initilize the store and styles
  const PokemonStore = usePokemonStore()
  const styles = useStyles()
  const { history } = props

  // on mount run get pokemon to get a random list of new pokemon
  useEffect(() => {
    PokemonStore.GetPokemon()
  }, [])

  return useObserver(() => (
    <div>
      <header className={styles.header}>
        <h1>Catch Pokemon</h1>
        <Button
          variant='outlined'
          onClick={() => history.push('/')}
        >
          Home
        </Button>
      </header>
      <main className={styles.main}>
        {PokemonStore.pokemon
          ? PokemonStore.pokemon.map(pokemon => (
            <>
              <h3
                onClick={() => PokemonStore.Selected(pokemon.url, pokemon.name)}
                key={pokemon.name}
              >
                {pokemon.name}
              </h3>
              {PokemonStore.selected.name === pokemon.name
                ? <Button
                  variant='outlined'
                  onClick={() => history.push('/PokeForm')}
                >
              Catch Pokemon
                </Button>
                : null}
            </>
          ))
          : <p>Loading</p>}
      </main>
    </div>
  ))
}

const useStyles = makeStyles({
  header: {
    textAlign: 'center'
  },
  main: {
    marginLeft: 30
  }
})

export default CatchPoke
