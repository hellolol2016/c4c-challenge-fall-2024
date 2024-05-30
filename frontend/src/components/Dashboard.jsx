import { useState, useEffect } from "react";
import PartnerTile from "./PartnerTile";
import data from "../../data";

const projects = data.projects;
console.log(projects);
/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/

function Dashboard() {
  //const [partners, setPartners] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [logo, setLogo] = useState("");
  const [active, setActive] = useState(true);

  // Load all partners on initial page load
  //useEffect(() => {
  //fetch('http://localhost:4000', {
  //method: 'GET',
  //})
  //.then((res) => res.json())
  //}, [])

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        thumbnail: logo,
        status: active,
        description: desc,
      }),
    });
  }
  return (
    <div id="main-content">
      <form className="partner-form" onSubmit={handleSubmit}>
        <div className="label-input">
          <label>Partner name</label>
          <input
            type="text"
            placeholder="Partner Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="label-input">
          <label>Partner description</label>
          <input
            type="text"
            placeholder="Partner Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="label-input">
          <label>Partner Logo Source</label>
          <input
            type="text"
            placeholder="Partner Logo Source"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
        </div>
        <div className="label-input">
          <label>Active?</label>
          <input
            type="checkbox"
            checked={active}
            onChange={() => setActive(!active)}
          />
        </div>
        <button className="submit">Submit</button>
      </form>

      <div id="main-partners-grid">
        {projects.map((partner) => {
          return <PartnerTile partnerData={partner} key={partner.name} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
