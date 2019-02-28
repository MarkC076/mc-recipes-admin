import React, { Component } from 'react';
import StyledDiv from "./App.css.js";
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <StyledDiv>
        <Header />
      </StyledDiv>
    );
  }
}

export default App;
