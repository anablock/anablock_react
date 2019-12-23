import React, { Component } from 'react';
import { Container, Navbar, Jumbotron, Button, Row } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar inverse fixedTop>
          <Container>
                <a href="/">React App</a>
          </Container>
        </Navbar>
        <Jumbotron>
          
        </Jumbotron>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thank you for visiting <code>Anablock.com</code>
        </p>
        <a
          className="App-link"
          href="https://anablock.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div>Hello</div>
    </div>
  );
}

export default App;
