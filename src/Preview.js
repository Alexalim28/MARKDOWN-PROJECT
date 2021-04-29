import React from "react";
import marked from "marked";
import ReactMarkdown from "react-markdown";

export default function Preview({ text }) {
  const html = { __html: marked(text, { gfm: true, breaks: true }) };
  return (
    <div>
      <h2 className="title">Your text</h2>
      {/* <div id="preview">
        <ReactMarkdown children={text} />
      </div> */}
      <div id="preview" dangerouslySetInnerHTML={html}></div>
    </div>
  );
}
