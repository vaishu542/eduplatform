import { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './Pages/Login';
import Faculty from './Pages/Faculty';
import Event from './Pages/Event';
import CoursePage from './components/CoursePage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/event" element={<Event />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/course/:id" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
