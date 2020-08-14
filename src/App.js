import React from 'react'
import './App.css'
import Tweets from './components/Tweets'
import State from './components/State'

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