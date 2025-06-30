import theme from "@/styles/theme"
import styled from "@emotion/styled"
interface ButtonStyle {
  width: string
  height: string
}

const Button = styled.img<ButtonStyle>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${theme.space.spacing2};
`

export default Button
