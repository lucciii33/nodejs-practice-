import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header';


function App() {
  return (
    <Router>
    <div className="container">
    <Header/>
     <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
