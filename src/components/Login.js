import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isAlreadyUser, setIsAlreadyUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate()

  const email = useRef(null);
  const password = useRef(null);

  const handleSignUp = () => {
    setIsAlreadyUser(!isAlreadyUser);
  };

  const handleClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);

    console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isAlreadyUser) {
      //Sign up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign in form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgImage"
        />
      </div>
      <form
        className="absolute  w-3/12 bg-black mx-auto right-0 left-0 my-36 p-16 text-white rounded-lg opacity-90 "
        onSubmit={(e) => e.preventDefault()}
      >
        {isAlreadyUser ? (
          <p className="text-xl font-bold first-letter mx-2  py-4">Sign In</p>
        ) : (
          <p className="text-xl font-bold first-letter mx-2  py-4">Sign Up</p>
        )}

        {!isAlreadyUser && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 my-2 w-full bg-gray-600"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Adress"
          className="p-2 m-2 my-2 w-full bg-gray-600 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 my-2 w-full bg-gray-600"
        />
        <p className="text-red-600 font-bold">{errorMessage}</p>
        <button
          className="bg-red-700 py-2 px-4 m-2 my-6 rounded-lg w-full"
          onClick={handleClick}
        >
          {isAlreadyUser ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-lg my-6 p-2 cursor-pointer " onClick={handleSignUp}>
          {isAlreadyUser
            ? "New To Netflix? Sign Up Now"
            : "Alredy a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
