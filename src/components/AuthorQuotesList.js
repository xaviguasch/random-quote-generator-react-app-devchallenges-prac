import React from 'react'

import Quote from './Quote'

import './AuthorQuotesList.css'

const AuthorQuotesList = ({ authorQuotes }) => {
  let renderedQuotes = ''

  if (authorQuotes) {
    renderedQuotes = authorQuotes.results.map((q) => (
      <Quote key={q._id} quoteContent={q.content} />
    ))
  }

  return (
    <div>
      <h2>Author quotes list component</h2>
      {renderedQuotes}
    </div>
  )
}

export default AuthorQuotesList
