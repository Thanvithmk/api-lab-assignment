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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
