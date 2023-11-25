/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./Count.css";

const Count = () => {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function increment() {
    count < 33 ? setCount(count + 1) : setCount(count);
  }
  function increment1() {
    count1 < 33 ? setCount1(count1 + 1) : setCount1(count1);
  }
  function increment2() {
    count2 < 34 ? setCount2(count2 + 1) : setCount2(count2);
  }
  const handleReset = () => {
    setCount(0);
  };
  const handleReset1 = () => {
    setCount1(0);
  };
  const handleReset2 = () => {
    setCount2(0);
  };

  let total = count + count1 + count2;
  return (
    <div className="main-div">
      <h1 className="total">Total:{total}</h1>
      <div className="all-btn">
        <div className="div1">
          <h1>{count}</h1>
          <button className="btn" onClick={increment}>
            Alhamdulillah
          </button>
          <button className="btn1" onClick={handleReset}>
            Reset
          </button>
        </div>

        <div className="div2">
          <h1>{count1}</h1>
          <button className="btn" onClick={increment1}>
            Subahanallah
          </button>
          <button className="btn1" onClick={handleReset1}>
            Reset
          </button>
        </div>

        <div className="div3">
          <h1>{count2}</h1>
          <button className="btn" onClick={increment2}>
            Allahuakbar
          </button>
          <button className="btn1" onClick={handleReset2}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
