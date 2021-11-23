import React from 'react'

const Author = ({ authorQ, tagsQ, getQuotesByAuthor }) => {
  let renderedTags = ''

  // To avoid "tagsQ" starting the mapping before it gets the content, we have to wait until it's populated with data
  if (tagsQ) {
    renderedTags = tagsQ.map((tag) => {
      const newTag = tag.split('-').join(' ')

      return <p key={tag}>{newTag}</p>
    })
  }

  const handleAuthorClick = () => {
    getQuotesByAuthor(authorQ)
  }

  return (
    <div className='Author'>
      <button onClick={handleAuthorClick}>
        <p>{authorQ}</p>
        {renderedTags}
      </button>
    </div>
  )
}

export default Author
