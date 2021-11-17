import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginOh from './pages/eojineOh/LoginOh';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginOh />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
