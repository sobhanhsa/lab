import { cookies } from "next/headers";
import { ReactNode } from "react";
import { ClientProvider } from "./ClientAuthProvider";

export const AuthServerProvider  = (
    {
        children
    }:
    {
        children:ReactNode
    }) => {

    const cookiesStore = cookies();

    const token = {value:"dfjkl;sjfslfl;jkl;j"};

    

    return (
        <div>
            <ClientProvider token={token?.value}>
                {children}
            </ClientProvider>
        </div>
    )
};

