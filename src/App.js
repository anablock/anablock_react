import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar, Jumbotron, Button, Row } from 'react-bootstrap';

import Header from './components/Navigation/Toolbar/Header';
import Landing from './components/pages/Landing';
import About from './components/pages/About';
import Services from './components/services/Services';
import Chatbot from './components/chatbot/Chatbot';
import Footer from './components/Navigation/Footer/Footer';

function App() {
  return (
    <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Footer />
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
