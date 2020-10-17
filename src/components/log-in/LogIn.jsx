import React from "react";
import { Button } from "../button/Button.styles";
import { signInWithGoogle } from "../../firebase/firebase";
const LogIn = () => {
  return (
    <div>
      {/* <form>
        <h1>Log in</h1>
        <input type="email" />
        <input type="password" />
        <button>Log In</button>
      </form>
      <form>
        <h1>Sign in</h1>
        <input type="email" />
        <input type="password" />
        <button>Log Sign in</button>
      </form>{" "} */}
      <Button onClick={signInWithGoogle}>Log Sign in with Google</Button>
    </div>
  );
};

export default LogIn;
