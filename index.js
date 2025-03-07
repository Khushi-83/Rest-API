const express = require ("express");
const app = express();
const fs = require("fs");
const users = require ("./MOCK_DATA.json");
const PORT = 8000;

app.use(express.urlencoded({extended: false}));

app.get("/users", (req, res) =>{
    const html = `
    <ul>
       ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
       res.send(html);
});

app.get("/api/users", (req, res) =>{
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id); 
    return res.json(user);
});

app.post("/api/users", (req, res) =>{
    const body = req.body;
    users.push({...body, id:users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ststus: "success", id: users.length });
    });
});

app.patch("/api/users", (req, res) =>{
    const id = body.id;
    const user = users.find(user => user.id === id);
    return req.json(user);
});
  
app.listen(PORT, () => console.log(`Server started at port ($PORT)`));