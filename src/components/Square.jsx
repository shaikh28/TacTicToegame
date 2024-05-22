import React from 'react'

const Square = ({value,onClick,isWinningSquares}) => {
  const colorClassName = value==='X' ? 'text-green':'text-orange'
  const winningClassName =isWinningSquares ? 'winning':''
  return (
    <button className={`square ${ colorClassName} ${winningClassName}  `} type='button' onClick={onClick}>{value}
    </button>
  )
}

export default Square