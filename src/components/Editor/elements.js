import styled from '@emotion/styled';

export const EditorWrapper = styled.section`
  padding: 10px;
  width: 650px;
  height: 450px;
  border: 1px solid ${props => props.theme.colors.gray_high};
  background: ${props => props.theme.colors.gray_low};
`;
