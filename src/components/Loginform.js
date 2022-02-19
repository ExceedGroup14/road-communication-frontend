import React from "react"

const Loginform = (props) => {
  return (
    <div className="login">
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
        <button className="inputbutton" onClick={props.onClick} type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Loginform
