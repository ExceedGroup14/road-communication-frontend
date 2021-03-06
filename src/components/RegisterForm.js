import React from 'react'
import AuthMenubar from './AuthMenubar'
import './Loginform.css'

const RegisterForm = (props) => {
  return (
    <div className="outer-container">
      <div id="circle"></div>
      <div className="container">
        <AuthMenubar title="Road Communicator" />
        <div className="login">
          <div className="title-section">
            <h1 className="title">
              Text Communication <br /> On The Road
            </h1>
          </div>
          <div className="form-section">
            <form className="loginform">
              <input
                type="email"
                placeholder="Email"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
              />
              <input
                placeholder="Username"
                value={props.username}
                onChange={(e) => props.setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={props.confirmpassword}
                onChange={(e) => props.setConfirmPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Firstname"
                value={props.firstName}
                onChange={(e) => props.setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Lastname"
                value={props.lastName}
                onChange={(e) => props.setLastName(e.target.value)}
              />
              <span style={{ color: 'red', marginRight: '50px' }}>
                {props.warning}
              </span>
              <button
                className="inputbutton"
                onClick={props.onClick}
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
