import React from 'react';
import styled from '@emotion/styled';

const Quotes = styled.span`
  font-style: italic;
  font-size: 1.5rem;
  text-decoration: underline;
  color: #fff;
  background: ${props => props.theme.colors.primary_color_low};
`;

const PATTERN = /\".*\"/g;

const decorator = {
  strategy: (contentBlock, callback, contentState) => {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = PATTERN.exec(text)) !== null) {
      start = matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  },
  component: ({children, ...props}) => <Quotes {...props}>{children}</Quotes>,
};

export default decorator;
