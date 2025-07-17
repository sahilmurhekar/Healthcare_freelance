import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React from 'react'


import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
