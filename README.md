# React Native AsyncStorage Crash on Non-Existent Data Retrieval

This repository demonstrates a common error in React Native applications when using AsyncStorage to store and retrieve data. The issue occurs when attempting to access data that has not been stored, resulting in an app crash.

## Problem Description

The application crashes when `AsyncStorage.getItem` returns null or undefined, and the subsequent attempt to access a property of the retrieved object throws an error, rather than gracefully handling the absence of data.

## Solution

This repository provides a solution that involves checking for null or undefined values before attempting to access properties of the retrieved data.  This prevents the app from crashing and allows for more robust error handling. See `bugSolution.js` for a corrected implementation.