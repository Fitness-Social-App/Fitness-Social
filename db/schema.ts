import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createId } from "@paralleldrive/cuid2";
import { createSelectSchema } from "drizzle-zod";
import type { z } from "zod";

// Define the workouts table schema
export const workoutTable = sqliteTable("workouts", {
    id: text("id")
        .$defaultFn(() => createId()) // Generate a unique ID using createId
        .notNull(), // Ensure the ID is not null
    name: text("name").notNull(), // Ensure the name is not null
    startTime: integer("start_time", { mode: 'timestamp'}), // Start time as a timestamp
    endTime: integer("end_time", { mode: 'timestamp'}), // End time as a timestamp
    bodyWeight: integer("bodyWeight") // Body weight as an integer
});

// Create the Zod schema for the workouts table
export const Schema = createSelectSchema(workoutTable);
export type Workout = z.infer<typeof Schema>; // Infer the TypeScript type from the Zod schema