import React, { useEffect } from 'react';
import './ActiveCoin.css'

const ActiveCoin = ({turn, dropped, setDropped, setTurn}) => {
    const [column, setColumn]=React.useState();
    const [row, setRow]=React.useState();

    const handleKeyDown=(event)=>{
        if(event.keyCode===37 && column>0){
            setColumn(column-1);
        }
        else if(event.keyCode===39){
            if(column===undefined){
                setColumn(1);
            }
            else if(column<6){
                setColumn(column+1);
            }
            // setColumn(column+1);
        }
        else if(event.keyCode===32 || event.keyCode===13 || event.keyCode===40){
            if(dropped.find(drop=>drop.x===0 && drop.y===(column||0))){
                return;
            }
            const len=5-dropped.filter(drop=>drop.y===(column||0)).length
            setRow(len);
            setTimeout(()=>{
                setDropped([
                    ...dropped,
                    {x: len, y: column || 0, player: turn}
                ])
                setTurn(turn===1? 2:1)
            }, 500)
        }
    }

    // whenever turn changes reset column and row
    useEffect(()=>{
        setColumn()
        setRow()
    },[turn])

    useEffect(()=>{
        // This is the type of event that the event listener 
        // is listening for. In this case, it's the "keyup" 
        // event, which is triggered when a keyboard key is 
        // released after being pressed.
        document.addEventListener('keyup',handleKeyDown,false);
        return ()=>document.removeEventListener('keyup',handleKeyDown);
        // removes the event listener previously added 
        // with document.addEventListener. This is a 
        // common pattern in JavaScript for cleaning up 
        // event listeners to avoid memory leaks and 
        // unexpected behavior.
    })

    
  return (
    <div className={`active p${turn} column-${column||'-'} row-${row===undefined ? '-' : row}`}></div>
  )
}

export default ActiveCoin