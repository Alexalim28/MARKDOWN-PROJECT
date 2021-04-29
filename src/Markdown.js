import React, { useState } from "react";
import Preview from "./Preview";
import Editor from "./Editor";

const placeholder = `# Here is a title
## And a subtitle
---
[a link]()

and a **bolded text**

* item 1
* item 2

![An awesome image]("./10172.jpg")

> Some quote\

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
`;

function Markdown() {
  const [text, setText] = useState(placeholder);

  const handleChange = (e) => {
    const char = e.target.value;
    setText(char);
  };

  return (
    <>
      <h1 className="title">Mardown Editor</h1>
      <div className="container">
        <Editor handleChange={handleChange} text={text} />
        <Preview text={text} />
      </div>
    </>
  );
}

export default Markdown;
