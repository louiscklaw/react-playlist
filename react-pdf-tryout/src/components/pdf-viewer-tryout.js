import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';

import MyDocument from '../components/my-document'

function PDFViewerTryout() {
  return(
    <PDFViewer
      style={{
        width: '100vw',
        height: '100vh'
      }}
    >
      <MyDocument />
    </PDFViewer>
  )
}

export default PDFViewerTryout;
