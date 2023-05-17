import React from "react";
import "./Login.scss";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../features/firebase";
import { signInWithPopup } from "firebase/auth";
import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt=""
        />

        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
