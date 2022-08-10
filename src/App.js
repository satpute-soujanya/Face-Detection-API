import React, { Component } from 'react'
import './App.css'
import FaceOutput from './components/FaceOutput/FaceOutput'
import ImageInput from './components/ImageInput/ImageInput'
import Navigation from './components/Navigation/Navigation'
import ParticleBG from './components/ParticleBg/ParticleBg'
import Ranking from './components/Ranking/Ranking'

class App extends Component {
  render() {
    return (
      <div className="app">
        <ParticleBG />
        <Navigation />
        <Ranking />
        <ImageInput />
        <FaceOutput />
      </div>
    )
  }
}

export default App
