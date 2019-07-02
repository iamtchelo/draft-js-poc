import styled from '@emotion/styled';

export const Wrapper = styled.section``;

export const Toolbar = styled.div``;

export const Container = styled.div`
  margin-top: 1rem;
  padding: 10px;
  width: 650px;
  height: 450px;
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid ${props => props.theme.colors.gray_high};
  background: ${props => props.theme.colors.gray_low};
`;

export const Image = styled.img`
  display: block;
  width: 220px;
  height: auto;
`;
