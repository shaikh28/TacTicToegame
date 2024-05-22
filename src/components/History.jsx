import React from 'react'

const History = ({history,moveTo,currentmove}) => {
  return (
    <div className='history-wrapper'>
        <ul className='history'>
            {
                history.map((_,index)=>{
                    <li  key={index}>
                    <button type='button' className={`btn-move ${currentmove === index ? 'active':''}`} onClick={()=>{moveTo(index)}}>{ index===0 ? "New Game" : `Go to move #${index}`}</button>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default History