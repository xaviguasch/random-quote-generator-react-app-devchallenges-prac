import { useState, useEffect } from 'react'

import Quote from './components/Quote'
import Author from './components/Author'

import './App.css'

function App() {
  const [randomQuote, setRandomQuote] = useState({})

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => setRandomQuote(data))
  }, [])

  return (
    <div className='App'>
      <h1>Random Quote Generator</h1>
      <Quote randomQ={randomQuote.content} />
      <Author authorQ={randomQuote.author} tagsQ={randomQuote.tags} />
    </div>
  )
}

export default App
