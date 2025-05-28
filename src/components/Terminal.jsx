import React from "react";

const Terminal = ({ output }) => {
  return (
    <div className="terminal">
      <h3>Terminal Output:</h3>
      <pre>{output}</pre>
    </div>
  );
};

export default Terminal;
