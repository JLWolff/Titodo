import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.page';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;
