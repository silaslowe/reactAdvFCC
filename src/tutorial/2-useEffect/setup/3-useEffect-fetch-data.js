import React, { useState, useEffect } from "react"

const url = "https://api.github.com/users"

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    // console.log(users)
  }

  // useEffect can't be called asynconously. Also it needs the empty array at the end to avoid infintie loop when setting the users state.

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <>
      <h3>GitHub Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}></img>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default UseEffectFetchData
