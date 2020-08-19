import React from 'react'
import { Page, Text, View, Font, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'

import { useStateValue } from 'context/GlobalContext'
import Header from 'components/resume/Header'
import List, { Item } from 'components/resume/List'
import WorkExp from 'components/resume/WorkExp'
import { FULL_NAME } from 'utils/consts'

// Register font
Font.register({ family: 'raleway', src: 'assets/fonts/Raleway.ttf' })
Font.register({ family: 'ralewayBold', src: 'assets/fonts/RalewayBold.ttf' })

const BaseStyle = {
  preview: { height: '75vh', width: '100%' },
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
    marginBottom: 5,
    fontSize: 13,
  },
  section: {
    padding: 17,
  },
  grid: {
    top: -10,
    flex: 1,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  maxWS: {
    maxWidth: '50%',
  },
  mr: {
    marginRight: 200,
  },
  list_title: {
    fontFamily: 'ralewayBold',
  },
}
const LangStyle = {
  en: { ...BaseStyle },
  fr: {
    ...BaseStyle,
    mr: {
      marginRight: 130,
    },
    work_section: {
      top: -25,
    },
  },
}

// Create Document Component
export default function MyDocument() {
  const [{ lang, lang_content }] = useStateValue()

  // Create styles
  const styles = StyleSheet.create({
    ...LangStyle[lang],
  })
  return (
    <PDFViewer style={styles.preview}>
      <Document
        author={FULL_NAME}
        keywords="mobile, web, dev, front, back"
        subject="The resume of Kabil Boutou"
        title={`${FULL_NAME} CV`}
      >
        <Page size="A4" style={styles.page}>
          <Header city={lang_content.city} lang={lang} />
          <View style={styles.section}>
            <Text style={styles.title}>{lang_content.intro.title}</Text>
            <Text style={styles.desc}>{lang_content.intro.desc}</Text>
          </View>
          <View style={{ ...styles.section, ...styles.grid }}>
            <View>
              <Text style={styles.list_title}>{lang_content.domaines.title}</Text>
              <List>
                {lang_content.domaines.items.map((item, key) => {
                  return <Item key={key}>{item}</Item>
                })}
              </List>
            </View>
            <View style={styles.mr}>
              <Text style={styles.list_title}>{lang_content.skills.title}</Text>
              <List>
                {lang_content.skills.items.map((item, key) => {
                  return <Item key={key}>{item}</Item>
                })}
              </List>
            </View>
          </View>
          {/* Wok exp */}
          <View style={{ ...styles.section, ...styles.work_section }}>
            <Text style={styles.title}>{lang_content.work_exp}</Text>
            {lang_content.workExp.map((workExp, key) => {
              return <WorkExp workExp={workExp} tech_stack={lang_content.tech_stack} key={key} />
            })}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}
