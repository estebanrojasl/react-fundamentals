// 06: Extra Credit 3
// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [input, setInput] = React.useState(null)

  const handleChange = event => {
    event.preventDefault()

    setInput(event.target.value.toLowerCase())
  }

  const handleSubmit = event => {
    event.preventDefault()
    const username = event.target.elements.username.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={input}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
