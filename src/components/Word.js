import React from "react"

const Word = (props) => {
  return (
    <div className="word">
      <input
        type="submit"
        placeholder="props.word"
        value={props.Newword}
        onChange={(e) => props.setNewword(e.target.value)}
      ></input>
      <button className="editbutton" onClick={props.onClick} type="submit">
        Edit
      </button>
    </div>
  )
}

export default Word
