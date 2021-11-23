import React from 'react'

import Quote from './Quote'

import './AuthorQuotesList.css'

const AuthorQuotesList = ({ authorQuotes, author }) => {
  console.log(authorQuotes)

  let renderedQuotes = 'testing'

  // We are checking if the object is empty (it'll be empty the moments while the API call is in progress)
  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false
    }

    return true
  }

  if (!isEmpty(authorQuotes)) {
    renderedQuotes = authorQuotes.results.map((q) => (
      <Quote key={q._id} quoteContent={q.content} />
    ))
  }

  return (
    <div>
      <h2>{author}</h2>
      {renderedQuotes}
    </div>
  )
}

export default AuthorQuotesList
