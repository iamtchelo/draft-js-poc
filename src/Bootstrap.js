import React from 'react';
import styled from '@emotion/styled';
import Editor from './components/Editor';

const Wrapper = styled.section`
  margin: 0 auto;
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

const Copyright = styled.span`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${props => props.theme.colors.gray_high};
`;

const Heart = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  transform: scale(1);
  color: ${props => props.theme.colors.primary_color_low};
  animation: love 0.5s infinite linear alternate-reverse;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.primary_color_low};
`;

const Bootstrap = () => (
  <Wrapper>
    <Title>Rich text editing with Draft.js</Title>
    <Editor />
    <Copyright>
      Made with <Heart>♥</Heart> by{' '}
      <Link href="https://github.com/iamtchelo" target="_blank">
        Marcelo Silva
      </Link>
    </Copyright>
  </Wrapper>
);

export default Bootstrap;
