// import React, { useState } from 'react'
import styled from 'styled-components'
// import Blogs from './Blogs'

const Specific = (props) => {

  return (
    <ReturnBlogs>
          {
            props.Blogs.map(blog => (
                <div key={blog.postID}> 
                        {
                            props.SecondTitle === blog.title ? (
                                <div>
                                    <h2>
                                        {blog.title}
                                    </h2>
                                </div>
                            ) : null
                        }
                </div>
            ))
            
          }
    </ReturnBlogs>
  )
}

const ReturnBlogs = styled.div``

export default Specific

