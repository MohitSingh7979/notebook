import Counter from "./components/counter";

function App() {
  return (
    <div>
      <h1>main App</h1>
      <Counter
        initCount={100}
        incStep={50}
        decStep={20}
        minLmt={0}
        maxLmt={100}
        triggerOn="mousedown"
      />
    </div>
  );

  // /* // let name = "ankush";
  // let [counter, setCounter] = useState(0);
  // let [custom, setCustom] = useState();
  // return (
  //   <div>
  //     <h1>counter {counter} </h1>
  //     <input
  //       type="text"
  //       onChange={(eve) => {
  //         let value = parseInt(eve.target.value);
  //         setCustom(value);
  //       }}
  //       value={custom}
  //       placeholder="set custom count"
  //     />
  //     <button
  //       onClick={() => {
  //         setCounter(custom);
  //       }}
  //     >
  //       submit
  //     </button>
  //     {/* <button
  //       onClick={() => {
  //         setCounter((last) => last + 1);
  //       }}
  //     >
  //       inc
  //     </button>
  //     <button
  //       onClick={() => {
  //         setCounter(counter - 2);
  //       }}
  //     >
  //       dec
  //     </button> */}
  //   </div>
  // ); */
}

export default App;
