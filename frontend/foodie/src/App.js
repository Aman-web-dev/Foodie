import './App.css';
import Navbar from './components/Navbar';
import Home from './Screens/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Screens/SignUp';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import Login from './Screens/Login';


function App() {
  return (

   <BrowserRouter>
    <Navbar/>
    <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/signup" element={<SignUp/>}/> 
         <Route exact path="/login" element={<Login />}/>
         <Route exact path="/" element={<Home />}/>
         <Route exact path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>




);
}

export default App;
