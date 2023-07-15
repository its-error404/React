import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from './useFetch';
import LoaderContainer from './Reusable/LoaderContainer';

const BlogDetails = () => {
  
  const { postID } = useParams();
  //console.log(postID)
  const { Data: Blogs, Loading, error, setData } = useFetch('http://localhost:8000/blogs/');
  //console.log(Blogs.postID=postID)

  return (
    <BlogInformation>
      {Loading && <LoaderContainer LoadingText={`Displaying the Blog Number - ${postID} Content, Please Wait`} />}
      <h1>Blog Information - {postID}</h1>
      {Blogs && (
        <div>
          <h1>{Blogs.title}</h1>
          <p>Written by {Blogs.author}</p>
          <div>{Blogs.body}</div>
        </div>
      )}
    </BlogInformation>
  );
};

const BlogInformation = styled.div``;

export default BlogDetails;
