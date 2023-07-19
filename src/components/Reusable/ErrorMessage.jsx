import React from 'react'
import styled from 'styled-components'
import useFetch from '../useFetch'

const ErrorMessage = ({ErrorMessage}) => {
    const {error} =useFetch()
  return (
    <ErrorText>ErrorMessage = {error}</ErrorText>
  )
}

const ErrorText = styled.div`
  color: #D8000C;
	background-color: #FFBABA;
	background-image: url('https://i.imgur.com/GnyDvKN.png') no-repeat cover; 
`

export default ErrorMessage