import React from "react";
import Header from "./components/Header";
import UserSearch from "./components/UserSearch";

function App() {
  return (
    <>
      <Header />
      <div className="App container-fluid">
        <div className="row">
          <div className="col-12">
            <UserSearch />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
