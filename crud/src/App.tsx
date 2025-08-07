import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import UserList from './components/UserList'
import UserForm from "./components/UserForm";

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/form" element={<UserForm />} />
        <Route path="/userlist" element={<UserList />} />
    </Routes>       
    </BrowserRouter>
     
    </>
  )
}

export default App
