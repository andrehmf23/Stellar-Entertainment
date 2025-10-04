"use client";

import React, { createContext, useContext, useState } from "react";

interface IApp {};

interface IAppContext {
    config: IApp;
}

export const AppContext = createContext<IAppContext>({
    config: {}
});

export const useApp = () => useContext(AppContext);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [config, setConfig] = useState<IApp>({});

    return (
        <AppContext.Provider value={{ config }}>
            {children}
        </AppContext.Provider>
    );
}