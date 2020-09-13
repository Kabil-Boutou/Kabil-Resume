import { Font, StyleSheet } from '@react-pdf/renderer'

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
  work_section: {
    top: -25,
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
export const LangStyle = {
  en: { ...BaseStyle },
  fr: {
    ...BaseStyle,
    mr: {
      marginRight: 130,
    },
  },
}

export const WorkExpStyle = StyleSheet.create({
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
