import React from 'react'

const Author = ({ authorQ, tagsQ }) => {
  let renderedTags = ''

  console.log(authorQ)
  console.log(tagsQ)

  // To avoid "tagsQ" starting the mapping before it gets the content, we have to wait until it's populated with data
  if (tagsQ) {
    renderedTags = tagsQ.map((tag) => {
      const newTag = tag.split('-').join(' ')

      return <p key={tag}>{newTag}</p>
    })
  }

  return (
    <div className='Author'>
      <p>{authorQ}</p>
      {renderedTags}
    </div>
  )
}

export default Author
