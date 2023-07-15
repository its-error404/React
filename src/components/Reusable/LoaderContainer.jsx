import React from 'react'
import styled, {keyframes} from 'styled-components'

const LoaderContainer = ({LoadingText, }) => {
    
  return (
   <Load>
          <Loader />
          <Text className='text-xl text-center text-red-600 mt-52'>{LoadingText}</Text>
    </Load>
  )
}

const spin = keyframes`
  0% 
  { 
    transform: rotate(0deg);
   }
  100% 
  {
     transform: rotate(360deg); 
  }
`;

const Loader = styled.div`
  display: inline-block;
  width: 120px;
  height: 120px;
  border-top: 16px solid blue;
  border-bottom: 16px solid yellow;
  border-left: 16px solid red;
  border-radius: 50%;
  animation: ${spin} 2s infinite linear;
`;
const Text = styled.div``

const Load = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export default LoaderContainer