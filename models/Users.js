const Sequelize = require("sequelize");
const db = require("./db");

// a função define indica o nome da tabela
const User = db.define("users", {
  //Indicando quais sera as colunas
  id: {
    type: Sequelize.INTEGER,
    //autoincrementar os ID cadastrado
    autoIncrement: true,
    //Não pode ser NUlO
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

//Criar a tabela no banco
User.sync();

module.exports = User;
