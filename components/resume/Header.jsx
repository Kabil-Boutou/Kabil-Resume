import React from 'react'
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer'

import { FULL_NAME, EMAIL, PHONE } from 'utils/consts'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  rsection: {
    flexGrow: 1,
    width: '70%',
    marginLeft: 10,
  },
  lsection: {
    flexGrow: 1,
    float: '30%',
    fontFamily: 'raleway',
    fontSize: 15,
  },
  avatar: {
    filter: ' grayscale(100%)',
    width: '100px',
    height: '100px',
    borderRadius: 50,
  },
})
export default function Header({ city }) {
  return (
    <View style={styles.container}>
      <View style={styles.rsection}>
        <Image style={styles.avatar} src="/assets/people/kabilB.jpg" />
      </View>
      <View style={styles.lsection}>
        <Text>{FULL_NAME}</Text>
        <Text>{EMAIL}</Text>
        <Text>{PHONE}</Text>
        <Text>{city}</Text>
      </View>
    </View>
  )
}
