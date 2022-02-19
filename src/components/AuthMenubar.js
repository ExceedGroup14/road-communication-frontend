import React from 'react'
import { Link } from 'react-router-dom'
import '../components/AuthMenubar.css'

const AuthMenubar = () => {
  return (
    <div className="flex-container">
      <div>
        <h1 className="title">Road Communication</h1>
      </div>
      <div className="auth-action">
        <Link to={`/login`}>
          <h3 className="authtype-button">Login</h3>
        </Link>
        <Link to={`/register`}>
          <h3 className="authtype-button">Register</h3>
        </Link>
      </div>
    </div>
  )
}

export default AuthMenubar
