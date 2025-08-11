import React from "react";
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-grids";
import { pdf } from "@react-pdf/renderer";
import PdfDocument from "./components/PdfDocument";

export const App: React.FC = () => {
  const grid1Data = [
    { Name: "John", Age: 28 },
    { Name: "Jane", Age: 32 },
  ];

  const grid2Data = [
    { Product: "Laptop", Price: 900 },
    { Product: "Mouse", Price: 20 },
  ];

  const grids = [
    { title: "Employee List", columns: ["Name", "Age"], data: grid1Data },
    { title: "Product List", columns: ["Product", "Price"], data: grid2Data },
  ];

  const handlePreview = async () => {
    // Use pure document here
    const blob = await pdf(<PdfDocument grids={grids} />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div>
      <h2>Syncfusion Grids</h2>

      {/* Grid 1 */}
      <GridComponent dataSource={grid1Data}>
        <ColumnsDirective>
          <ColumnDirective field="Name" headerText="Name" />
          <ColumnDirective field="Age" headerText="Age" />
        </ColumnsDirective>
      </GridComponent>

      {/* Grid 2 */}
      <GridComponent dataSource={grid2Data}>
        <ColumnsDirective>
          <ColumnDirective field="Product" headerText="Product" />
          <ColumnDirective field="Price" headerText="Price" />
        </ColumnsDirective>
      </GridComponent>

      <button
        onClick={handlePreview}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
      >
        Preview PDF
      </button>
    </div>
  );
};
