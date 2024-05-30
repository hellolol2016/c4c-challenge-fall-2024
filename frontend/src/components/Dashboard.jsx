import { useState, useEffect } from "react";
import PartnerTile from "./PartnerTile";
import axios from "axios";
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

  // Load all partners on initial page load
  useEffect(() => {
    axios.get("http://localhost:4000/").then((res) => {
      setPartners(res.data.partners);
      console.log(res.data.partners);
    });
  }, []);

  async function handleSubmit(e) {
    //e.preventDefault();
    console.log("posting", name, logo, active, desc);

    await axios.post("http://localhost:4000/register", {
      name: name,
      thumbnail: logo,
      status: active,
      description: desc,
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
        {partners.map((partner) => {
          return <PartnerTile partnerData={partner} key={partner.name} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
