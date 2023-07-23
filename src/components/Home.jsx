import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {

const [ButtonText,SetButtonText] = useState("Click to see my name")

const [Number,SetNumber] = useState(0) 
const ButtonClick = ()=>
{
  SetButtonText("My Name is Vampy")
}

const title = "Site is from Scratch"
  return (
    <HomeContent>
    <p className= 'pt-4 text-center'>{title}</p>
    <p>You are Gonna get Rick Rolled if you click this</p>
    <a className='text-blue-600' href='https://www.youtube.com'>RickRolled</a>
    <br></br>
    
<button className='border border-cyan-200' onClick={()=>ButtonClick()}>{ButtonText}</button>
<br></br>

<h1 className='pb-5 text-4xl text-center'>Counter App</h1>
<div className="flex flex-col items-center justify-center">
  <button className="pt-4 pb-4 pl-4 pr-4 font-bold text-white bg-blue-700 rounded-full" onClick={()=>SetNumber(Number+1)}>Increase Number</button>
  <p className="pt-4 pb-4 text-lg font-bold text-center texfont-extrabold">The Number is {Number}</p>
  <button className="pt-4 pb-4 pl-4 pr-4 font-bold text-white bg-blue-700 rounded-full"onClick={()=>SetNumber(Number-1)}>Decrease Number</button>
  <Link className="pt-4 pb-4 pl-4 pr-4 mt-4 text-2xl font-bold text-white no-underline bg-green-700 rounded-full hover:text-yellow-300" to="/Blogs">Go to the Blogs Page</Link>
</div>  
    </HomeContent>
  )
}

const HomeContent = styled.div``
export default Home
