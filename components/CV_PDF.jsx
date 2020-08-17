import React from 'react'
import { Page, Text, View, Font, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'

import { useStateValue } from 'context/GlobalContext'
import Header from 'components/resume/Header'

// Register font
Font.register({ family: 'raleway', src: 'assets/fonts/Raleway.ttf' })
Font.register({ family: 'ralewayBold', src: 'assets/fonts/RalewayBold.ttf' })

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
    margin: 'auto',
  },
  /*  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  }, */
  title: {
    fontFamily: 'ralewayBold',
    textAlign: 'center',
    marginBottom: 10,
  },
  desc: {
    fontFamily: 'raleway',
    textAlign: 'justify',
    marginBottom: 10,
  },
  section: {
    padding: 20,
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 2,
    justifyContent: 'space-around',
  },
  maxWS: {
    maxWidth: '50%',
  },
})

// Create Document Component
export default function MyDocument() {
  const [{ lang_content }] = useStateValue()

  return (
    <PDFViewer>
      <Document
        author="Kabil Boutou"
        keywords="mobile, web, dev, front, back"
        subject="The resume of Kabil Boutou"
        title="Resume"
      >
        <Page size="A4" style={styles.page} ruler>
          <Header city={lang_content.city} />
          <View style={styles.section}>
            <Text style={styles.title}>{lang_content.intro.title}</Text>
            <Text style={styles.desc}>{lang_content.intro.desc}</Text>
          </View>
          <View style={{ ...styles.section, ...styles.grid }}>
            <View style={{ ...styles.maxWS, paddingRight: 10 }}>
              <Text style={styles.title}>{lang_content.intro.title}</Text>
              <Text style={styles.desc}>{lang_content.intro.desc}</Text>
            </View>
            <View style={{ ...styles.maxWS }}>
              <Text style={styles.title}>{lang_content.intro.title}</Text>
              <Text style={styles.desc}>{lang_content.intro.desc}</Text>
            </View>
          </View>
          {/* <View>
              <Text>Section #1</Text>
            </View>
            <View>
              <Text>Section #2</Text>
            </View> */}
        </Page>
      </Document>
    </PDFViewer>
  )
}
