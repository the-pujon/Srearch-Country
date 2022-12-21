import React, { useState, useEffect } from "react";
import Countries from "./Components/Countries";
import Search from "./Components/Search";

let url = "https://restcountries.com/v3.1/all";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);
  const [filterCountry, setFilterCountry] = useState(country);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);

      const response = await fetch(url);
      const data = await response.json();
      setCountry(data);
      setFilterCountry(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const removeCountry = (name) => {
    const filtered = filterCountry.filter((data) => data.name.common !== name);
    setFilterCountry(filtered);
    alert(`${name} has been removed`);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    let search = country.filter((data) => {
      const name = data.name.common.toLowerCase();
      return name.startsWith(value);
    });
    setFilterCountry(search);
  };

  return (
    <div>
      <h1 className="countryTitle">Country Search App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.massege}</h2>}
      {country && (
        <Countries country={filterCountry} onRemoveCountry={removeCountry} />
      )}
    </div>
  );
};

export default App;
