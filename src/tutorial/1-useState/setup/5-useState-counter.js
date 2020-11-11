import React, { useState } from "react"

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  const reset = () => {
    setValue(0)
  }

  const complexIncrease = () => {
    setTimeout(() => {
      // This calls the function with the current value multiple times during the timeout
      // setValue(value + 1)
      // Using a callback makes the function call based on the previous value. The convention is to name the param "prevState" or "prevValue"
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
