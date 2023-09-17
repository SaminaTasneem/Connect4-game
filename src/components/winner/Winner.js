import React from 'react'

const Winner = ({winner,reset}) => {
  return (
    <p style={{display: 'grid', placeContent: 'center', position: 'relative'}}>
        {
            winner===-1
            ? <h1>Nobody won</h1>
            : <h1>Player {winner} has won</h1>
        }
        
        <button onClick={reset}><h3>Reset?</h3></button>
    </p>
  )
}

export default Winner