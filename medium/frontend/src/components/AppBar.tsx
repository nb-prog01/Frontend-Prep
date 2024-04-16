import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar=()=>{
    return <div className="border-b border-slate-200 flex justify-between px-10 py-4">
        <div>
            <Link to={'/blogs'}>
                <div className="hover:font-mono flex flex-col justify-center text-2xl font-semibold drop-shadow-lg cursor-pointer">Seance</div>
            </Link>
        </div>
        <div>
        <Link to={'/publish'}>
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-5">
                New
            </button>
        </Link>
        <Avatar name="Niraj" size="big" />
        </div>
    </div>
}