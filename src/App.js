import React, { Component } from 'react';

import logo from './logo.svg';
import styles from './App.css';

import Button from './components/Elements/Button/Button.jsx';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1>Annie's Guide to Great Style and Components in React!</h1>
        </div>
        <p className={styles.intro}>
          This is my styleguide!
        </p>
        <div>
          <Button 
            buttonStyle="primary" 
            size="large"
            onClick={(e) => alert('You clicked a unique button!', e.target)}
          >
            Working Button!
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
