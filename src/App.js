import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Articles from './components/Articles';
import Navigation from './components/Navigation';
import SingleArticle from './components/Single-Article';

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/articles" element={<Articles/>}></Route>
          <Route path="/articles/:article_id" element={<SingleArticle/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
