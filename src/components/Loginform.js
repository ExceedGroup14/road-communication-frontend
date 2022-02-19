import React from "react"
import "./Loginform.css"
import AuthMenubar from "./AuthMenubar"

const Loginform = (props) => {
  return (
    <div className="outer-container">
      <div id="circle"></div>
      <div className="container">
        <AuthMenubar />
        <div className="login">
          <div className="title-section">
            <h1 className="title">
              Text Communication <br /> On The Road
            </h1>
          </div>
          <div className="form-section">
            <form className="loginform">
              <input
                placeholder="User ID"
                value={props.username}
                onChange={(e) => props.setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
              />
              <button
                className="inputbutton"
                onClick={props.onClick}
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginform
