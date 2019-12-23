import React, { Component } from 'react';
import { Navbar, Jumbotron, Button, Row } from 'react-bootstrap';
import Layout from './components/Layout/Layout'
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <div>
          <h1>
            Thank you for visiting <code>Anablock.com</code>
          </h1>
        </div>
      </Layout>
    </div>
  );
}

export default App;
