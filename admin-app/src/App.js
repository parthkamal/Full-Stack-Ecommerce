import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
