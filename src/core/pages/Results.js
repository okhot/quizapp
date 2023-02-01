import React, { useContext, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PageContext } from '../../Context'
import Button from '../atoms/Button'

const ResultsPage = styled.div`
background-image: url("https://images.pexels.com/photos/5477840/pexels-photo-5477840.jpeg?auto=compress&cs=tinysrgb&w=1600");
height: 100vh;
align-items: center;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`

export default function Results() {
    const navigate =  useNavigate()
    const {answer} = useContext(PageContext)

    const score = answer.filter(Boolean).length

    function reverse () {
        navigate('/')
    }
 
  return (
    <ResultsPage>
      <p>{score}</p>
      <Button onClick={reverse}>Play Again</Button>
    </ResultsPage>
  )
}
