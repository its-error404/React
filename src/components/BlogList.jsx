//import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import BlogLogic from './BlogLogic';
import useFetch from './useFetch';


const BlogList = () => 

{

const {Data:Blogs,Loading,error,setData} = useFetch('http://localhost:8000/blogs')
  
const HideBlog = (id) => 
{
    const newBlogs = Blogs.filter((blog) => blog.postID !== id);
    setData(newBlogs);
  };

const AllAuthors = Array.from(new Set(Blogs.map((blog)=>blog.author)))

  return (
    <div className='flex flex-col items-center'>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {Loading && 
      (
        <LoaderContainer>
          <Loader />
          <Text className='text-xl text-center text-red-600 mt-52'>Loading the Blogs for you...</Text>
        </LoaderContainer>
      )}
      {Blogs && 
      (
        <>
          <BlogLogic Blogs={Blogs} stitle="Thank you for Visiting the Page. Below, you can find all the Blogs" HideBlog={HideBlog} />
          
          {AllAuthors.map(author => 
          
          (
            <BlogLogic
              key={author}
              Blogs={Blogs.filter((blog) => blog.author === author)}
              stitle={`${author}'s Blogs are Displayed Below`}
              HideBlog={HideBlog}
            />
          ))}
          
        </>
      )}
      
    </div>
    
  );
  
};

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

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
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

const ErrorMessage = styled.div`
  color: #D8000C;
	background-color: #FFBABA;
	background-image: url('https://i.imgur.com/GnyDvKN.png') no-repeat cover; 
`
const Text = styled.div``;

export default BlogList;
