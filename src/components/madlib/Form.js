import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onChange, onSubmit, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve }) => (
  <form onSubmit={onSubmit} onChange={onChange}>
    <input type="text" placeholder="adjective" />
    <input type="text" placeholder="noun" />
    <input type="text"  placeholder="verb, past tense" />
    <input type="text"  placeholder="adverb" />
    <input type="text" placeholder="adjective" />
    <input type="text"  placeholder="noun" />
    <input type="text" placeholder="noun" />
    <input type="text"  placeholder="adjective" />
    <input type="text" placeholder="verb" />
    <input type="text"  placeholder="adverb" />
    <input type="text"  placeholder="verb, past tense" />
    <input type="text"  placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  one: PropTypes.string.isRequired,
  two: PropTypes.string.isRequired,
  three: PropTypes.string.isRequired,
  four: PropTypes.string.isRequired,
  five: PropTypes.string.isRequired,
  six: PropTypes.string.isRequired,
  seven: PropTypes.string.isRequired,
  eight: PropTypes.string.isRequired,
  nine: PropTypes.string.isRequired,
  ten: PropTypes.string.isRequired,
  eleven: PropTypes.string.isRequired,
  twelve: PropTypes.string.isRequired
};

export default Form;
