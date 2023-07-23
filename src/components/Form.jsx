import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoaderContainer from "./Reusable/LoaderContainer";

const Form = () => {
  
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Select an Author");
  const [AddingBlog, SetAddingBLog] = useState(false)
    
  const HandleSubmit = (e) =>
    {
    e.preventDefault()
    
    const blog = {title, body, author}
    SetAddingBLog(true)
    
    fetch('http://localhost:8000/Blogs', 
    {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
    .then(()=>
    {
      console.log("Blog added")
      SetAddingBLog(false)
      navigate('/')
      
    })
  }

  return (
    <FormContent className="mt-4 text-2xl">
      <h1>Create a New Blog Post</h1>

      <div className="container p-4 mx-auto">
        <form className="w-full max-w-lg" onSubmit={HandleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="blogTitle"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="blogTitle"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            ></input>
          </div>

          <div className="mb-4">
            <label
              htmlFor="blogAuthor"
              required
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Blog Author
            </label>
            {/* <input type="text" id='blogAuthor' className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" /> */}
            <select
              className="text-lg"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="initial value">Select an Author</option>
              <option value="Karthik">Karthik</option>
              <option value="Tech Monkey">Tech Monkey</option>
              <option value="Vampy">Vampy</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="blogBody"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Blog Body
            </label>
            <textarea
              rows="5"
              id="blogBody"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-2 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-8 focus:shadow-outline"
            >
              Submit Blog
            </button>
          </div>
          { AddingBlog && <LoaderContainer LoadingText="Adding the Blog... Please Wait"></LoaderContainer>}
        </form>
      </div>
    </FormContent>
  );
};

const FormContent = styled.div``;

export default Form;
