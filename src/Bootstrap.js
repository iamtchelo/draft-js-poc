import React from 'react';
import styled from '@emotion/styled';
import Editor from './components/Editor';

const Wrapper = styled.section`
  margin: 5rem auto 0 auto;
  width: 672px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3.5rem;
  text-align: center;
  color: ${props => props.theme.colors.primary_color};
`;

const Bootstrap = () => (
  <Wrapper>
    <Title>Rich text editing with Draft.js</Title>
    <Editor />
  </Wrapper>
);

export default Bootstrap;
