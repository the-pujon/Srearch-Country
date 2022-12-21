import React from "react";

import style from "./Countries.module.css";
import Country from "./Country";
import { v4 as uuidv4 } from "uuid";

const Countries = (props) => {
  // const {country} = props;

  return (
    <div className={style.container}>
      {props.country.map((country) => {
        const CountryNew = { country, id: uuidv4() };

        return (
          <Country
            {...CountryNew}
            key={CountryNew.id}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </div>
  );
};

export default Countries;
