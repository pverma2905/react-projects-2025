// PdfDocument.tsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font
} from "@react-pdf/renderer";

interface GridSectionProps {
  title: string;
  data: Record<string, any>[];
  columns: string[];
}

interface PdfDocumentProps {
  grids: GridSectionProps[];
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 9,
  },
  table: {
    display: "table" as any,
    width: "auto",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#000",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    padding: 3,
  },
  bold: {
    fontWeight: "bold",
  },
});

const PdfDocument: React.FC<PdfDocumentProps> = ({ grids }) => (
  <Document>
    <Page size="A4" style={styles.page} wrap>
      {/* Header */}
      <Text style={styles.header}>Syncfusion Grid Report</Text>

      {/* Multiple Grids */}
      {grids.map((grid, idx) => (
        <View key={idx}>
          <Text style={{ marginBottom: 5, fontWeight: "bold" }}>{grid.title}</Text>
          <View style={styles.table}>
            {/* Header Row */}
            <View style={styles.tableRow}>
              {grid.columns.map((col, cIdx) => (
                <Text key={cIdx} style={[styles.tableCol, styles.bold]}>
                  {col}
                </Text>
              ))}
            </View>
            {/* Data Rows */}
            {grid.data.map((row, rIdx) => (
              <View key={rIdx} style={styles.tableRow}>
                {grid.columns.map((col, cIdx) => (
                  <Text key={cIdx} style={styles.tableCol}>
                    {row[col] ?? ""}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </View>
      ))}

      {/* Footer with Page Number */}
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} of ${totalPages}`
        }
        fixed
      />
    </Page>
  </Document>
);

export default PdfDocument;
