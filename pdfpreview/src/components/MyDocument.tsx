import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// PDF styles
const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 },
  title: { fontSize: 20, marginBottom: 10 },
  text: { fontSize: 12 },
});

interface MyDocumentProps {
  name: string;
}

export const MyDocument: React.FC<MyDocumentProps> = ({ name }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Hello, {name}!</Text>
        <Text style={styles.text}>This is your generated PDF document.</Text>
      </View>
    </Page>
  </Document>
);