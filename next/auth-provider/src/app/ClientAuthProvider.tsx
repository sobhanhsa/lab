
"use client"

import { ReactNode } from "react";

export const ClientProvider = ({
        children,
        token
    }:{
        token:string|undefined
        children:ReactNode
    }) => 
{



    
    if (typeof window === "undefined") {
        return (
            <div>
                {children}
            </div>
        )
    }
    
    console.log("client invoced")
    

    localStorage.removeItem("user");

    if (token) {
        localStorage.setItem("user","user");
    }


    return (
        <div>
            {children}
        </div>
    )
};

