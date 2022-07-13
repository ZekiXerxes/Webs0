/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {isDark ? (
          <img width="30" height="30" src="https://.png" alt="LLogo" />
        ) : (
          <img width="30" height="30" src="https://img.png" alt="LLogo" />
        )}
        {` `}
        <Link
          aria-label="Linky"
          sx={{ ml: 2 }}
          href="https://githubL"
        >
          Theme
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Linke"
          href="https://www.le"
        >
          Web0
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
