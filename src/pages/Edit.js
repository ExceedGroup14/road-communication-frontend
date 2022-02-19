import React, { useEffect, useState } from "react"
import Word from "../components/Word"
import Carname from "../components/Carname"
import "./edit.css"

const Edit = () => {
  useEffect(() => {}, [])
  return (
    <div className="outer-container">
      <div id="circle"></div>
      <div className="container">
        <Carname />
        <div className="edit">
          <div className="content">
            <div className="wordlist">
              <Word word="word" number="1" />
              <Word word="word" number="2" />
              <Word word="word" number="3" />
              <Word word="word" number="4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
