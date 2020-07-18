import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

// {title: "Algum título", content: "Algum conteúdo", timeSeconds: 3 }

const Alert = (props) => {
  const { hideComponent, children: { title, content, timeSeconds } } = props;
  setTimeout(() => hideComponent(), timeSeconds * 1000);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Alert;

Alert.propTypes = {
  hideComponent: PropTypes.func.isRequired,
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timeSeconds: PropTypes.number.isRequired,
  }),
};

Alert.defaultProps = {
  children: {
    title: "Algum título",
    content: "Algum conteúdo",
    timeSeconds: 3
    },
}