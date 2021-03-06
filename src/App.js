import { useState, useEffect } from 'react'

import Quote from './components/Quote'
import Author from './components/Author'
import RandomGenerator from './components/RandomGenerator'
import AuthorQuotesList from './components/AuthorQuotesList'

import './App.css'

function App() {
  const [quote, setRandomQuote] = useState({})
  const [authorQuotes, setAuthorQuotes] = useState({})
  const [displayAuthorQuotes, setDisplayAuthorQuotes] = useState(false)

  useEffect(() => {
    getNewRandomQuote()
  }, [])

  const getNewRandomQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setRandomQuote(data))

    setDisplayAuthorQuotes(false)
  }

  const getQuotesByAuthor = (author) => {
    fetch(`https://api.quotable.io/quotes?author=${author}`)
      .then((res) => res.json())
      .then((data) => setAuthorQuotes(data))

    setDisplayAuthorQuotes((prevState) => !prevState)
  }

  return (
    <div className='App container'>
      <RandomGenerator getNewRandomQuote={getNewRandomQuote} />

      {!displayAuthorQuotes && (
        <div className='main-content'>
          <Quote quoteContent={quote.content} />
          <Author
            authorQ={quote.author}
            tagsQ={quote.tags}
            getQuotesByAuthor={getQuotesByAuthor}
          />
        </div>
      )}

      {displayAuthorQuotes && (
        <div className='author-quotes-content'>
          <AuthorQuotesList authorQuotes={authorQuotes} author={quote.author} />
        </div>
      )}

      <div className='footer'>
        <p className='footer--signature'>
          created by <span className='bold'>Xavi Guasch</span> - devChallenges.io
        </p>
      </div>
    </div>
  )
}

export default App
