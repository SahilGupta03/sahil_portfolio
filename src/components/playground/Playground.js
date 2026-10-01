import React, {useEffect, useRef, useState} from "react";
import "./Playground.scss";
import Button from "../button/Button";
import CodeBlock from "../codeBlock/CodeBlock";
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  GitHubIcon
} from "../icons/Icons";

const VARIANTS = [
  {id: "primary", label: "Primary"},
  {id: "secondary", label: "Secondary"},
  {id: "light", label: "Light"}
];

const ICONS = [
  {id: "ArrowRightIcon", label: "Arrow", Icon: ArrowRightIcon},
  {id: "DownloadIcon", label: "Download", Icon: DownloadIcon},
  {id: "GitHubIcon", label: "GitHub", Icon: GitHubIcon},
  {id: "none", label: "None", Icon: null}
];

const MAX_LABEL = 22;
// Keep the generated JSX valid: no braces or angle brackets in the label.
const sanitize = value => value.replace(/[<>{}]/g, "").slice(0, MAX_LABEL);

function toJSX({variant, icon, label}) {
  const lines = ["<Button", `  variant="${variant}"`];
  if (icon !== "none") lines.push(`  icon={<${icon} />}`);
  lines.push(">", `  ${label || "Button"}`, "</Button>");
  return lines.join("\n");
}

function Segmented({legend, name, options, value, onChange}) {
  return (
    <fieldset className="segmented">
      <legend className="segmented__legend mono">{legend}</legend>
      <div className="segmented__track">
        {options.map(option => (
          <label key={option.id} className="segmented__option">
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/* Live playground for the site's own Button component: change the props,
   see the real component re-render and the matching JSX. */
export default function Playground() {
  const [variant, setVariant] = useState("primary");
  const [icon, setIcon] = useState("ArrowRightIcon");
  const [label, setLabel] = useState("View projects");
  const [copied, setCopied] = useState(false);
  const [pressed, setPressed] = useState(0);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const code = toJSX({variant, icon, label});
  const IconComponent = ICONS.find(option => option.id === icon).Icon;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      // Clipboard unavailable — the code stays selectable.
    }
  };

  return (
    <div className="playground" id="playground">
      <div className="playground__chrome">
        <span className="playground__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <p className="playground__title mono">
          Button.js <span>— live playground</span>
        </p>
        <span className="playground__badge mono">Used on this page</span>
      </div>

      <div
        className={`playground__canvas ${
          variant === "light" ? "playground__canvas--dark" : ""
        }`}
      >
        <Button
          href="#playground"
          variant={variant}
          icon={IconComponent ? <IconComponent size={16} /> : null}
          onClick={event => {
            event.preventDefault();
            setPressed(count => count + 1);
          }}
        >
          {label || "Button"}
        </Button>
        <span className="playground__clicks mono" aria-live="polite">
          {pressed > 0
            ? `onClick fired ×${pressed}`
            : "Hover or click the button"}
        </span>
      </div>

      <div className="playground__controls">
        <Segmented
          legend="variant"
          name="pg-variant"
          options={VARIANTS}
          value={variant}
          onChange={setVariant}
        />
        <Segmented
          legend="icon"
          name="pg-icon"
          options={ICONS}
          value={icon}
          onChange={setIcon}
        />
        <label className="playground__field">
          <span className="segmented__legend mono">children</span>
          <input
            type="text"
            value={label}
            maxLength={MAX_LABEL}
            onChange={event => setLabel(sanitize(event.target.value))}
            spellCheck="false"
            autoComplete="off"
          />
        </label>
      </div>

      <div className="playground__code">
        <CodeBlock code={code} label="Generated JSX for the button above" />
        <button
          type="button"
          className={`playground__copy ${copied ? "is-copied" : ""}`}
          onClick={copy}
        >
          {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
}
