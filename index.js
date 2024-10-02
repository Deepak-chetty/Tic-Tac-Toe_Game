const express = require("express");
const app = express();
const port = 8080;
const path = require("path");


app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/public")));

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'TTT.html'));
});