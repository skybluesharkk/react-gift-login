import styled from "@emotion/styled"
interface BlankStyle {
  height: string
}
const Blank = styled.div<BlankStyle>`
  width: 100%;
  max-width: 720px;
  height: ${(props) => props.height};
`
export default Blank
