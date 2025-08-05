import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Search from './pages/Search'
import Request from './pages/Request'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
