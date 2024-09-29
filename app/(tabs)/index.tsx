import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createWorkout, getAllWorkouts } from "@/repository/workoutRepository";
import { useMigrationHelper } from "@/db/drizzle";

// Define the Workout interface
interface Workout {
    name: string;
    startTime: Date;
    endTime: Date;
    bodyWeight: number;
}

export default function Tab() {
    const [workout, setWorkout] = useState<Workout | null>(null);
    const { success, error } = useMigrationHelper();
    useEffect(() => {
        const addAndFetchWorkouts = async () => {
            //const { success, error } = useMigrationHelper();
            try {
                // Add a new workout with valid timestamps
                const newWorkout: Workout = {
                    name: 'New Workout',
                    startTime: new Date(),
                    endTime: new Date(new Date().getTime() + 3600 * 1000), // Add 1 hour
                    bodyWeight: 70
                };
                await createWorkout(newWorkout);
                console.log('Workout added successfully');

                // Fetch all workouts
                const workouts = await getAllWorkouts();
                console.log('All Workouts:', workouts);

                // Set the newly created workout to state
                setWorkout(newWorkout);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        addAndFetchWorkouts();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Text>Check the console for the result of adding and fetching workouts.</Text>
            {workout && (
                <View>
                    <Text>Workout Name: {workout.name}</Text>
                    <Text>Start Time: {workout.startTime.toString()}</Text>
                    <Text>End Time: {workout.endTime.toString()}</Text>
                    <Text>Body Weight: {workout.bodyWeight}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textDecorationColor: 'white',
    },
});