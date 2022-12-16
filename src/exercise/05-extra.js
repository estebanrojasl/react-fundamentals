// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({
  className,
  style,
  children,
  // ...props
}) => (
  <div
    className={`box ${className}`}
    style={style}
    // {...props}
  >
    {children}
  </div>
)

function App() {
  return (
    <div>
      <Box
        // I don't like the idea of passing all props cause it's not explicit
        // for nested components it becomes a mess
        // and you cant ever be sure what props are being passed
        // id="whatever"
        className="box--small"
        style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
      >
        small lightblue box
      </Box>
      <Box
        className="box--medium"
        style={{backgroundColor: 'pink', fontStyle: 'italic'}}
      >
        medium pink box
      </Box>
      <Box
        className="box--large"
        style={{backgroundColor: 'orange', fontStyle: 'italic'}}
      >
        large orange box
      </Box>
    </div>
  )
}

export default App
