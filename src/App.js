import React, { Component } from 'react'
import './App.css'
import FaceOutput from './components/FaceOutput/FaceOutput'
import ImageInput from './components/ImageInput/ImageInput'
import Navigation from './components/Navigation/Navigation'
import ParticleBG from './components/ParticleBg/ParticleBg'
import Ranking from './components/Ranking/Ranking'

class App extends Component {
  constructor() {
    super()
    this.state = {
      imageInput: '',
    }
  }

  onChangeInput = (event) => {
    console.log(event.target.value)
  }
  onSubmitButton = (event) => {
    console.log('click')
  }

  render() {
    return (
      <div className="app">
        <ParticleBG />
        <Navigation />
        <Ranking />
        <ImageInput
          onChangeInput={this.onChangeInput}
          onSubmitButton={this.onSubmitButton}
        />
        <FaceOutput />
      </div>
    )
  }
}

export default App
