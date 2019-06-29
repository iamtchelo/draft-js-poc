import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const buttons = [
  {
    label: 'Bold',
    style: 'BOLD',
  },
  {
    label: 'Italic',
    style: 'ITALIC',
  },
  {
    label: 'Underline',
    style: 'UNDERLINE',
  },
];

const InlineStyleButtons = ({toggleStyle, currentStyle}) => (
  <>
    {buttons.map(button => (
      <Button
        key={`inline-button-${button.style}`}
        onClick={toggleStyle}
        actived={currentStyle.has(button.style)}
      >
        {button.label}
      </Button>
    ))}
  </>
);

InlineStyleButtons.propTypes = {
  toggleStyle: PropTypes.func,
  currentStyle: PropTypes.object,
};

export default InlineStyleButtons;
