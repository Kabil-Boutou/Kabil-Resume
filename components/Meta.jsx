import Head from 'next/head'

import { useStateValue } from 'context/GlobalContext'

const Meta = () => {
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
        content="Kabil Boutou developer (Node.js,React.js,Next.js....). Made with Next.Js, Chakra UI and the help of my dear friends."
      />
      <meta property="og:site_name" content="kboutou" />
      <meta property="og:url" content="https://kboutou.me" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Kabil Boutou – Developer." />
      <meta
        name="twitter:description"
        content="Kabil Boutou developer (Node.js,React.js,Next.js....). Made with Next.Js, Chakra UI and the help of my dear friends."
      />
      <meta name="twitter:site" content="@cobain_cain" />
      <meta name="twitter:creator" content="@cobain_cain" />
      <meta name="twitter:image" content="https://kboutou.me/static/logo.png" />
      <link rel="icon" type="image/png" href="favicon.ico" />
      <link rel="apple-touch-icon" href="favicon.ico" />
      <meta property="og:image" content="https://kboutou.me/static/logo.png" />
    </Head>
  )
}
export default Meta
