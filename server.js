const express = require("express");
const http = require("http");
const cors = require("cors");
const path = require("path");
const app = express();
const server = http.createServer(app);

let startTime = Date.now(); // Initialize the start time once when the server starts

// Enable CORS for all routes
app.use(cors());

// Route to fetch countdown start time
app.get("/countdown/start-time", (req, res) => {
  res.json({ startTime });
});

// Serve static files (e.g., HTML, CSS, client-side JS)
app.use(express.static(path.join(__dirname, "public")));

// Serve the index.html file for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 3000; // Use the port assigned by Render
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
