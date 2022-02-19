import React from "react"
import Carname from "../components/Carname"
import Car from "../components/Car"
import "./choose.css"

const Choose = () => {
  return (
    <div className="outer-container">
      <div id="circle"></div>
      <div className="container">
        <Carname />
        <div className="choose">
          <div className="carlist">
            <Car name="Black Toyota camry 2020" />
            <Car name="White Nissan March 2020" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
