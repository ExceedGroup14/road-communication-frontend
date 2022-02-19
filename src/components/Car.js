import React from "react"
import Carpic from "../pages/car.png"
import "./car.css"

const Car = (props) => {
  return (
    <div className="carcard">
      <div className="cardtitle">
        <h4>{props.name}</h4>
      </div>
      <div className="cardbody">
        <img src={Carpic} alt="Car pic" />
      </div>
    </div>
  )
}

export default Car
