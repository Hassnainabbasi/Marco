import { createContext, useContext } from "react"

 
  export const UserContext = createContext()
  export const UserUse = ()=> useContext(UserContext)