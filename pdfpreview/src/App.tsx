import React from "react";
import { pdf } from "@react-pdf/renderer";
import { MyDocument } from "./components/MyDocument";

const App: React.FC = () => {
  const handlePreview = async () => {
    const blob = await pdf(<MyDocument name="Pranav" />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank"); // Opens in a new tab
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>PDF Preview in New Tab</h1>
      <button
        onClick={handlePreview}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Preview PDF
      </button>
    </div>
  );
};

export default App;