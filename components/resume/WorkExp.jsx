import React from 'react'
import { Text, View, Image, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  desc: {
    fontFamily: 'raleway',
    textAlign: 'justify',
    marginBottom: 10,
    fontSize: 12,
  },
  work_small_titles: {
    fontFamily: 'raleway',
    fontSize: 13,
  },
  inc_logo: {
    width: 32,
    height: 32,
    borderRadius: 32,
    marginRight: 5,
  },
})

export default function WorkExp({ workExp, tech_stack }) {
  return (
    <View style={{ marginBottom: 5 }}>
      <View style={{ flexDirection: 'row', marginBottom: 5 }}>
        <Image style={styles.inc_logo} src={`/assets/inc/${workExp.logo}`} />
        <Text style={{ ...styles.work_small_titles, alignSelf: 'center' }}>{workExp.inc}</Text>
      </View>
      <Text style={{ ...styles.work_small_titles, marginBottom: 2 }}>
        {workExp.post}
        <Text style={{ color: 'tomato' }}> | {workExp.period}</Text>
      </Text>
      <Text style={styles.desc}>{workExp.intro}</Text>
      <Text style={{ ...styles.work_small_titles, marginBottom: 5, color: 'tomato' }}>{tech_stack}:</Text>
      <Text style={styles.work_small_titles}>{workExp.stack}</Text>
    </View>
  )
}
