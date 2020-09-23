import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import CaughtPoke from '../CaughtPoke/CaughtPoke'
import { useObserver } from 'mobx-react'

function Home (props) {
  const { history, location} = props

  // initilize the styles
  const styles = useStyles()
  return useObserver(() => (
    <div>
      <header className={styles.header}>
        <h1><i>POKEMON</i></h1>
        <h1>Got To Catch Them All!</h1>
        <Button
          data-testid='button'
          variant='outlined'
          onClick={() => history.push('/CatchPoke')}
        >Catch Pokemon
        </Button>
      </header>
      <CaughtPoke history={history} />
    </div>
  ))
}

const useStyles = makeStyles({
  header: {
    textAlign: 'center'
  }
})

export default Home
