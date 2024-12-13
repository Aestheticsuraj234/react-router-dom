import React from 'react'
import Two from './Two'

const One = ({greet}) => {
  return (
    <div>
        <Two greet={greet}/>
    </div>
  )
}

export default One