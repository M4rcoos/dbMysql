const express = require("express");
const app = express();

const User = require("./models/Users");
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.post("/cadastrar", async (req, res) => {
  await User.create(req.body)
    //verificando se conseguio cadastrar com sucesso
    .then(() => {
      return res.json({
        erro: false,
        mensage: "Usuario cadastrado com sucesso!",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensage: "Usuario não cadastrado com sucesso!",
      });
    });
});

app.listen(3333, () => console.log("listening on port 3333"));
