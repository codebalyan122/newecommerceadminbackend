const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json()); // Use built-in JSON parsing middleware
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "something" });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
