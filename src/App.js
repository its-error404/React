import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css'
import Blogs from './components/BlogLogic';
import BlogList from './components/BlogList';

function App() {
  return (
    
    <div className="App">
   
    <Navbar/> 
    
    <br></br> 
    

    <Blogs/>

    <BlogList/>
    
    </div>
    
  );
  }
export default App;
