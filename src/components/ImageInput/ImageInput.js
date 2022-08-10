import React from 'react'
import './imageInput.css'
const ImageInput = ({ onChangeInput, onSubmitButton }) => {
  return (
    <>
      <div className="searchbox-container">
        <input type="text" onChange={onChangeInput} />
        <button className="primary" onClick={onSubmitButton}>
          Face up
        </button>
      </div>
    </>
  )
}

export default ImageInput
