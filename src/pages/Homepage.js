import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews')
console.log(error)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>


  console.log(data)

  return (
    <div>
      {data.data.map(review => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>
          
          <small>console list</small>

          <p>{review.attributes.body[0].children[0].text.substring(0, 200)}...</p>
          <Link to={`/details/${review.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}


