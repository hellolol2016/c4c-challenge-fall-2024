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
  const [emptySearch, setEmptySearch] = useState(false);

  // Load all partners on initial page load
  useEffect(() => {
    if (partners.length) return;
    getPartners();
  }, [partners]);

  async function getPartners(q) {
    if (q) {
      axios.get(`http://localhost:4000/search/?q=${q}`).then((res) => {
        if (res.data.partners.length === 0) {
          setEmptySearch(true);
        } else {
          setEmptySearch(false);
          setPartners(res.data.partners);
        }
      });
    } else {
      axios.get("http://localhost:4000/").then((res) => {
        setPartners(res.data.partners);
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:4000/register", {
      name: e.target.name.value,
      thumbnail: "/projects/" + e.target.logo.value,
      active: e.target.active.checked ? true : false,
      description: e.target.description.value,
    });
    getPartners();
    e.target.reset();
  }

  function updateSearch(e) {
    getPartners(e.target.value);
  }

  return (
    <div id="main-content">
      <label>Add a Partner Here!</label>
      <form
        className="flex flex-row gap-3 bg-slate-100 p-4 rounded-sm"
        onSubmit={handleSubmit}
      >
        <div className="label-input">
          <label>Partner name</label>
          <input
            type="text"
            placeholder="Partner Name"
            name="name"
            className="p-2 border-4 rounded-md"
          />
        </div>
        <div className="label-input">
          <label>Partner description</label>
          <input
            type="text"
            name="description"
            placeholder="Partner Description"
            className="p-2 border-4 rounded-md"
          />
        </div>
        <div className="label-input">
          <label>Partner Logo Source</label>
          <input
            type="text"
            name="logo"
            placeholder="Partner Logo Source"
            className="p-2 border-4 rounded-md"
          />
        </div>
        <div className="label-input">
          <label>Active?</label>
          <input type="checkbox" name="active" className="p-2 m-4" />
        </div>
        <button className="bg-green-300 px-6 rounded-md">Submit</button>
      </form>
      <div className="h-5"></div>
      <label>Search for partners here!</label>
      <form className="flex flex-col bg-neutral-300 p-3 rounded-md">
        <div className="label-input">
          <label>Partner Info</label>
          <input
            type="text"
            placeholder="Search partner name / desc"
            onChange={(e) => updateSearch(e)}
            className="p-2 border-4 rounded-md w-80"
          />
        </div>
      </form>

      <div className="h-5"></div>
      <h2 className="text-2xl font-bold">Partners!</h2>
      <div id="main-partners-grid">
        {emptySearch && <h2>No partners found :/</h2>}
        {!emptySearch &&
          partners.map((partner) => {
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
