import React from 'react'
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer'

import { useStateValue } from 'context/GlobalContext'
import { LangStyle } from 'components/resume/style'
import Header from 'components/resume/Header'
import List, { Item } from 'components/resume/List'
import WorkExp from 'components/resume/WorkExp'
import { FULL_NAME } from 'utils/consts'

// Create Document Component
export default function Resume() {
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
        subject={`The resume of ${FULL_NAME}`}
        title={`${FULL_NAME} CV`}
      >
        <Page size="A4" style={styles.page} wrap>
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
