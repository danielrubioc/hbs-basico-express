const express = require("express");
const { create } = require("express-handlebars");
const app = express();

// configurar partials handlebars
const hbs = create({
    partialsDir: ["views/partials"],
    extname: ".hbs",
});

// motor de plantilla express
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
    const products = [
        "banana",
        "cebollas",
        "lechuga",
        "papas",
        "pimenton",
        "tomate",
    ];
    const title = "Bienvenido al mercado WEB, seleccione sus productos";

    res.render("home", {
        products,
        title,
    });
});

// middleware
app.use(express.static(__dirname + "/public"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(
    "/css",
    express.static(__dirname + "/node_modules/bootstrap-icons/font/")
);

app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));

app.listen(5000, () => console.log("servidor andando 🎉🎉🎉"));
