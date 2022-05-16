const express = require("express");
const app = express();

const User = require("./models/Users");
app.use(express.json());

app.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
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

app.put("/update/:id", async (req, res) => {
  await User.update(
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  User.findByPk(req.params.id).then((result) => res.json(result));
});

app.delete("/delete/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(function (deletedId) {
      if (deletedId === 1) {
        res.status(200).json({ message: "Deleted successfully" });
      } else {
        res.status(404).json({ message: "Id not found" });
      }
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
});

app.listen(3333, () => console.log("listening on port 3333"));
