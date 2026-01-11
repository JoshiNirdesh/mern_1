const express = require("express");
const dotenv = require("dotenv")
const app = express();

dotenv.config();

app.get("/", (req, res) => {
    res.send("This is home page");
})
app.use("/api/v1/test", require("./routes/testRoutes"));
const port = process.env.port

app.listen(port, () => {
    console.log(`Listening on PORT:${port}`)
})