import React from 'react'

import './RandomGenerator.css'

const RandomGenerator = ({ getNewRandomQuote }) => {
  const handleBtnClick = () => {
    getNewRandomQuote()
  }
  return (
    <div className='Random'>
      <button className='btn' onClick={handleBtnClick}>
        Random <span class='material-icons-round'>autorenew</span>
      </button>
    </div>
  )
}

export default RandomGenerator
