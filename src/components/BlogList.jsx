import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import BlogLogic from './BlogLogic';

const BlogList = () => {
  
  const [Loading, SetLoading] = useState(true)
  const [Blogs, setBlogs] = useState([]);
  

  useEffect(() => 
  {
    setTimeout(() => 
    {  
      fetch("http://localhost:8000/blogs")
      
        .then (response => 
          {
            if(!response.ok)
            {
              throw Error("Could not get the data")
            }
          return response.json()
          }
          )
          
        .then((data) => 
        {
          setBlogs(data);
          SetLoading(false);
        })
        
        .catch((err)=>
        {
          console.log(err.message)
        })
        
    }, 1000);
  }, []);

  const HideBlog = (id) => {
    const newBlogs = Blogs.filter((blog) => blog.postID !== id);
    setBlogs(newBlogs);
  };

 const uniqueAuthors = Array.from(new Set(Blogs.map((blog)=>blog.author)))

  return (
    <div className='flex flex-col items-center'>
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
          
          {uniqueAuthors.map(author => 
          
          (
            <BlogLogic
              key={author}
              Blogs={Blogs.filter(blog => blog.author === author)}
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
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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

const Text = styled.div``;

export default BlogList;
