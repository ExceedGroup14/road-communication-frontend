import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/AuthMenubar.css'
import { useCookies } from 'react-cookie'

const AuthMenubar = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const [loggedIn, setLoggedIn] = useState(false)
  const [carId, setCarId] = useState('')

  useEffect(() => {
    if (!cookies.token) {
      setCookie('token', 'undefined')
    }
    if (cookies.token === 'undefined') {
      if (
        window.location.pathname !== '/login' &&
        window.location.pathname !== '/register'
      ) {
        window.location.assign('/login')
      }
    } else {
      setLoggedIn(true)
    }
    const queryParams = new URLSearchParams(window.location.search)
    setCarId(queryParams.get('serial'))
  }, [])

  function logout(e) {
    e.preventDefault()
    removeCookie('token')
    window.location.assign('/login')
  }

  return (
    <div className="flex-container">
      <div>
        <h1 className="title">{props.title}</h1>
      </div>
      <div
        style={
          loggedIn && window.location.pathname !== '/choose'
            ? {}
            : { display: 'none' }
        }
        className="button-container"
      >
        <div className="button">
          <Link to={`/edit/?serial=${carId}`}>Edit Words</Link>
        </div>
        <div className="button">
          <Link to={`/Status/?serial=${carId}`}>Light status</Link>
        </div>
      </div>
      <div className="auth-action">
        <div
          style={loggedIn ? { display: 'none' } : {}}
          className="button-container"
        >
          <Link to={`/login`}>
            <h3 className="authtype-button auth-button">Login</h3>
          </Link>
          <Link to={`/register`}>
            <h3 className="authtype-button auth-button">Register</h3>
          </Link>
        </div>
        <div
          style={loggedIn ? {} : { display: 'none' }}
          className="button-container"
        >
          <button className="authtype-button auth-button" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthMenubar
