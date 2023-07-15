import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BlogLogic = ({ Blogs, stitle,HideBlog, authortitle }) => {

    //const Blogs = props.Blogs
    //const Stitle= props.Stitle

  
if(!Blogs || !Array.isArray(Blogs))
{
    return null 
}
    
    return (
        <BlogContent className='flex flex-col items-center pt-4 ml-4'>
            {/* <h1 className='pb-4 text-3xl'>The List of Blogs in the Website</h1> */}
            <h1 className='text-2xl font-extrabold text-black font-extra font-josefin-italic-500'>{stitle}</h1>
            {
                Blogs.map((blog) =>
                    (
                        <BlogDisplay key={blog.postID} className='box-content items-center justify-center w-7/12 px-5 py-4 mt-4 text-center border-4 border-red-600 border-double shadow border-spashadow-2xl'>
                            {/* <Link to={`/blogs/${blog.postID}`}> */}
                                <h1 className='text-2xl font-extrabold text-red-500 font-extra font-poppins'>{blog.title}</h1>
                                <h2 className='text-4xl text-red-950 font-tangerine'>Author: {blog.author}</h2>
                                <h1 className='text-base font-tektur-regular'>Date Published: {blog.ContentDate}</h1>
                                {/* <br /> */}
                                {/* <h1 className='text-lg font-bold text-left font-poppins'>Content of the Blog: </h1> */}
                                {/* <br /> */}
                                <p className='text-left font-poppins'>{blog.body}</p>
                                    <Link to={`/blogs/${blog.postID}`}>
                                        <button className='px-2 py-2 mt-4 mr-6 font-bold text-white bg-blue-500 rounded shadow-lg hover:bg-rounded-sm'>Go to the Blog</button>
                                    </Link>
                                <button className='px-2 py-2 mt-4 font-bold text-white bg-yellow-500 rounded shadow-lg hover:bg-rounded-sm'onClick={()=>HideBlog(blog.postID)}>Hide the Blog</button>
                                    
                         </BlogDisplay>
                    )
                        )
            }
        </BlogContent>
    )
}

const BlogContent = styled.div``
const BlogDisplay = styled.div``

export default BlogLogic
