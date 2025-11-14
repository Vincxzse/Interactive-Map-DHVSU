import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login/Login-page.jsx';
import RegistrationPage from './components/Registration/Registration-page.jsx';
import UserPage from './components/User/User-Page.jsx';
import AdminPage from './components/Admin/Admin-Main/Admin-Page(New).jsx';
import ForgotPasswordPage from './components/login/ForgotPasswordPage.jsx';

function App() {
  return (
    <Fragment>
      <Router>
        <main className='h-screen w-screen'>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/home/*' element={<UserPage />} />
            <Route path='/admin/*' element={<AdminPage />} />
          </Routes>
        </main>
      </Router>
    </Fragment>
  )
}

export default App;
