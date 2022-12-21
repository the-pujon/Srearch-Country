import React from "react";

import style from "./Country.module.css";
const Country = (props) => {
  const { country } = props;
  const { name, capital, population, flags, region, area } = country;
  //console.log(name);

  const handleRemove = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt={name.common} className={style.flag} />
        <h3>Country Name: {name.common} </h3>
        <h3>Capital: {capital}</h3>
        <h3>Population: {population}</h3>
        <h3>Region: {region}</h3>
        <h3>Area: {area}</h3>
        <button
          onClick={() => {
            handleRemove(name.common);
          }}
          className={style.btn}
        >
          remove
        </button>
      </div>
    </article>
  );
};

export default Country;
