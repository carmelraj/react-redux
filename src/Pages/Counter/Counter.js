import "./Counter.scss";
import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  customIncrement,
} from "../../Redux/Slice/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const inputRef = useRef(null);
  const conterIncrent = () => {
    dispatch(increment());
  };

  const counterDecrement = () => {
    dispatch(decrement());
  };

  const counterReset = () => {
    dispatch(reset());
  };

  const counterValues = () => {
    dispatch(customIncrement(Number(inputRef.current.value)));
  };

  useEffect(() => {
    dispatch(reset());
  }, []);

  return (
    <div className="Counter" data-testid="Counter">
      <h1>{count}</h1>
      <button onClick={conterIncrent}>Increment</button>
      <button onClick={counterDecrement}>Decrement</button>
      <input type="text" ref={inputRef} />
      <button onClick={counterValues}>Add Number</button>
      <button onClick={counterReset}>Reset</button>
    </div>
  );
};
export default Counter;
