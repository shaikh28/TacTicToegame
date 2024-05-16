import React from 'react'

const Square = (props) => {
  return (
    <button className='square' type='button'>{props.value}</button>
  )
}

export default Square