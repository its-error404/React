import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./index.css";

//import Blogs from "./components/BlogLogic";

import BlogList from "./components/BlogList";
import Form from "./components/Form";
//import {Navbar, Home, Blogs, BlogList} from "./components"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="PageContent">
          <Routes>
            
            <Route path="/" element={<BlogList/>}/>
            <Route path="/home" element={<Home />}/> 
            <Route path="/Form" element={<Form/>}/>
            
          </Routes>
        </div>
      </div>

        {/* <Blogs />
        <BlogList /> */}
    
    </Router>
  );
}
export default App;
