import React from 'react'
import GetData from './axios/axios'

function App() {
  return (
    <div className="App">
      <button onClick={() => GetData()}>GetData</button>
    </div>
  );
}

export default App;
