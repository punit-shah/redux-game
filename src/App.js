import React from 'react';
import { string } from 'prop-types';

const App = ({ message }) => (
  <div className="App">
    <h1>{message}</h1>
  </div>
);

App.propTypes = {
  message: string.isRequired,
};

export default App;
