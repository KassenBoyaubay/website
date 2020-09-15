import React, { useContext } from "react";
import { UserContext } from "./UserContext.js";

export function Index() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Index</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            //call logout
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
}

const login = () => {};
