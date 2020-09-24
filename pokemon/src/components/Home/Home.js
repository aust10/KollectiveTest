import React from 'react'
import { Button, Card, makeStyles } from '@material-ui/core'
import CaughtPoke from '../CaughtPoke/CaughtPoke'
import { useObserver } from 'mobx-react'

function Home (props) {
  const { history } = props

  // initilize the styles
  const styles = useStyles()
  return useObserver(() => (
    <div className={styles.backround}>
      <Card className={styles.root}>
        <h1><i>POKEMON</i></h1>
        <h1>Got To Catch Them All!</h1>
        <Button
          data-testid='button'
          variant='outlined'
          onClick={() => history.push('/CatchPoke')}
        >Catch Pokemon
        </Button>
        <CaughtPoke history={history} />
      </Card>
    </div>
  ))
}

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: '0 auto',
    backgroundColor: '#FEC26C',
    textAlign: 'center'

  },
  backround: {
    backgroundColor: '#6CA8FE',
    height: '100vh'
  }
})

export default Home
