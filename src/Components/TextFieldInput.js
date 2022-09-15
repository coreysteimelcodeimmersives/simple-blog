import React from "react";

const TextFieldInput = ({ inputTitle, setStateHook }) => {
  return (
    <>
      <div className="InputTitle">{inputTitle}</div>
      <input
        type="text"
        className="TextInputs"
        onChange={(e) => {
          setStateHook(e.target.value);
        }}
      ></input>
    </>
  );
};

export default TextFieldInput;
