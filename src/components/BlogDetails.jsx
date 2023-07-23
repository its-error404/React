import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from './useFetch';
import LoaderContainer from './Reusable/LoaderContainer';
import ErrorMessage from './Reusable/ErrorMessage';

const BlogDetails = () => {
  
  const { postIDuser } = useParams();
  
  // console.log(typeof postIDuser)

  const { Data: selectedBlog, Loading, error } = useFetch(`http://localhost:8000/Blogs/${postIDuser}`);

  // const selectedBlog =  null //Blogs.find(blog => blog.postID === Number(postIDuser));
  // console.log(Blogs)

  // console.log(Loading)
  // console.log(error)

  if (Loading) 
  {
    // console.log(Loading)
    return <LoaderContainer LoadingText={`Displaying the Blog Number - ${postIDuser} Content, Please Wait`} />;
  }

  if (error) 
  {
    // console.log(error)
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (selectedBlog) 
  {
    return (
      <Div>

      <BlogInformation className='box-content items-center justify-center w-7/12 px-5 py-4 mt-4 text-center border-4 border-red-600 border-double shadow border-spashadow-2xl'>

          <h1 className='text-2xl font-extrabold text-red-500 font-extra font-poppins'>{selectedBlog.title}</h1>
          <p className='text-4xl text-red-950 font-tangerine'>Written by {selectedBlog.author}</p>
          {/* <p className='text-base font-tektur-regular'>Content Published on {selectedBlog.ContentDate}</p> */}
          <h1 className='text-lg font-bold text-left font-poppins'>Content of the Blog: </h1>
          <div className='pt-2 text-left font-poppins'>{selectedBlog.body}</div>

      </BlogInformation>
      </Div>
    );
  }

  return <ErrorMessage>No blog found with ID: {postIDuser}</ErrorMessage>;
};

const BlogInformation = styled.div`
  ${'' /* background-color: blue; */}
`;

const Div = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${'' /* background-color: pink; */}
`;

export default BlogDetails;
