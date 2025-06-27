import styled from "@emotion/styled"
import type { Theme } from "@emotion/react"
import type theme from "@/styles/theme"

type TypographyVariant = keyof Theme["Typography"]

interface TextProps {
  variant: TypographyVariant
  margin: keyof typeof theme.space
  padding: keyof typeof theme.space
  marginTop?: keyof typeof theme.space
  marginBottom?: keyof typeof theme.space
  marginLeft?: keyof typeof theme.space
  marginRight?: keyof typeof theme.space
}

const Text = styled.p<TextProps>`
  ${({
    theme,
    variant,
    margin,
    padding,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
  }) => {
    const [fontSize, fontWeight, lineHeight] =
      theme.Typography[variant].split(/\s+/)

    return `
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      margin: ${theme.space[margin]};
      padding: ${theme.space[padding]};
      ${marginTop ? `margin-top:  ${theme.space[marginTop]};` : ""}
      ${marginRight ? `margin-right:  ${theme.space[marginRight]};` : ""}
      ${marginLeft ? `margin-left:  ${theme.space[marginLeft]};` : ""}
      ${marginBottom ? `margin-bottom:  ${theme.space[marginBottom]};` : ""}
    `
  }}
`
export default Text
