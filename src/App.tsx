import React from 'react';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">掲示板</h1>
      <span>スレッドを立てる</span>
    </div>
  );
}

export default App;
