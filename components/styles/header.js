import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 770px;
  width: 100%;
  margin: auto;
  padding: 2rem;
`

export const iconProps = {
  size: 'lg',
  color: 'gray.500',
  variant: 'ghost',
}
