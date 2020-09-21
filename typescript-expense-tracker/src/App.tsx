import React from 'react';
import { Items } from './components/Items';
import { List } from './components/List';
import './App.css';
import { Header } from './Header';
import { AppProvider } from './components/context';

function App() {
  return (
    <AppProvider>
      <Header />
      <Items />
      <List />
    </AppProvider>
  );
}

export default App;
