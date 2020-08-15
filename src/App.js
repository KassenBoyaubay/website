import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'
import AppStyledComponent from './AppStyledComponent'

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
      <div style={{ backgroundColor: 'black' }}>
        <State />
        <Link to="/animatedWebsite"><button>Animated Website</button></Link>
      </div>
      <AppStyledComponent color="blue" size="large">
        Blue
      </AppStyledComponent >
      <AppStyledComponent color="green" size="small" noBorder>
        Green
      </AppStyledComponent >
    </div >
  )
}

export default App