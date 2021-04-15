import FizzBuzzNode from "./FizzBuzzNode";
import { useState, useMemo } from "react";

const FizzBuzzAlgo = (
  fizzDict = { 3: "Fizz", 5: "Buzz" },
  low = 1,
  high = 100
) => {
  let FizzBuzzValues = [];
  for (let val = low; val <= high; val++) {
    let entry = "";
    for (let num in fizzDict) {
      if (val % num === 0) {
        entry += fizzDict[num];
      }
    }
    if (entry === "") {
      entry = val;
    }
    FizzBuzzValues.push(entry);
  }
  return FizzBuzzValues;
};

const FizzBuzz = () => {
  const [low, setLow] = useState(1);
  const [high, setHigh] = useState(100);
  const [newKey, setNewKey] = useState(0);
  const [newWord, setNewWord] = useState("Nothing is divisible by 0.");
  const [fizzDict, setFizzDict] = useState({ 3: "Fizz", 5: "Buzz" });

  const FizzBuzzValues = useMemo(() => FizzBuzzAlgo(fizzDict, low, high), [
    fizzDict,
    low,
    high,
  ]);

  return (
    <>
      <h1 className="center">Fizz Buzz Page</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <label>Lower Limit:</label>
          <input
            type="number"
            value={low}
            onChange={(e) => {
              const newNum = parseInt(e.target.value);
              if (!isNaN(newNum)) {
                if (newNum > 10000) {
                  setLow(10000);
                } else if (newNum < -10000) {
                  setLow(-10000);
                } else {
                  setLow(newNum);
                }
              }
            }}
          />
        </div>
        <div>
          <label>Upper Limit:</label>
          <input
            type="number"
            value={high}
            onChange={(e) => {
              const newNum = parseInt(e.target.value);
              if (!isNaN(newNum)) {
                if (newNum > 10000) {
                  setHigh(10000);
                } else if (newNum < -10000) {
                  setHigh(-10000);
                } else {
                  setHigh(newNum);
                }
              }
            }}
          />
        </div>
        <div>
          <p className="center">FizzBuzz Dictionary:</p>
          {Object.keys(fizzDict).map((key) => (
            <p key={key + "p"} className="center">
              {key}:{fizzDict[key]}
            </p>
          ))}
        </div>
        <div>
          <input
            type="number"
            value={newKey}
            onChange={(e) => {
              const newNum = parseInt(e.target.value);
              if (!isNaN(newNum)) {
                setNewKey(newNum);
              } else {
                setNewKey((state) => state);
              }
            }}
          />
          <input
            type="text"
            value={newWord}
            onChange={(e) => {
              setNewWord(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              setFizzDict({ ...fizzDict, [newKey]: newWord });
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              let newFizzDict = { ...fizzDict };
              delete newFizzDict[newKey];
              setFizzDict(newFizzDict);
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="container col">
        {FizzBuzzValues.map((val, idx) => (
          <FizzBuzzNode key={idx + "::" + val} val={val} />
        ))}
      </div>
    </>
  );
};

export default FizzBuzz;
