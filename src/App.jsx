import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import UniversityA from './routes/UniversityA'
import UniversityB from './routes/UniversityB'


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/university-a" replace />} />
      <Route path="/university-a" element={<UniversityA />} />
      <Route path="/university-b" element={<UniversityB />} />
    </Routes>
  )
}