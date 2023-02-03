const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1/detalle";
mongoose.set('strictQuery', false);
mongoose
  .connect(URI)
  .then((db) => console.log("DB conectada"))
  .catch((err) => console.error(err));

module.exports = mongoose;
