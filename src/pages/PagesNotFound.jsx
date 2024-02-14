import React from 'react'
import {Link} from 'react-router-dom'


function PagesNotFound() {
  return (
    <div>
        <h1>404 Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className='btn btn-info'>Go Home</Link>
    </div>
  )
}

export default PagesNotFound