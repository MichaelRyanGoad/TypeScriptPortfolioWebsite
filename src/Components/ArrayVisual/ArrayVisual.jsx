import React, { useState } from "react";
import Node from "./Node";
import "./ArrayVisual.css";
import bubbleSort from "./SortingAlgorithms/BubbleSort";
import selectionSort from "./SortingAlgorithms/SelectionSort";
import mergeSort from "./SortingAlgorithms/MergeSort";
import { useForm } from "../useForm";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const MemoNode = React.memo(
  (props) => {
    console.log(`rendering node: ${props.num}::${props.index}`);
    return (
      <Node
        key={props.num + "::" + props.index}
        index={props.index}
        num={props.num}
        styleInfo={props.styleInfo}
        arrSize={props.arrSize}
        latestAlgo={props.latestAlgo}
      />
    );
  },
  (prevProps, nextProps) =>
    prevProps.num === nextProps.num &&
    prevProps.index === nextProps.index &&
    prevProps.index !== prevProps.styleInfo.pos &&
    nextProps.index !== nextProps.styleInfo.pos &&
    (prevProps.latestAlgo === "bubbleSort"
      ? prevProps.index !== prevProps.styleInfo.pos + 1 &&
        nextProps.index !== nextProps.styleInfo.pos + 1
      : prevProps.latestAlgo === "selectionSort"
      ? prevProps.index !== prevProps.styleInfo.minPos &&
        nextProps.index !== nextProps.styleInfo.minPos &&
        prevProps.index !== nextProps.styleInfo.minPos &&
        nextProps.index !== prevProps.styleInfo.minPos
      : false)
);

function ArrayVisual() {
  //Array and array metadata
  const [myArray, setMyArray] = useState(() =>
    shuffle(generateStandardArray(10))
  );
  const [arrSize, setArrSize] = useState(10);

  //CSS Information about sorting positions
  const [styleInfo, setStyleInfo] = useState(() => {
    return { pos: -2, minPos: -1 };
  });

  //latest ran algorithm
  const [algo, setAlgo] = useState(() => "bubbleSort");

  //Metadata for disabling UI
  const [isRunning, setIsRunning] = useState(false);

  //Form data
  const [values, handleChange] = useForm({ newSize: arrSize, stepDelay: 300 });

  //function to refresh any variables effecting node style
  function refresh() {
    setStyleInfo({ pos: -2, minPos: -1 });
  }

  useEffect(() => {
    setArrSize(values.newSize);
    setMyArray(shuffle(generateStandardArray(values.newSize)));
  }, [values.newSize]);

  return (
    <>
      <div className="container">
        <h1>Data Sorting Visual</h1>
      </div>
      <div className="container">
        <div className="header">
          <br />
          {/* Bubble Sort Button */}
          <Button
            disabled={isRunning}
            onClick={() => {
              refresh();
              setAlgo("bubbleSort");
              bubbleSort(
                myArray,
                values.stepDelay,
                setMyArray,
                setIsRunning,
                setStyleInfo
              );
            }}
          >
            Bubble Sort
          </Button>{" "}
          {/* Selection Sort Button */}
          <Button
            disabled={isRunning}
            onClick={() => {
              refresh();
              setAlgo("selectionSort");
              selectionSort(
                myArray,
                values.stepDelay,
                setMyArray,
                setIsRunning,
                setStyleInfo
              );
            }}
          >
            Selection Sort
          </Button>{" "}
          {/* Merge Sort Button */}
          <Button
            disabled={isRunning}
            onClick={() => {
              refresh();
              setAlgo("mergeSort");
              mergeSort(
                myArray,
                values.stepDelay,
                setMyArray,
                setIsRunning,
                setStyleInfo
              );
            }}
          >
            Merge Sort
          </Button>{" "}
          <br />
          {/* Array Size Slider + Label */}
          <input
            disabled={isRunning}
            name="newSize"
            type="range"
            min="4"
            max="100"
            id="sizeRange"
            placeholder={values.newSize}
            onChange={handleChange}
          ></input>
          <label htmlFor="sizeRange">Array Size: {values.newSize}</label>
          <br />
          {/* Step Delay input + label */}
          <label htmlFor="delayInput">Step delay(ms): </label>
          <input
            disabled={isRunning}
            name="stepDelay"
            type="number"
            min="0"
            id="delayInput"
            value={values.stepDelay}
            onChange={handleChange}
          ></input>
          <br />
          <Button
            disabled={isRunning}
            onClick={() => setMyArray((myArray) => [...shuffle(myArray)])}
          >
            Shuffle Array
          </Button>
          <br />
          <br />
        </div>
      </div>

      <Jumbotron>
        <div className="node-row">
          {myArray.map((val, index) => (
            <MemoNode
              key={val + "::" + index}
              index={index}
              num={val}
              styleInfo={styleInfo}
              arrSize={arrSize}
              latestAlgo={algo}
            />
          ))}
        </div>
      </Jumbotron>
    </>
  );
}

function generateStandardArray(arrLen) {
  console.log("generate standard array called");
  let retArr = [];
  for (let i = 0; i < arrLen; i++) {
    retArr.push(i);
  }
  return retArr;
}

function shuffle(array) {
  console.log("shuffle called");
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default ArrayVisual;
