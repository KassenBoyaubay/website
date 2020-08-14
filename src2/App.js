import React from 'react'
import 'App.css'
import Nav from './components/Nav'
import Tweets from './components/Tweets'
import State from '../../../React/dev_ed_react_state_and_props/src/components/State'

const App = () => {
  const name = 'Kas'
  const age = 26

  return (
    <div className="App">
      <h1>Hello React</h1>
      <div className="home">
        <Tweets me={name} age={age} />
      </div>
      <State />
    </div>
  )
}

export default App