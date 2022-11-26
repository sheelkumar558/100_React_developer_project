import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  countryDetails,
  countrySucess,
  getCountry,
} from "../Redux/CountryData/action";
import "./Country.css";
export const Country = () => {
  //let [country, setCountry] = useState();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  //let [theme, setTheme] = useState("light");
  let countryData = useSelector((store) => store.Country.countryData);
  // console.log(countryData);

  function moreDetails(name) {
    //  console.log(name);
    navigate(`/details/${name}`);
  }

  function sortpop(e) {
    // console.log(e.target.value);
    if (e.target.value === "asc") {
      let data =
        countryData &&
        countryData.sort((a, b) => {
          return a.population - b.population;
        });
      dispatch(countrySucess(data));
    } else if (e.target.value === "desc") {
      let data =
        countryData && countryData.sort((a, b) => b.population - a.population);
      dispatch(countrySucess(data));
    } else {
      dispatch(getCountry());
    }
  }

  function filterpop(e) {
    // console.log(e.target.value);
    dispatch(countryDetails(e.target.value));
  }

  // function changeTheme() {
  //   setTheme(!theme);
  // }
  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  return (
    <div>
      <select id="sort_population" onChange={(e) => sortpop(e)}>
        <option value="">Sort By Population</option>
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <select id="filter_region" onChange={(e) => filterpop(e)}>
        <option value="all">Filter By Region</option>
        <option value="region/Africa">Africa</option>
        <option value="region/Americas">Americas</option>
        <option value="region/Asia">Asia</option>
        <option value="region/Europe">Europe</option>
        <option value="region/Oceania">Oceania</option>
      </select>

      <div className="country">
        {countryData &&
          countryData.map((e) => (
            <div className="box" key={e.name.common}>
              <img src={e.flags.png} alt="country_images" />
              <h3>Name: {e.name.common}</h3>
              <p>Population: {e.population}</p>
              <p>Region: {e.region}</p>
              <p>Captal: {e.capital}</p>
              <button onClick={() => moreDetails(`${e.capital}`)}>
                More Details
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
