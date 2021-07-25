import NextLink from 'next/link'
import { useColorMode, Heading, Text, Flex, Stack, Button } from '@chakra-ui/react'

export default function Error() {
  const { colorMode } = useColorMode()
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  }

  return (
    <Stack as="main" spacing={8} justifyContent="center" alignItems="flex-start" m="auto" maxWidth="700px">
      <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px">
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          <span style={{ color: 'tomato' }}>404</span> – How did I get here ?
        </Heading>
        <Text color={secondaryTextColor[colorMode]} my={4}>
          Oh! Sneaky you, I see your looking for troubel there (Since it&apos;s just a one page website). It&apos;s good
          thing being curious but you can go back to my one lonely page, and I will make sure that next time it will be
          a typo mistake that brings you here.
        </Text>
        <NextLink href="/" passHref>
          <Button as="a" p={[1, 4]} w="250px" fontWeight="bold" m="3rem auto 0">
            Return Home
          </Button>
        </NextLink>
      </Flex>
    </Stack>
  )
}
