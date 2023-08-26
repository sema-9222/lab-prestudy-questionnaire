import { useEffect } from "react";
import "./Instruction.css";
import cute from "./cute.mp4";

export function End(props) {
  const closeTab = () => {
    window.opener = null;
    window.open("", "_self");
    window.close();
  };

  useEffect(() => {
    localStorage.setItem("isAlreadyFinished", "true");
  }, []);

  return (
    <div className="consent">
      <div className="instruction">
        <h2>KATILIMINIZ İÇİN TEŞEKKÜRLER!</h2>
        <div className="instruction-p">
          <video
            src={cute}
            style={{ width: "100%" }}
            autoPlay
            muted
            onEnded={closeTab}
          ></video>
        </div>
      </div>
    </div>
  );
}
