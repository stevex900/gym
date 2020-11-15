import React from "react";
import { Button } from "../button/Button.styles";
import { signInWithGoogle } from "../../firebase/firebase";
const LogIn = () => {
  return (
    <div>
      <Button onClick={signInWithGoogle}>Log Sign in with Google</Button>
    </div>
  );
};

export default LogIn;
