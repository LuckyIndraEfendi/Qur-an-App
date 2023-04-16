import React from 'react';
import "./App.css"
import Navbar from './pages/Navbar';
import { Home, Details } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

function App(props) {
  return (
    <>
      <SkeletonTheme baseColor="#6e7070" highlightColor="#444">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Details />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </>
  );
}

export default App;