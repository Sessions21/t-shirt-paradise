import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import User from './Pages/User';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import "./App.css"

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/user" element={ <User /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/gallery" element={ <Gallery /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
