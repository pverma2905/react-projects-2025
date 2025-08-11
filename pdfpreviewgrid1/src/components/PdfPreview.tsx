// PdfPreview.tsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font
} from "@react-pdf/renderer";

interface TableConfig {
  title: string;
  key: string;
  columns: string[];
}

interface MyPdfDocumentProps {
  data: TableConfig[];
  dataset: Record<string, any[]>;
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10
  },
  header: {
    fontSize: 16,
    marginBottom: 10
  },
  table: {
    display: "table" as any,
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 20
  },
  row: {
    flexDirection: "row"
  },
  cell: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 4,
    flex: 1
  },
  footer: {
    position: "absolute",
    fontSize: 10,
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center"
  }
});

export const MyPdfDocument: React.FC<MyPdfDocumentProps> = ({
  data,
  dataset
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <Text style={styles.header}>Report Preview</Text>

      {data.map((table, index) => {
        const tableData = dataset[table.key] || [];
        return (
          <View key={index}>
            <Text style={{ fontSize: 14, marginBottom: 5 }}>{table.title}</Text>
            <View style={styles.table}>
              {/* Header Row */}
              <View style={styles.row}>
                {table.columns.map((col, i) => (
                  <Text key={i} style={styles.cell}>
                    {col}
                  </Text>
                ))}
              </View>
              {/* Data Rows */}
              {tableData.length > 0 ? (
                tableData.map((row, ri) => (
                  <View key={ri} style={styles.row}>
                    {table.columns.map((col, ci) => (
                      <Text key={ci} style={styles.cell}>
                        {row[Object.keys(row)[ci]] ?? ""}
                      </Text>
                    ))}
                  </View>
                ))
              ) : (
                <View style={styles.row}>
                  <Text style={[styles.cell, { flexGrow: table.columns.length }]}>
                    No records to display
                  </Text>
                </View>
              )}
            </View>
          </View>
        );
      })}

      {/* Footer with page number */}
      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) =>
          `Page ${pageNumber} of ${totalPages}`
        }
      />
    </Page>
  </Document>
);
