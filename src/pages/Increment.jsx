import React from "react";
import useStore from "../store/counter";
function Increment() {
  const { counter, increment, decrement } = useStore();

  return (
    <div className="flex  flex-col items-center gap-2">
      <h3 className="p-2  w-20 rounded-md text-center ">{counter}</h3>
      <div className="gap-2 flex">
        <button className=" p-2  rounded-md w-20 " onClick={increment}>
          +
        </button>
        <button className=" p-2  rounded-md w-20 " onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Increment;
