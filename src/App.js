import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Articles from './components/Articles';
import Navigation from './components/Navigation';
import SingleArticle from './components/Single-Article';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        {user !== null ? <Navigation setUser={setUser} user={user} /> : <></>}
        <Routes>
          <Route path="/" element={<Login setUser={setUser} user={user}/>}></Route>
          <Route path="/home" element={<Home setUser={setUser} user={user}/>}></Route>
          <Route path="/articles" element={<Articles setUser={setUser} user={user}/>}></Route>
          <Route path="/articles/:article_id" element={<SingleArticle setUser={setUser} user={user}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
