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
      User: {
        id: '',
        name: '',
        email: '',
        entries: '',
        joined: '',
      },
    }
  }
  // componentDidMount() {
  //   fetch('http://localhost:8000')
  //     .then((res) => res.json())
  //     .then(console.log)
  // }
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
    this.setState({ box: box })
  }

  onChangeInput = (event) => {
    this.setState({ imageInput: event.target.value })
  }
  onSubmitButton = (event) => {
    this.setState({ imgURL: this.state.imageInput })
    // console.log('click')
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.imageInput)
      .then((response) => {
        // console.log('hi', res)

        if (response) {
          fetch('http://localhost:8000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.User.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              console.log(count, 'count from')
              this.setState(
                Object.assign(this.state.User, { entries: count.entries })
              )
              console.log(this.state)
            })
            .catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch((err) => console.log(err))
  }
  onRouteChange = (route) => {
    this.setState({ route: route })
  }
  loadUser = (Data) => {
    // console.log('loaduser', Data)
    this.setState({
      User: {
        id: Data.id,
        name: Data.name,
        email: Data.email,
        entries: Data.entries,
        joined: Data.joined,
      },
    })
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
            <Ranking
              name={this.state.User.name}
              entries={this.state.User.entries}
            />
            <ImageInput
              onChangeInput={this.onChangeInput}
              onSubmitButton={this.onSubmitButton}
            />
            <FaceOutput imgURL={this.state.imgURL} box={this.state.box} />
          </>
        ) : this.state.route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
        ) : this.state.route === 'register' ? (
          <Register
            onRouteChange={this.onRouteChange}
            loadUser={this.loadUser}
          />
        ) : (
          <></>
        )}
      </div>
    )
  }
}

export default App
