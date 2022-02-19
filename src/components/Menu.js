import React from "react"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="menulist">
      <h3>Menulist</h3>
      <ul>
        <li>
          <Link to={`/Edit`}>Edit Display Words</Link>
        </li>
        <li>
          <Link to={`/Status`}>View your light status</Link>
        </li>
        <li>logout</li>
      </ul>
    </div>
  )
}

export default Menu
