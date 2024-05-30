import React from "react";
import Activity from "./Activity";

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData }) {
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
    </div>
  );
}

export default PartnerTile;
