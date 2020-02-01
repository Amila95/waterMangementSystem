import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';


import {
  Button,
} from 'reactstrap';

class Documents extends Component {

  // onSubmit =(e) =>{
  //   ReactPDF.render(<this.MyDocument />, `${__dirname}/example.pdf`);
  // }
  render() {

  // Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  section: {
    margin: 5,
    padding: 5,
    flexGrow: 1,

  }
});

// style="
//     width: 604px;
//     height: 704px;
// "


    //Create Document Component
    const MyDocument = () => (
      <Document >
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    );
    return (
//     width: 604px;
//     width: 604px;
      <div style={{ width:"900px"}}>
          <PDFViewer >
              <MyDocument />
                {/* <Quixote /> */}
          </PDFViewer>
          {/* <Button type="submit" size="sm" color="primary" onClick={this.onSubmit} ><i className="fa fa-dot-circle-o"></i> Submit</Button> */}
          {/* ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`); */}
          <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
             </PDFDownloadLink>
      </div>
    );
  }
}

export default Documents;
