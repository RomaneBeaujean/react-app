import React from 'react';
import {increment, decrement} from './redux/actions';
import { useSelector, useDispatch} from 'react-redux';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => store.dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
