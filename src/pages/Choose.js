import React, { useState, useEffect } from 'react'
import Carname from '../components/Carname'
import Car from '../components/Car'
import './choose.css'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewCar from '../components/NewCar'
import AuthMenubar from '../components/AuthMenubar'

const Choose = (props) => {
  const [cookies, setCookie] = useCookies(['token'])
  const [cars, setCars] = useState([])

  useEffect(() => {
    getCarDetail()
  }, [])

  async function getCarDetail() {
    const token = cookies.token
    const response = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed14/api/all-car/?token=${token}`
    )
    setCars(response.data.result)
  }

  return (
    <div className="outer-container">
      <div id="circle"></div>
      <div className="container">
        <AuthMenubar title="Select Car" />
        <div className="choose">
          <div className="carlist">
            {cars.map((car) => (
              <Link key={car.ID} to={`/edit/?serial=${car.serial_number}`}>
                <Car name={car.ID} />
              </Link>
            ))}
            <NewCar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
