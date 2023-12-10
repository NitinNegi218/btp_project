import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    
    <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/services" element={<Services/>}>
        </Route>
        <Route path="/product" element={<Products/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
