import { createContext, useContext, useReducer } from "react";
import { ThemeReducer, themeValues } from "./ThemeReducer";

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    // 'Space Grotesk'





    const initialState = {
        theme: themeValues.BlueishTheme
    }

    const [state, dispatch] = useReducer(ThemeReducer, initialState)


    return (
        <ThemeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext