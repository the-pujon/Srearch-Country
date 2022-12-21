import React, { useState, useEffect } from "react";

import style from "./Search.module.css";
const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    props.onSearch(search);
  }, [search]);

  return (
    <div>
      <input
        type="search"
        placeholder="search country"
        value={search}
        onChange={handleChange}
        className={style.search}
      />
    </div>
  );
};

export default Search;
