import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/list" element={<ListPage />} />
    </Routes>
  );
}

export default App;
