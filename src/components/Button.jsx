import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ backgroundColor, children, ...props }) => {

  return (
    <button
      type="button"
      className={'btn'}
      style={backgroundColor && { backgroundColor }}
      {...props}
    > 
    {children}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: '#f3f3f3',
  children: "Button",
};
