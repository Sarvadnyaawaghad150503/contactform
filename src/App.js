import React from 'react';
import './App.css'; // Import the CSS file

import ContactForm from './Contactform/Contactform';
import Try from '../src/Try';

const App = () => {
  return (
    <div className="App">
      <Try className="Try" />
      <ContactForm className="ContactForm" />
    </div>
  );
};

export default App;
