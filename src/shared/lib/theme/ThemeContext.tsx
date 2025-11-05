import React, {createContext, useContext, useEffect, useState} from 'react';
import {Theme, ThemeContextTypes} from "./ThemeTypes.ts";

export const ThemeContext = createContext<ThemeContextTypes>({
    theme: "light",
    toggleTheme: () => {}
})

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme((prev: Theme) => (prev === "light" ? "dark" : "light"));
    }

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);