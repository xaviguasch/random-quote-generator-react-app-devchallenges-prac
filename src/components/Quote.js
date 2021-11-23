import React from 'react'

import './Quote.css'

const Quote = ({ quoteContent }) => {
  return <div className='Quote'>{quoteContent && <p>{quoteContent}</p>}</div>
}

export default Quote
