import {auth} from "../firebase";
import {} from '../firebase/auth'
import { createContext,useContext,useState,useEffect } from "react";

  const AuthContext=createContext()

  export const AuthContextProvider=({children})=>{
       return(
        <AuthContext.Provider>{children}</AuthContext.Provider>
       )
  }


  export function UserAuth() {

    return useContext(AuthContext);
  }