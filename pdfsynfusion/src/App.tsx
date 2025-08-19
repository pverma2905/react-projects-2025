import React, { useRef } from "react";
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page } from "@syncfusion/ej2-react-grids";
import type { PdfExportProperties } from "@syncfusion/ej2-react-grids";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

interface GridData1 { ID: number; Name: string; Age: number; }
interface GridData2 { ID: number; Product: string; Price: number; }
interface GridData3 { ID: number; Country: string; Population: number; }

const gridData1: GridData1[] = [
  { ID: 1, Name: "John", Age: 28 },
  { ID: 2, Name: "Alice", Age: 24 },
];

const gridData2: GridData2[] = [
  { ID: 1, Product: "Laptop", Price: 1200 },
  { ID: 2, Product: "Phone", Price: 800 },
];

const gridData3: GridData3[] = [
  { ID: 1, Country: "USA", Population: 300 },
  { ID: 2, Country: "India", Population: 1400 },
];

const App: React.FC = () => {
  const grid1 = useRef<GridComponent>(null);
  const grid2 = useRef<GridComponent>(null);
  const grid3 = useRef<GridComponent>(null);

  const pdfExportOptions: PdfExportProperties = {
    fileName: "MultiGrid.pdf",
    header: {
      contents: [
        { type: "Text", value: "Custom PDF Header", position: { x: 0, y: 20 }, style: { fontSize: 14 } },
      ],
    },
    footer: {
      contents: [
        { type: "PageNumber", position: { x: 0, y: 20 }, style: { fontSize: 12 } },
      ],
    },
  };

  const exportPdf = async () => {
    if (grid1.current) await grid1.current.pdfExport(pdfExportOptions);
    if (grid2.current) await grid2.current.pdfExport(pdfExportOptions);
    if (grid3.current) await grid3.current.pdfExport(pdfExportOptions);
  };

  const renderGrid = (ref: React.RefObject<GridComponent | null>, data: any[], columns: any[], height = 200) => (
    <GridComponent ref={ref} dataSource={data} allowPaging height={height}>
      <ColumnsDirective>
        {columns.map((col, i) => <ColumnDirective key={i} {...col} />)}
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
  );

  return (
    <div>
      <h2>Grid 1</h2>
      {renderGrid(grid1, gridData1, [
        { field: "ID", headerText: "ID", width: 100, textAlign: "Center" },
        { field: "Name", headerText: "Name", width: 150 },
        { field: "Age", headerText: "Age", width: 100, textAlign: "Center" },
      ])}

      <h2>Grid 2</h2>
      {renderGrid(grid2, gridData2, [
        { field: "ID", headerText: "ID", width: 100, textAlign: "Center" },
        { field: "Product", headerText: "Product", width: 150 },
        { field: "Price", headerText: "Price", width: 100, textAlign: "Center" },
      ])}

      <h2>Grid 3</h2>
      {renderGrid(grid3, gridData3, [
        { field: "ID", headerText: "ID", width: 100, textAlign: "Center" },
        { field: "Country", headerText: "Country", width: 150 },
        { field: "Population", headerText: "Population (M)", width: 150, textAlign: "Right" },
      ])}

      <ButtonComponent cssClass="e-primary" onClick={exportPdf} style={{ marginTop: 20 }}>
        Download PDF
      </ButtonComponent>
    </div>
  );
};

export default App;
