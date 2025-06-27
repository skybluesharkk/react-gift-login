import theme from "@/styles/theme";
import styled from "@emotion/styled";

const MoreButton = styled.button`
  width: 100%;
  margin: 32px 0 0 0;
  padding: ${theme.space.spacing3} 0;
  border: 1px solid #eee;
  border-radius: ${theme.space.spacing2};
  background: ${theme.colors.gray00};
  font-size: 16px;
  cursor: pointer;
`;
export default MoreButton