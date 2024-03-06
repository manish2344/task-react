

import React from 'react'
import { Link } from 'react-router-dom'

function HomeScreen() {
  return (
    <div>
      <Link to='/login'>Student</Link>
      <Link to='/copany'>company</Link>
    </div>

  )
}

export default HomeScreen