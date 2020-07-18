import React from 'react';
const Button = (props) => {
  const { showComponent, isDisable, content } = props;
  return (
    <button type="button" disabled={isDisable} onClick={() => showComponent()}>
      {content}
    </button>
  );
};
export default Button;

Button.propTypes = {
  showComponent: PropTypes.func.isRequired,
  isDisable: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
};