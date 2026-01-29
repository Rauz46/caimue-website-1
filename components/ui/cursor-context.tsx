"use client";

import React, { createContext, useContext, useState } from "react";

type CursorContextType = {
    title: string | null;
    setTitle: (title: string | null) => void;
    isVisible: boolean;
    setIsVisible: (visible: boolean) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
    const [title, setTitle] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);

    return (
        <CursorContext.Provider value={{ title, setTitle, isVisible, setIsVisible }}>
            {children}
        </CursorContext.Provider>
    );
}

export function useCursor() {
    const context = useContext(CursorContext);
    if (!context) {
        throw new Error("useCursor must be used within a CursorProvider");
    }
    return context;
}
