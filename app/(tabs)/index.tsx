// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { createWorkout, getAllWorkouts } from "@/repository/workoutRepository";
// import { useMigrationHelper } from "@/db/drizzle";
// import {useDatabase} from "@/db/provider";
//
// // Define the Workout interface
// interface Workout {
//     name: string;
//     startTime: Date;
//     endTime: Date;
//     bodyWeight: number;
// }
//
// export default function Tab() {
//     const [workout, setWorkout] = useState<Workout | null>(null);
//     //const { success, error } = useMigrationHelper();
//     const { db } = useDatabase();
//     useEffect(() => {
//         const addAndFetchWorkouts = async () => {
//
//             if (!db) {
//                 console.log('Database not ready yet.');
//                 return;
//             }
//             //const { success, error } = useMigrationHelper();
//             try {
//                 // Add a new workout with valid timestamps
//                 const newWorkout: Workout = {
//                     name: 'New Workout',
//                     startTime: new Date(),
//                     endTime: new Date(new Date().getTime() + 3600 * 1000), // Add 1 hour
//                     bodyWeight: 70
//                 };
//                 await createWorkout(newWorkout);
//                 console.log('Workout added successfully');
//
//                 // Fetch all workouts
//                 const workouts = await getAllWorkouts();
//                 console.log('All Workouts:', workouts);
//
//                 // Set the newly created workout to state
//                 setWorkout(newWorkout);
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };
//
//         addAndFetchWorkouts();
//     }, [db]);
//
//     return (
//         <View style={styles.container}>
//             <Text>Home</Text>
//             <Text>Check the console for the result of adding and fetching workouts.</Text>
//             {workout && (
//                 <View>
//                     <Text>Workout Name: {workout.name}</Text>
//                     <Text>Start Time: {workout.startTime.toString()}</Text>
//                     <Text>End Time: {workout.endTime.toString()}</Text>
//                     <Text>Body Weight: {workout.bodyWeight}</Text>
//                 </View>
//             )}
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         textDecorationColor: 'white',
//     },
// });
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { getAllWorkouts } from "@/repository/workoutRepository";
// import { useMigrationHelper } from "@/db/drizzle";
// import { useDatabase } from "@/db/provider";
//
// // Define the Workout interface
// interface Workout {
//     name: string;
//     startTime: Date|null;
//     endTime: Date|null;
//     bodyWeight: number|null;
// }
//
// export default function WorkoutListScreen() {
//     const [workouts, setWorkouts] = useState<Workout[]>([]);
//     const { success, error } = useMigrationHelper();
//     const { db } = useDatabase();
//
//     useEffect(() => {
//         const fetchWorkouts = async () => {
//             if (!db) return;
//
//             try {
//                 // Fetch all workouts
//                 const fetchedWorkouts = await getAllWorkouts();
//                 setWorkouts(fetchedWorkouts);
//                 console.log('All Workouts:', fetchedWorkouts);
//             } catch (error) {
//                 console.error('Error fetching workouts:', error);
//             }
//         };
//
//         fetchWorkouts();
//     }, [db]);
//
//     if (error) {
//         return (
//             <View style={styles.container}>
//                 <Text>Migration error: {error.message}</Text>
//             </View>
//         );
//     }
//     if (!success) {
//         return (
//             <View style={styles.container}>
//                 <Text>Migration is in progress...</Text>
//             </View>
//         );
//     }
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Workouts</Text>
//             {workouts.length === 0 ? (
//                 <Text>No workouts available</Text>
//             ) : (
//                 workouts.map((workout, index) => (
//                     <View key={index} style={styles.workoutItem}>
//                         <Text>Workout Name: {workout.name}</Text>
//                         <Text>Start Time: {workout.startTime ? new Date(workout.startTime).toString() : 'N/A'}</Text>
//                         <Text>End Time: {workout.endTime ? new Date(workout.endTime).toString() : 'N/A'}</Text>
//                         <Text>Body Weight: {workout.bodyWeight}</Text>
//                     </View>
//                 ))
//             )}
//         </View>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: '#fff',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 16,
//     },
//     workoutItem: {
//         marginBottom: 16,
//         padding: 16,
//         backgroundColor: '#f9f9f9',
//         borderRadius: 8,
//     },
// });




import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import { getAllWorkouts } from "@/repository/workoutRepository";
import { useMigrationHelper } from "@/db/drizzle";
import { useDatabase } from "@/db/provider";
import { WorkoutCard } from "@/components/WorkoutCard";
import ScrollView = Animated.ScrollView;  // Import WorkoutCard component

// Define the Workout interface
interface Workout {
    name: string;
    startTime: Date | null;
    endTime: Date | null;
    bodyWeight: number | null;
}

export default function WorkoutListScreen() {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const { success, error } = useMigrationHelper();
    const { db } = useDatabase();

    useEffect(() => {
        const fetchWorkouts = async () => {
            if (!db) return;

            try {
                // Fetch all workouts
                const fetchedWorkouts = await getAllWorkouts();
                setWorkouts(fetchedWorkouts);
                console.log('All Workouts:', fetchedWorkouts);
            } catch (error) {
                console.error('Error fetching workouts:', error);
            }
        };

        fetchWorkouts();
    }, [db]);

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Migration error: {error.message}</Text>
            </View>
        );
    }
    if (!success) {
        return (
            <View style={styles.container}>
                <Text>Migration is in progress...</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Workouts</Text>
            {workouts.length === 0 ? (
                <Text>No workouts available</Text>
            ) : (
                workouts.map((workout, index) => (
                    <WorkoutCard key={index} workout={workout} />  // Use WorkoutCard component
                ))
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});