import { useEffect, useState } from "react";
import "./App.css";
import Videos from "./components/Video";
import "./Form.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Consent } from "./components/Consent";
import { Instruction } from "./components/Instruction";
import { Form } from "./components/Form";
import { ContextProvider } from "./components/context";
import { Routes, Route } from "react-router-dom";
import { Rejection } from "./components/Rejection";

function App(props) {
  const handle = useFullScreenHandle();
  const [isAlreadyFinished, setIsAlreadyFinished] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        return false;
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  function consentClick(e) {
    handle.enter();
  }

  useEffect(() => {
    const finished = localStorage.getItem("isAlreadyFinished");
    if (finished === "true") {
      setIsAlreadyFinished(true);
    }
  }, []);

  if (isAlreadyFinished) {
    return <Rejection />;
  }

  return (
    <div className="App">
      <ContextProvider>
        <FullScreen handle={handle}>
          <Routes>
            <Route path="/" element={<Consent onClick={consentClick} />} />
            <Route path="/Instruction" element={<Instruction />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </FullScreen>
      </ContextProvider>
    </div>
  );
}

export default App;
