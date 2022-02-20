import React from "react"
import Menu from "./Menu"
import "./Carname.css"

const Carname = (props) => {
  return (
    <div className="banner">
      <h1>{props.name}</h1>
      <Menu />
    </div>
  )
}

export default Carname
