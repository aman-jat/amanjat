import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages';

const Root = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Navigate to='/site/new' />} />
    </Routes>
  );
};

export default Root;
