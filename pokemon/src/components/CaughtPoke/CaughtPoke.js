import React, { useState } from 'react'
import { useObserver } from 'mobx-react'
import { makeStyles } from '@material-ui/core'
import { usePokemonStore } from '../../Store/StoreContext'
import PokeDetails from '../PokeDetails/PokeDetails'

function CaughtPoke (props) {
  // set state for active or not in order to run turnary for show hide purpouses
  const [active, setActive] = useState(false)

  // initilize the store and styles
  const PokemonStore = usePokemonStore()
  const styles = useStyles()

  // console.log(PokemonStore.caughtPokemon, 'check the data')
  return useObserver(() => (
    <>
      <main className={styles.root}>
        <div>
          <h4 className={styles.title}>Your Caught Pokemon:</h4>
          {PokemonStore.caughtPokemon.length !== 0
            ? PokemonStore.caughtPokemon.map(pokemon => (
              <div key={pokemon.name}>
                {console.log(pokemon, 'check check')}
                <h3
                  onClick={() => {
                    PokemonStore.Selected(pokemon)
                    setActive(true)
                  }}
                  key={pokemon.name}
                >
                  <img src={pokemon.sprites.front_default} alt={pokemon.name.toUpperCase()} /> {pokemon.name.toUpperCase()}
                </h3>
                <p><i>Original Name: </i>{pokemon.forms[0].name}</p>
              </div>
            ))
            : <p>No Pokemon To Display</p>}
        </div>
        <div>
          {active
            ? <PokeDetails history={props.history} active={setActive} />
            : null}
        </div>
      </main>
    </>
  ))
}

const useStyles = makeStyles({
  root: {
    width: '80%',
    display: 'flex',
    marginLeft: '15px',
    marginRight: '15px',
    padding: 15,
    justifyContent: 'space-between'
  },
  title: {
    margin: 15
  }
})

export default CaughtPoke
