import axios from "axios";
import React, { useEffect, useState } from "react";

export const Pagination = () => {
  const [data, setData] = useState({});
  const [filt, setFilt] = useState("");

  useEffect(() => {
    showData();
  }, []);
  const showData = async () => {
    const d = await axios("http://localhost:8000/datas");
    setData(d.data);
  };
  console.log(data);
  return (
    <div>
      <h1>Pagination page</h1>
      <input
        type="text"
        placeholder="filter todo"
        onChange={(e) => {
          setFilt(e.target.value);
        }}
      />
      <div className="main">
        {data
          .filter((todo) => todo.title.includes(filt))
          .map((e, i) => (
            <div key={i} className="div">
              <img src={e.image_url} alt="" />
              <div className="div-1">
                <p>{`Name: ${e.first_name} ${e.last_name}`}</p>
                <p>{`Email: ${e.email}`}</p>
                <p>{`Gender: ${e.gender}`}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
