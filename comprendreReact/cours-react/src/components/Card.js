import React from "react";

const Card = ({country}) => {
    // on peut destructurer ca en mettant {country} a la place de props.country
    // console.log(country.name.common);
  return (
    <li className="card">
        <img src={country.flags.png} alt={"drapeau " + country.name.common}  />
      <div className="infos">
        <h2> {country.name.common}</h2>
        <p>{country.capital}</p>
        <p>Pop. {country.population.toLocaleString()}</p>
        
      </div>
    </li>
  );
};

export default Card;
