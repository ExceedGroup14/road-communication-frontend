import React, { useState } from "react"
import RegisterForm from "../components/RegisterForm"
import axios from "axios"

const Register = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  async function onSubmit(e) {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Password doesn't match")
      return false
    }
    let data = {
      username: username,
      password: password,
      email: email,
      firstname: firstName,
      lastname: lastName,
    }
    const response = await axios.post(
      "https://ecourse.cpe.ku.ac.th/exceed14/api/register/",
      data
    )
    console.log(response.data)
    alert("See data in console")
  }
  return (
    <div className="register-page">
      <RegisterForm
        email={email}
        username={username}
        password={password}
        confirmPassword={confirmPassword}
        onClick={onSubmit}
        setEmail={setEmail}
        setUsername={setUsername}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
      />
    </div>
  )
}

export default Register
