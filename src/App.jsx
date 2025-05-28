import React, { useState } from "react";
import CodeEditor from "./components/Editor";
import Terminal from "./components/Terminal";
import Header from "./components/Header";
import { runCode } from "./utils/api";
import "./styles.css";

const App = () => {
  const [code, setCode] = useState(`print("Hello World!")`);
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    try {
      const response = await runCode(code);
      setOutput(response.data.output);
    } catch (error) {
      setOutput("❌ Error executing code");
    }
  };

  return (
    <div className="app">
      <Header />
      <CodeEditor code={code} setCode={setCode} />
      <button onClick={handleRun} className="run-button">
        Run ▶
      </button>
      <Terminal output={output} />
    </div>
  );
};

export default App;
