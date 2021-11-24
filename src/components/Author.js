import React from 'react'

const Author = ({ authorQ, tagsQ, getQuotesByAuthor }) => {
  let renderedTags = ''

  // To avoid "tagsQ" starting the mapping before it gets the content, we have to wait until it's populated with data
  if (tagsQ) {
    renderedTags = tagsQ.map((tag) => {
      const newTag = tag.split('-').join(' ')

      return (
        <p key={tag} className='genre-tag'>
          {newTag}
        </p>
      )
    })
  }

  const handleAuthorClick = () => {
    getQuotesByAuthor(authorQ)
  }

  return (
    <div className='Author'>
      <button className='btn btn--author' onClick={handleAuthorClick}>
        <p className='author-text'>{authorQ}</p>
        {renderedTags}
      </button>
    </div>
  )
}

export default Author
