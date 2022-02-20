import React from 'react'
import './word.css'

const Word = (props) => {
  return (
    <div className={props.status ? 'word-container active' : 'word-container'}>
      <div className="word">
        <h3>Button#{props.number}</h3>
        <form>
          <input
            placeholder={props.placeholder}
            value={props.text}
            onChange={(e) => props.setText(e.target.value)}
          ></input>

          {/* <button className="editbutton" onClick={props.onClick} type="submit">
          Edit
        </button> */}
        </form>
        <p className="recommend">
          {props.text !== props.recommend
            ? 'Recommend: ' + props.recommend
            : ''}
        </p>
      </div>
    </div>
  )
}

export default Word
