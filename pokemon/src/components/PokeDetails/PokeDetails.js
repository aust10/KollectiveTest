import React, { useState } from 'react'
import { TextField, Button, Card, makeStyles } from '@material-ui/core'
import { usePokemonStore } from '../../Store/StoreContext'
import { inject, useObserver, observer } from 'mobx-react'

function PokeDetails (props) {
  // initilize the store and styles
  const PokemonStore = usePokemonStore()
  const styles = useStyles()

  // initilize state for the pokemon to keep track of the selected name
  const [pokemon, setPokemon] = useState({
    selected: PokemonStore.selected,
    name: PokemonStore.selected.name
  })

  // helper function to update pokemon name on change
  const updatePokemon = (evt) => {
    evt.preventDefault()
    setPokemon({
      ...pokemon,
      [evt.target.name]: evt.target.value
    })
  }
  return useObserver(() => (
    <div className={styles.pokeDetails}>
      <Card className={styles.root}>
        <h1 className={styles.header}>{pokemon.selected.name}</h1>
        <hr />
        <header className={styles.details}>
          <div>
            <h3>Pokemon Types:</h3>
            {pokemon.selected.type.map(item => (
              <p key={item.type.name}>{item.type.name}</p>
            ))}
          </div>
          <div>
            <h3>Pokemon Abilities:</h3>
            {pokemon.selected.ability.map(item => (
              <p key={item.ability.name}>{item.ability.name}</p>
            ))}
          </div>
        </header>
        <form className={styles.form}>
          <TextField
            id='outlined-basic'
            type='text'
            label='New Pokemon Name'
            name='name'
            variant='outlined'
            value={pokemon.name}
            onChange={updatePokemon}
          />
          <Button
            variant='outlined'
            onClick={() => {
              PokemonStore.ChangeCaughtPokeName(pokemon)
              props.active(false)
              props.history.push('/')
            }}
          >
        Change Name
          </Button>
          <Button
            variant='outlined'
            onClick={() => {
              props.active(false)
              props.history.push('/')
            }}
          >
        Back
          </Button>
        </form>
      </Card>
    </div>
  ))
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '0 auto',
    padding: 10

  },
  details: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  header: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    justifyContent: 'space-around'
  }
})

export default PokeDetails

