import React from 'react'
import './imageInput.css'
const ImageInput = ({ onInputChange, onButtonSubmit }) => {
  return (
    <>
      <div className="searchbox-container">
        <input type="text" onChange={onInputChange} />
        <button className="primary" onClick={onButtonSubmit}>
          Face up
        </button>
      </div>
    </>
  )
}

export default ImageInput
