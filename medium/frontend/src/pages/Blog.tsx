import { useBlog } from "../hooks";
import { BlogDetails } from "../components/BlogDetails";
import { useParams } from "react-router-dom";

export const Blog=()=>{
    const { id }=useParams();
    const {loading, blog}=useBlog({
        id:id||""
    });

    if(loading||!blog){
        return<div>
            loading...
        </div>
    }

    return(
        <div>
            <BlogDetails blog={blog}/>
        </div>
        
    )
}