import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Person from "../components/Person";

const About = () => {
  return (
    <div>
      <div>
        <Logo />
        <Navigation />
        <h2>About</h2>
        <Person name="Ouzin" gender={true ? "Homme" : "femme"} age={22} />
        <br />
        <Person name="Astou" gender={false ? "Homme" : "femme"} age={2} />

      </div>
    </div>
  );
};

export default About;
