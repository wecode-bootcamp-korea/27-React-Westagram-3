import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginOh from './pages/eojineOh/Login/LoginOh';
import LoginKim from './pages/sunghyunKim/Login/LoginKim';
import LoginWon from './pages/soyeonWon/Login/LoginWon';
import LoginLee from './pages/jihyunLee/Login/LoginLee';
import MainOh from './pages/eojineOh/Main/MainOh';
import MainKim from './pages/sunghyunKim/Main/MainKim';
import MainWon from './pages/soyeonWon/Main/MainWon';
import MainLee from './pages/jihyunLee/Main/MainLee';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<MainKim />} /> */}
        <Route path="/login-oh" element={<LoginOh />} />
        <Route path="/login-kim" element={<LoginKim />} />
        <Route path="/login-won" element={<LoginWon />} />
        <Route path="/login-lee" element={<LoginLee />} />
        <Route path="/main-oh" element={<MainOh />} />
        <Route path="/main-kim" element={<MainKim />} />
        <Route path="/main-won" element={<MainWon />} />
        <Route path="/main-lee" element={<MainLee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
