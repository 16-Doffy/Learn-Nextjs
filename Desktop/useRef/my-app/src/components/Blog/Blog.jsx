import React from "react";
import useLinkNewTab from "../Hooks/useLinkNewTab";
import useHover from "../Hooks/useHover";

export default function Blog() {
  const { contentRef } = useLinkNewTab();
  const { hovered, nodeRef } = useHover();
  // const contentRef = useRef(null);
  // useEffect(() => {
  //   if (contentRef) {
  //     const Links = contentRef.current.querySelectorAll("a");
  //     console.log("cc", Links);
  //     Links.forEach((item) => item.setAttribute("tribue","_blank"));
  //   }
  // }, []);
  return (
    <div className="entry-content" ref={contentRef}>
      <p className="p-5">
        Lorem ipsum
        <a
          href="https://google.com"
          className={`underline ${hovered ? "text-red-900" : ""}`}
          ref={nodeRef}
        >
          Google.com
        </a>
        dolor sit amet consectetur adipisicing elit. Optio accusamus officiis
        doloribus, iste perspiciatis numquam adipisci at dolor reprehenderit
        ducimus, nobis sed quo dolorem consectetur similique quis voluptatum
        explicabo facilis!
      </p>
      <p className="p-5">
        Lorem ipsum <a href="google.com">21sdadada</a> dolor sit amet
        consectetur adipisicing elit. Incidunt, quas nesciunt voluptatibus,
        recusandae veniam doloribus commodi, ipsa iusto voluptas tempora soluta.
        Rerum ducimus nam fugiat maxime, impedit temporibus tenetur nemo.
      </p>
      <p className="p-5">
        Lorem ipsum <a href="google.com">3dsadasssa</a>dolor sit amet
        consectetur adipisicing elit. Provident reiciendis nesciunt ut aliquid
        repellat debitis dolorum rerum illum voluptatibus quasi. Ex deserunt
        architecto impedit iusto obcaecati aut unde excepturi expedita.
      </p>
    </div>
  );
}
