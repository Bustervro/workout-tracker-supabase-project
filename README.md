# workout-tracker-supabase-project
# Workout Tracker App

## Overview

Workout Tracker App is a full-stack application that allows users to create workouts and track exercises. Users can create workout sessions, add exercises, and record sets, reps, and weight used during each exercise.

This project demonstrates the use of a relational PostgreSQL database hosted on Supabase, API testing through Postman, and a React front-end prototype.

## Features

* Create users
* Create workouts
* Add exercises to workouts
* View workout history
* Store workout data in PostgreSQL
* Connect front-end to Supabase database

## Database Schema

### Users Table

* id (Primary Key)
* name
* email
* created_at

### Workouts Table

* id (Primary Key)
* user_id (Foreign Key)
* workout_name
* workout_date

### Exercises Table

* id (Primary Key)
* workout_id (Foreign Key)
* exercise_name
* sets
* reps
* weight_lbs

## Technologies Used

* React
* Vite
* PostgreSQL
* Supabase
* Postman
* GitHub

## Learning Outcomes

This project demonstrates database design, relational table structures, CRUD operations, API testing, and front-end integration with a cloud-hosted PostgreSQL database.

## Week 5 Progress

Created the initial React frontend prototype for the Workout Tracker App.

Added App.jsx, App.css, and supabaseClient.js to prepare for frontend development and Supabase integration.

The prototype displays workout information and establishes the foundation for future CRUD functionality.

Next steps:
- Connect React to Supabase
- Implement API requests through Postman
- Add workout and exercise creation functionality

## Week 6 Progress

Connected React frontend to Supabase database.

Implemented data retrieval from the workouts table.

Successfully displayed workout data in the frontend application.

Prepared the application for future CRUD operations.
