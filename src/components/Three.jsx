import React, { useContext } from 'react'
import Four from './Four'
import { GlobalContext } from '../context/GlobalContext'

const Three = () => {
  const {third} = useContext(GlobalContext)
  return (
    <div>
       <h1>{third}</h1>
    </div>
  )
}

export default Three

// 