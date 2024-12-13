import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Four = () => {
const {greet} = useContext(GlobalContext)
console.log(greet)
  return (
    <div>
        <h1>{greet}</h1>
    </div>
  )
}

export default Four