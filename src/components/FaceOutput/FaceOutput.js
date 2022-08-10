import React from 'react'
import './faceOutput.css'

const FaceOutput = ({ imgURL, box }) => {
  if (imgURL) {
    return (
      <div className="main-container">
        <div className="face-container">
          <img
            id="inputimage"
            src={imgURL}
            alt=""
            width={400}
            className="face-img"
          />
          <div
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        </div>
      </div>
    )
  }
}

export default FaceOutput
