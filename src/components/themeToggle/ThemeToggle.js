import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import {MoonIcon, SunIcon} from "../icons/Icons";
import "./ThemeToggle.scss";

export default function ThemeToggle() {
  const {isDark, changeTheme} = useContext(StyleContext);
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={changeTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
