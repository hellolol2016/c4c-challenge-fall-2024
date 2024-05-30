import express from "express";
import data from "../data.js";

const app = express();
const port = 4000;

/* 
  APPLICATION MIDDLEWARE
  This section contains some server configuration.
  You will likely not need to change anything here to meet the requirements.
  (but you are welcome to, if you'd like)
*/

// Parse request bodies as JSON
app.use(express.json());
// Enable CORS for the frontend so it can call the backend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

/*
  APPLICATION ROUTES
*/

app.get("/", (req, res) => {
  res.status(200).send(data);
});

app.post("/register", (req, res) => {
  data.partners.push({ id: data.partners.length + 1, ...req.body });
  console.log("data after push = ", data);
  res.status(200).send("project registered!");
});

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
});
