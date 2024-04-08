import zod from 'zod';
import express from 'express';

const app=express();

//define schema for profile update

const updateSchema=zod.object({
    name:zod.string().min(1,{message:"Name cannot be empty"}),
    email:zod.string().email({message:"Invalid email format"}),
    age:zod.number().min(18,{message:"You must be atleast 18 years old"}).optional()
});  // runtime

type FinalUpdateSchema=zod.infer<typeof updateSchema> //compile time 

app.put("/user", (req,res)=>{
    const {success}=updateSchema.safeParse(req.body);
    const updateBody:FinalUpdateSchema=req.body; //how to assign a type to updateBody?

    if (!success){
        res.status(411).json({});
        return
    }

    //update database here
    res.json({message:"User updated"})
});