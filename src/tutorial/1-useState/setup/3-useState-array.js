import React from "react"
import { data } from "../../../data"

const UseStateArray = () => {
  // This is an optional way of importing the function. Used from limited use of function
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    // "newPeople can be put in the pareths for setPeople"
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
      {/* calls the function param from useState in the btn element. use the callback function "() => " to invoke on click and not right away */}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
}

export default UseStateArray
