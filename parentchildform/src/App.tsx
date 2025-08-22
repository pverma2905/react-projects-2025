
import './App.css'
import React, { useState } from "react";
import ChildOne from './components/ChildOne';
import ChildTwo from './components/ChildTwo';
function App() {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
     skills: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <form
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto border rounded shadow"
    >
      <h2 className="text-xl font-bold mb-2">Parent Form</h2>
      <ChildOne formData={formData} setFormData={setFormData} />
      <ChildTwo formData={formData} setFormData={setFormData} />

      <button type="submit" className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
    </>
  )
}

export default App
