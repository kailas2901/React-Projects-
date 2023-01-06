import './App.css';
import Login from './login';
import Home from './Home';
import Forgot from './forgot';
import Signup from './signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from './components/appbar';
import theme from './theme';
import { Switch } from '@material-ui/core';

function App() {
  return (

    
  
    <div className="App">


   

      
       <Router>

         
                <Routes>

                    <Route exact path="/" 
                        element={<Login />} />

                           <Route exact path="/forgot" 
                        element={<Forgot />} />
                        <Route exact path='/signup'
                        element={<Signup />} />

  
                    <Route exact path="/home" 
                        element={<Home />} />
                        
                        <Route exact path="/appbar" 
                        element={<Appbar />} />

                      
                  
            </Routes>
            </Router>
    </div>
  );
}

export default App;
