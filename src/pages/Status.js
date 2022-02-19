import React, { useEffect, useState } from 'react'
import Carname from '../components/Carname'
import Carpic from './car.png'
import './status.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Status = () => {
  const [cookies, setCookie] = useCookies(['user'])
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')

  useEffect(() => {
    const token = cookies.token
    if (!token) {
      window.location.assign('login')
    }
    
  }, [])
  async function getCarDetail() {
    const token = cookies.token
    const response = axios.get(`https://ecourse.cpe.ku.ac.th/exceed14/api/all-car/?token=${token}`)
  }
  return (
    <div className="outer-container">
      <div id="circle"></div>
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
    </div>
  )
}

export default Status
