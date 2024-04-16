import { BlogType } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const BlogDetails=({blog}:{blog:BlogType})=>{

    return(
        <div>
            <AppBar/>
            <div className="grid grid-cols-12  px-10 pt-10">
                <div className="col-span-8 ">
                    
                <div className="font-mono font-extrabold text-5xl  max-w-screen-md">
                    {blog.title}
                </div>
                <div className=" font-mono pt-4 text-xl text-slate-500">
                    Posted on August 11, 2023
                </div>
                <div className=" font-mono pt-6 text-xl text-slate-800">
                {blog.content}
                </div>
                </div>
                <div className="font-mono col-span-4">
                    <div className="font-medium text-xl text-slate-500">
                        Author
                    </div>
                    <div className="flex pt-4">
                        <div className="flex flex-col justify-center">
                            <Avatar name={blog.author.name} size="big"/>    
                        </div>
                        <div className="px-4">
                            <div className="font-semibold text-2xl">
                                {blog.author.name || "Anonymous"}
                            </div>
                            <div className="pt-2 text-xl text-slate-400">
                                Three-sword style secret technique The Billion-fold world Trichiliocosm
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}