import styled from '@emotion/styled';

export const EditorWrapper = styled.section`
  margin: 200px;
  padding: 10px;
  width: 650px;
  height: 450px;
  border: 1px solid ${props => props.theme.colors.grayHigh};
  background: ${props => props.theme.colors.grayLow};
`;
