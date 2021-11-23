import { useState, useEffect } from 'react'

import Quote from './components/Quote'
import Author from './components/Author'
import RandomGenerator from './components/RandomGenerator'
import AuthorQuotesList from './components/AuthorQuotesList'

import './App.css'

function App() {
  const [randomQuote, setRandomQuote] = useState({})
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
    <div className='App'>
      <RandomGenerator getNewRandomQuote={getNewRandomQuote} />
      {!displayAuthorQuotes && (
        <div className='main-content'>
          <h1>Random Quote Generator</h1>
          <Quote randomQ={randomQuote.content} />
          <Author
            authorQ={randomQuote.author}
            tagsQ={randomQuote.tags}
            getQuotesByAuthor={getQuotesByAuthor}
          />
        </div>
      )}

      {displayAuthorQuotes && (
        <div className='author-quotes-content'>
          <AuthorQuotesList authorQuotes={authorQuotes} />
        </div>
      )}
    </div>
  )
}

export default App
