import { db } from '@/db/drizzle';
import { workoutTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const getAllWorkouts = async () => {
    return db.select().from(workoutTable).all();
}

export const getWorkoutById = async (id: string) => {
    return db.select().from(workoutTable).where(eq(workoutTable.id, id)).get();
}

export const createWorkout = async (workout: any) => {
    return db.insert(workoutTable).values(workout).execute()
}

export const updateWorkout = async (workout: any) => {
    return db.update(workoutTable).set(workout).where(eq(workoutTable.id, workout.id)).execute()
}

export const deleteWorkout = async (id: string) => {
    return db.delete(workoutTable).where(eq(workoutTable.id, id)).execute()
}