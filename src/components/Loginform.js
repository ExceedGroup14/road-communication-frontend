import React from 'react'
import '../components/Loginform.css'

const Loginform = (props) => {
  return (
    <div className="outer-container">
      <div id="circle"></div>
      <div className="container login">
        <div className="title">Road Communication</div>
        <div className="">
          <form className="loginform">
            <input
              placeholder="User ID"
              value={props.Uid}
              onChange={(e) => props.setUid(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={props.Pass}
              onChange={(e) => props.setPass(e.target.value)}
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
  )
}

export default Loginform
