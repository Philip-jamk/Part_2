// Render country details or prompt
import Singlecountry from "./singlelist";
import Listofcountries from "./listofcountries";

const FiltercountryInfo = ({ filteredCountries }) => {
  if (filteredCountries.length > 10) {
    return <p>Too many matches, please refine your search.</p>;
  }

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    return <Singlecountry country={country} />;
  }
  return (
    <ul>
      {filteredCountries.map((country) => (
        <Listofcountries country={country} />
      ))}
    </ul>
  );
};

export default FiltercountryInfo;
