import React from "react";
import AceEditor from "react-ace";
import brace from "brace";
import { Editor } from "brace";

import "brace/mode/java";
import "brace/mode/csharp";

import "brace/theme/github";
import "brace/theme/monokai";

import "brace/mode/html";
import "brace/mode/c_cpp";
import "brace/mode/javascript";
import "brace/mode/css";

import "brace/theme/xcode";

import "brace/snippets/html";

import "brace/snippets/csharp";

import "brace/ext/language_tools";
const MyEditor = (props) => {
  const { theme, mode, defvalue, update } = props;
  return (
    <AceEditor
      placeholder="Start Writing Code Here"
      mode={mode}
      theme={theme}
      name="blah2"
      width="100%"
      height="660px"
      // onLoad={this.onLoad}
      onChange={update}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={defvalue}
      editorProps={{ $blockScrolling: Infinity }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
};

export default MyEditor;
