"use client";
import { useState, useRef, Fragment, useEffect } from "react";
import DisplayChannel from "./_components/DisplayChannel";
// import SendEmail from "./_components/EmailNotification";
import emailjs from "@emailjs/browser";

// import { Fragment } from "@tiptap/pm/model";
import React from "react";
import { InputField } from "@/components/input/InputField";
import { Button } from "@/components/button/Button";
import { Modal } from "@/components/modal/Popup";
import DirectMessage from "./_components/DirectMessage";

const HomePage = () => {
  const [trigger, setTrigger] = useState("channel");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [modalMemberVisible, setModalMemberVisible] = useState(false);
  const emailRef = useRef(null);

  const [name, setName] = useState("");
  const [modalChannelVisible, setModalChannelVisible] = useState(false);
  const channelRef = useRef(null);

  let channelid = 0;
  // let memberid=0;
  const [addMembers, setAddMembers] = useState([
    "Person1",
    // memberid: "1234",

    "Person2",
    // memberid: "1234",

    "Person3",
    // memberid: "1234",
  ]);
  const [addChannels, setAddChannels] = useState([
    {
      channelname: "Channel1",
      channelid: "1234",
    },
    {
      channelname: "Channel2",
      channelid: "1234",
    },
    {
      channelname: "Channel3",
      channelid: "1234",
    },
  ]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      if (window.localStorage.getItem("addChannels") !== null) {
        setAddChannels(JSON.parse(localStorage.getItem("addChannels") || ""));
        if (window.localStorage.getItem("addMembers") !== null) {
          setAddMembers(JSON.parse(localStorage.getItem("addMembers") || ""));
        }
      }
    }
  }, []);

  const form = useRef(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      emailRef.current
    ) {
      emailjs
        .send("service_0tcb4cm", "template_9eq4q5l", {
          from_name: JSON.parse(window.localStorage.getItem("userData") || "")
            .email,
          to_name: email,
          reply_to: "",
        })
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  const closeMemberHandler = () => {
    setModalMemberVisible(false);
  };
  const submitMemberHandler = async (e: any) => {
    e.preventDefault();
    const newMember = email;
    await setAddMembers([...addMembers, newMember]);

    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(
        "addMembers",
        JSON.stringify([...addMembers, newMember])
      );
    }
    closeMemberHandler();
    // <SendEmail email={addMembers}/>
  };

  const closeChannelHandler = () => {
    setModalChannelVisible(false);
  };
  const submitChannelHandler = async (e: any) => {
    e.preventDefault();
    const newChannel = {
      channelid: String(channelid++),
      channelname: name,
    };
    await setAddChannels([...addChannels, newChannel]);

    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(
        "addChannels",
        JSON.stringify([...addChannels, newChannel])
      );
    }
    closeChannelHandler();
    sendEmail(e);
  };

  return (
    <Fragment>
      <div className="flex h-screen ">
        <div className="w-[25%] lg:w-[15%] md:w-[15%] sm:w-[15%] xs:w-[15%] h-full flex flex-col items-center justify-start">
          <div className="flex flex-col items-start justify-start h-1/3  py-5 pt-20 px-2 xs:px-2 sm:px-0  ">
            <div
              className="text-lg py-3.5 cursor-pointer "
              onClick={() => setModalChannelVisible(true)}
            >
              Channels
            </div>
            {addChannels.map((channel) => (
              <div key={channel.channelid}
                onClick={() => {
                  channel.channelid && setTrigger("channel");
                  setId(channel.channelid);
                }}
                className=" cursor-pointer h-4/12 py-2 "
              >
                #{channel.channelname}
              </div>
            ))}

            <div
              className="text-lg py-3.5 cursor-pointer "
              onClick={() => setModalMemberVisible(true)}
            >
              DMs
            </div>
            {addMembers.map((dm) => (
              <div key={dm.memberid}
                onClick={() => {
                  setTrigger("person");
                  // setId(dm.memberid)
                }}
                className=" cursor-pointer h-4/12 py-2 text-clip text-sm"
              >
                {dm}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[75%] lg:w-[85%] md:w-[85%] sm:w-[85%] xs:w-[85%] h-full  ">
          <div className=" h-full  py-5 pt-20 bg-blue-50 px-2 xs:px-3 sm:px-4 md:px-10 w-[100%] ">
            {trigger === "channel" && <DisplayChannel id={id} />}
            {trigger === "person"} <DirectMessage id={id} />
          </div>
        </div>
      </div>
      <Modal
        classname={""}
        onClose={() => closeMemberHandler()}
        isVisible={modalMemberVisible}
      >
        <div className="flex flex-col justify-center items-center">
          <h4>Invite Members</h4>
          <div>
            <InputField
              classname={""}
              ref={emailRef}
              type={"email"}
              name={"email"}
              placeholder={"Enter member's Email"}
              value={email}
              onchange={(e: any) => setEmail(e.target.value)}
            />
          </div>
          <Button classname={""} onclick={submitMemberHandler}>
            Add Member
          </Button>

          <div>
            {addMembers.map((member) => (
              <div div key={member.memberid}
                className={`${member.length >= 1} ? border px-2 py-2 : hidden`}
              >
                {member}
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <Modal
        classname={""}
        onClose={() => closeChannelHandler()}
        isVisible={modalChannelVisible}
      >
        <div className="flex flex-col justify-center items-center">
          <h4>Create Channel</h4>
          <div>
            <InputField
              classname={""}
              ref={channelRef}
              type={"channel"}
              name={"channel"}
              placeholder={"Enter Channel Name"}
              value={name}
              onchange={(e: any) => setName(e.target.value)}
            />
          </div>
          <Button classname={""} onclick={submitChannelHandler}>
            Create Channel
          </Button>

          <div>
            {addMembers.map((member) => (
              <div div key={member.memberid}
                className={`${member.length >= 1} ? border px-2 py-2 : hidden`}
              >
                {member}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default HomePage;
