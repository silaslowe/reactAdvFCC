import React, { useState } from "react"

// hooks start with "use"
// component name must be uppercase
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log("hello world")
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState("109")
  const handleClick = () => {
    if (text === "109") {
      setText("hello")
    } else {
      setText("109")
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
