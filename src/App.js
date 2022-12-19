import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import ImageGenerator from './components/imageGenerator/ImageGenerator.js';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ImageGenerator />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
