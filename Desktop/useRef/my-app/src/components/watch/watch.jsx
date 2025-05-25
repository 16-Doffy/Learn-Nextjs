import React, { useEffect, useRef, useState } from "react";

export default function Watch() {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const handleStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div>
      <h3>Timer: {count}s</h3>
      <div>
        <button onClick={handleStart} className="text-red-800 text-2xl">start</button>
        <button onClick={handleStop} className="text-red-800 text-2xl">stop</button>
      </div>
    </div>
  );
}
