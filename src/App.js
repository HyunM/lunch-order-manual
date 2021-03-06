import { Admin } from "./Admin";
import { User } from "./User";
import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [state, setstate] = useState(0);
  return (
    <div className="responsive">
      <h2>Lunch Order Manual</h2>
      <ul>
        <li
          style={
            state === 1
              ? {
                  color: "red",
                  cursor: "pointer",
                }
              : {
                  color: "blue",
                  cursor: "pointer",
                }
          }
          onClick={() => setstate(1)}
        >
          Admin
        </li>

        <li
          style={
            state === 2
              ? {
                  color: "red",
                  cursor: "pointer",
                }
              : {
                  color: "blue",
                  cursor: "pointer",
                }
          }
          onClick={() => setstate(2)}
        >
          User
        </li>
      </ul>
      {state === 1 && <Admin />}
      {state === 2 && <User />}
    </div>
  );
};

export default App;
