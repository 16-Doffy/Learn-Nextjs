import React, { useEffect, useRef } from "react";

export default function Input() {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    // console.log(divRef.current);
    // inputRef.current.focus();
     if (inputRef.current) inputRef.current.focus();
    // if (divRef.current) divRef.current.style.backgroundColor = "green";
  }, []);
  return (
    <div className="input-div" ref={divRef}>
      <input
        type="text"
        ref={inputRef}
        placeholder="auto focus"
        className="inline-block p-5 border border-gray-200 focus:border-blue-300"
      />
    </div>
  );
}
