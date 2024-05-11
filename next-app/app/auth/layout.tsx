import React from "react"
import Marquee from "react-fast-marquee"

export default function({children}:{children:React.ReactNode}) {
    return <div>
        <div className="border-b p-1">
            <Marquee>20% off for the next few days</Marquee>
            
        </div>
        {children}
    </div>
}