import React from "react";
import Activity from "./Activity";
import axios from "axios";

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {
  function deleteProject() {
    axios.delete(`http://localhost:4000/delete/${partnerData.id}`);
  }
  return (
    <div className="partner-tile">
      <img
        className="partner-thumbnail"
        src={partnerData.thumbnail}
        alt="thumbnail"
      />
      <hr />
      <h3>{partnerData.name}</h3>
      <Activity status={partnerData.active} />
      <div className="partner-info">{partnerData.description}</div>
      <button className="delete" onClick={deleteProject}>
        Delete
      </button>
    </div>
  );
}

export default PartnerTile;
