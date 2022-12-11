import "./nav.css"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PuppPage = () => {
  const [data, setData] = useState([]);
  const { breed_name } = useParams();
useEffect(() => {
    axios.get(`https://dog.ceo/api/breed/${breed_name}/images`).then((res) => {
      setData(res.data.message);
    });
  }, []);

  console.log(data);

  return (
    <div className="puppCout">
      {data.map((image) => (
        <div>
          <img src={`${image}`} alt={`${breed_name}`}></img>
        </div>
      ))}
    </div>
  );
};

export default PuppPage;
