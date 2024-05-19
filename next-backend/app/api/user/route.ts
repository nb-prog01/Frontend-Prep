import { PrismaClient } from "@prisma/client/extension";
import { NextRequest } from "next/server";

const client=new PrismaClient();

export function GET(){
    //databse logic here


    return Response.json({
        email:"nirajbhadoria@gmail.com",
        name: "Niraj bhadoria"
    })
}


//Express logic for samw would be

// app.get("ap/user/" , (req,res)=>{
//     res.json({
//         email:"nirajbhadoria@gmail.com",
//         name:"Niraj"
//     })
// })

export async function POST(req: NextRequest){
    //extract the body
    const body=await req.json();
    //store the body in the data base
    await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    console.log(body);

    return Response.json({
        message: "You are logged in!"
    })
}