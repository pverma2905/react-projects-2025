import React, { useMemo, useState } from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { PagerComponent } from "@syncfusion/ej2-react-grids"; // <-- correct package
import "@syncfusion/ej2-react-grids/styles/material.css"; // include a Syncfusion theme

type Item = {
  id: number;
  title: string;
  date: string;
};

const generateData = (count: number): Item[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Title ${String.fromCharCode(65 + (i % 26))} #${i + 1}`,
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
  }));

const allData = generateData(45);

const sortOptions = [
  { text: "Title Ascending", value: "title-asc" },
  { text: "Title Descending", value: "title-desc" },
  { text: "Date Ascending", value: "date-asc" },
  { text: "Date Descending", value: "date-desc" },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(8);
  const [sortOrder, setSortOrder] = useState<string>("title-asc");

  const sortedData = useMemo(() => {
    return [...allData].sort((a, b) => {
      switch (sortOrder) {
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        default:
          return 0;
      }
    });
  }, [sortOrder]);

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const pagedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Data List with Sorting & Pagination</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4">
        <DropDownListComponent
          id="sortDropdown"
          dataSource={sortOptions}
          fields={{ text: "text", value: "value" }}
          placeholder="Sort by"
          value={sortOrder}
          change={(e: any) => {
            setSortOrder(e?.value as string);
            setCurrentPage(1); // reset to page 1 when sorting changes
          }}
          className="w-60"
        />

        <div className="flex gap-2">
          <ButtonComponent
            cssClass="e-primary"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            Prev
          </ButtonComponent>
          <ButtonComponent
            cssClass="e-primary"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </ButtonComponent>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pagedData.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <PagerComponent
          totalRecordsCount={sortedData.length}
          pageSize={pageSize}
          currentPage={currentPage}
          click={(args: any) => setCurrentPage(args.currentPage)} // Pager emits currentPage on click
        />
      </div>
    </div>
  );
}
