import Dropdown from "./components/Dropdown/Dropdown";
import SidebarMenu from "./components/SidebarMenu";
import UseClickOutSide from "./components/Hooks/UseClickOutSide";

function App() {
  // const countRef = useRef(0);
  // const handle = () => {
  //   const updateCount = countRef.current + 1;
  //   console.log(`clciked ${updateCount} times`);
  //   countRef.current++;
  // };// <button onClick={handle}>click me</button>

  const { shown, setShow, nodeRef } = UseClickOutSide();
  return (
    <div className="p-5">
      <span
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-800 cursor-pointer"
      >
        Show me
      </span>
      <SidebarMenu show={shown} ref={nodeRef}/>
      <Dropdown />
    </div>
  );
}

export default App;
