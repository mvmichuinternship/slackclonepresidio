"use client";
import { Button } from "@/components/button/Button";
import { InputField } from "@/components/input/InputField";
import Link from "next/link";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const navigation = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = () => {
    const data = { name, profilePic, email, password, confirmPassword };
    // console.log(data);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          name: data.name,
          profilePic: data.profilePic,
          email: data.email,
          password: data.password,
        })
      );
      navigation.push("/homepage");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center py-8 border-2 shadow-md rounded-md lg:w-[40%] lg:h-fit md:w-[40%] md:h-fit sm:w-[50%] sm:h-fit xs:w-[60%] xs:h-fit w-[80%] h-fit">
        <div>
          <InputField
            classname={""}
            ref={passwordRef}
            type={"text"}
            name={"name"}
            placeholder={"Enter name"}
            value={name}
            onchange={(e: any) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="">
          <InputField
            classname={""}
            ref={emailRef}
            type={"text"}
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
        <div>
          <InputField
            classname={""}
            ref={passwordRef}
            type={"password"}
            name={"confirmPassword"}
            placeholder={"Enter password"}
            value={confirmPassword}
            onchange={(e: any) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <InputField
            classname={""}
            ref={passwordRef}
            type={"text"}
            name={"profilePic"}
            placeholder={"Enter profile URL"}
            value={profilePic}
            onchange={(e: any) => {
              setProfilePic(e.target.value);
            }}
          />
        </div>

        <Button classname={""} onclick={submitHandler}>
          SignUp
        </Button>

        <div className="flex justify-center items-center">
          <span className="py-2">
            Already a User?
            <Link
              href="/login"
              className="ml-2 text-indigo-600 font-medium text-blue-400 no-underline"
            >
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
