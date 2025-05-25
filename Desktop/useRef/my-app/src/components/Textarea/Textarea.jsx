import React, { useEffect, useRef, useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
//   const [textareaHight, setTextareaHight] = useState("auto");
  const [parrentHight, setParrentHight] = useState("auto");
  const handleChange = (e) => {
    //console.log("cc", e.target.value);
    //setTextareaHight("auto");
    setParrentHight('"hihi')
    setText(e.target.value);
  };
  useEffect(() => {
    //dùng khi có side thay đổi sẽ input tại đây
    // console.log("cc");
    setParrentHight(`${textareaRef?.current?.scrollHeight}px`)
  }, [text]);
 
  return (
    <div
      className="p-5"
      style={{
        minHeight: parrentHight,
      }}
    >
      <textarea
        ref={textareaRef}
        // style={{ minHeight: textareaHight }}
        placeholder="Pls enter your name"
        className="transition-all overflow-hidden w-full max-w-[400px] border border-gray-300 p-5 focus:border-blue-400"
        value={text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}
