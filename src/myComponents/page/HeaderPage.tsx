import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function HeaderPage ({title}) {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h1>{title}</h1>
        <nav>
          <a onClick={() => navigate('/homeadminpage')}>Back to Admin page</a>
          <a onClick={() => navigate('/homememberpage')}>Back to Member page</a>
          <a onClick={() => navigate('/homeuserpage')}>Back to User page</a>
        </nav>
      </header>
    </div>
  )
}