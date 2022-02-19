import React from "react"
import "./word.css"

const Word = (props) => {
  return (
    <div className="word">
      <input
        placeholder={props.placeholder}
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      ></input>
      {/* <button className="editbutton" onClick={props.onClick} type="submit">
        Edit
      </button> */}
    </div>
  )
}

export default Word
