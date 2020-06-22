import React from 'react';
import './App.css';
import Child from './history';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <div className="container">
    <TransactionProvider>
    <Child></Child>
    </TransactionProvider>
    </div>
  );
}

export default App;
