import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";

const Location = () => {
  const [ubication, setUbication] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setUbication(res.data));
  }, []);

  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchValue}`)
      .then((res) => setUbication(res.data));
  };

  console.log(ubication);

  return (
    <div className="tittle">
      <div className="head">
        <div>
          <input
            type="text"
            placeholder="type a location id"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={searchType}>search</button>
        </div>
      </div>
      <div className="content">
        <div className="title-world">
          <h1>{ubication.name}</h1>
        </div>

        <div className="title">
          <div className="item">
            <b>type: </b>
            {ubication.type}
          </div>
          <div className="item">
            <b>dimencion: </b>
            {ubication.dimension}
          </div>
          <div className="item">
            <b>population: </b>
            {ubication.residents?.length}
          </div>
        </div>
        <ul className="container-info">
          {ubication.residents?.map((resident) => (
            <ResidentInfo key={resident} resident={resident} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Location;
