import { Routes, Route, Link } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </>
  )
}

export default App
