import React, { useState } from 'react'
import Loginform from '../components/Loginform'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cookies, setCookie] = useCookies(['user'])

  async function onSubmit(e) {
    e.preventDefault()
    let data = {
      username: username,
      password: password,
    }
    const response = await axios.post(
      'https://ecourse.cpe.ku.ac.th/exceed14/api/login/',
      data
    )
    const responseData = response.data
    setCookie('token', responseData.token, { path: '/' })
    console.log(responseData.token)
    alert('See data in console')
  }
  return (
    <div className="loginpage">
      <Loginform
        username={username}
        password={password}
        onClick={onSubmit}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  )
}

export default Login
