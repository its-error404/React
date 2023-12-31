import styled, {keyframes} from 'styled-components'

const LoaderContainer = ({ LoadingText }) => {
    
  return (
   <Load>
          <Loader />
          <Text className='text-xl text-red-600 mt-52'>{LoadingText}</Text>
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
  ${'' /* display: block; */}
  width: 120px;
  height: 120px;
  border-top: 16px solid blue;
  border-bottom: 16px solid yellow;
  border-left: 16px solid red;
  border-radius: 50%;
  animation: ${spin} 2s infinite linear;
  ${'' /* padding-right: 40px; */}
`;
const Text = styled.div`
  margin-top: 15px;
`

const Load = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 80vh;
  ${'' /* background-color: pink; */}
  align-items: center;
`;

export default LoaderContainer