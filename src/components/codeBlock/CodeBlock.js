import React from "react";
import "./CodeBlock.scss";

/* Tiny JSX highlighter — enough for short, known snippets; no dependency.
   Order matters: comments and strings are matched before anything inside them. */
const TOKEN = new RegExp(
  [
    "(\\/\\/.*$)", // 1 comment
    '("(?:[^"\\\\]|\\\\.)*"|`(?:[^`\\\\]|\\\\.)*`)', // 2 string
    "(<\\/?)([A-Za-z][\\w.]*)", // 3 tag bracket, 4 tag name
    "\\b(const|let|function|return|export|default|import|from)\\b", // 5 keyword
    "\\b([a-zA-Z_][\\w-]*)(?==)", // 6 attribute / prop
    "\\b(\\d+)\\b", // 7 number
    "(=>|[{}()[\\];,.=<>/])" // 8 punctuation
  ].join("|"),
  "gm"
);

// Capture group → class name (group 3 is the tag bracket, handled with group 4).
const CLASSES = {
  1: "tok-comment",
  2: "tok-string",
  5: "tok-keyword",
  6: "tok-attr",
  7: "tok-number",
  8: "tok-punct"
};

function highlight(line) {
  const out = [];
  let last = 0;
  let match;
  TOKEN.lastIndex = 0;
  while ((match = TOKEN.exec(line)) !== null) {
    if (match.index > last) out.push(line.slice(last, match.index));
    const key = match.index;
    if (match[4]) {
      const tagClass = /^[A-Z]/.test(match[4]) ? "tok-component" : "tok-tag";
      out.push(
        <span key={`${key}b`} className="tok-punct">
          {match[3]}
        </span>,
        <span key={key} className={tagClass}>
          {match[4]}
        </span>
      );
    } else {
      let group = 1;
      while (!match[group]) group += 1;
      out.push(
        <span key={key} className={CLASSES[group]}>
          {match[0]}
        </span>
      );
    }
    last = TOKEN.lastIndex;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
}

export default function CodeBlock({code, label}) {
  const lines = code.replace(/\n$/, "").split("\n");
  return (
    <pre className="code" aria-label={label} tabIndex={0}>
      <code>
        {lines.map((line, index) => (
          <span className="code__line" key={index}>
            <span className="code__num" aria-hidden="true">
              {index + 1}
            </span>
            <span className="code__text">{line ? highlight(line) : " "}</span>
          </span>
        ))}
      </code>
    </pre>
  );
}
