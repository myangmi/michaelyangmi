import React from 'react';
import { Container } from '@material-ui/core';
import '../App.css';
import View from './View.jsx';

const App = () => (
  <Container className="App" component="div" disableGutters maxWidth={false}>
    <View />
  </Container>
);

export default App;
