import React from 'react'; // shortcut: rafc
import PropTypes from 'prop-types'; // impt

export default function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
