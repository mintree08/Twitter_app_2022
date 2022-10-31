import Navigation from 'components/Navigation';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './routes/Auth';
import Home from './routes/Home';


function AppRouter({isLoggedIn}) {
 

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {isLoggedIn && <Navigation />}
        <Routes>
            {isLoggedIn ? (
            <>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profiles />} />
            </>
            ) : (
            <Route path='/' element={<Auth />} />
            )}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
