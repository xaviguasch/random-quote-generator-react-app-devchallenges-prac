import React from 'react'

import './RandomGenerator.css'

const RandomGenerator = ({ getNewRandomQuote }) => {
  const handleBtnClick = () => {
    getNewRandomQuote()
  }
  return (
    <div className='Random'>
      <button onClick={handleBtnClick}>Random</button>
    </div>
  )
}

export default RandomGenerator
