import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#6c757d";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-5">
        <TextBox heading="Text manipulator" mode={mode} />
      </div>
    </>
  );
}

export default App;
