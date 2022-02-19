import React from "react"
import Carname from "../components/Carname"
import Carpic from "./car.png"

const Status = () => {
  return (
    <div className="container">
      <Carname />
      <div className="status">
        <img src={Carpic} alt="Car pic" />
      </div>
    </div>
  )
}

export default Status
