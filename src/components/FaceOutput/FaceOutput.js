import React from 'react'
import './faceOutput.css'

const FaceOutput = () => {
  return (
    <div className="face-container">
      <img
        src={
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
        }
        alt="face"
        width={400}
      />
    </div>
  )
}

export default FaceOutput
