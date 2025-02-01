import { createContext } from "react";
import run from "../config/apikey";

export const Context= createContext();


const ContextProvider=(prop)=>{

    const onSent=async (prompt)=>{
        await run(prompt)
    }

    onSent("what is react js");
    const contextValue={

    }
    return(
        <ContextProvider value={contextValue}>
            {prop.children}
        </ContextProvider>
    )
}

export default ContextProvider;