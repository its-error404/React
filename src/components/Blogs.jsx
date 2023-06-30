import React, { useState } from 'react'
import styled from 'styled-components'
import Specific from './Specific'


const Blogs = () => {

    const [Blogs,DisplayBlogs] = useState
    (
        [
            {
                "postID": 1,
                "title": "Welcome Post",
                "body": "Love is a profound and complex emotion that has captivated humanity since the dawn of time. It is a force that transcends boundaries and defies logical explanation. Love encompasses a wide range of feelings, from tender affection and deep attachment to passionate desire and unconditional care. It brings joy and fulfillment, but also vulnerability and heartache. Love exists in various forms, whether it be romantic love that ignites fiery passions between two souls, the unconditional love of a parent for their child, or the bond between true friends who stand by each other through thick and thin.,",
                "author": "Vampy"
            },
            
            {
                "postID": 2,
                "title": "First Post",
                "body": "Step 3: Configure PostCSS. Create a postcss.config.js file in your project's root directory and add the necessary configuration to include the required plugins. Here is an example of how it should look:",
                "author": "Tech Monkey"
            },
            
            {   "postID": 3,
                "title": "Last Post",
                "body": "In your CSS file, include the @import rule to import the Google Fonts URL and specify the font family you want to use. Open your styles.css or any other main CSS file where you include your styles. Add the following code:",
                "author": "Karthik"
            }
        ]
    )

  return (
    
    <BlogContent className='pt-4 ml-4'>
        <h1 className='pb-4 text-3xl'>The List of Blogs in the Website</h1>
        {
            
            Blogs.map((blog)=>
            (
                
                <BlogDisplay key={blog.postID}  className='box-content items-center w-7/12 px-2 py-4 text-center border-4 border-red-600 border-double shadow border-spashadow-2xl'>
                    <h1 className='text-2xl font-extrabold text-red-500 font-extra font-poppins'>{blog.title}</h1>
                    <h2 className='text-4xl text-red-950 font-tangerine'>Author: {blog.author}</h2>
                    <br></br>
                    <h1 className='text-lg text-left font-poppins'>Content of the Blog:</h1>
                    <br></br>
                    <p className='font-bold font-poppins'>{blog.body}</p>
                </BlogDisplay>
            ))
        }
         <Specific Blogs={Blogs} SecondTitle="Displaying All the Blogs Again"/> 
    </BlogContent>
  )
}

const BlogContent = styled.div``
const BlogDisplay = styled.div``

export default Blogs