import { useState } from "react";
import Singlecountry from "./singlelist";
const Listofcountries = ({ country }) => {
  const [show, setShow] = useState(false);
  country = country;
  return (
    <li key={country.ccn3}>
      {country.name.common} &nbsp;&nbsp;
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <Singlecountry country={country} />}
    </li>
  );
};

export default Listofcountries;
