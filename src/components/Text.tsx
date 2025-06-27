import styled from "@emotion/styled"
import type { Theme } from "@emotion/react"

type TypographyVariant = keyof Theme["Typography"]

interface TextProps {
  variant: TypographyVariant
}

const Text = styled.p<TextProps>`
  ${({ theme, variant }) => {
    const [fontSize, fontWeight, lineHeight] =
      theme.Typography[variant].split(/\s+/)

    return `
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      margin: ${theme.space.spacing2};
      padding: ${theme.space.spacing2};
    `
  }}
`
export default Text
