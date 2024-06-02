import React from "react";
import Activity from "./Activity";
import axios from "axios";

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

export default function PartnerTile({ partnerData, getPartners }) {
  async function deleteProject() {
    await axios.delete(`http://localhost:4000/delete/${partnerData.id}`);
    getPartners();
  }
  return (
    <div className="partner-tile shadow-md">
      <img
        className="partner-thumbnail"
        src={partnerData.thumbnail}
        alt="thumbnail"
      />
      <h3>{partnerData.name}</h3>
      <Activity active={partnerData.active} />
      <div className="partner-info">{partnerData.description}</div>
      <hr></hr>
      <button className="bg-red-300 p-2 rounded-md" onClick={deleteProject}>
        Delete
      </button>
    </div>
  );
}
