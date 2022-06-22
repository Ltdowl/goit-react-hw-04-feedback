import React from 'react';
import PropTypes from 'prop-types';
import styles from './OptionButton.module.css';
export default function OptionButton({ name, onClickAction }) {
  return (
    <button
      className={styles['button']}
      type="button"
      name={name}
      onClick={onClickAction}
    >
      {name}
    </button>
  );
}

OptionButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
};
