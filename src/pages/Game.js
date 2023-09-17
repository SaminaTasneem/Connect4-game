import React from 'react'
import Board from '../components/board/Board'
import DropZone from '../components/dropZone/DropZone'

const Game = () => {
  return (
    <div className='game-container'>
        <DropZone/>
        <Board/>
    </div>
  )
}

export default Game