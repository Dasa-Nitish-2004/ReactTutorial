import "./styles.css";
import { useState } from "react";
export default function App() {
  const [advice, setAdviceFunc] = useState("Initial Value");
  const [count, setCountFunc] = useState(0);
  async function fetchAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdviceFunc(data.slip.advice);
    setCountFunc((c) => c + 1);
  }

  return (
    <div className="App">
      <h1>Hare krishna</h1>
      <h2>All glories to Guru and Gauranga.</h2>
      <h3>All glories to Srila Prabhupad</h3>
      <h4>{advice}</h4>
      <h5>{count}</h5>
      <button onClick={fetchAdvice}>get Advice</button>
    </div>
  );
}
