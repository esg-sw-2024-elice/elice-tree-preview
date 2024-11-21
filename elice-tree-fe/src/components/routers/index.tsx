import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TodoList } from 'pages';
import LoginPage from 'pages/UserLogin/index';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/TodoList" element={<TodoList />} />
      </Routes>
    </>
  );
}
