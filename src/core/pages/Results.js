import React from 'react'
import {useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'

export default function Results() {
    const navigate =  useNavigate()

    function reverse () {
        navigate('/')
    }
 
  return (
    <div>
      <p>Hello</p>
      <Button onClick={reverse}></Button>
    </div>
  )
}
