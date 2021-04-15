import { useEffect, useState } from "react";
import "./SearchingVisual.css";

const MapNode = (props) => {
  const [nType, setNType] = useState(props.nType || 0);

  useEffect(() => {
    console.log("render called on mapnode:" + props.id);
  });

  let backgroundColor = "wheat";
  let typeText = "";

  let width = 94 / props.col;
  let height = 50 / props.row;

  if (width < height) {
    height = width;
  } else {
    width = height;
  }

  width = width + "vmin";
  height = height + "vmin";

  switch (nType) {
    case 0:
      break;
    case 1:
      backgroundColor = "brown";
      typeText = "BLOCKED";
      break;
    case 2:
      backgroundColor = "green";
      typeText = "START";
      break;
    case 3:
      backgroundColor = "red";
      typeText = "GOAL";
      break;
    default:
      console.log("how did you get here? - MapNode.jsx");
  }

  const switchBackground = (e) => {
    if (e.type === "click" || e.shiftKey) {
      setNType(props.blockType);
      props.setMapNodes((mn) => {
        mn[props.ind][props.colInd] = props.blockType;
        return mn;
      });
    }
  };

  return (
    <div
      className="MapNode"
      style={{ backgroundColor, width, height }}
      onClick={(e) => {
        switchBackground(e);
      }}
      onMouseOver={(e) => {
        switchBackground(e);
      }}
      on
    >
      {typeText}
    </div>
  );
};

export default MapNode;
