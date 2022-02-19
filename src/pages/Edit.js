import React, { useEffect, useState } from 'react'
import Word from '../components/Word'
import Carname from '../components/Carname'
import './edit.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Edit = () => {
  const [cookies, setCookie] = useCookies(['user'])
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [text4, setText4] = useState('')

  useEffect(() => {
    const token = cookies.token
    if (!token) {
      window.location.assign('login')
    }
    getData()
  }, [])

  async function getData() {
    const token = cookies.token
    const response = await axios.get(
      `https://ecourse.cpe.ku.ac.th/exceed14/api/all-car/?token=${token}`
    )
    const data = response.data.result[0]
    setText1(data.bt1)
    setText2(data.bt2)
    setText3(data.bt3)
    setText4(data.bt4)
  }

  function sendData(e) {
    e.preventDefault()
    console.log(text1)
  }

  return (
    <div className="outer-container">
      <div id="circle"></div>
      <div className="container">
        <Carname />
        <div className="edit">
          <div className="content">
            <div className="wordlist">
              <Word
                placeholder="Text for button 1"
                text={text1}
                setText={setText1}
              />
              <Word
                placeholder="Text for button 2"
                text={text2}
                setText={setText2}
              />
              <Word
                placeholder="Text for button 3"
                text={text3}
                setText={setText3}
              />
              <Word
                placeholder="Text for button 4"
                text={text4}
                setText={setText4}
              />
              <button className="editbutton" onClick={sendData}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
