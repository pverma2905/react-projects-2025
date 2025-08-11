// PdfPreview.tsx
import React from "react";
import { pdf } from "@react-pdf/renderer";
import PdfDocument from "./components/PDFDocument";

const PdfPreview: React.FC = () => {
  const handlePreview = async () => {
    const grids = [
      {
        title: "Employees",
        columns: ["ID", "Name", "Role"],
        data: [
          { ID: 1, Name: "John Doe", Role: "Developer" },
          { ID: 2, Name: "Jane Smith", Role: "Designer" },
        ],
      },
      {
        title: "Departments",
        columns: ["DeptID", "DeptName"],
        data: [
          { DeptID: 101, DeptName: "IT" },
          { DeptID: 102, DeptName: "HR" },
        ],
      },
    ];

    // Generate PDF blob
    const blob = await pdf(<PdfDocument grids={grids} />).toBlob();
    const url = URL.createObjectURL(blob);

    // Open in new tab
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handlePreview}
      style={{
        padding: "8px 16px",
        background: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
      }}
    >
      Preview PDF
    </button>
  );
};

export default PdfPreview;
