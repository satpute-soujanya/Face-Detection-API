import React from 'react'
import face from './face-recognition.png'
import './navigation.css'
import Tilt from 'react-tilt'

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Tilt options={{ max: 35 }}>
        <div className="logo">
          <img src={face} alt="logo" width={80} />
        </div>
      </Tilt>
      <button className="primary"> Sign Out</button>
    </div>
  )
}

export default Navigation
