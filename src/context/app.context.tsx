"use client";

import React, { createContext, useContext, useState } from "react";
import type { IContract } from "../interfaces";

interface IAppContext {
    currentContract?: IContract;
    setCurrentContract: (contract: IContract | undefined) => void;
}

export const AppContext = createContext<IAppContext>({
    currentContract: undefined,
    setCurrentContract: () => {}
});

export const useApp = () => useContext(AppContext);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [currentContract, setCurrentContract] = useState<IContract | undefined>(undefined);

    return (
        <AppContext.Provider value={{ 
            currentContract,
            setCurrentContract
        }}>
            {children}
        </AppContext.Provider>
    );
}