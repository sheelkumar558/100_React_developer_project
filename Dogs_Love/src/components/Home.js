import "./nav.css"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [post, setPost] = useState({});
  useEffect(() => {
    axios.get(`https://dog.ceo/api/breeds/list/all`).then((res) => {
      setPost(res.data.message);
      //console.log(res);
    });
  }, []);
  //console.log(post);
  return (
    <div className="homeCont">
        <h1>Breeds Name</h1>
      <div className="breed">
      {Object.keys(post).map((ele) => (
        <Link  to={`/puppPage/${ele}`}>
          <h4>{ele}</h4>
        </Link>
      ))}
      </div>
    </div>
  );
};

export default Home;
