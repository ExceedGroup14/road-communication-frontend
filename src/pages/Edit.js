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
        <div className="content">
          <div className="wordlist">
            <Word word="word" />
            <Word word="word" />
            <Word word="word" />
            <Word word="word" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
