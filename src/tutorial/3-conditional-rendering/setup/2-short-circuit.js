import React, { useState } from "react"
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("")
  const [isError, setIsError] = useState(false)
  const firstValue = text || "hello world"
  // it text is truthy it evaluates the first and returns the last
  // const secondValue = text && "hello world"

  return (
    <>
      <h1>{text || "John Doe"}</h1>
      {/* !isError gets the opposoite of the isError to toggle */}
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is error...</p>
      ) : (
        <div>
          <p>There is not error.</p>
          <p>That's cool.</p>
        </div>
      )}
    </>
  )
}

export default ShortCircuit
