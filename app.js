const express = require("express");
const path = require("path");
const mainRouter = require("./src/routes/mainRouter.js");
const loginRouter = require("./src/routes/loginRouter.js");
const registerRouter = require("./src/routes/registerRouter.js")

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

const port = process.env.PORT || 3030;

app.listen(port, () =>
  console.log("Servidor corriendo en el puerto http://localhost:" + port)
);


app.use("/", mainRouter);
/*app.use("/login", loginRouter);
app.use("/register", registerRouter); */

/*app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});*/

/*app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
}); */

/*app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
}); */

app.get("/product", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});

app.get("/detail", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});
