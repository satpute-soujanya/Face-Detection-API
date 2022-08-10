import React, { Component } from 'react'
import './App.css'
import FaceOutput from './components/FaceOutput/FaceOutput'
import ImageInput from './components/ImageInput/ImageInput'
import Navigation from './components/Navigation/Navigation'
import ParticleBG from './components/ParticleBg/ParticleBg'
import Ranking from './components/Ranking/Ranking'
import Clarifai from 'clarifai'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
window.process = {}

const app = new Clarifai.App({
  apiKey: 'a82f951b3baf431dbed0e13f952c3484',
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      imageInput: '',
      imgURL: '',
      box: {},
      route: 'signin',
    }
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({ box: box })
  }

  onChangeInput = (event) => {
    this.setState({ imageInput: event.target.value })
  }
  onSubmitButton = (event) => {
    this.setState({ imgURL: this.state.imageInput })
    console.log('click')
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.imageInput)
      .then((res) => {
        this.displayFaceBox(this.calculateFaceLocation(res))
      })
      .catch((err) => console.log(err))
  }
  onRouteChange = (route) => {
    this.setState({ route: route })
  }
  render() {
    return (
      <div className="app">
        <ParticleBG />
        <Navigation
          onRouteChange={this.onRouteChange}
          route={this.state.route}
        />
        {this.state.route === 'home' ? (
          <>
            <Ranking />
            <ImageInput
              onChangeInput={this.onChangeInput}
              onSubmitButton={this.onSubmitButton}
            />
            <FaceOutput imgURL={this.state.imgURL} box={this.state.box} />
          </>
        ) : this.state.route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : this.state.route === 'register' ? (
          <Register onRouteChange={this.onRouteChange} />
        ) : (
          <></>
        )}
      </div>
    )
  }
}

export default App
