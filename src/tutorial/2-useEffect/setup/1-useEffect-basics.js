import React, { useState, useEffect } from "react"
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(-2)
  useEffect(() => {
    console.log("call useEffect")
    // conditional must be inside the useEffect fuction
    if (value > 1) {
      document.title = `New Messages(${value})`
    }
    // if the dependency list, which is the empty array, is empty the useEffect will only run on the first render
  }, [value])

  useEffect(() => {
    console.log("Yo Werld")
  }, [])
  console.log(value)
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  )
}

export default UseEffectBasics
