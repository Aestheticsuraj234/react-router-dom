import { createContext } from "react";

export const GlobalContext = createContext(null)


const GlobalContextProvider = ({children} )=>{

    const greet = "Hello i am from context"
    const third = "hello i am for third"

    return (
        <GlobalContext.Provider value={{greet , third}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider