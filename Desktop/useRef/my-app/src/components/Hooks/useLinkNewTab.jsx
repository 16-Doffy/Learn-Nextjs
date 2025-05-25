import { useEffect, useRef } from "react";

export default function useLinkNewTab() {
  const contentRef = useRef(null);
  useEffect(() => {
    if (contentRef) {
      const Links = contentRef.current.querySelectorAll("a");
      console.log("cc", Links);
      Links.length > 0 &&
        Links.forEach((item) => item.setAttribute("tribue", "_blank"));
    }
  }, []);
  return {
    contentRef,
  };
}
