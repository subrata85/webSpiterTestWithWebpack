import React from "react";
import { Consumer } from "../../context/context";

const ShowChildFolder = (props) => {
  return (
    <div>
      <Consumer>
        {(value) =>
          value.childFolder.map((dir, index) => {
            return (
              <button
                type="button"
                key={index}
                style={{
                  marginTop: 10,
                  position: "relative",
                  marginRight: 10,
                  border: 0,
                  background: "transparent",
                }}
                // onClick={() => value.showChildFolder(index)}
              >
                <img
                  alt="fileName"
                  src="https://cdn.osxdaily.com/wp-content/uploads/2017/10/folder-ios-files-app.jpg"
                  width={100}
                  height={80}
                />

                <span
                  style={{
                    // background: "red",
                    color: "#ffffff",
                    position: "absolute",
                    top: "50%",
                    display: "block",
                    textAlign: "center",
                    marginTop: -5,
                    left: 0,
                    right: 0,
                  }}
                >
                  {" "}
                  {dir.fileName}
                </span>
              </button>
            );
          })
        }
      </Consumer>
    </div>
  );
};

export default ShowChildFolder;
