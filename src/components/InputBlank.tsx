import styled from "@emotion/styled"

interface InputBlankStyle {
  width: string
  height: string
}
const InputBlank = styled.input<InputBlankStyle>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-bottom: 1px solid #ccc;
`
export default InputBlank
