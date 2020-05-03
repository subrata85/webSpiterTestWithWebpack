import React, { useState } from "react";
import { Consumer } from "../../context/context";

const AddChildFolder = (props) => {
  let [name, setName] = useState("Add Child Folder");
  return (
    <div>
      <Consumer>
        {(data) => (
          <button
            className="btn btn-info"
            onClick={() => data.addChildrenFolder()}
          >
            {name}
          </button>
        )}
      </Consumer>
    </div>
  );
};

export default AddChildFolder;
