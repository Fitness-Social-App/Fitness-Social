import { type ExpoSQLiteDatabase, drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";  // Using the new synchronous API
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "./migrations/migrations";

// Initialize the database with the new openDatabaseSync
const expoDb = openDatabaseSync("workout.db", { enableChangeListener: true });
export const db = drizzle(expoDb);  // Integrating Drizzle ORM

// Function to initialize the database
export const initialize = (): Promise<ExpoSQLiteDatabase> => {
    return Promise.resolve(db);
};

// Migration helper to run migrations
export const useMigrationHelper = () => {
    return useMigrations(db, migrations);
};

// Use the following command for migration generation
// npx drizzle-kit generate
