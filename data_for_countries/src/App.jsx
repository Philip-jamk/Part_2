import { useState, useEffect } from "react";
import countriesInfo from "./service/countries";
import FilterCountryInfo from "./components/filteredcountry";
import SearchBox from "./components/searchbox";
import Notification from "./components/messages";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchqueries, setSearchqueries] = useState("");
  const [filteredcountry, setFilteredcountry] = useState([]);
  const [errorMessage, setErrorMessage] = useState({
    content: "",
    type: "normal",
  });

  // Fetch country data from the API
  useEffect(() => {
    countriesInfo
      .getAll()
      .then((response) => {
        setCountries(response);
      })
      .catch((error) => {
        /* Adding a sucessful Message after submission*/
        setErrorMessage({
          content: `Could not be found Database. Reason: ${error}`,
          type: "error",
        });
        setTimeout(() => {
          setErrorMessage({ content: ``, type: "normal" });
        }, 5000);
        /*End of sucessful message*/
      });
  }, []);
  // Closing of Fetch country data from the API

  /*const showaspecificcountry = (id) => {
    const filtered = countries.find((p) => p.name.common === id);
    console.log(filtered);
    setFilteredcountry(filtered);
  };*/

  // Filtering of the countries based on the search query
  useEffect(() => {
    if (searchqueries.trim() === "") {
      setFilteredcountry([]);
      return;
    }

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchqueries.toLowerCase())
    );

    setFilteredcountry(filtered);
  }, [searchqueries, countries]);
  //Closing of Filtering of the countries based on the search query

  // Handle input change
  const handleSearchChange = (event) => {
    setSearchqueries(event.target.value);
  };

  return (
    <div>
      <Notification messege={errorMessage} />
      <SearchBox
        searchQuery={searchqueries}
        handleSearchChange={handleSearchChange}
      />

      <FilterCountryInfo filteredCountries={filteredcountry} />
    </div>
  );
}

export default App;
