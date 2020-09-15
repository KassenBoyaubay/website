import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router";
import { Index } from "./index.js";
import { About } from "./about.js";
import { UserContext } from "./UserContext.js";

const App5 = () => {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => {
    user, setUser;
  }, [user, setUser]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={providerValue}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" exact component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
};

export default App5;
