import React from "react"
import Carname from "../components/Carname"
import Carpic from "./car.png"
import "./status.css"

const Status = () => {
  return (
    <div className="container">
      <Carname />
      <div className="status">
        <div className="leftst">
          <h3>Left rear light</h3>
          <p>Working</p>
        </div>
        <img src={Carpic} alt="Car pic" />
        <div className="rightst">
          <h3>Right rear light</h3>
          <p>Not Working</p>
        </div>
      </div>
    </div>
  )
}

export default Status
