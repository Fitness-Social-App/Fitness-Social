import {View, Text, StyleSheet, Image} from 'react-native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {Collapsible} from "@/components/Collapsible";
import {ExternalLink} from "@/components/ExternalLink";
import React from 'react';



export default function Tab() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
            headerImage={
                <ThemedText className="text-2xl text-red-600">Group</ThemedText>
            }>

            <View className="w-full mx-auto p-4 bg-white rounded-lg border-2 border-gray-300 shadow-lg">
                <Text className="text-lg font-bold mb-2">Workout Name</Text>
                <Text className="text-base text-gray-600">Workout Description</Text>
            </View>

            <View className="w-full mx-auto p-4 bg-white rounded-2xl shadow-2xl">
                <Text className="text-lg font-semibold mb-2 text-gray-800">Workout Name</Text>
                <Text className="text-base text-gray-600">Workout Description</Text>
            </View>

            <View className="w-full mx-auto p-4 bg-transparent rounded-xl border-4 border-cyan-500 shadow-lg">
                <Text className="text-lg font-bold mb-2 text-cyan-700">Workout Name</Text>
                <Text className="text-base text-gray-700">Workout Description</Text>
            </View>

            <View className="w-full mx-auto p-4 bg-white rounded-lg shadow-lg border border-gray-300">
                <View className="flex flex-row items-center mb-2">

                    <Text className="text-lg font-bold text-gray-900">Workout Name</Text>
                </View>
                <Text className="text-base text-gray-700">Workout Description</Text>
                <View className="flex flex-row justify-between mt-2">
                    <Text className="text-sm text-gray-500">Start Time</Text>
                    <Text className="text-sm text-gray-500">End Time</Text>
                </View>
            </View>


            <View className="w-full mx-auto p-4 bg-white/50 rounded-lg backdrop-blur-md shadow-lg">
                <Text className="text-lg font-bold mb-2 text-gray-900">Workout Name</Text>
                <Text className="text-base text-gray-700">Workout Description</Text>
            </View>

            <View className="w-full mx-auto p-4 bg-white rounded-3xl shadow-2xl">
                <Text className="text-lg font-semibold mb-2 text-gray-800">Workout Name</Text>
                <Text className="text-base text-gray-600">Workout Description</Text>
            </View>

            <View className="w-full mx-auto p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <View className="flex flex-row items-center justify-between mb-4">
                    <Text className="text-lg font-semibold text-gray-800">Workout Name</Text>
                    <Text className="text-sm text-gray-500">Start Time</Text>
                </View>
                <View className="flex flex-row items-center justify-between">
                    <Text className="text-base text-gray-600">Body Weight: 70kg</Text>
                    <Text className="text-sm text-gray-500">End Time</Text>
                </View>
            </View>

            <View className="w-full mx-auto p-4 bg-gray-50 rounded-lg shadow-md border border-gray-200">
                <View className="flex flex-row items-center justify-between mb-2">
                    <Text className="text-lg font-semibold text-gray-900">Workout Name</Text>
                    <Text className="text-sm text-cyan-600">Start Time</Text>
                </View>
                <View className="flex flex-row items-center justify-between">
                    <Text className="text-base text-gray-700">Body Weight: 70kg</Text>
                    <Text className="text-sm text-cyan-600">End Time</Text>
                </View>
            </View>

            <View className="w-full mx-auto p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700">
                <View className="flex flex-row items-center justify-between mb-4">
                    <Text className="text-lg font-semibold text-white">Workout Name</Text>
                    <Text className="text-sm text-gray-400">Start Time</Text>
                </View>
                <View className="flex flex-row items-center justify-between">
                    <Text className="text-base text-gray-300">Body Weight: 70kg</Text>
                    <Text className="text-sm text-gray-400">End Time</Text>
                </View>
            </View>

            <View className="w-full mx-auto p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                <Text className="text-lg font-semibold text-gray-800 mb-2">Workout Name</Text>
                <View className="border-t border-gray-200 my-2" />
                <Text className="text-base text-gray-600">Body Weight: 70kg</Text>
                <Text className="text-sm text-gray-500 mt-2">Start Time - End Time</Text>
            </View>

            <View className="w-full p-4 mb-4 bg-white rounded-xl shadow-lg">
                <Text className="text-2xl font-bold text-gray-900 mb-1">Workout Name</Text>
                <Text className="text-sm text-gray-500 mb-2">Start Time: 8:00 AM</Text>
                <Text className="text-sm text-gray-500 mb-2">End Time: 9:00 AM</Text>
                <Text className="text-sm text-gray-700">Body Weight: 70kg</Text>
            </View>

            <View className="w-full p-4 mb-4 border border-gray-200 rounded-lg shadow-md">
                <Text className="text-xl font-semibold text-black mb-1">Workout Name</Text>
                <Text className="text-sm text-gray-600">Start Time: 8:00 AM</Text>
                <Text className="text-sm text-gray-600">End Time: 9:00 AM</Text>
                <Text className="text-sm text-gray-800">Body Weight: 70kg</Text>
            </View>

            <View className="w-full p-5 mb-6 bg-white bg-opacity-75 rounded-xl shadow-2xl transform scale-105">
                <Text className="text-xl font-bold text-gray-900">Workout Name</Text>
                <Text className="text-sm text-gray-500 mt-1">Start Time: 8:00 AM</Text>
                <Text className="text-sm text-gray-500">End Time: 9:00 AM</Text>
                <Text className="text-sm text-gray-700 mt-1">Body Weight: 70kg</Text>
            </View>

            <View className="w-full p-4 mb-4 bg-white rounded-md shadow-lg border-l-4 border-blue-500">
                <Text className="text-2xl font-semibold text-black mb-1">Workout Name</Text>
                <Text className="text-sm text-gray-500">Start Time: 8:00 AM</Text>
                <Text className="text-sm text-gray-500">End Time: 9:00 AM</Text>
                <Text className="text-sm text-gray-700">Body Weight: 70kg</Text>
            </View>

            <View className="w-full p-4 mb-4 bg-gray-50 rounded-2xl shadow-md">
                <Text className="text-xl font-bold text-gray-800 mb-2">Workout Name</Text>
                <Text className="text-sm text-gray-600">Start Time: 8:00 AM</Text>
                <Text className="text-sm text-gray-600">End Time: 9:00 AM</Text>
                <Text className="text-sm text-gray-800 mt-2">Body Weight: 70kg</Text>
            </View>

            <View className="flex-1 bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200">
                <View className="bg-white/50 backdrop-blur-sm p-4 rounded-lg border border-gray-300 shadow-md">
                    <Text className="text-xl font-semibold text-gray-900">Workout Name</Text>
                    <Text className="text-sm text-gray-600">Start Time: 10:00 AM</Text>
                    <Text className="text-sm text-gray-600">End Time: 11:00 AM</Text>
                    <Text className="text-sm text-gray-600">Body Weight: 70 kg</Text>
                </View>
            </View>

            <View className="flex-1 p-4 bg-white shadow-lg rounded-lg border border-gray-300">
                <Text className="text-lg font-semibold text-gray-800 mb-2">Workout Name</Text>
                <Text className="text-sm text-gray-600">Start Time: 10:00 AM</Text>
                <Text className="text-sm text-gray-600">End Time: 11:00 AM</Text>
                <Text className="text-sm text-gray-600">Body Weight: 70 kg</Text>
            </View>

            <View className="flex-1 p-5 bg-gray-800 rounded-lg shadow-xl border-l-4 border-teal-500">
                <Text className="text-lg font-bold text-white mb-2">Workout Name</Text>
                <Text className="text-sm text-gray-300">Start Time: 10:00 AM</Text>
                <Text className="text-sm text-gray-300">End Time: 11:00 AM</Text>
                <Text className="text-sm text-gray-300">Body Weight: 70 kg</Text>
            </View>

            <View className="bg-white/30 backdrop-blur-md border border-white/10 rounded-lg shadow-lg p-4 mb-4 mx-2">
                <Text className="text-xl font-semibold text-gray-900 mb-2">Workout Name</Text>
                <Text className="text-gray-600 text-sm">Start Time: 10:00 AM</Text>
                <Text className="text-gray-600 text-sm">End Time: 11:00 AM</Text>
                <Text className="text-gray-600 text-sm">Body Weight: 70 kg</Text>
            </View>

            <View className="bg-white border border-transparent rounded-lg shadow-lg p-4 mb-4 mx-2"
                  style={{ borderWidth: 1, borderColor: "linear-gradient(90deg, rgba(67, 198, 172, 1) 0%, rgba(248, 255, 174, 1) 100%)" }}>
                <Text className="text-xl font-semibold text-gray-900 mb-2">Workout Name</Text>
                <Text className="text-gray-500 text-sm">Start Time: 10:00 AM</Text>
                <Text className="text-gray-500 text-sm">End Time: 11:00 AM</Text>
                <Text className="text-gray-500 text-sm">Body Weight: 70 kg</Text>
            </View>

            <View className="bg-white rounded-lg shadow-lg p-4 mb-4 mx-2"
                  style={{ shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 8, borderWidth: 1, borderColor: "#4ade80", elevation: 4 }}>
                <Text className="text-lg font-semibold text-gray-900 mb-2">Workout Name</Text>
                <Text className="text-gray-500 text-sm">Start Time: 10:00 AM</Text>
                <Text className="text-gray-500 text-sm">End Time: 11:00 AM</Text>
                <Text className="text-gray-500 text-sm">Body Weight: 70 kg</Text>
            </View>

            <View className="bg-white/30 backdrop-blur-md rounded-lg shadow-lg p-4 mb-4 mx-2"
                  style={{ borderWidth: 1, borderColor: "linear-gradient(90deg, rgba(67, 198, 172, 1) 0%, rgba(248, 255, 174, 1) 100%)" }}>
                <Text className="text-xl font-semibold text-gray-900 mb-2">Workout Name</Text>
                <Text className="text-gray-600 text-sm">Start Time: 10:00 AM</Text>
                <Text className="text-gray-600 text-sm">End Time: 11:00 AM</Text>
                <Text className="text-gray-600 text-sm">Body Weight: 70 kg</Text>
            </View>


        </ParallaxScrollView>

    );
}
const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    headerImage: {
        padding: 16,
    }

});