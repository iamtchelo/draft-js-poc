import React from 'react';
import styled from '@emotion/styled';

const Hashtag = styled.span`
  padding: 5px;
  font-size: 0.8rem;
  color: #fff;
  border-radius: 5px;
  background: ${props => props.theme.colors.primary_color_low};
`;

const PATTERN = /\#[\w\u0590-\u05ff]+/g;

const decorator = {
  strategy: (contentBlock, callback, contentState) => {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = PATTERN.exec(text)) !== null) {
      start = matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  },
  component: ({children, ...props}) => <Hashtag {...props}>{children}</Hashtag>,
};

export default decorator;
