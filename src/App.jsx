import { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Faculty from './Pages/Faculty';
import Event from './Pages/Event';
import CoursePage from './components/CoursePage';
import Assignments from './components/LSM/Assignments';
import DashBoard from './components/LSM/DashBoard';
import EnrolledCourses from './components/LSM/EnrolledCourses';
import Progress from './components/LSM/Progress';
import Questions from './components/LSM/Questions';
import Settings from './components/LSM/Settings';
import MainPage from './Pages/MainPage';
import Key from './Key';
import { UserProfile } from '@clerk/clerk-react';

function App() {

  return (
    <Router>
      {/* <Key /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/event" element={<Event />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/assignment" element={<Assignments />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/courses" element={<EnrolledCourses />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
