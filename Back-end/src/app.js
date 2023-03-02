const express = require("express");
const app = express();
const router = require("./routers/router");
require("./db/connection");
const cors = require("cors");

app.use(express.json());
app.use(router);
app.use(cors());

const port = 5000;

//connecting the port
app.listen(port, () => {
    console.log(`Connected at port ${port}`);
})