import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from '../lib/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Calendar year={2022} month={1}
                onClickCell={() => console.log('a')}
                onClickPrevBtn={() => console.log('prev')}/>
    </div>
  );
}

export default App;
