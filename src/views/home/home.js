import React, { Component } from "react";
import { Provider } from "../../context/context";

import AddParentFolder from "./addParentFolder";
import ShowParentFolder from "./showParentFolder";
import AddChildFolder from "./addChildFolder";
import ShowChildFolder from "./showChildFolder";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: [],
      index: null,
      parentFolderName: "",
      childFolder: [],
    };
  }

  addNewParentFolder = () => {
    let directory = this.state.directory;
    let dirLength = directory.length;
    var folderName = prompt("Enter folder name", "");
    if (folderName) {
      directory.push({
        id: dirLength + 1,
        fileName: folderName,
        children: [],
      });
      this.setState({
        directory,
      });
    }
  };

  showChildFolder = (index) => {
    let directory = this.state.directory[index];
    this.setState({
      parentFolderName: directory.fileName,
      childFolder: directory.children,
      index: index,
    });
  };

  addChildrenFolder = () => {
    let directory = this.state.directory;
    let childLen = this.state.childFolder.length;

    let childFolderName = window.prompt("Enter folder name", "");
    if (childFolderName) {
      directory.map((dir, index) => {
        if (index === this.state.index) {
          dir.children.push({
            id: childLen + 1,
            fileName: childFolderName,
          });
        }
        this.setState({
          directory,
        });
      });
    }
  };

  render() {
    const { directory, parentFolderName, childFolder } = this.state;
    const contextValue = {
      parentFolder: this.state.directory,
      childFolder: this.state.childFolder,
      addFolder: this.addNewParentFolder,
      showChildFolder: this.showChildFolder,
      addChildrenFolder: this.addChildrenFolder,
    };
    return (
      <Provider value={contextValue}>
        <div className="container">
          {directory.length > 0 ? <ShowParentFolder /> : null}
          <div style={{ marginTop: 20 }}>
            <AddParentFolder />
          </div>
          <hr />
          {parentFolderName ? (
            <div>
              <AddChildFolder />
              <div
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Parent Folder: {parentFolderName}
              </div>
            </div>
          ) : null}

          {childFolder.length > 0 ? <ShowChildFolder /> : null}
        </div>
      </Provider>
    );
  }
}

export default Home;
