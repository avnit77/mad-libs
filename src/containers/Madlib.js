import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    words: [],
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: '',
    nine: '',
    ten: '',
    eleven: '',
    twelve: '',
    thirteen: ''
  }

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    toggleResult = () =>
      this.setState(state => ({ ...state, showResult: !state.showResult }));

    handleSubmit = event => {
      event.preventDefault();
      this.toggleResult();
      this.setState({ words: [this.state.one, this.state.two, this.state.three, this.state.four, this.state.five, this.state.six, this.state.seven, this.state.eight, this.state.nine, this.state.ten, this.state.eleven, this.state.twelve, this.state.thirteen] });
    }

    render() {
      const { showResult } = this.state;
      return (
        <>
          {!showResult && <Form handleChange={this.handleChange} onSubmit={this.handleSubmit}/>}
          {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
        </>
      );
    }
}
