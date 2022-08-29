import React from 'react'
import './ranking.css'
const Ranking = ({ name, entries }) => {
  return (
    <>
      <div className="rank-header">
        <h1> {`${name} your Rank is`}</h1>
        <span>{`#${entries}`}</span>
      </div>

      <h2> I can detect your Face! Abracadabra 🧙🏻 </h2>
    </>
  )
}
export default Ranking
