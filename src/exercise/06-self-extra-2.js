// 06 self extra 2
// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

// using multiple inputs with event.target.elements

import * as React from 'react'

function UserForm({onSubmitUser}) {
  const handleSubmit = event => {
    event.preventDefault()
    const username = event.target.elements.username.value
    const email = event.target.elements.email.value
    onSubmitUser(username, email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="email">email:</label>
        <input id="email" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUser = (username, email) =>
    alert(`You entered: ${username} / email: ${email}`)
  return <UserForm onSubmitUser={onSubmitUser} />
}

export default App
