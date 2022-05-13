const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.listen(3333, () => console.log("listening on port 3333"));
