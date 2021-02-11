import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Canvas,
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

import QRCode from "qrcode.react";

import "./App.css";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        <Canvas>
          <QRCode
            renderAs={"svg"}
            value="http://facebook.github.io/react/"
            size={300}
          />
        </Canvas>
      </View>
    </Page>
  </Document>
);

function App() {
  return (
    <div className="App">
      helloworld
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}

export default App;
