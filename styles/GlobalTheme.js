import React from 'react'
import { theme as chakraTheme } from '@chakra-ui/core'

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  fontColors: {
    light: 'gray.700',
    dark: 'silver',
  },
  icons: {
    ...chakraTheme.icons,
    github: {
      path: (
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </g>
      ),
    },
    linkedin: {
      path: (
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </g>
      ),
    },
    mail: {
      path: (
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </g>
      ),
    },
    share: {
      path: (
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M39.927,41.929c-0.524,0.524-0.975,1.1-1.365,1.709l-17.28-10.489c0.457-1.144,0.716-2.388,0.716-3.693
              c0-1.305-0.259-2.549-0.715-3.693l17.284-10.409C40.342,18.142,43.454,20,46.998,20c5.514,0,10-4.486,10-10s-4.486-10-10-10
              s-10,4.486-10,10c0,1.256,0.243,2.454,0.667,3.562L20.358,23.985c-1.788-2.724-4.866-4.529-8.361-4.529c-5.514,0-10,4.486-10,10
              s4.486,10,10,10c3.495,0,6.572-1.805,8.36-4.529L37.661,45.43c-0.43,1.126-0.664,2.329-0.664,3.57c0,2.671,1.04,5.183,2.929,7.071
              c1.949,1.949,4.51,2.924,7.071,2.924s5.122-0.975,7.071-2.924c1.889-1.889,2.929-4.4,2.929-7.071s-1.04-5.183-2.929-7.071
              C50.169,38.029,43.826,38.029,39.927,41.929z M46.998,2c4.411,0,8,3.589,8,8s-3.589,8-8,8s-8-3.589-8-8S42.586,2,46.998,2z
              M11.998,37.456c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S16.409,37.456,11.998,37.456z M52.654,54.657
              c-3.119,3.119-8.194,3.119-11.313,0c-1.511-1.511-2.343-3.521-2.343-5.657s0.832-4.146,2.343-5.657
              c1.56-1.56,3.608-2.339,5.657-2.339s4.097,0.779,5.657,2.339c1.511,1.511,2.343,3.521,2.343,5.657S54.166,53.146,52.654,54.657z"
          />
        </g>
      ),
      viewBox: '0 -8 70 65',
    },
    facebook: {
      path: (
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
        </g>
      ),
    },
    nextjs: {
      path: (
        <g fill="currentColor">
          <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
          <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
        </g>
      ),
      viewBox: '.5 -.2 1023 1024.1',
    },
  },
}

export default theme
