import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomPageLabel = ({pageLabel}) => {
  return (
      <Text style={styles.pageLabel}>{pageLabel}</Text>
  )
}


export default CustomPageLabel

const styles = StyleSheet.create({

    pageLabel:{
        textAlign:'left',
        marginLeft: "10%",
        color: '#1f7bff',
        fontSize: 48,
        marginTop: 20,
        marginBottom: 40,
        fontWeight: 500,
    },
})