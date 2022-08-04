import React from "react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Landing from "../components/Landing";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Home = () => {
  return (
    <>
      <main className="container app">
        <div>
          <Landing />
          <AboutMe />
          <Work />
          <Skills />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default Home;
