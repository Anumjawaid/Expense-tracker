import React from 'react';
import './App.css';
import Child from './history';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <>
    <TransactionProvider>
    <Child></Child>
    </TransactionProvider>
    </>
  );
}

export default App;
