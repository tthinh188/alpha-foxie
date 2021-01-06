import React from "react";

import './App.css';
import Admin from "./Admin"
import UserPage from "./UserPage"
import Login from "./Login"

import { useStateValue } from "./StateProvider"

function App() {
  const [{user}, dispatch] = useStateValue();
  
  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
          <Admin />
        )}
    </div>
  );
}

export default App;
