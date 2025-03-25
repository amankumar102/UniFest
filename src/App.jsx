import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/Admin/Dashboard';
import ParticipantDashboard from './pages/Participant/Dashboard';
import Home from './pages/HomePage/Home'
import Registration from './components/auth/Registration'
import Login from './components/auth/Login'


function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/participant/dashboard" element={<ParticipantDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>


    </div>
  );
}

export default App;
