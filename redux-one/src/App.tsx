import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import UserForm from './pages/UserForm';
import UserList from './pages/UserList'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
       
       
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/new" element={<UserForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        
       
        <Footer />
      </div>
    </>
  )
}

export default App
