// 06: Extra Credit 2
// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const handleChange = event => {
    event.preventDefault()

    const isValid = event.target.value === event.target.value.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }

  const handleSubmit = event => {
    event.preventDefault()
    const username = event.target.elements.username.value
    onSubmitUsername(username)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error != null && (
        <small role="alert" style={{color: 'red'}}>
          {error}
        </small>
      )}
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" onChange={handleChange} />
      </div>
      <button type="submit" disabled={error != null}>
        {error == null ? 'Submit' : 'Error'}
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
