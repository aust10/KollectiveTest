import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import { Button } from '@material-ui/core'
import CatchPoke from './components/CatchPoke/CatchPoke'
import PokeForm from './components/PokeForm/PokeForm'
import PokeDetails from './components/PokeDetails/PokeDetails'
import CaughtPoke from './components/CaughtPoke/CaughtPoke'

function App () {
  return (
    <div className='App'>
      <Switch>
        <Route exact from='/' render={props => <Home {...props} />} />
        <Route exact from='/CatchPoke' render={props => <CatchPoke {...props} />} />
        <Route exact from='/PokeForm' render={props => <PokeForm {...props} />} />
        <Route exact from='/PokeDetails' render={props => <PokeDetails {...props} />} />
        <Route exact from='/CaughtPoke' render={props => <CaughtPoke {...props} />} />
      </Switch>
    </div>
  )
}

export default App
