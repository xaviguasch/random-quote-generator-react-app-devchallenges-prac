import React from 'react'

import './RandomGenerator.css'

const RandomGenerator = ({ getNewRandomQuote }) => {
  const handleBtnClick = () => {
    getNewRandomQuote()
  }
  return (
    <div className='RandomGenerator'>
      <button className='btn btn--random' onClick={handleBtnClick}>
        random <span className='material-icons-round icon--renew'>autorenew</span>
      </button>
    </div>
  )
}

export default RandomGenerator
