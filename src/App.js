import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
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
