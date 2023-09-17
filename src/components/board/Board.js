import React from 'react';
import './Board.css';
import { rows,columns } from '../../constants/Constants';

const Board = () => {
// Here new array is created with a length of rows
// fill() is used to fill the array with undefined values
// map() is used to map over each element and replace them
// with a new array created by new Array (columns)
// _ is often used to represent unused or ignored variable.
  const board= new Array(rows).fill()
  .map(_ => new Array(columns).fill(''))
  return (
    <div className='board'>
        {
            board.map((row,i)=>
            row.map((col,j)=>
            <div key={i+'-'+j}></div>))
        }
    </div>
  )
}

export default Board