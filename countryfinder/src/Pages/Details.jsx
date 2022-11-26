import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { countryDetails } from "../Redux/CountryData/action";

export const Details = () => {
  let name = useParams();
  // console.log(name.name);
  let dispatch = useDispatch();

  let countryData = useSelector((store) => store.Country.countryData);
  console.log(countryData);
  useEffect(() => {
    dispatch(countryDetails(`capital/${name.name}`));
  }, [dispatch, name.name]);

  return (
    <div className="country">
      {countryData &&
        countryData.map((e) => (
          <div className="box" key={e.name.common}>
            <img src={e.flags.png} alt="country_images" />
            <h3>Name: {e.name.common}</h3>
            <p>Population: {e.population}</p>
            <p>Region: {e.region}</p>
            <p>Captal: {e.capital}</p>
            <p>Area: {e.area}</p>
            <p>startOfWeek: {e.startOfWeek}</p>
            <p>status: {e.status}</p>
            <p>subregion: {e.subregion}</p>
            <p>timezones: {e.timezones}</p>
            <Link target="_blank" href={e.maps.googleMaps}>
              Google Maps {e.maps.googleMaps}{" "}
            </Link>
          </div>
        ))}
    </div>
  );
};
