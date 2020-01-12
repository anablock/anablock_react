import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar, Jumbotron, Button, Row } from 'react-bootstrap';

import Header from './components/Navigation/Toolbar/Header';
import Landing from './components/pages/Landing';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
        <div>
          <h1>
            Thank you for visiting <code>Anablock.com</code>
          </h1>
        </div>
    </div>
  );
}

export default App;
