# Postman API Tests

## Supabase REST API

Base URL:
https://YOUR-PROJECT.supabase.co/rest/v1

Headers:
apikey: YOUR_SUPABASE_ANON_KEY
Authorization: Bearer YOUR_SUPABASE_ANON_KEY
Content-Type: application/json

## GET Users
GET /users

Purpose:
Retrieves all users from the users table.

## POST User
POST /users

Body:
{
  "name": "Test User",
  "email": "test@example.com"
}

Purpose:
Adds a new user to the database.

## GET Workouts
GET /workouts

Purpose:
Retrieves all workouts from the workouts table.

## POST Workout
POST /workouts

Body:
{
  "user_id": 1,
  "workout_name": "Back Day"
}

Purpose:
Adds a new workout for a user.

## POST Exercise
POST /exercises

Body:
{
  "workout_id": 1,
  "exercise_name": "Deadlift",
  "sets": 3,
  "reps": 5,
  "weight_lbs": 225
}

Purpose:
Adds an exercise to a workout.
