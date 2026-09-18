import React, { createContext, useState } from "react";

export const theamContext = createContext();

const TheamContext = ({ children }) => {
    const [theme, setTheme] = useState("black");

    return (
        <theamContext.Provider value={{ theme, setTheme }}>
            <div
                className={`w-full , h-screen ${theme === "black"
                    ? "bg-black text-white" : "bg-white text-black"}`}
            >
                {children}
            </div>
        </theamContext.Provider>
    );
};

export default TheamContext;
