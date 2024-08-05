const express = require ("express");
const app = express();
const users = require ("./MOCK_DATA.json");
const PORT = 8000;

app.use(express.urlencoded({extented: false}));
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
    console.log("Body", body);
    return res.json(users);
});
  
app.listen(PORT, () => console.log(`Server started at port ($PORT)`));