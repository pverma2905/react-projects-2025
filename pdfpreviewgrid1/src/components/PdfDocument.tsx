import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    flexDirection: "column",
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 14,
    marginBottom: 6,
    borderBottom: "1px solid black",
    paddingBottom: 3,
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
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 4,
    flexGrow: 1,
  },
});

interface PdfDocumentProps {
  grids: { title: string; columns: string[]; data: Record<string, any>[] }[];
}

const PdfDocument: React.FC<PdfDocumentProps> = ({ grids }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {grids.map((grid, gIndex) => (
        <View key={gIndex} style={styles.section}>
          {/* Header */}
          <Text style={styles.header}>{grid.title}</Text>

          {/* Table */}
          <View style={styles.table}>
            {/* Header row */}
            <View style={styles.tableRow}>
              {grid.columns.map((col, i) => (
                <Text key={i} style={styles.tableCell}>
                  {col}
                </Text>
              ))}
            </View>

            {/* Data rows */}
            {grid.data.map((row, rIndex) => (
              <View key={rIndex} style={styles.tableRow}>
                {grid.columns.map((col, cIndex) => (
                  <Text key={cIndex} style={styles.tableCell}>
                    {row[col]}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        </View>
      ))}

      {/* Footer with page count */}
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
      />
    </Page>
  </Document>
);

export default PdfDocument;
