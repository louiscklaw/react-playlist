import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
function MyDocument(props){
  const testOnRender = () => {
    console.log('testing on pdf render')
  }

  return(
    <Document
      title 	={"Sets title info on the document's metadata 	String 	undefined"}
      author 	={"Sets author info on the document's metadata 	String 	undefined"}
      subject ={"Sets subject info on the document's metadata 	String 	undefined"}
      keywords={"Sets keywords associated info on the document's metadata 	String 	undefined"}
      creator ={`Sets creator info on the document's metadata 	String 	"react-pdf"`}
      producer={`Sets producer info on the document's metadata 	String 	"react-pdf"`}
      onRender={testOnRender}
      >
      <Page
        size="A4"
        style={styles.page}
        orientation={'portrait'}

        >
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>

        <View style={styles.section}>
          <Link src="www.example.com">Section #2</Link>
        </View>

      </Page>
    </Document>
  )
}



export default MyDocument