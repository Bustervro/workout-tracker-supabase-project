INSERT INTO users (name, email)
VALUES 
('Aden Osman', 'aden@example.com');

INSERT INTO workouts (user_id, workout_name)
VALUES 
(1, 'Chest Day'),
(1, 'Leg Day');

INSERT INTO exercises (workout_id, exercise_name, sets, reps, weight_lbs)
VALUES 
(1, 'Bench Press', 3, 10, 135),
(1, 'Incline Dumbbell Press', 3, 8, 75),
(2, 'Squat', 4, 8, 225),
(2, 'Leg Press', 3, 12, 300);
