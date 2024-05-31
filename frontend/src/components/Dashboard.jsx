import { useState, useEffect } from "react";
import axios from "axios";
import Activity from "./Activity";
import PartnerTile from "./PartnerTile";
//import data from "/data";

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/

function Dashboard() {
  const [partners, setPartners] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [logo, setLogo] = useState("");
  const [active, setActive] = useState(true);

  const [search, setSearch] = useState("");

  // Load all partners on initial page load
  useEffect(() => {
    if (partners.length) return;
    getPartners();
  }, [partners]);

  async function getPartners() {
    axios.get("http://localhost:4000/").then((res) => {
      setPartners(res.data.partners);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:4000/register", {
      name: name,
      thumbnail: logo,
      status: active,
      description: desc,
    });
    getPartners();
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
      <label>Search for partners here!</label>
      <form className="partner-form">
        <div className="label-input">
          <label>Partner name</label>
          <input
            type="text"
            placeholder="Search partner name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>

      <div id="main-partners-grid">
        {partners.map((partner) => {
          return (
            <PartnerTile
              partnerData={partner}
              key={partner.name}
              getPartners={getPartners}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
