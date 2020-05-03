import React, { useState } from "react";
import { Consumer } from "../../context/context";

const AddParentFolder = (props) => {
  let [name, setName] = useState("Add Folder");
  return (
    <div>
      <Consumer>
        {(data) => (
          <button className="btn btn-primary" onClick={data.addFolder}>
            {name}
          </button>
        )}
      </Consumer>
    </div>
  );
};

export default AddParentFolder;
