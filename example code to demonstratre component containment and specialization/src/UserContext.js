import {createContext, useContext, useState} from "react";

const UserContext= createContext(undefined); 
export const UserProvider= ({children})=> {
    const [user]= useState({

        name: "cHIMMY",
        email: "mohunk0@gmail.com",
        dob: "91/01/2019",
    
    });
        return <UserContext.Provider value={{user}}></UserContext.Provider>
} 

export const useUser=()=> useContext(UserContext);
 