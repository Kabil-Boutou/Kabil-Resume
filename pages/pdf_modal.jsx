import React from 'react'
import dynamic from 'next/dynamic'
const Resume = dynamic(() => import('components/CV_PDF'), {
  ssr: false,
})
//import Resume from 'components/CV_PDF'

export default function App() {
  return <Resume />
}
