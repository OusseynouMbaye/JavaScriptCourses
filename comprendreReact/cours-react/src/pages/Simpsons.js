import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Simpsons = () => {
  const families = [
    { id: 1, name: "Sofia" },
    { id: 2, name: "Amina" },
  ];
  const title = "Les Simpsons ";
  return (
    <div>
      <Logo />
      <Navigation />
      <h2>{title}</h2>
      <ul>
        {families.map((familie,index) => {
          return (
            <li>
             {index} {familie.name} <button>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Simpsons;
