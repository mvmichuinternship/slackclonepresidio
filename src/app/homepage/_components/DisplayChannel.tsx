"use client";

import { Button } from "@/components/button/Button";
import ChannelSpace from "@/components/channel/ChannelSpace";
import { InputField } from "@/components/input/InputField";
import TextEditor from "@/components/texteditor/TextEditor";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type DisplayChannelProps = {
  id: string;
};

const DisplayChannel = ({ id }: DisplayChannelProps) => {
  const navigation = useRouter();

  const [textEditor, setTextEditor] = useState("");
  const [loggedIn, setloggedIn] = useState(false);

  const textEditorRef = useRef(null);
  let nextId = 0;
  const [messages, setMessages] = useState([
    {
      id: String(++nextId),
      timestamp: "12.05.07",
      member: {
        name: "abc",
        profile: "",
      },
      message:
        "You can achieve focus in an element programmatically by calling focus() on the node instance. Because the DOM exposes this as a function call, the best way to do this in React is to create a ref and manually do it when we think it’s suitable, as shown below",
    },
    {
      id: String(++nextId),
      timestamp: "13.05.07",
      member: {
        name: "xyz",
        profile: "",
      },
      message:
        "In this modal, we allow the user to modify a value already set in the screen below. It would be a better UX if the input",
    },
  ]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      if (window.localStorage.getItem("messages") !== null) {
        setMessages(JSON.parse(localStorage.getItem("messages") || ""));
        //   const msgData=JSON.parse(userData)
      }
    }
  }, []);

  // useEffect(() => {
  //     window.localStorage.setItem('MY_APP_STATE', JSON.stringify(loggedIn));
  //   }, [loggedIn]);

  useEffect(() => {
    const data = window.localStorage.getItem("MY_APP_STATE");
    if (data !== null) setloggedIn(JSON.parse(data));
  }, []);

  useEffect(() => {
    // console.log(messages);
  }, [messages]);

  const SubmitHandler = async (e: any) => {
    e.preventDefault();
    const newMessage = {
      id: String(Number(++nextId)),
      timestamp: new Date().toLocaleString(),
      member: {
        name: JSON.parse(window.localStorage.getItem("userData") || "").name,
        profile: JSON.parse(window.localStorage.getItem("userData") || "")
          .profilePic,
      },
      message: textEditor,
    };

    await setMessages([...messages, newMessage]);

    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(
        "messages",
        JSON.stringify([...messages, newMessage])
      );
    }
    console.log("yess");
  };
  //   if(!loggedIn) {
  //     navigation.push("/login");
  //   }

  return (
    loggedIn && (
      <div className="w-full h-full flex flex-col justify-end items-center ">
        <div className="w-full flex flex-col items-start justify-center overflow-y-auto z-1">
          {messages.map((message) => (
            <>
              <ChannelSpace
                id={message.id}
                timestamp={message.timestamp}
                member={{
                  name: message.member.name,
                  profile: message.member.profile,
                }}
                message={message.message}
              />
              {/* {console.log("good")} */}
            </>
          ))}
        </div>
        <div className="w-full px-20 lg:px-20 md:px-15 sm:px-10 xs:px-5 flex space-x-3 ">
          <InputField
            classname="lg:h-[150px] md:h-[150px] sm:h-[100px] xs:h-[50px] h-[50px] w-full border-blue-400"
            ref={textEditorRef}
            type="textarea"
            name="textEditor"
            placeholder={"Enter message"}
            value={textEditor}
            onchange={(e: any) => setTextEditor(e.target.value)}
          />
          <div className="flex justify-end items-end">
            <Button classname={"bg-blue-400 "} onclick={SubmitHandler}>
              Send
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default DisplayChannel;
