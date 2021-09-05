const mongose = require("mongoose");
require("dotenv").config({ path: ".env" });

mongose.connect(process.env.BBDD, {}, (err, res) => {
  if (err) {
    console.log("Error de conexions");
  } else {
    console.log("Conexion correcta");
  }
});
