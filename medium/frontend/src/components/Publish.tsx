import { ChangeEvent, useState } from "react"
import { BACKEND_URL } from "../config"
import { AppBar } from "./AppBar"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Publish=()=>{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState('');
    const navigate=useNavigate();
    return(
        <div>
            <AppBar/>
                <div className="mb-6 flex justify-center w-full">
                    <div className="max-w-screen-lg w-full pt-10">
                        <input onChange={(e)=>{
                            setTitle(e.target.value);
                        }}type="text" placeholder='Title' className="outline-none w-full font-mono border-l border-gray-300 text-gray-900 text-4xl w-full p-2.5"/>
                        <TextEditor onChange={(e)=>{
                            setDescription(e.target.value);
                        }}/>
                        <button type="submit" onClick={async ()=>{
                            const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                                title,
                                content:description
                            },{
                                headers:{
                                    Authorization:localStorage.getItem("token")
                                }
                            })
                            navigate(`/blog/${response.data.id}`);
                        }}className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 hover:bg-green-800 rounded-full">
                Publish post
            </button>
                    </div>
                </div>
        </div>
            

)
}

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
    return (
        <div>
            <div className="max-w-screen-lg w-full">
                <div className="py-2 max-w-screen-lg w-full bg-white rounded-b-lg ">
                    <textarea onChange={onChange} id="editor" rows={8} className="outline-none font-mono block max-w-screen-lg w-full px-3 text-xl text-gray-800 bg-white border-0" placeholder="Tell your story..." required ></textarea>
                </div>
            </div>


    </div>
    )
    
}