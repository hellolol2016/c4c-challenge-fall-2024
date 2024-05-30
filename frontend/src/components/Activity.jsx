import React from "react";

const Activity = ({ active }) => {
  return (
    <span className={"partner-status " + active ? "Active" : "Inactive"}>
      {active}
    </span>
  );
};

export default Activity;
