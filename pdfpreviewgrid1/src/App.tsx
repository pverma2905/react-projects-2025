// MainPage.tsx
import React from "react";
import { pdf } from "@react-pdf/renderer";
import { MyPdfDocument } from "./components/PdfPreview";

export const App: React.FC = () => {
  const reportData = {
    users: [
      { id: 1, name: "John Doe", role: "Admin" },
      { id: 2, name: "Jane Smith", role: "User" }
    ],
    orders: [
      { id: 101, product: "Laptop", qty: 2 },
      { id: 102, product: "Mouse", qty: 5 }
    ],
    emptyList: []
  };

  const handlePreview = async () => {
    const blob = await pdf(
      <MyPdfDocument
        data={[
          { title: "User List", key: "users", columns: ["ID", "Name", "Role"] },
          { title: "Orders List", key: "orders", columns: ["ID", "Product", "Qty"] },
          { title: "Empty List", key: "emptyList", columns: ["ID", "Field1", "Field2"] }
        ]}
        dataset={reportData}
      />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handlePreview}
      >
        Preview PDF
      </button>
    </div>
  );
};
