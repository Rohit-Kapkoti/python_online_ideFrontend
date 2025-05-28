import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode }) => {
  return (
    <div className="editor-container">
      <Editor
        height="50vh"
        defaultLanguage="python"
        value={code}
        onChange={(value) => setCode(value)}
        theme="vs-dark"
        options={{
          fontSize: 16,
          minimap: { enabled: false },
        }}
      />
    </div>
  );
};

export default CodeEditor;
