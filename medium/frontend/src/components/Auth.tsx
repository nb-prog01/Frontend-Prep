import { SignupInput } from "@nirajbhadoria007/medium-validations"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { BACKEND_URL } from "../config";


export const Auth=({type}:{type: "signup"|"signin"})=>{

    const navigate=useNavigate();

    const [postInputs,setPostInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })

    async function sendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs);

            const jwt_token=response.data.jwt;
            localStorage.setItem("token",jwt_token)
            navigate("/blogs");

        }catch(e){
            //alert the user that the request failed
        }
    }
    return(
        
        <div className="h-screen flex justify-center flex-col ">

            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-center text-3xl font-bold">
                        {type==="signup"? "Create an account": "Log in"}
                            
                        </div>
                        <div className="text-slate-500 text-center">
                            {type==="signup"? "Already have an account?": "Don't have an account?"}
                            <Link className="pl-2 underline" to={type==="signup"? "/signin": "/signup"}>
                            {type==="signup"? "Log in": "Sign up"}
                            </Link>
                        </div>
                    </div>
                    <div className="pt-4">
                        {type==="signup"?
                        <LabelledInputBox label="Username" placeholder="John Doe" onChange={(e)=>{
                            setPostInputs(postInputs=>({
                                ...postInputs,
                                name: e.target.value
                            }))
                        }}/>:null}
                        <LabelledInputBox label="Email"  placeholder="johndoe@gmail.com" onChange={(e)=>{
                            setPostInputs(postInputs=>({
                                ...postInputs,
                                email: e.target.value
                            }))
                        }}></LabelledInputBox>
                        <LabelledInputBox label="Password" type={"password"} placeholder="Abcd#1234" onChange={(e)=>{
                            setPostInputs(postInputs=>({
                                ...postInputs,
                                password: e.target.value
                            }))
                        }}></LabelledInputBox>

                        <button onClick={sendRequest} type="button" className="mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full ">{type==="signup"? "Sign up":"Sign in"}</button>

                    </div>
                </div>
            </div>

        </div>

    )
}

interface LabelledInputBoxType{
    label:string;
    placeholder:string;
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
}
function LabelledInputBox({label, placeholder, type, onChange}:LabelledInputBoxType){

    return (
        <div>
            <label className="block mb-2 text-sm font-bold text-gray-900 pt-4">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
      </div>
    )
}