import UseClickOutSide from "../Hooks/UseClickOutSide";


const Dropdown =()=> {
const {shown,setShow,nodeRef} = UseClickOutSide();
  return (
    <div className="relative w-full max-w-[400px] " ref={nodeRef}>
      <div
        className="p-5 border-gray-200 rounded-lg
       w-full cursor-pointer border"
        onClick={() => setShow(!shown)}
      >
        Selected
      </div>
      {shown && (
        <div
          className=" border
       border-gray-200 rounded-lg absolute  top-full left-0 w-full bg-white "
        >
          <div className="p-5  cursor-pointer">java</div>
          <div className="p-5  cursor-pointer">java</div>
          <div className="p-5  cursor-pointer">java</div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
