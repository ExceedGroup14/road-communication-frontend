import React, { useState } from 'react'
import Carpic from '../pages/car.png'
import './car.css'
import AddCar from '../components/AddCar'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const NewCar = (props) => {
  const [cookies, setCookie] = useCookies(['token'])
  const [show, setShow] = useState(false)
  const [carId, setCarId] = useState('')
  const [carSerial, setCarSerial] = useState('')
  const [carName, setCarName] = useState('')
  const [showWarning, setShowWarning] = useState(false)
  const [warning, setWarning] = useState('')

  async function addNewCar(e) {
    e.preventDefault()
    setShowWarning(false)
    if (carId === '' || carSerial === '' || carName === '') {
      setWarning('Please fill out all information')
      setShowWarning(true)
      return
    }
    const payload = {
      ID: carId,
      serial_number: carSerial,
      token: cookies.token,
    }
    const response = await axios.post(
      'https://ecourse.cpe.ku.ac.th/exceed14/api/add-car/',
      payload
    )
    console.log(response.data)
    if ('success' in response.data.result) {
      setShow(false)
      window.refresh()
    }
  }

  return (
    <div style={{ cursor: 'pointer' }}>
      <div className="carcard" onClick={() => setShow(true)}>
        <div className="cardtitle">
          <h4>+ NEW CAR</h4>
        </div>
        <div className="cardbody">
          <img src={Carpic} alt="Car pic" />
        </div>
      </div>
      <AddCar
        title="Add new car"
        onClose={() => setShow(false)}
        show={show}
        addNewCar={addNewCar}
      >
        <label>Car ID: </label>
        <input
          type="text"
          value={carId}
          onChange={(e) => setCarId(e.target.value)}
          className="mb-3"
        />
        <br />
        <label>Serial Number: </label>
        <input
          type="text"
          value={carSerial}
          onChange={(e) => setCarSerial(e.target.value)}
          className="mb-3"
        />
        {/* <br />
        <label>Car Name: </label>
        <input
          type="text"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          className="mb-3"
        /> */}
        <p style={{ color: 'red', display: showWarning ? 'block' : 'none' }}>
          {warning}
        </p>
      </AddCar>
    </div>
  )
}

export default NewCar
