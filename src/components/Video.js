import React from "react";
import { useContext } from "react";
import { Context } from "./context";
import "./Video.css";
import { End } from "./End";
import { Form } from "./Form";

function Videos(props) {
  const videoRef = React.useRef(null);
  var { currentIndex, page, setPage, selectedItems } = useContext(Context);
  const videourl = selectedItems[currentIndex].name;

  return (
    <div className="Videos">
      {currentIndex === null ? (
        <End />
      ) : (
        (() => {
          switch (page) {
            case "Form":
              return <Form />;

            case "Video":
              return (
                <video
                  src={videourl}
                  style={{ height: "100%", backgroundColor: "black" }}
                  onEnded={() => {
                    setPage("Form");
                  }}
                  ref={videoRef}
                  type="video/mp4"
                  muted
                  autoPlay
                  preload="auto"
                ></video>
              );
          }
        })()
      )}
    </div>
  );
}

export default Videos;
