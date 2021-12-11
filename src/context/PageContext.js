import { createContext, useState } from "react"


export const ScrolledContext = createContext();

export function ScrolledProvider({ children}) {

const [scrolled, setScrolled] = useState(false);

    return(
        <ScrolledContext.Provider value={[scrolled, setScrolled]}>
            {children}
        </ScrolledContext.Provider>
    )
}