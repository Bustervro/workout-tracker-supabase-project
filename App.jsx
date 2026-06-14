import { useState } from 'react'
import './App.css'

function App() {
  const [workouts, setWorkouts] = useState([
    {
      id: 1,
      name: 'Chest Day',
      date: '2026-06-14',
      exercises: ['Bench Press - 3x10 @ 135 lbs', 'Incline Dumbbell Press - 3x8 @ 75 lbs']
    },
    {
      id: 2,
      name: 'Leg Day',
      date: '2026-06-15',
      exercises: ['Squat - 4x8 @ 225 lbs', 'Leg Press - 3x12 @ 300 lbs']
    }
  ])

  const [newWorkout, setNewWorkout] = useState('')

  function addWorkout() {
    if (newWorkout.trim() === '') return

    const workout = {
      id: Date.now(),
      name: newWorkout,
      date: new Date().toISOString().split('T')[0],
      exercises: ['New Exercise - 3x10']
    }

    setWorkouts([...workouts, workout])
    setNewWorkout('')
  }

  function deleteWorkout(id) {
    setWorkouts(workouts.filter((workout) => workout.id !== id))
  }

  return (
    <div>
      <h1>Workout Tracker App</h1>

      <div className="form-box">
        <input
          value={newWorkout}
          onChange={(e) => setNewWorkout(e.target.value)}
          placeholder="Enter workout name"
        />
        <button onClick={addWorkout}>Add Workout</button>
      </div>

      {workouts.map((workout) => (
        <div className="workout-card" key={workout.id}>
          <h2>{workout.name}</h2>
          <p>Date: {workout.date}</p>

          <h3>Exercises</h3>
          <ul>
            {workout.exercises.map((exercise, index) => (
              <li key={index}>{exercise}</li>
            ))}
          </ul>

          <button onClick={() => deleteWorkout(workout.id)}>
            Delete Workout
          </button>
        </div>
      ))}
    </div>
  )
}

export default App
