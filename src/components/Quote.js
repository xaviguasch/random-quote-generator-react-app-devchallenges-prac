import React from 'react'

import './Quote.css'

const Quote = ({ quoteContent }) => {
  return (
    <div className='Quote'>
      {quoteContent && <p className='quote-text'>"{quoteContent}"</p>}
    </div>
  )
}

export default Quote
