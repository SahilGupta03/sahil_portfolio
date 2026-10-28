import React, {useEffect} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from "./hero/Hero";
import Marquee from "../components/marquee/Marquee";
import About from "./about/About";
import Skills from "./skills/Skills";
import Craft from "./craft/Craft";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import Education from "./education/Education";
import Contact from "./contact/Contact";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";

const marqueeItems = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Native",
  "Redux",
  "ASP.NET Core Web API",
  "Expo",
  "Zustand",
  "JavaScript",
  "Material UI",
  "Tailwind CSS",
  "REST APIs"
];

const prefersDark = () => {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  return Boolean(query && query.matches);
};

const Main = () => {
  const [isDark, setIsDark] = useLocalStorage("isDark", prefersDark());

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", isDark ? "#0f0f0e" : "#f3f0e8");
  }, [isDark]);

  const changeTheme = () => setIsDark(!isDark);

  return (
    <StyleProvider value={{isDark, changeTheme}}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee items={marqueeItems} />
        <About />
        <Skills />
        <Craft />
        <WorkExperience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </StyleProvider>
  );
};

export default Main;
