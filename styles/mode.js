import { css } from '@emotion/react'

const BaseTheme = css`
  .SM_container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #edf2f7;
    border-radius: 10px;
  }
  .SM_item {
    width: inherit;
    height: inherit;
    background: #718095;
    transform-origin: 50% 100%;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
`

export const LightTheme = css`
  ${BaseTheme};
`

export const DarkTheme = css`
  ${BaseTheme};
  .SM_container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
  .SM_item {
    width: inherit;
    height: inherit;
    background: white;
    transform-origin: 50% 100%;
  }
`
