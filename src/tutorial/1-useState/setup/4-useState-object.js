import React, { useState } from "react"

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random Mesages",
  })
  const changeMessage = () => {
    // Spread operator allows you to target just the property you want to change.
    setPerson({ ...person, message: "Way Bro", name: "Biff" })

    // Each propery of an object can be represented in a seperate variable and the passed using the first param as the value in the html
    // const [name, setName] = useState("Peter")
    // const [age, setMessage] = useState(24)
    // const [message, set] = useState("random message")
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
