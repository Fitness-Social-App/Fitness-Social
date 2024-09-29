import type { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import React, { type PropsWithChildren, useContext, useEffect, useState } from "react";
import { initialize } from "./drizzle";

// Define the context type with a nullable ExpoSQLiteDatabase
type ContextType = { db: ExpoSQLiteDatabase | null };

// Create a context with a default value of null for the database
export const DatabaseContext = React.createContext<ContextType>({ db: null });

// Custom hook to use the database context
export const useDatabase = () => useContext(DatabaseContext);

// Database component to provide the database context ot the children
export function DatabaseProvider({ children }: PropsWithChildren) {
    const [db, setDb] = useState<ExpoSQLiteDatabase | null>(null);

    useEffect(() => {
        if (db) return;
        initialize().then((newDb) => {
            setDb(newDb);
        });
    }, [db]);

    // Provide the datbase context to the children components
    return (
        <DatabaseContext.Provider value={{ db }}>
            {children}
        </DatabaseContext.Provider>
    );
}