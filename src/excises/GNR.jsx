import { useState } from "react";
import "../index.css";
export default function GNR() {
  const [numbers, setNumbers] = useState([]);
  const handleGenerate = () => {
    const rNumber = Math.round(Math.random() * 100);
    setNumbers([...numbers, rNumber]);
  };

  const handleRemove = (i) => {
    const newArr = [...numbers];
    newArr.splice(i, 1);
    setNumbers(newArr);
  };

  const handleRemoveEvens = () => {
    const newArr = numbers.filter((ele) => {
      return ele % 2 != 0;
    });
    setNumbers(newArr);
  };

  const handleRemoveOdds = () => {
    const newArr = numbers.filter((ele) => {
      return ele % 2 != 1;
    });
    setNumbers(newArr);
  };

  return (
    <div>
      <h2>Click here to Generate random numbers</h2>
      <div id="gnr">
        <button onClick={handleGenerate}>Generate Random Number</button>{" "}
      </div>

      <ul>
        {numbers.map((ele, i) => {
          return (
            <li key={i}>
              {" "}
              {ele}{" "}
              <button
                id="remove"
                onClick={() => {
                  handleRemove(i);
                }}
              >
                Remove
              </button>{" "}
            </li>
          );
        })}
      </ul>
      <button id="even" onClick={handleRemoveEvens}>
        Remove Even Numbers
      </button>
      <button id="odd" onClick={handleRemoveOdds}>
        Remove Odds Numbers
      </button>
      {/* <button onClick={handleRemoveAll}>Clear All Numbers</button> */}
    </div>
  );
}
