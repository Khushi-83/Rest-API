const express = require ("express");
const app = express();
const users = require ("./MOCK_DATA.json");
const port = 4000;

app.get("/users", (req, res) =>{
    return res.json(users)
})

app.listen(port, () => console.log(`Server started at port ($PORT)`))