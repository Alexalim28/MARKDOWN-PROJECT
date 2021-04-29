import React from "react";

export default function Editor({ handleChange, text }) {
  return (
    <div>
      <h2 className="title">Write your markdown text</h2>
      <textarea id="editor" value={text} onChange={handleChange}></textarea>
    </div>
  );
}
