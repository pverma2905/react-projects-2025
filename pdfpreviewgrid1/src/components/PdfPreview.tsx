import React from "react";
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";

// Styles without font/image
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    flexDirection: "column",
  },
  header: {
    fontSize: 14,
    marginBottom: 10,
    borderBottom: "1px solid black",
    paddingBottom: 4,
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
    marginBottom: 20,
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

interface PdfPreviewProps {
  grids: { title: string; columns: string[]; data: Record<string, any>[] }[];
}

const PdfPreview: React.FC<PdfPreviewProps> = ({ grids }) => {
  return (
    <PDFViewer width="100%" height="100%">
      <Document>
        {grids.map((grid, index) => (
          <Page key={index} size="A4" style={styles.page}>
            {/* Header */}
            <Text style={styles.header}>{grid.title}</Text>

            {/* Grid Table */}
            <View style={styles.table}>
              {/* Header Row */}
              <View style={styles.tableRow}>
                {grid.columns.map((col, i) => (
                  <Text key={i} style={styles.tableCell}>
                    {col}
                  </Text>
                ))}
              </View>
              {/* Data Rows */}
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

            {/* Footer */}
            <Text
              style={styles.footer}
              render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
            />
          </Page>
        ))}
      </Document>
    </PDFViewer>
  );
};

export default PdfPreview;
