import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from'./pages/Signup';
import Create from './pages/CreateTshirt';
import Edit from './pages/EditTshirt';
import Gallery from './pages/Gallery';
import User from './pages/User';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import "./index.css"

function App() {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql',
  })

  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path='/signup' element={ <Signup />} />
            <Route path="/create" element={ <Create /> } />
            <Route path="/edit/:id" element={ <Edit /> } />
            <Route path="/gallery" element={ <Gallery /> } />
            <Route path="/user" element={ <User /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/contact" element={ <Contact /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
