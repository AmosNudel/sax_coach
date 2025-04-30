import React from 'react';
import { useAppSelector, useAppDispatch } from './store';
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice';
import './App.css';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux TypeScript Example</h1>
        <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <span>{count}</span>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
        <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      </header>
    </div>
  );
}

export default App;
