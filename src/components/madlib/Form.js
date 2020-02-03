import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, handleChange }) => (
  <form className={styles.Form} onSubmit={onSubmit}>
    <input className={styles.input} type="text" name="one" placeholder="place" onChange={handleChange} />
    <input className={styles.input} type="text" name="two" placeholder="noun" onChange={handleChange} />
    <input className={styles.input} type="text" name="three" placeholder="adjective" onChange={handleChange} />
    <input className={styles.input} type="text" name="four" placeholder="verb" onChange={handleChange} />
    <input className={styles.input} type="text" name="five" placeholder="adjective" onChange={handleChange} />
    <input className={styles.input} type="text" name="six" placeholder="adjective" onChange={handleChange} />
    <input className={styles.input} type="text" name="seven" placeholder="plural noun" onChange={handleChange} />
    <input className={styles.input} type="text" name="eight" placeholder="adjective" onChange={handleChange} />
    <input className={styles.input} type="text" name="nine" placeholder="noun" onChange={handleChange} />
    <input className={styles.input} type="text" name="ten" placeholder="adjective" onChange={handleChange} />
    <input className={styles.input} type="text" name="eleven" placeholder="plural noun" onChange={handleChange} />
    <input className={styles.input} type="text" name="twelve" placeholder="adverb" onChange={handleChange} />
    <input className={styles.input} type="text" name="thirteen" placeholder="noun" onChange={handleChange} />
    <button className={styles.button} >Create Madlib</button>
    <button className={styles.button} type='reset' >Reset</button>
  </form>
);

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
