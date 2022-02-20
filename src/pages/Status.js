import React, { useEffect, useState } from 'react'
import Carname from '../components/Carname'
import Carpic from './car.png'
import './status.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import AuthMenubar from '../components/AuthMenubar'
import { Link } from 'react-router-dom'

const Status = () => {
  const [cookies, setCookie] = useCookies(['token'])
  const [left, setLeft] = useState(true)
  const [right, setRight] = useState(false)

  useEffect(() => {
    const token = cookies.token
    if (!token) {
      window.location.assign('login')
    }
    getData()
    const newInterval = setInterval(() => {
      getData()
    }, 5000)
    setInterval(newInterval)
    return () => clearInterval(newInterval)
  }, [])

  async function getData() {
    console.log('GET status')
    const queryParams = new URLSearchParams(window.location.search)
    const serialNumber = queryParams.get('serial')
    const token = cookies.token
    const response = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed14/api/get_car/?token=${token}&serial_number=${serialNumber}`
    )
    const data = response.data.result
    setLeft(!data.status_broken_l)
    setRight(!data.status_broken_r)
  }

  return (
    <div className="outer-container">
      <div id="circle"></div>
      <div className="container">
        <Link to="/choose">
          <AuthMenubar title="Back" />
        </Link>
        <div className="status">
          <div className={left ? 'leftst working' : 'leftst not-working'}>
            <h3>Left rear light</h3>
            <p>{left ? 'Working' : 'Not Working'}</p>
          </div>
          <img src={Carpic} alt="Car pic" />
          <div className={right ? 'rightst working' : 'rightst not-working'}>
            <h3>Right rear light</h3>
            <p>{right ? 'Working' : 'Not Working'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Status
