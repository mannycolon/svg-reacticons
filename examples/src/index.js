import React from 'react'
import { render} from 'react-dom'
import {
  SmartphoneOutline,
  TruckOutline,
  MicrowaveOutline
} from '../../src'

import './styles.css'

const App = () => (
  <div>
    <h1>Icon Demos</h1>
    <SmartphoneOutline className="red-icon"/>
    <TruckOutline style={{margin: '5px'}} className="red-icon"/>
    <MicrowaveOutline className="red-icon"/>
  </div>
)

render(<App />, document.getElementById("root"))
