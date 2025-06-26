import styled from "@emotion/styled"
import theme from "@/styles/theme"

const NaviBar = styled.div`
  height: 44px;
  background-color: ${theme.colors.default};
  display: flex;
  flex-direction: row;
  font-width: ${theme.Typography.title1Regular};
  align-items: center;
  padding: 2px;
  justify-content: ${theme.space.spacing1};
`

export default NaviBar
