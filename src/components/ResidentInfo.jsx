import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ resident }) => {
  const [residentItem, setResidentItem] = useState({});
  useEffect(() => {
    axios.get(resident).then((res) => setResidentItem(res.data));
  }, []);
  console.log(residentItem);
  return (
      <div className="character-item">
        <div className="character-image">
          <img src={residentItem.image} alt="" />
        </div>
        <div className="information">
          <div>
            <h1>{residentItem.name}</h1><br />
          </div>
          <div>
            <b>Status: </b>
            {residentItem.status}
          </div><br />
          <div>
            <b>Origin: </b>
            {residentItem.origin?.name}
          </div><br />
          <div>
            <b>Episodes: </b>
            {residentItem.episode?.length}
          </div>
        </div>
      </div>
  );
};

export default ResidentInfo;
