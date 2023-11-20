"use client";
import { Button } from "@/components/button/Button";
import { InputField } from "@/components/input/InputField";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const navigation = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setloggedIn] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //   useEffect(() => {
  //     window.localStorage.setItem("MY_APP_STATE", JSON.stringify(loggedIn));
  //   }, []);

  //   useEffect(() => {
  //     const data = window.localStorage.getItem("MY_APP_STATE");
  //     if (data == "true") {
  //       navigation.push("/homepage");
  //     }
  //   }, []);

  // const validateEmail = (email) => {
  //   return String(email)
  //     .toLowerCase()
  //     .match(
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  //     );
  // };

  const submitHandler = () => {
    const data = { email, password };
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(
        "userData",
        JSON.stringify({ email: data.email, password: data.password })
      );
      window.localStorage.setItem("MY_APP_STATE", "true");
      const status = window.localStorage.getItem("MY_APP_STATE");
      if (status !== null) setloggedIn(JSON.parse(status));
    }
  };
  if (loggedIn == true) {
    navigation.push("/homepage");
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center py-8 border-2 shadow-md rounded-md lg:w-[40%] lg:h-fit md:w-[40%] md:h-fit sm:w-[50%] sm:h-fit xs:w-[60%] xs:h-fit w-[80%] h-fit">
        <div>
          <InputField
            classname={""}
            ref={emailRef}
            type={"email"}
            name={"email"}
            placeholder={"Enter email"}
            value={email}
            onchange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <InputField
            classname={""}
            ref={passwordRef}
            type={"password"}
            name={"password"}
            placeholder={"Enter password"}
            value={password}
            onchange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button classname={""} onclick={submitHandler}>
          Login
        </Button>

        <div className="flex justify-center items-center">
          <span className="py-2">
            New User?
            <Link
              href="/signup"
              className="ml-2 text-indigo-600 font-medium text-blue-400 no-underline"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
