import { Link } from "react-router-dom";

interface BlogCardProps{
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id:string;
}

export const BlogCard=({
    id,
    authorName,
    title,
    publishedDate,
    content
}:BlogCardProps)=>{
    return (
        <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-300 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName}/>
                </div>
                <div className="flex justify-center flex-col pl-2 font-extralight pl-2 text-sm">
                    {authorName} 
                </div>
                <div className="flex justify-center flex-col pl-2"><Circle/></div>
                <div className="flex justify-center flex-col pl-2 pl-2 font-thin text-slate-500 text-sm">
                    {publishedDate}
                </div>
                
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0,100)+"..."}
            </div>
            <div className="text-sm font-thin text-slate-500 pt-4">
                {`${Math.ceil(content.length/100)} minute(s) read`}
            </div>
     
        </div>
        </Link>
    ) 
}

function Circle(){
    return <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
}

export function Avatar({name,size="small"}:{name:string, size?:"small"|"big"}){
    return (

    <div className={`inline-flex justify-center ${size==="small"?"w-6 h-6":"w-10 h-10"} overflow-hidden bg-gray-300 rounded-full`}>
        <span className={`font-medium ${size==="small"?"text-xs":"text-md"} text-gray-600 flex justify-center flex-col`}>{name[0]}</span>
    </div>
    
    )  
}