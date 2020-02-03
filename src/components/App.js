
import React, { Component } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import Madlib from '../containers/Madlib';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Madlib />
        <Footer />
      </React.Fragment>
    );
  }
}
