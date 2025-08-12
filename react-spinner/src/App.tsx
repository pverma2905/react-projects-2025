
import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page
} from "@syncfusion/ej2-react-grids";
import './App.css'

function App() {
const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setData([
        { OrderID: 10248, CustomerName: "Paul Henriot", Freight: 32.38 },
        { OrderID: 10249, CustomerName: "Karin Josephs", Freight: 11.61 }
      ]);
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <div style={{ position: "relative" }}>
      {/* Spinner Overlay */}
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}

      {/* Syncfusion Grid */}
      <GridComponent dataSource={data} allowPaging={true} pageSettings={{ pageSize: 5 }}>
        <ColumnsDirective>
          <ColumnDirective field="OrderID" headerText="Order ID" width="120" textAlign="Right" />
          <ColumnDirective field="CustomerName" headerText="Customer Name" width="150" />
          <ColumnDirective field="Freight" headerText="Freight" width="120" textAlign="Right" />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
  
}

export default App
