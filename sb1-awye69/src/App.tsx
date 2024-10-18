import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PreSavePage from './components/PreSavePage';
import AdminPage from './components/AdminPage';
import NewSongUpload from './components/NewSongUpload';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PreSavePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/new-song" element={<NewSongUpload />} />
    </Routes>
  );
};

export default App;