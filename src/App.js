import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css'
import Blogs from './components/Blogs';
import Specific from './components/Specific';

function App() {
  return (
    
    <div className="App">
   
    <Navbar/> 
    
    <br></br> 
    
    <Home/>

    <Blogs/>

    <Specific/>
    
    </div>
    
  );
  }
export default App;
