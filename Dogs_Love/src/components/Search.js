import "./nav.css"
import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
 useEffect(()=>{
    handleData();
 },[data])
  const handleData = () => {
    axios.get(`https://dog.ceo/api/breed/${name}/images`).then((res) => {
      setData(res.data.message);
    });
  };
  console.log(data);
  return (
    <div>
      <div className="inpdiv">
        <input type="text" placeholder="Enter breeds name" name="" onChange={(e) => setName(e.target.value)} />
       
        <button onClick={handleData}>Submit</button>
      </div>
      <div className="puppCout">
      {data.map((image) => (
        <div>
          <img src={`${image}`} alt={`${name}`}></img>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Search;
