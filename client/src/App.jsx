import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/Login-page.jsx';
import RegistrationPage from './components/Registration/Registration-page.jsx';
import HomePage from './components/Home/Home-page.jsx';
import AdminPage from './components/Admin/Admin-page.jsx';

function App() {
  return (
    <Fragment>
      <Router>
        <main className='h-screen w-screen'>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/admin' element={<AdminPage />} />
          </Routes>
        </main>
      </Router>
    </Fragment>
  )
}

export default App;
