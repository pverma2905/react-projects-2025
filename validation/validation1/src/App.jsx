import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import FormikForm from "./components/form-validation/FormikForm";
import HookForm from "./components/form-validation/HookForm";
import HookFormZod from "./components/form-validation/HookFormZod";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/formik" element={<FormikForm/>} />  
        <Route path="/hookform" element={<HookForm/>} /> 
         <Route path="/hookformzod" element={<HookFormZod/>} />        
      </Routes>
    </BrowserRouter>
  )
}

export default App
