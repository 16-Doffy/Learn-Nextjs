import { useEffect, useRef, useState } from "react";

export default function UseClickOutSide(dom = "button") {
  const [shown, setShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleClick(e) {
      if (nodeRef.current && !nodeRef.current.contains(e.target) && !e.target.matches(dom)) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return {
    shown,
    setShow,
    nodeRef,
  };
}
