import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ListPage from './pages/ListPage';
import Nav from './components/blocks/Nav';

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/list" element={<ListPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
