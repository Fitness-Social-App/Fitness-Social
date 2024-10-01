// components/WorkoutCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import "../global.css"
import {ThemedView} from "@/components/ThemedView";

// Define the Workout interface (same as in your WorkoutListScreen)
interface Workout {
    name: string;
    startTime: Date | null;
    endTime: Date | null;
    bodyWeight: number | null;
}

// Define the props type to accept a workout object
interface WorkoutCardProps {
    workout: Workout;
}


export const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {

    return (

        // <ThemedView className="bg-white mb-16 p-12">
        //     <Text>Workout Name: {workout.name}</Text>
        //     <Text>Start Time: {workout.startTime ? new Date(workout.startTime).toString() : 'N/A'}</Text>
        //     <Text>End Time: {workout.endTime ? new Date(workout.endTime).toString() : 'N/A'}</Text>
        //     <Text>Body Weight: {workout.bodyWeight !== null ? `${workout.bodyWeight} lb` : 'N/A'}</Text>
        // </ThemedView>

        // <View style={styles.card}>
        //     <Text style={styles.cardTitle}>Workout Name: {workout.name}</Text>
        //     <Text>Start Time: {workout.startTime ? new Date(workout.startTime).toString() : 'N/A'}</Text>
        //     <Text>End Time: {workout.endTime ? new Date(workout.endTime).toString() : 'N/A'}</Text>
        //     <Text>Body Weight: {workout.bodyWeight !== null ? `${workout.bodyWeight} kg` : 'N/A'}</Text>
        // </View>
        // <View className="mb-4 p-4 bg-white rounded-lg">
        //     <Text className="text-lg font-bold mb-2">Workout Name: {workout.name}</Text>
        //     <Text>Start Time: {workout.startTime ? new Date(workout.startTime).toString() : 'N/A'}</Text>
        //     <Text>End Time: {workout.endTime ? new Date(workout.endTime).toString() : 'N/A'}</Text>
        //     <Text>Body Weight: {workout.bodyWeight !== null ? `${workout.bodyWeight} kg` : 'N/A'}</Text>
        // </View>

        <View className="flex-1 p-5 mb-5 bg-gray-800 rounded-lg shadow-xl border-l-4 border-teal-500">
            <Text className="text-lg font-bold text-white mb-2">{workout.name}</Text>
            <Text className="text-sm text-gray-300">{workout.startTime ? new Date(workout.startTime).toString() : 'N/A'}</Text>
            <Text className="text-sm text-gray-300">{workout.endTime ? new Date(workout.endTime).toString() : 'N/A'}</Text>
            <Text className="text-sm text-gray-300">Body Weight: {workout.bodyWeight} lb</Text>
        </View>

    );
};

// const styles = StyleSheet.create({
//     card: {
//         marginBottom: 16,
//         padding: 16,
//         backgroundColor: '#f9f9f9',
//         borderRadius: 8,
//         elevation: 2,
//     },
//     cardTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
// });
