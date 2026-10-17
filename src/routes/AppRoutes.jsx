import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import ProjectDetails from '../pages/ProjectDetails';
import Resume from '../pages/Resume';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
