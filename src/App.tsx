import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <svg height="100vh" width="100vh" style={{ outline: "thin solid red" }}>
        <line
          x1="50"
          y1="50"
          y2="100"
          x2="100"
          stroke="blue"
          strokeWidth="5"
        ></line>
        <circle r="100" cx="200" cy="200" fill="red"></circle>
        <rect
          x="150"
          y="0"
          width="100"
          height="100"
          fill="none"
          stroke="blue"
          strokeWidth="10"
        ></rect>
        <path
          fill="none"
          stroke="black"
          strokeWidth="5"
          d="M100,100 150,300"
        ></path>
      </svg>
    </div>
  );
}
