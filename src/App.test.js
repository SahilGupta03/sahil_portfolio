import React from "react";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import App from "./App";
import {navLinks, profile} from "./portfolio";

// Plain function (not jest.fn) so CRA's `resetMocks` doesn't clear it between tests.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent() {}
  })
});

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<App />, container);
  });
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders the hero with name and a single h1", () => {
  const headings = container.querySelectorAll("h1");
  expect(headings).toHaveLength(1);
  expect(headings[0].textContent).toContain(profile.name);
});

it("renders a section for every nav link", () => {
  navLinks.forEach(link => {
    expect(container.querySelector(`section#${link.id}`)).not.toBeNull();
    expect(container.querySelector(`a[href="#${link.id}"]`)).not.toBeNull();
  });
});

it("points resume downloads at the bundled PDF", () => {
  const links = container.querySelectorAll("a[download]");
  expect(links.length).toBeGreaterThan(0);
  links.forEach(link => {
    expect(link.getAttribute("href")).toBe(
      `${process.env.PUBLIC_URL}/Sahil_Gupta_Resume.pdf`
    );
  });
});

it("opens external links safely", () => {
  container.querySelectorAll('a[target="_blank"]').forEach(link => {
    expect(link.getAttribute("rel")).toContain("noopener");
  });
});

it("toggles the mobile menu and theme", () => {
  const menuButton = container.querySelector(".menu-button");
  expect(menuButton.getAttribute("aria-expanded")).toBe("false");
  act(() => {
    menuButton.click();
  });
  expect(menuButton.getAttribute("aria-expanded")).toBe("true");

  const themeButton = container.querySelector(".theme-toggle");
  act(() => {
    themeButton.click();
  });
  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
});

it("expands and collapses experience entries", () => {
  const toggles = container.querySelectorAll(".job__toggle");
  expect(toggles[0].getAttribute("aria-expanded")).toBe("true");
  expect(toggles[1].getAttribute("aria-expanded")).toBe("false");
  act(() => {
    toggles[1].click();
  });
  expect(toggles[0].getAttribute("aria-expanded")).toBe("false");
  expect(toggles[1].getAttribute("aria-expanded")).toBe("true");
});

it("deep-links experience system chips to expandable project entries", () => {
  const chips = container.querySelectorAll(".job__system");
  expect(chips.length).toBeGreaterThan(0);
  chips.forEach(chip => {
    expect(container.querySelector(chip.getAttribute("href"))).not.toBeNull();
  });

  const firstId = chips[0].getAttribute("href");
  act(() => {
    window.location.hash = firstId;
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  });
  const toggle = container.querySelector(`${firstId} .system__toggle`);
  expect(toggle.getAttribute("aria-expanded")).toBe("true");
});

it("updates the live Button playground and its generated JSX", () => {
  const playground = container.querySelector(".playground");
  const preview = () => playground.querySelector(".playground__canvas .btn");
  const code = () => playground.querySelector("pre").textContent;

  expect(preview().classList.contains("btn--primary")).toBe(true);
  expect(code()).toContain('variant="primary"');
  expect(code()).toContain("icon={<ArrowRightIcon />}");

  // Change variant
  act(() => {
    playground
      .querySelector('input[name="pg-variant"][value="secondary"]')
      .click();
  });
  expect(preview().classList.contains("btn--secondary")).toBe(true);
  expect(code()).toContain('variant="secondary"');

  // Remove the icon
  act(() => {
    playground.querySelector('input[name="pg-icon"][value="none"]').click();
  });
  expect(preview().querySelector(".btn__icon")).toBeNull();
  expect(code()).not.toContain("icon=");

  // Edit the label; braces/angle brackets are stripped to keep JSX valid
  const input = playground.querySelector('input[type="text"]');
  const setValue = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  ).set;
  act(() => {
    setValue.call(input, "Hire <me> {now}");
    input.dispatchEvent(new Event("input", {bubbles: true}));
  });
  expect(preview().textContent).toContain("Hire me now");
  expect(code()).toContain("Hire me now");
  expect(code()).not.toContain("<me>");

  // Clicking the preview button is handled in place
  act(() => {
    preview().click();
  });
  expect(playground.textContent).toContain("onClick fired ×1");
});

it("only links to real project destinations", () => {
  const hrefs = [...container.querySelectorAll("a[href^='http']")].map(a =>
    a.getAttribute("href")
  );
  expect(hrefs).toEqual(
    expect.arrayContaining([
      "https://github.com/sahil03122000/Ziclo_Frontend",
      "https://github.com/SahilGupta03/sahil_portfolio",
      "https://hmraca.in/",
      "https://mahavarsamajateli.in/"
    ])
  );
  hrefs.forEach(href => {
    expect(href).not.toMatch(/example|yourusername|your-portfolio/);
  });
});
