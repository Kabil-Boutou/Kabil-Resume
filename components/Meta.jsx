import React from 'react'
import Head from 'next/head'

import { useStateValue } from 'context/GlobalContext'

const Meta = (props) => {
  const [{ lang_content }] = useStateValue()
  return (
    <Head>
      <title>Kabil Boutou – Developer.</title>
      <meta name="description" content={lang_content.intro.desc} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content="Kabil Boutou – Developer." />
      <meta
        name="og:description"
        property="og:description"
        content="Kabil Boutou developer (Node.js,React.js,Next.js....), made with Next.Js and Chakra UI, Special to all my friends whom helped me with it."
      />
      <meta property="og:site_name" content="kboutou" />
      <meta property="og:url" content="https://kboutou.io" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Kabil Boutou – Developer." />
      <meta name="twitter:description" content={props.desc} />
      <meta name="twitter:site" content="@cobain_cain" />
      <meta name="twitter:creator" content="@cobain_cain" />
      <link rel="icon" type="image/png" href="favicon.ico" />
      <link rel="apple-touch-icon" href="favicon.ico" />
      <meta property="og:image" content="seo_preview.png" />
      <link rel="canonical" href="" />
      <script type="text/javascript" src=""></script>
    </Head>
  )
}
export default Meta
