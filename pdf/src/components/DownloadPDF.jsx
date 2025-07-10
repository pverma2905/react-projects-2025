import React from 'react'
import { BlobProvider, Document, Page, PDFDownloadLink } from '@react-pdf/renderer';
import MyPage from './MyPage';

const DownloadPDF = () => {
  return (
    <div>
        <PDFDownloadLink document={<MyPage />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
    </div>
  )
}

export default DownloadPDF