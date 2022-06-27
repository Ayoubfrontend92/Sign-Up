import React from 'react';
import './App.css';
import { Routes,Route,Navigate} from 'react-router-dom';
import SignUp from "./Components/SignUp"
import  Login  from './Components/Login';



function App() {
  return (
   <div>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path='/' element={<Navigate to="/signup" />} />
    </Routes>
  </div>
  )
  
}

export default App;
