//write basic boileplate code for express
// with express.json() middleware

const express = require("express");
const app = express();
const{ createTodo } = require("./types");


app.use(express.json());

app.post("/todo", function(req,res){
    const createPayload=req.body;
    const parsedPayload= createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong input.",
        })
        return;
    }
    //put in mongoDB
})

app.get("/todos", function(req,res){
    
})

app.put("/completed", function(req,res){
    const updatePayload=req.body;
    const parsedPayload= updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong input.",
        })
        return;
    }
    //put in mongoDB
})