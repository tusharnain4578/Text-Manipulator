import React, { useState } from "react";

function TextBox(props) {
  var [text, setText] = useState("Enter Text Here");

  const toUpper = () => {
    setText(text.toUpperCase());
  };
  const toLower = () => {
    setText(text.toLowerCase());
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  // const [btnText, setBtn] = useState("Enable Dark Mode");

  // const [theme, setTheme] = useState({
  //   backgroundColor: "white",
  //   color: "black",
  // });

  // const changeTheme = () => {
  //   if (btnText === "Enable Dark Mode") {
  //     setTheme({
  //       backgroundColor: "black",
  //       color: "white",
  //     });
  //     setBtn("Enable Light Mode");
  //   } else {
  //     setTheme({
  //       backgroundColor: "white",
  //       color: "black",
  //     });
  //     setBtn("Enable Dark Mode");
  //   }
  // };

  const darkTheme = {
    backgroundColor: "black",
    color: "white",
  };
  const lightTheme = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <textarea className="form-control" style={props.mode === "light" ? lightTheme : darkTheme} rows="20" value={text} onChange={onChange}></textarea>
        <button style={props.mode === "light" ? lightTheme : darkTheme} className="btn btn-primary my-2" onClick={toUpper}>
          Uppercase
        </button>
        <button style={props.mode === "light" ? lightTheme : darkTheme} className="btn btn-primary my-2 mx-2" onClick={toLower}>
          Lowercase
        </button>
        {/* <button style={theme} className="btn btn-primary my-2 mx-2 flright" onClick={changeTheme}>
          {btnText}
        </button> */}
      </div>
      <div className="my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
      </div>
    </>
  );
}

export default TextBox;
