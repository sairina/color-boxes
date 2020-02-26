import React, { useState } from "react";
import "./Boxes.css";
import Box from "./Box";
import { choice } from "./helpers";

function Boxes(props) {
  let [boxes, setBoxes] = useState(
    // Array.from(target, mapFn) - if Array.from gets a value of property length (16)
    // it will create a real array with length 16; each element is a rand color
    Array.from({ length: props.numBoxes }, () => choice(props.allColors))
  );

  function handleClick() {
    // get random index in numBoxes
    let randomIdx = Math.floor(Math.random() * props.numBoxes);

    setBoxes(boxes => {
      // spread out all of the boxes
      let boxCopy = [...boxes];
      // in this boxCopy array, add random index, and set equal to random color
      boxCopy[randomIdx] = choice(props.allColors);
      // return full array
      return boxCopy;
    });
  };

  const boxComponents = boxes.map((color, i) => <Box key={i} color={color} />);

  return (
    <div>
      {boxComponents}
      <div>
        <button onClick={handleClick}>Change color of a box!</button>
      </div>
    </div>
  );
}

Boxes.defaultProps = {
  numBoxes: 16,
  allColors: [
    "Aqua",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "Chocolate",
    "DodgerBlue",
    "Lavender",
    "LawnGreen",
    "Peru",
    "Plum",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Yellow",
    "YellowGreen"
  ]
};

export default Boxes;