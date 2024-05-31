import React from "react";

const Activity = ({ active }) => {
  return (
    <span
      className={"partner-status " + (active == true ? "Active" : "Inactive")}
    >
      {active ? "Active" : "Inactive"}
    </span>
  );
};

export default Activity;
