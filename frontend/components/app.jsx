import React from 'react';
import { Link } from 'react-router';
import AuthBarContainer from './authbar/authbar_container';

const App = ({children}) => (
  <div className="App">
    <AuthBarContainer />
    <div className="bodycontainer">
      {children}
    </div>
  </div>
);

export default App;
