import { Document, Page, StyleSheet, Text, Image, View, Font } from '@react-pdf/renderer';
import logo from "../../public/logo.png"
import React from 'react'

const MyPage = () => {
    Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
      });
    const styleObj = StyleSheet.create({
        content:{
            backgroundColor:'red',
            fontSize:'20px',
            color:'white'
        },
       
        
    })
  return (
    <Document>
    <Page size="A4">
        <View style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Text fixed>Header</Text>
            <Image src={logo} style={{width:'20%'}} />
        </View>        
        <Text style={styleObj.content}>Hello World</Text>
        <Text style={styleObj.content} break>Hello World</Text>
        <Text style={styleObj.content}>Hello World</Text>
        <Text style={styleObj.content}>Hello World</Text>
        <Text style={styleObj.content}>Hello World</Text>
        <Text fixed>Footer</Text>
        <Text style={{}} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
  )
}

export default MyPage