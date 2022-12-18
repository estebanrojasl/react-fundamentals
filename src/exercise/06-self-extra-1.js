// 06: self extra 1
// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

// using multiple inputs with react refs

import * as React from 'react'

function UserForm({onSubmitUser}) {
  const nameInputRef = React.useRef(null)
  const emailInputRef = React.useRef(null)

  const handleSubmit = event => {
    event.preventDefault()
    const username = nameInputRef.current.value
    const email = emailInputRef.current.value
    onSubmitUser(username, email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" ref={emailInputRef} />
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
