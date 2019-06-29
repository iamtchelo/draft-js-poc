import styled from '@emotion/styled';

export const Wrapper = styled.section``;

export const Toolbar = styled.div``;

export const Container = styled.div`
  margin-top: 1rem;
  padding: 10px;
  width: 650px;
  height: 450px;
  border: 1px solid ${props => props.theme.colors.gray_high};
  background: ${props => props.theme.colors.gray_low};
`;
