import WeatherInfo from "./weather";
const singlecountry = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {Object.entries(country.languages).map(([code, name]) => (
          <li key={code}>{name}</li>
        ))}
      </ul>
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        style={{ width: "150px", height: "100px" }}
      />
      <WeatherInfo country={country} />
    </div>
  );
};

export default singlecountry;
