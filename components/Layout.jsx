import { ThemeProvider, Skeleton } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import Meta from 'components/Meta'
import GlobalTheme from 'styles/GlobalTheme'
import GlobalStyle from 'styles/GlobalStyle'
const Header = dynamic(() => import('components/Header'), {
  ssr: false,
  loading: function Loader() {
    return <Skeleton name="Header" height="112px" m="auto" maxWidth="700px" width="100%" alignItems="center" />
  },
})
const Footer = dynamic(() => import('components/Footer'), { ssr: false })

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Meta />
      <GlobalStyle>
        <Header />
        {children}
        <Footer />
      </GlobalStyle>
    </ThemeProvider>
  )
}

export default Layout
