import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { Card } from './components/Card/Card';

const App = () => (
  <div className="App">
    <Header />
    <h1 className="heading">Добавление платежной карты</h1>
    <Card />
  </div>
);

export default App;
