import React, { useState } from "react";
import validateText from "../Utils/Validation";
import TextFieldInput from "./TextFieldInput";

const SignIn = ({
  pageTitle,
  setUserName,
  setProfileImg,
  setShowBlogs,
  userName,
  profileImg,
}) => {
  const [userNameMssg, setUserNameMssg] = useState("");
  const [profileImgMssg, setProfileImgMssg] = useState("");
  return (
    <>
      <div className="PageTitle">{pageTitle}</div>
      <TextFieldInput
        inputTitle={"Username:"}
        setStateHook={setUserName}
      ></TextFieldInput>
      <TextFieldInput
        inputTitle={"Profile Photo URL:"}
        setStateHook={setProfileImg}
      ></TextFieldInput>
      <button
        className="BlogButton"
        onClick={() => {
          setUserNameMssg("");
          setProfileImgMssg("");
          const userNameValid = validateText(userName);
          const photoUrlValid = validateText(profileImg);
          if (userNameValid && photoUrlValid) {
            setShowBlogs(true);
          }
          if (!userNameValid) {
            setUserNameMssg("Please enter a Username.");
          }
          if (!profileImg) {
            setProfileImgMssg("Please enter Photo URL.");
          }
        }}
      >
        Sign In
      </button>
      <div className="Mssg">{userNameMssg}</div>
      <div className="Mssg">{profileImgMssg}</div>
    </>
  );
};

export default SignIn;
