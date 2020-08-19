import React from 'react'
import dynamic from 'next/dynamic'

const Resume = dynamic(() => import('components/Resume'), {
  ssr: false,
})

export default function Resume_Modal() {
  return <Resume />
}
