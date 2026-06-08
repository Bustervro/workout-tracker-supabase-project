CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);

CREATE TABLE workouts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  workout_name TEXT NOT NULL,
  workout_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE exercises (
  id SERIAL PRIMARY KEY,
  workout_id INT REFERENCES workouts(id),
  exercise_name TEXT NOT NULL,
  sets INT NOT NULL,
  reps INT NOT NULL,
  weight_lbs INT
);
