import React from 'react'

import './Quote.css'

const Quote = ({ randomQ }) => {
  return (
    <div className='Quote'>
      <p>{randomQ}</p>
    </div>
  )
}

export default Quote
