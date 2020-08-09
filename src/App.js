import React from 'react';
import Header from "./components/Header";
import UserSearch from './components/UserSearch';

function App() {
  return (
    <div className="App">
      <wrapper>
        <Header />
        <UserSearch />
      </wrapper>
    </div>
  );
}

export default App;
