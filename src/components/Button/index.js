import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ButtonStyled = styled.button(({theme, actived}) => ({
  padding: '7px 12px',
  marginRight: '10px',
  fontSize: '0.9rem',
  fontWeight: 'bold',
  borderRadius: '5px',
  outline: 'none',
  cursor: 'pointer',
  border: `1px solid ${theme.colors.primary_color_low}`,
  color: actived ? '#FFF' : theme.colors.primary_color,
  background: actived ? theme.colors.primary_color_low : '#FFF',
}));

const Button = ({actived, onClick, children}) => (
  <ButtonStyled type="button" actived={actived} onMouseDown={onClick}>
    {children}
  </ButtonStyled>
);

Button.defaultProps = {
  actived: false,
};

Button.propTypes = {
  actived: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
