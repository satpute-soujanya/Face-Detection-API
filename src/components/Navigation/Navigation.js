import React from 'react'
import face from './face-recognition.png'
import './navigation.css'
import Tilt from 'react-tilt'

const Navigation = ({ onRouteChange, route }) => {
  return (
    <div className="navigation-container">
      <Tilt options={{ max: 35 }}>
        <div className="logo">
          <img src={face} alt="logo" width={80} />
        </div>
      </Tilt>
      {route === 'home' ? (
        <button className="primary" onClick={() => onRouteChange('signin')}>
          {' '}
          Sign Out
        </button>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Navigation
