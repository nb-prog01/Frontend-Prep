//write basic boileplate code for express
// with express.json() middleware

const express = require("express");
const app = express();
const{ createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.post("/todo", async function(req,res){
    const createPayload=req.body;
    const parsedPayload= createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong input.",
        })
        return;
    }
    //put in mongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })
    res.json({
        msg:"Todo is created"
    })
})

app.get("/todos", async function(req,res){
    
    const todos=await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const updatePayload=req.body;
    const parsedPayload= updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong input.",
        })
        return;
    }
    //put in mongoDB
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);
