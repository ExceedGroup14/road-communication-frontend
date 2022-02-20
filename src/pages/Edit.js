import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Word from '../components/Word'
import Carname from '../components/Carname'
import './edit.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import AuthMenubar from '../components/AuthMenubar'

const Edit = (props) => {
  const [cookies, setCookie] = useCookies(['token'])
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [text4, setText4] = useState('')
  const [responseText, setResponseText] = useState('')
  const [statusBtn1, setStatusBtn1] = useState(false)
  const [statusBtn2, setStatusBtn2] = useState(false)
  const [statusBtn3, setStatusBtn3] = useState(false)
  const [statusBtn4, setStatusBtn4] = useState(false)
  const [sortedCommand, setSortedCommand] = useState([])

  useEffect(() => {
    getData()
    const newInterval = setInterval(() => {
      getNewData()
    }, 1800)
    setInterval(newInterval)
    return () => clearInterval(newInterval)
  }, [])

  async function getData() {
    const queryParams = new URLSearchParams(window.location.search)
    const serialNumber = queryParams.get('serial')
    const token = cookies.token
    const response = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed14/api/get_car/?token=${token}&serial_number=${serialNumber}`
    )
    const data = response.data.result
    setText1(data.bt1)
    setText2(data.bt2)
    setText3(data.bt3)
    setText4(data.bt4)
    setStatusBtn1(data.status_bt1)
    setStatusBtn2(data.status_bt2)
    setStatusBtn3(data.status_bt3)
    setStatusBtn4(data.status_bt4)
    const sortedResponse = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed14/api/sorted_car/?token=${token}&serial_number=${serialNumber}`
    )
    const sortedText = Object.keys(sortedResponse.data.result)
    setSortedCommand(sortedText)
  }

  async function getNewData() {
    const queryParams = new URLSearchParams(window.location.search)
    const serialNumber = queryParams.get('serial')
    const token = cookies.token
    const response = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed14/api/get_car/?token=${token}&serial_number=${serialNumber}`
    )
    const data = response.data.result
    setStatusBtn1(data.status_bt1)
    setStatusBtn2(data.status_bt2)
    setStatusBtn3(data.status_bt3)
    setStatusBtn4(data.status_bt4)
    const sortedResponse = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed14/api/sorted_car/?token=${token}&serial_number=${serialNumber}`
    )
    const sortedText = Object.keys(sortedResponse.data.result)
    setSortedCommand(sortedText)
  }

  async function sendData(e) {
    e.preventDefault()
    const queryParams = new URLSearchParams(window.location.search)
    const serialNumber = queryParams.get('serial')
    const payload = {
      token: cookies.token,
      serial_number: serialNumber,
      text1: text1,
      text2: text2,
      text3: text3,
      text4: text4,
    }
    const response = await axios.put(
      'https://ecourse.cpe.ku.ac.th/exceed14/api/add-text/',
      payload
    )
    const responseData = response.data
    setResponseText(responseData.result)
  }

  return (
    <div className="outer-container">
      <div id="circle"></div>
      <div className="container">
        <Link to="/choose">
          <AuthMenubar title="Back" />
        </Link>
        <div className="edit">
          <div className="content">
            <div className="wordlist">
              <Word
                number="1"
                placeholder="Text for button 1"
                text={text1}
                setText={setText1}
                status={statusBtn1}
                recommend={sortedCommand[0]}
              />
              <Word
                number="2"
                placeholder="Text for button 2"
                text={text2}
                setText={setText2}
                status={statusBtn2}
                recommend={sortedCommand[1]}
              />
              <Word
                number="3"
                placeholder="Text for button 3"
                text={text3}
                setText={setText3}
                status={statusBtn3}
                recommend={sortedCommand[2]}
              />
              <Word
                number="4"
                placeholder="Text for button 4"
                text={text4}
                setText={setText4}
                status={statusBtn4}
                recommend={sortedCommand[3]}
              />
              <button className="editbutton" onClick={sendData}>
                Save
              </button>
              <span style={{ color: 'green' }}>{responseText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
