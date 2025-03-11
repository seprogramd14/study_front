import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";
const ThemeContext = createContext<{theme: Theme, setTheme: (theme: Theme) => void} | null>(null);

const useGetTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useGetTheme must be used within ThemeProvider");
    return context
};

function Component() {
    const { theme } = useGetTheme();

    return (
        <div>
            <p>Current theme: {theme}</p>
        </div>
    )
}

export function Context() {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    })

    const changeTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Component />
            <button onClick={changeTheme}>Change Theme</button>
        </ThemeContext.Provider>
    )
}