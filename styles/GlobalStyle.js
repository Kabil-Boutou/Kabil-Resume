import { Global, css } from '@emotion/react'
import { CSSReset, useColorMode, useTheme } from '@chakra-ui/react'

import { LightTheme, DarkTheme } from 'styles/mode'

export default function GlobalStyle({ children }) {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === 'light' ? LightTheme : DarkTheme};
          ::selection {
            background-color: rgb(232, 21, 169);
            color: #fefefe;
          }
          ::-moz-selection {
            background-color: rgb(232, 21, 169);
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${theme.colors[colorMode]};
          }
        `}
      />
      {children}
    </>
  )
}
