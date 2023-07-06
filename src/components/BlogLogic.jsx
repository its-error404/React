import React from 'react'
import styled from 'styled-components'

const BlogLogic = ({ Blogs, stitle }) => {

    //const Blogs = props.Blogs
    //const Stitle= props.Stitle
    
if(!Blogs || !Array.isArray(Blogs))
{
    return null
}
    
    return (
        <BlogContent className='pt-4 ml-4'>
            <h1 className='pb-4 text-3xl'>The List of Blogs in the Website</h1>
            {
                Blogs.map((blog) =>
                    (
                        <BlogDisplay key={blog.postID}className='box-content items-center w-7/12 px-2 py-4 text-center border-4 border-red-600 border-double shadow border-spashadow-2xl'>
                        <h1 className='text-2xl font-extrabold text-red-500 font-extra font-poppins'>{blog.title}</h1>
                        <h2 className='text-4xl text-red-950 font-tangerine'>Author: {blog.author}</h2>
                        <br />
                        <h1 className='text-lg text-left font-poppins'>Content of the Blog: </h1>
                        <br />
                        <p className='font-bold text-left font-poppins'>{blog.body}</p>
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
