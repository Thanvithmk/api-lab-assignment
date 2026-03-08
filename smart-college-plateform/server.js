const express = require('express');
const app = express();
const port = 3000;

const cors=require('cors');
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

let users=[
    {id:1,name:"Thanvith Manjunath k",email:"thanvith@gmail.com"},
    {id:2,name:"NEW HORIZON",email:"nhce@gmail.com"}
];

app.get('/users',(req,res)=>{
    res.json(users);
    console.log(users);
})

app.get("/users/:id",(req,res)=>{
    const id=req.params.id;
    const user=users.find(u=>u.id==id);
    if(user){
        res.json(user);
    }else{
        res.status(404).json({message:"User not found"});
    }
})

app.post("/users",(req,res)=>{
    const newUser=req.body;
    users.push(newUser);
    res.status(201).json(newUser);      
})

app.put("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    user.name = req.body.name;
    user.email = req.body.email;
    res.status(200).json(user);
});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex(u => u.id == id);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    users.splice(userIndex, 1);
    res.status(200).json({ message: "User deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});