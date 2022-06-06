import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36); //pour afficher 36pays
  const [my_select, setMySelect] = useState([]);
  const [selectInput, setSelectedInput] = useState(my_select[0]);
  const handleChange = (e) => {
    setSelectedInput(e.target.value);
    // console.log(e.target.value);
  };
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
      setMySelect([
        ...new Set(res.data.map((country) => country.continents).flat()),
      ]);
    });
  }, []);

  return (
    <div className="countries">
      <h1>Countries</h1>
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => {
            setRangeValue(e.target.value);
          }}
        />

        <div>
          <label>Continent</label>
          <select onChange={handleChange} >
            {my_select.map((continent) => (
              <option key={continent.value} value={continent.value}>
                {continent}
              </option>
            ))}
          </select>
        </div>
      </ul>
      <ul>
        {data
          .slice(0, rangeValue) //slice pour filtrer le nombre de pays afficher
          .filter((country) => {
            return country.continents.includes(selectInput);
          })
          .map((country, index) => (
            <Card key={index} country={country} />
            //   <li key={index}> {country.name.common}</li>
          ))}
      </ul>
    </div>
  );
};

export default Countries;
