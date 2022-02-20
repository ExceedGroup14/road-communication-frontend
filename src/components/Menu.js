import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Menu = (props) => {
  const [cookies, removeCookie] = useCookies(['token'])
  const [carId, setCarId] = useState('')

  useEffect(() => {
    if (cookies.token === 'undefined') {
      window.location.assign('/login')
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
    <div className="menulist">
      <h3>Menulist</h3>
      <ul>
        <li>
          <Link to={`/edit/?serial=${carId}`}>Edit Display Words</Link>
        </li>
        <li>
          <Link to={`/Status/?serial=${carId}`}>View your light status</Link>
        </li>
        <li>
          <Link to={`/Choose`}>Choose which cars you are setting</Link>
        </li>
        <li>
          <button onClick={logout}>logout</button>
        </li>
      </ul>
    </div>
  )
}

export default Menu
